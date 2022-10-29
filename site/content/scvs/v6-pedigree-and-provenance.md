---
description: ''
sidebar: 'scvs-1.0'
prev: '/scvs/v5-component-analysis/'
next: '/scvs/guidance-open-source-policy/'
---

# V6: Pedigree and Provenance Requirements

## Control Objective

Identify point of origin and chain of custody in order to manage system risk if either point of origin or 
chain of custody is compromised. For internal package managers and repositories it is important to maintain
pedigree and provenance data for imported components.

## Verification Requirements

| # | Description | L1 | L2 | L3 |
| :---: | :--- | :---: | :---: | :---: |
| **6.1** | Point of origin is verifiable for source code and binary components |  | ✓ | ✓ |
| **6.2** | Chain of custody if auditable for source code and binary components |  |  | ✓ |
| **6.3** | Provenance of modified components is known and documented | ✓ | ✓ | ✓ |
| **6.4** | Pedigree of component modification is documented and verifiable | | ✓ | ✓ |
| **6.5** | Modified components are uniquely identified and distinct from origin component | | ✓ | ✓ |
| **6.6** | Modified components are analyzed with the same level of precision as unmodified components | ✓ | ✓ | ✓ |
| **6.7** | Risk unique to modified components can be analyzed and associated specifically to modified variant | ✓ | ✓ | ✓ |

<div style="page-break-after: always; visibility: hidden">
\newpage
</div>
