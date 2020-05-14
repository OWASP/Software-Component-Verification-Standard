# V1: Inventory Requirements

## Control Objective

An accurate inventory of all components used in the creation of software is a foundational requirement for further
analysis. The following controls incorporate single application inventories, organizational inventories, and approaches
to enable software transparency when procuring new software or systems.

Component identification varies based on the ecosystem the component is part of. Therefore, for all inventory
purposes, the use of identifiers, such as Package URL, may be used to standardize and normalize naming conventions for
managed dependencies.

An organization-wide inventory of all first-party, third-party, and open source components allows for greater
transparency within the organization, promotes software standardization and reuse, and allows for rapid impact analysis.

## Verification Requirements

| # | Description | L1 | L2 | L3 |
| :---: | :--- | :---: | :---: | :---: |
| **1.1** | All components and their versions are known at completion of a build | ✓ | ✓ | ✓ |
| **1.2** | Package managers are used to manage all third-party binary components | ✓ | ✓ | ✓ |
| **1.3** | An accurate inventory of all third-party components is available in a machine-readable format | ✓ | ✓ | ✓ |
| **1.4** | Software bill-of-materials are generated for publicly or commercially available applications | ✓ | ✓ | ✓ |
| **1.5** | Software bill-of-materials are required for new procurements | | ✓ | ✓ |
| **1.6** | Software bill-of-materials continuously maintained and current for all systems | | | ✓ |
| **1.7** | Components are uniquely identified in a consistent, machine-readable format | ✓ | ✓ | ✓ |
| **1.8** | The component type is known throughout inventory | | | ✓ |
| **1.9** | The component function is known throughout inventory  | | | ✓ |
| **1.10** | Point of origin is known for all components | | | ✓ |
