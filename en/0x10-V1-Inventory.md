# V1: Inventory Requirements

## Control Objective

The capability of knowing what components are used in the creation of software is the first step in being able to perform any type of risk assessment. These controls incorporate single application inventories, organizational inventories, and steps to take to improve software transparency when procuring new software or systems.

Component identification varies based on the ecosystem the component is part of. Therefore, for all inventory purposes, the use of Package URL is used to standardize and normalize naming conventions. 

Having organizational inventory of all first-party, third-party, and open source components allows for greater transparency within the organization, promotes software standardization and reuse, and allows for rapid impact analysis.

<div style="page-break-after: always;"> 
</div>

## Verification Requirements

| # | SCVS-ID | Description | L1 | L2 | L3 |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **1.1** | SCVS-INV-01 | All components and their versions are known prior to building | ✓ | ✓ | ✓ |
| **1.2** | SCVS-INV-02 | Package managers are used to manage all third-party and open source components | ✓ | ✓ | ✓ |
| **1.3** | SCVS-INV-03 | An accurate inventory of all third-party and open source components is available | ✓ | ✓ | ✓ |
| **1.4** | SCVS-INV-04 | Software bill-of-materials are required for new applications | ✓ | ✓ | ✓ |
| **1.5** | SCVS-INV-05 | Software bill-of-materials are required for new procurements | | ✓ | ✓ |
| **1.6** | SCVS-INV-06 | Software bill-of-materials are required for all systems | | | ✓ |
| **1.7** | SCVS-INV-07 | Package URL is used to uniquely identify all components | ✓ | ✓ | ✓ |
| **1.8** | SCVS-INV-08 | Asset dependencies on each component are documented across an organization | | ✓ | ✓ |
| **1.9** | SCVS-INV-09 | Impact analysis can be achieved in order to identify assets that are potentially impacted by known risk of using a given component | | ✓ | ✓ |
| **1.10** | SCVS-INV-10 | The component type is known throughout inventory | | | ✓ |
| **1.11** | SCVS-INV-11 | The component function is known throughout inventory  | | | ✓ |
