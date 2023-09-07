#!/usr/bin/env python
# -*- coding: utf-8 -*-
''' CycloneDX converter class

    Converts the SCVS into CycloneDX Standards format
    Copyright (c) 2023 OWASP Foundation

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

    '''

import json
import datetime
import uuid
try:
    from StringIO import StringIO
except ImportError:
    from io import StringIO


class CycloneDX:
    bom = {}
    bom['bomFormat'] = "CycloneDX"
    bom['specVersion'] = "1.6"
    bom['serialNumber'] = "urn:uuid:" + str(uuid.uuid4())
    bom['version'] = 1
    bom['metadata'] = {}
    bom['metadata']['timestamp'] = datetime.datetime.now().astimezone().replace(microsecond=0).isoformat()
    bom['metadata']['licenses'] = []
    bom['metadata']['licenses'].append({})
    bom['metadata']['licenses'][0]['license'] = {}
    bom['metadata']['licenses'][0]['license']['id'] = "CC-BY-SA-4.0"
    bom['metadata']['licenses'][0]['license']['url'] = "https://creativecommons.org/licenses/by-sa/4.0/legalcode.txt"
    bom['metadata']['supplier'] = {}
    bom['metadata']['supplier']['name'] = "OWASP Foundation"
    bom['metadata']['supplier']['url'] = [ "https://owasp.org" ]
    bom['definitions'] = {}
    bom['definitions']['standards'] = []
    bom['definitions']['standards'].append({})

    def __init__(self, scvs_model_in):
        scvs = scvs_model_in
        bom_ref = "SCVS-" + scvs["version"]
        self.bom['definitions']['standards'][0]['bom-ref'] = bom_ref
        self.bom['definitions']['standards'][0]['name'] = "Software Component Verification Standard (SCVS)"
        self.bom['definitions']['standards'][0]['version'] = scvs["version"]
        self.bom['definitions']['standards'][0]['description'] = scvs["description"]
        self.bom['definitions']['standards'][0]['owner'] = "OWASP Software Component Verification Standard Project"

        requirements = []
        l1_requirements = []
        l2_requirements = []
        l3_requirements = []
        for scvs_domain in scvs['domains']:
            domain_req = self.convert_domain(scvs_domain, None)
            requirements.append(domain_req)
            if 'requirements' in scvs_domain:
                for scvs_requirement in scvs_domain['requirements']:
                    requirement = self.convert_requirement(scvs_requirement, domain_req['bom-ref'])
                    requirements.append(requirement)
                    if 'l1' in scvs_requirement and scvs_requirement['l1'] is True:
                        l1_requirements.append(requirement['bom-ref'])
                    if 'l2' in scvs_requirement and scvs_requirement['l2'] is True:
                        l2_requirements.append(requirement['bom-ref'])
                    if 'l3' in scvs_requirement and scvs_requirement['l3'] is True:
                        l3_requirements.append(requirement['bom-ref'])

        self.bom['definitions']['standards'][0]['requirements'] = requirements

        self.bom['definitions']['standards'][0]['levels'] = []
        self.bom['definitions']['standards'][0]['levels'].append({})
        self.bom['definitions']['standards'][0]['levels'][0] = {}
        self.bom['definitions']['standards'][0]['levels'][0]['bom-ref'] = "level-1"
        self.bom['definitions']['standards'][0]['levels'][0]['identifier'] = "Level 1"
        self.bom['definitions']['standards'][0]['levels'][0]['description'] = "SCVS level 1 lays the groundwork from which to build upon."
        self.bom['definitions']['standards'][0]['levels'][0]['requirements'] = l1_requirements
        self.bom['definitions']['standards'][0]['levels'].append({})
        self.bom['definitions']['standards'][0]['levels'][1] = {}
        self.bom['definitions']['standards'][0]['levels'][1]['bom-ref'] = "level-2"
        self.bom['definitions']['standards'][0]['levels'][1]['identifier'] = "Level 2"
        self.bom['definitions']['standards'][0]['levels'][1]['description'] = "SCVS level 2 expands the breadth of level 1 capabilities. Level 2 is appropriate for software intensive enterprises and organizations with existing risk management frameworks and regulatory and/or contractual requirements. Level 2 also expands the number of stakeholders including those with non-technical roles. Adoption of level 2 may require additional resources and domain expertise to achieve."
        self.bom['definitions']['standards'][0]['levels'][1]['requirements'] = l2_requirements
        self.bom['definitions']['standards'][0]['levels'].append({})
        self.bom['definitions']['standards'][0]['levels'][2] = {}
        self.bom['definitions']['standards'][0]['levels'][2]['bom-ref'] = "level-3"
        self.bom['definitions']['standards'][0]['levels'][2]['identifier'] = "Level 3"
        self.bom['definitions']['standards'][0]['levels'][2]['description'] = "SCVS level 3 extends the depth of level 2 capabilities. Level 3 is applicable in critical infrastructure and systems with safety requirements. Auditability and end-to-end transparency in the supply chain is required to maintain a high security posture in these systems and the organizations that produce and maintain them."
        self.bom['definitions']['standards'][0]['levels'][2]['requirements'] = l3_requirements

        self.bom['definitions']['standards'][0]['externalReferences'] = []
        self.bom['definitions']['standards'][0]['externalReferences'].append({})
        self.bom['definitions']['standards'][0]['externalReferences'][0]['type'] = 'website'
        self.bom['definitions']['standards'][0]['externalReferences'][0]['url'] = 'https://owasp.org/scvs'
        self.bom['definitions']['standards'][0]['externalReferences'].append({})
        self.bom['definitions']['standards'][0]['externalReferences'][1]['type'] = 'website'
        self.bom['definitions']['standards'][0]['externalReferences'][1]['url'] = 'https://scvs.owasp.org'
        self.bom['definitions']['standards'][0]['externalReferences'].append({})
        self.bom['definitions']['standards'][0]['externalReferences'][2]['type'] = 'vcs'
        self.bom['definitions']['standards'][0]['externalReferences'][2]['url'] = 'https://github.com/OWASP/Software-Component-Verification-Standard'
        self.bom['definitions']['standards'][0]['externalReferences'].append({})
        self.bom['definitions']['standards'][0]['externalReferences'][3]['type'] = 'issue-tracker'
        self.bom['definitions']['standards'][0]['externalReferences'][3]['url'] = 'https://github.com/OWASP/Software-Component-Verification-Standard/issues'
        self.bom['definitions']['standards'][0]['externalReferences'].append({})
        self.bom['definitions']['standards'][0]['externalReferences'][4]['type'] = 'social'
        self.bom['definitions']['standards'][0]['externalReferences'][4]['url'] = 'https://twitter.com/OWASP_SCVS'

    def convert_domain(self, scvs_requirement, parent):
        requirement = {}
        requirement['bom-ref'] = scvs_requirement['shortcode']
        requirement['identifier'] = scvs_requirement['shortcode']
        if 'name' in scvs_requirement and scvs_requirement['name'] != '':
            requirement['title'] = scvs_requirement['name']
        if 'objective' in scvs_requirement and scvs_requirement['objective'] != '':
            requirement['text'] = scvs_requirement['objective']
        if parent:
            requirement['parent'] = parent
        return requirement

    def convert_requirement(self, scvs_requirement, parent):
        requirement = {}
        requirement['bom-ref'] = scvs_requirement['id']
        requirement['identifier'] = scvs_requirement['id']
        if 'text' in scvs_requirement and scvs_requirement['text'] != '':
            requirement['text'] = scvs_requirement['text']
        if parent:
            requirement['parent'] = parent
        return requirement

    def to_json(self):
        ''' Returns a JSON-formatted string '''
        return json.dumps(self.bom, indent = 2, sort_keys = False, ensure_ascii=False).strip()
