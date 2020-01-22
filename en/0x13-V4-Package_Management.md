# V4: Package Management Requirements

## Control Objective

> TODO

<div style="page-break-after: always;"> 
</div>

## Verification Requirements

| # | Description | L1 | L2 | L3 |
| :---: | :--- | :---: | :---: | :---: |
| **4.1** | Binary components are retrieved from a package repository | ✓ | ✓ | ✓ |
| **4.2** | Package repository contents are congruent to an authoritative point of origin for open source components | ✓ | ✓ | ✓ |
| **4.3** | Package repository requires strong authentication | | ✓ | ✓ |
| **4.4** | Package repository enables multi-factor authentication component publishing | | ✓ | ✓ |
| **4.5** | Package repository components have been published with multi-factor authentication | | | ✓ |
| **4.6** | Package repository supports security incident reporting | | ✓ | ✓ |
| **4.7** | Package repository automates security incident reporting | | | ✓ |
| **4.8** | Package repository notifies publishers of security issues | | ✓ | ✓ |
| **4.9** | Package repository notifies users of security issues | | | ✓ |
| TODO    | LEFT OFF HERE | | | |
| **4.10** | Package repository provides a verifiable way of correlating component versions to specific source codes in version control | | ✓ | ✓ |
| **4.11** | Package repository provides auditability when components are updated | ✓ | ✓ | ✓ |
| **4.12** | Package repository requires code signing to publish packages to production repositories | | ✓ | ✓ |
| **4.13** | Package manager verifies the integrity of packages when they are retrieved from remote repository | ✓ | ✓ | ✓ |
| **4.14** | Package manager verifies the integrity of packages when they are retrieved from file system | ✓ | ✓ | ✓ |
| **4.15** | Package repository enforces use of TLS for all interactions | ✓ | ✓ | ✓ |
| **4.16** | Package manager validates TLS certificate chain to repository and fails securely when validation fails | ✓ | ✓ | ✓ |
| **4.17** | Package repository requires and/or performs static code analysis prior to publishing a component and makes results available for others to consume | | | ✓ |
| **4.18** | Package manager does not execute code | ✓ | ✓ | ✓ |
