# V4: Package Management Requirements

## Control Objective

Open source components intended for reuse are often published to ecosystem-specific package repositories. Centralized repositories exist for most build systems including Maven, NPM, Python, and .NET. Repositories internal to an organization may additionally provide reuse of first-party components as well as access to trusted third-party components.

Package managers are often invoked during the build process and are responsible for resolving component versions and automatically retrieving components from their repositories.

While there are tremendous business, technical, and security benefits to using package managers and centralized repositories, they are often targets for adversaries. Implementing best practices can dramatically reduce risk of compromise in the software supply chain.

## Verification Requirements

| \# | Description | L1 | L2 | L3 |
| :---: | :--- | :---: | :---: | :---: |
| **4.1** | Binary components are retrieved from a package repository | ✓ | ✓ | ✓ |
| **4.2** | Package repository contents are congruent to an authoritative point of origin for open source components | ✓ | ✓ | ✓ |
| **4.3** | Package repository requires strong authentication |  | ✓ | ✓ |
| **4.4** | Package repository enables multi-factor authentication component publishing |  | ✓ | ✓ |
| **4.5** | Package repository components have been published with multi-factor authentication |  |  | ✓ |
| **4.6** | Package repository supports security incident reporting |  | ✓ | ✓ |
| **4.7** | Package repository automates security incident reporting |  |  | ✓ |
| **4.8** | Package repository notifies publishers of security issues |  | ✓ | ✓ |
| **4.9** | Package repository notifies users of security issues |  |  | ✓ |
| **4.10** | Package repository provides a verifiable way of correlating component versions to specific source codes in version control |  | ✓ | ✓ |
| **4.11** | Package repository provides auditability when components are updated | ✓ | ✓ | ✓ |
| **4.12** | Package repository requires code signing to publish packages to production repositories |  | ✓ | ✓ |
| **4.13** | Package manager verifies the integrity of packages when they are retrieved from remote repository | ✓ | ✓ | ✓ |
| **4.14** | Package manager verifies the integrity of packages when they are retrieved from file system | ✓ | ✓ | ✓ |
| **4.15** | Package repository enforces use of TLS for all interactions | ✓ | ✓ | ✓ |
| **4.16** | Package manager validates TLS certificate chain to repository and fails securely when validation fails | ✓ | ✓ | ✓ |
| **4.17** | Package repository requires and/or performs static code analysis prior to publishing a component and makes results available for others to consume |  |  | ✓ |
| **4.18** | Package manager does not execute code | ✓ | ✓ | ✓ |

