const fs = require('fs');
const path = require('path');

function transformJSON(json, basePath = '')  {
    const comingSoon = '<span class="label label-coming-soon">Coming Soon</span>'
    const transformedData = [
        { "text": "Difficulty Levels", "data": { "id": "difficulty-levels", "path": "/bom-maturity-model/difficulty-levels/" } },
        { "text": "Support Levels", "data": { "id": "support-levels", "path": "/bom-maturity-model/support-levels/" } },
        { "text": "Taxonomy", "data": { "id": "urn:owasp:scvs:bom" }, "children": []},
        { "text": "Profiles", "data": { "id": "profiles", "path": "/bom-maturity-model/profiles/" }, "children":
            [
                { "text": "Profile Generator", "data": { "path": "/bom-maturity-model/profiles/profile-generator/" } },
                { "text": "Examples", "data": { "id": "profiles-examples" }, "children":
                    [
                        { "text": comingSoon + " NTIA Minimum Elements", "data": { "path": "/bom-maturity-model/profiles/examples/ntia-minimum-elements/" }, state: { selectable: false } },
                        { "text": comingSoon + " Security (AppSec)", "data": { "id": "profiles-ntia-minimum", "path": "/bom-maturity-model/profiles/security-appsec/" }, state: { selectable: false } },
                        { "text": comingSoon + " Security (FOCI)", "data": { "path": "/bom-maturity-model/profiles/examples/security-foci/" }, state: { selectable: false } },
                        { "text": comingSoon + " Security (Operational)", "data": { "path": "/bom-maturity-model/profiles/examples/security-operational/" }, state: { selectable: false } },
                        { "text": comingSoon + " Threat Modeling", "data": { "path": "/bom-maturity-model/profiles/examples/threat-modeling/" }, state: { selectable: false } },
                        { "text": comingSoon + " License Compliance", "data": { "path": "/bom-maturity-model/profiles/examples/license-compliance/" }, state: { selectable: false } },
                        { "text": comingSoon + " Procurement and M&A", "data": { "path": "/bom-maturity-model/profiles/examples/procurement-mergers-acquisitions/" }, state: { selectable: false } },
                    ]
                }
            ]
        },
        { "text": "Definitions", "data": { "id": "definitions", "path": "/bom-maturity-model/definitions/" }, "children": []},
    ];

    // Helper function to create a directory
    function createDirectory(dirPath) {
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
            console.log("Created " + dirPath)
        }
    }

    // Helper function to create a markdown file
    function createMarkdownFile(filePath, content) {
        fs.writeFileSync(filePath, content);
    }

    // Helper function to generate the markdown content
    function generateMarkdownContent(model) {
        let difficultyLabel = ""
        if (model.difficulty === 1)
            difficultyLabel = '<abbr data-title="Simple to obtain through first-hand automated observation using existing tools"><span class="label-difficulty label-difficulty-low label-difficulty-left">1</span><span class="label-difficulty label-difficulty-low label-difficulty-right">Low</span></abbr>'
        else if (model.difficulty === 2)
            difficultyLabel = '<abbr data-title="Moderately difficult to obtain through automated observation using domain-specific tools and plugins"><span class="label-difficulty label-difficulty-moderate label-difficulty-left">2</span><span class="label-difficulty label-difficulty-moderate label-difficulty-right">Moderate</span></abbr>'
        else if (model.difficulty === 3)
            difficultyLabel = '<abbr data-title="Difficult to obtain; requiring manual effort, human observation, or access to data held within restricted domains"><span class="label-difficulty label-difficulty-high label-difficulty-left">3</span><span class="label-difficulty label-difficulty-high label-difficulty-right">High</span></abbr>'

        let references = ""
        if (model.references && model.references.length > 0) {
            for (let i=0; i<model.references.length; i++) {
                references+= '<a href="' + model.references[i].url + '">' + model.references[i].title + '</a><br>'
            }
        }

        if (!model.kingdom) {
            model.kingdom = ''; // Set to an empty string for display purposes
        }

        return `---
title: BOM Maturity Model - ${model.name} (${model.identifier})
description: ${model.description}
sidebar: 'taxonomy'
---

# BOM Maturity Model

|  |  |
|---|---|
| **Identifier**: | \`${model.identifier}\` |
| **Domain**: | ${model.domain} |
| **Kingdom**: | ${model.kingdom} |
| **Name**: | ${model.name} |
| **Description**: | ${model.description} |
| **Difficulty**: | ${difficultyLabel} |
| **References**: | ${references} |

`;
    }

    // Helper function to recursively create directory structure and markdown files
    function createDirectoriesAndMarkdownFiles(node, currentPath) {
        const dirPath = path.join(basePath, currentPath);
        createDirectory(dirPath);

        if (node.data) {
            const filePath = path.join(dirPath, 'README.md');
            const markdownContent = generateMarkdownContent(node.data);
            createMarkdownFile(filePath, markdownContent);
        }

        if (node.children) {
            for (const childNode of node.children) {
                //const childPath = path.join(currentPath, childNode.data.id);
                const childPath = path.join(currentPath, childNode.data.id.split(/[:]+/).pop());
                createDirectoriesAndMarkdownFiles(childNode, childPath);
            }
        }
    }

    // Helper function to find parent node by identifier
    function findParentNode(identifier) {
        for (const node of transformedData) {
            if (node.data.id === identifier) {
                return node;
            } else if (node.children && node.children.length > 0) {
                const parentNode = findParentNodeInChildren(node.children, identifier);
                if (parentNode) {
                    return parentNode;
                }
            }
        }
        return null;
    }

    // Helper function to find parent node in children array
    function findParentNodeInChildren(children, identifier) {
        for (const node of children) {
            if (node.data.id === identifier) {
                return node;
            } else if (node.children && node.children.length > 0) {
                const parentNode = findParentNodeInChildren(node.children, identifier);
                if (parentNode) {
                    return parentNode;
                }
            }
        }
        return null;
    }

    // Transform each model object from the BOM Maturity Model JSON
    json.model.forEach((model) => {
        const transformedModel = {
            text: model.name,
            data: {
                id: model.identifier,
                path: `/bom-maturity-model/${model.identifier}/`.replace(/:/g, '/')
            },
            children: [],
        };

        // Find parent node and add the transformed model as its child
        const parentNode = findParentNode(model.identifier.substring(0, model.identifier.lastIndexOf(":")));
        if (parentNode) {
            parentNode.children.push(transformedModel);
        } else {
            transformedData.push(transformedModel);
        }

        // Create directory and markdown file
        const dirPath = path.join(basePath, transformedModel.data.id);
        createDirectory(dirPath);

        const filePath = path.join(dirPath, 'index.md');
        const markdownContent = generateMarkdownContent(model);
        if (dirPath !== "content/bom-maturity-model") { // to not overwrite bom-maturity-model/index.md
            createMarkdownFile(filePath, markdownContent);
        }
    });

    // Create the final JSON structure
    const transformedJSON = transformedData;

    // Create directory structure and markdown files
    //createDirectoriesAndMarkdownFiles({ children: transformedJSON }, 'taxonomy');

    return transformedJSON;
}

function duplicateCheck(json) {
    const identifiers = [];
    json.model.forEach((model) => {
        if (identifiers.includes(model.identifier)) {
            throw new Error("Duplicate identifier " + model.identifier)
        } else {
            identifiers.push(model.identifier)
        }
    });
}

console.log("Reading BOM Maturity Model Taxonomy")
const jsonString = fs.readFileSync("../BOM_Maturity_Model/bom-maturity-model-1.0.0-beta.1.json");
console.log("Parsing BOM Maturity Model Taxonomy")
const originalJSON = JSON.parse(jsonString);
duplicateCheck(originalJSON);

// Transform the JSON
console.log("Transforming BOM Maturity Model Taxonomy into Markdown and Sidebar Navigation")
const transformedJSON = transformJSON(originalJSON, "content/bom-maturity-model");

const transformedJSONString = JSON.stringify(transformedJSON, null, 2);
let sidebarJson = 'src/components/sidebar-tree.json'
console.log("Writing the sidebar navigation to " + sidebarJson)
fs.writeFileSync(sidebarJson, transformedJSONString)
