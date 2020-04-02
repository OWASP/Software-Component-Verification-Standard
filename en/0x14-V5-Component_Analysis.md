# V5: Component Analysis Requirements

## Control Objective

Component Analysis is the process of identifying potential areas of risk from the use of third-party and open-source
software components. Every component, direct or transitive, is a candidate for analysis. Risk inherited through the use
of third-party software may directly affect the application or systems that rely on them.

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
