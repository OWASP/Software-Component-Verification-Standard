# V3: Build Environment Requirements

## Control Objective

> TODO

<div style="page-break-after: always;"> 
</div>

## Verification Requirements

| # | SCVS-ID | Description | L1 | L2 | L3 |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **3.1** | SCVS-BLD-01 | Application uses a repeatable build | ✓ | ✓ | ✓ |
| **3.2** | SCVS-BLD-02 | Documentation exists on how the application is built and instructions for repeating the build | ✓ | ✓ | ✓ |
| **3.3** | SCVS-BLD-03 | Application uses a continuous integration or continuous delivery build pipeline | ✓ | ✓ | ✓ |
| **3.4** | SCVS-BLD-04 | Application build pipeline prohibits alteration of build workspace outside of the job performing the build | | ✓ | ✓ |
| **3.5** | SCVS-BLD-05 | Application build pipeline prohibits alteration of package management settings | | ✓ | ✓ |
| **3.6** | SCVS-BLD-06 | Application build pipeline prohibits the execution of arbitrary code outside of the context of a jobs build script | | ✓ | ✓ |
| **3.7** | SCVS-BLD-07 | Application build pipeline may only perform builds of source code maintained in version control systems | ✓ | ✓ | ✓ |
| **3.8** | SCVS-BLD-08 | Application build pipeline prohibits alteration of DNS and network settings | | ✓ | ✓ |
| **3.9** | SCVS-BLD-09 | Application build pipeline prohibits alteration of certificate trust stores | | ✓ | ✓ |
| **3.10** | SCVS-BLD-10 | Application build pipeline enforces authentication and defaults to deny | | ✓ | ✓ |
| **3.11** | SCVS-BLD-11 | Application build pipeline enforces authorization and defaults to deny | | ✓ | ✓ |
| **3.12** | SCVS-BLD-12 | Application build pipeline requires separateion of concerns for the modification of system settings | | | ✓ |
| **3.13** | SCVS-BLD-13 | Application build pipeline maintains a verifiable audit log of all system changes | | | ✓ |
| **3.14** | SCVS-BLD-14 | Application build pipeline maintains a verifiable audit log of all build job changes | | | ✓ |
| **3.15** | SCVS-BLD-15 | Application build pipeline has required maintenance cadence where the entire stack is updated, patched, and re-certified for use | | ✓ | ✓ |
| **3.16** | SCVS-BLD-16 | Build environment verifies that source code authored by developers and commited to version control is not altered | | ✓ | ✓ |
| **3.17** | SCVS-BLD-17 | Compilers, version control clients, development utilities, and software development kits are known to be free of tampering, trojans, or malicious code | | ✓ | ✓ |
| **3.18** | SCVS-BLD-18 | All build-time manipulations to source or binaries are known and well defined | ✓ | ✓ | ✓ |
| **3.19** | SCVS-BLD-19 | All build-time manipulations to source or binaries have been vetted with process in place to prevent unapproved alterations | | ✓ | ✓ |
| **3.20** | SCVS-BLD-20 | All source or binary manipulations take place only during the software build lifecycle | | ✓ | ✓ |
| **3.21** | SCVS-BLD-21 | Checksums of all first-party and third-party components are documented for every build | ✓ | ✓ | ✓ |
| **3.22** | SCVS-BLD-22 | Checksums of all components are accessible and delivered out-of-band whenever those components are packaged or distributed | | ✓ | ✓ |
| **3.23** | SCVS-BLD-23 | Unused direct and transitive components have been identified | ✓ | ✓ | ✓ |
| **3.24** | SCVS-BLD-24 | Unused direct and transitive components have been removed from the application | | ✓ | ✓ |
