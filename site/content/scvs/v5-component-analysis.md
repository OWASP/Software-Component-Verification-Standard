---
description: ''
sidebar: 'scvs-1.0'
prev: '/scvs/v4-package-management/'
next: '/scvs/v6-pedigree-and-provenance/'
---

# V5: Component Analysis Requirements

## Control Objective

Component Analysis is the process of identifying potential areas of risk from the use of third-party and open-source
software components. Every component, direct or transitive, is a candidate for analysis. Risk inherited through the use
of third-party software may directly affect the application or systems that rely on them.

#### Known Vulnerabilities 
There are multiple public and commercial sources of vulnerability intelligence. Vulnerabilities become known when they
are published to services such as the National Vulnerability Database (NVD), or are otherwise documented in public 
defect trackers, commit logs, or other public source.

#### Component Version Currency
If component versions are specified, then determining if a component is out-of-date or end-of-life is possible. 
Outdated and end-of-life components are more likely to be vulnerable and less likely to be supported as first-class
entities. Out-of-date components can slow down system remediation due to interoperability issues. Using up-to-date 
components reduces exposure time and may include remediations of non-disclosed vulnerabilities. 

#### Component Type
Frameworks and libraries have unique upgrade challenges and associated risk. Abstractions, coupling, and architectural 
design patterns may affect the risk of using a given component type. Libraries, frameworks, applications, containers, 
and operating systems are common component types.

#### Component Function
Identifying and analyzing the purpose of each component may reveal the existence of components with duplicate or
similar functionality. Potential risk can be reduced by minimizing the number of components for each function and by
choosing the highest quality components for each function.

#### Component Quantity
The operational and maintenance cost of using open source may increase with the adoption of every new component. 
Decreased ability to maintain growing sets of components over time can be expected. This is especially true for teams
with time-boxed constraints.

#### License
Third-party and open-source software is typically released under one or more licenses. The chosen license may or may
not allow certain types of usage, contain distribution requirements or limitations, or require specific actions if the
component is modified. Utilizing components with licenses which conflict with an organizations objectives or ability 
can create risk to the business.

## Verification Requirements

| # | Description | L1 | L2 | L3 |
| :---: | :--- | :---: | :---: | :---: |
| **5.1** | Component can be analyzed with linters and/or static analysis tools | ✓ | ✓ | ✓ |
| **5.2** | Component is analyzed using linters and/or static analysis tools prior to use | | ✓ | ✓ |
| **5.3** | Linting and/or static analysis is performed with every upgrade of a component | | ✓ | ✓ |
| **5.4** | An automated process of identifying all publicly disclosed vulnerabilities in third-party and open source components is used | ✓ | ✓ | ✓ |
| **5.5** | An automated process of identifying confirmed dataflow exploitability is used | | | ✓ |
| **5.6** | An automated process of identifying non-specified component versions is used | ✓ | ✓ | ✓ |
| **5.7** | An automated process of identifying out-of-date components is used | ✓ | ✓ | ✓ |
| **5.8** | An automated process of identifying end-of-life / end-of-support components is used | | | ✓ |
| **5.9** | An automated process of identifying component type is used | | ✓ | ✓ |
| **5.10** | An automated process of identifying component function is used | | | ✓ |
| **5.11** | An automated process of identifying component quantity is used | ✓ | ✓ | ✓ |
| **5.12** | An automated process of identifying component license is used | ✓ | ✓ | ✓ |
