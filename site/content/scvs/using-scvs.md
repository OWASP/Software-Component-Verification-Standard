---
description: ''
sidebar: 'scvs-1.0'
prev: '/scvs/preface/'
next: '/scvs/assessment-and-certification/'
---

# Using the SCVS

SCVS has the following goals:

* Develop a common set of activities, controls, and best-practices that can reduce risk in a software supply chain
* Identify a baseline and path to mature software supply chain vigilance

## Control Families
There are six control families that contain multiple controls that apply to different aspects of component verification
or processes where component verification occurs. The control families are:

* V1: Inventory
* V2: Software Bill of Materials (SBOM)
* V3: Build Environment
* V4: Package Management
* V5: Component Analysis
* V6: Pedigree and Provenance

## Software Component Verification Levels

The Software Component Verification Standard defines three verification levels. Higher levels include additional controls.

* SCVS Level 1 is for low-assurance requirements where basic forms of analysis would suffice.
* SCVS Level 2 is for moderately sensitive software where additional analysis or due diligence is required.
* SCVS Level 3 is for high-assurance requirements due to the sensitivity of data or use of the software.


### Level 1
SCVS level 1 lays the groundwork from which to build upon. This level focuses on implementing best practices such as:
- creating software bill of materials with complete and accurate inventory
- utilizing continuous integration to produce repeatable builds
- performing analysis of third-party components with tools and intelligence that are publicly available

Adoption of level 1 can be achieved with modern software engineering practices. 


### Level 2
SCVS level 2 expands the breadth of level 1 capabilities. Level 2 is appropriate for software intensive enterprises and 
organizations with existing risk management frameworks and regulatory and/or contractual requirements. Level 2 also 
expands the number of stakeholders including those with non-technical roles. Adoption of level 2 may require 
additional resources and domain expertise to achieve. 


### Level 3
SCVS level 3 extends the depth of level 2 capabilities. Level 3 is applicable in critical infrastructure and systems
with safety requirements. Auditability and end-to-end transparency in the supply chain is required to maintain a
high security posture in these systems and the organizations that produce and maintain them.


## How to Use This Standard

One of the best ways to use the Software Component Verification Standard is to use it as a method of assessment and a 
way to sequence incremental improvement. Tailoring the SCVS to your use cases will increase the focus on the security 
requirements that are most important to your organization. Organizations may choose to adopt certain controls from higher 
levels without implementing all higher-level controls.

One use case for the SCVS is to assess internal software development processes and capabilities. Another is to evaluate 
suppliers, which can include open source software maintainers, contract software developers, and commercial software 
vendors. 

### Assessing First Party Capabilities
SCVS provides a structured method to assess and qualify internal software capabilities and processes, and to identify 
areas where verifiability can be improved. Because of the tiered and topical structure of SCVS, the same organization 
can be at different levels within or across categories of verification. Depending on required levels of assurance for a 
given system, different levels of SCVS controls may be required for system approval.

SCVS controls are formulated to be automatable, and to provide the basis for system approval on a continuous basis. 
Given the rate of change in software composition, especially for capabilities developed in a continuous integration 
pipeline, continuity of assurance requires continuous rather than one-time verification. 

### Evaluating Suppliers
SCVS provides a standardized way to assess supply chain transparency provided by contract or outsourced software 
suppliers, based on the documentation and metadata present in the supplier's software development workflow and/or 
provided with software deliverables. Specifically, the provision of a software bill of materials (SBOM) can be 
requested or required by software customers to establish supply chain visibility and differentiate suppliers. 

Because of the tiered and topical structure of SCVS, it can be used for analysis of alternatives and/or used in whole 
or in part to evaluate proposals for procurement. SCVS controls at different levels can be used to qualify 
eligibility for procurement, or as an element of scoring proposals. 

Supplier provision of software bills of materials and other verification data allows customers to monitor risks present 
in supplier software on an ongoing basis to achieve visibility regardless of supplier-provided notification or updates. 
The auditability of this data enables formulation and enforcement of contractual provisions to remediate known 
vulnerabilities within a specified time period.

## Applying SCVS

The Software Component Verification Standard places emphasis on controls that can be implemented or verified
through automation. The control families are not specific to a single development team. They represent
stakeholders across an organization, including software developers, security and risk managers, and procurement
departments. Active participation of all stakeholders is necessary to measure and improve cyber posture. 
Once an organization has determined the current maturity baseline, it can determine goals and timelines to improve maturity
and devise methods for which the controls can be implemented or verified through automation.

Satisfying control requirements at a higher SCVS level may be more dependent on business process than available technical methods. 
