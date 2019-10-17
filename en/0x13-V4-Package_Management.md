# V4: Package Management Requirements

## Control Objective

> TODO

<div style="page-break-after: always;"> 
</div>

## Verification Requirements

| # | SCVS-ID | Description | L1 | L2 | L3 |
| :---: | :--- | :--- | :---: | :---: | :---: |
| **4.1** | SCVS-PKM-01 | Components are published to and retrieved from a package repository | ✓ | ✓ | ✓ |
| **4.2** | SCVS-PKM-02 | Package repository is centralized and an authoritative source of truth | ✓ | ✓ | ✓ |
| **4.3** | SCVS-PKM-03 | Package repository is not specific to a component or governing project | ✓ | ✓ | ✓ |
| **4.4** | SCVS-PKM-04 | Package repository requires strong authentication | | ✓ | ✓ |
| **4.5** | SCVS-PKM-05 | Package repository requires multi-factor authentication to publish components | | ✓ | ✓ |
| **4.6** | SCVS-PKM-06 | Package repository supports security contacts | | ✓ | ✓ |
| **4.7** | SCVS-PKM-07 | Package repository notifies publishers and users of security issues | ✓ | ✓ | ✓ |
| **4.8** | SCVS-PKM-08 | Package repository provides a verifiable way of correlating component versions to specific source codes in version control | | ✓ | ✓ |
| **4.9** | SCVS-PKM-09 | Package repository provides notifications on component updates | ✓ | ✓ | ✓ |
| **4.10** | SCVS-PKM-10 | Package repository requires code signing to publish packages to production repositories | | ✓ | ✓ |
| **4.11** | SCVS-PKM-11 | Package manager verifies the integrity of packages when they are retrieved from remote repository | ✓ | ✓ | ✓ |
| **4.12** | SCVS-PKM-12 | Package manager verifies the integrity of packages when they are retrieved from file system | ✓ | ✓ | ✓ |
| **4.13** | SCVS-PKM-13 | Package repository enforces use of TLS for all interactions | ✓ | ✓ | ✓ |
| **4.14** | SCVS-PKM-14 | Package manager validates certificate chain to repository and fails securely when validation fails | ✓ | ✓ | ✓ |
| **4.15** | SCVS-PKM-15 | Package repository requires and/or performs static code analysis prior to publishing a component and making it available for others to consume | | | ✓ |
| **4.16** | SCVS-PKM-16 | Package manager does not execute code | ✓ | ✓ | ✓ |
| **4.17** | SCVS-PKM-17 | Package manager does not collect information | ✓ | ✓ | ✓ |
