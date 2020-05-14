# V3: Build Environment Requirements

## Control Objective

Software build pipelines may consist of source code repositories, package repositories, continuous integration and
delivery processes, and test procedures, along with the network infrastructure and services that enable these 
capabilities. Every system in the pipeline may provide an entry-point in which flaws, failures, and misconfigurations 
can compromise the software supply chain. Hardening the systems involved and implementing best practices reduces the
likelihood of compromise.

## Verification Requirements

| # | Description | L1 | L2 | L3 |
| :---: | :--- | :---: | :---: | :---: |
| **3.1** | Application uses a repeatable build | ✓ | ✓ | ✓ |
| **3.2** | Documentation exists on how the application is built and instructions for repeating the build | ✓ | ✓ | ✓ |
| **3.3** | Application uses a continuous integration build pipeline | ✓ | ✓ | ✓ |
| **3.4** | Application build pipeline prohibits alteration of build outside of the job performing the build | | ✓ | ✓ |
| **3.5** | Application build pipeline prohibits alteration of package management settings | | ✓ | ✓ |
| **3.6** | Application build pipeline prohibits the execution of arbitrary code outside of the context of a jobs build script | | ✓ | ✓ |
| **3.7** | Application build pipeline may only perform builds of source code maintained in version control systems | ✓ | ✓ | ✓ |
| **3.8** | Application build pipeline prohibits alteration of DNS and network settings during build | | | ✓ |
| **3.9** | Application build pipeline prohibits alteration of certificate trust stores | | | ✓ |
| **3.10** | Application build pipeline enforces authentication and defaults to deny | | ✓ | ✓ |
| **3.11** | Application build pipeline enforces authorization and defaults to deny | | ✓ | ✓ |
| **3.12** | Application build pipeline requires separation of concerns for the modification of system settings | | | ✓ |
| **3.13** | Application build pipeline maintains a verifiable audit log of all system changes | | | ✓ |
| **3.14** | Application build pipeline maintains a verifiable audit log of all build job changes | | | ✓ |
| **3.15** | Application build pipeline has required maintenance cadence where the entire stack is updated, patched, and re-certified for use | | ✓ | ✓ |
| **3.16** | Compilers, version control clients, development utilities, and software development kits are analyzed and monitored for tampering, trojans, or malicious code | | | ✓ |
| **3.17** | All build-time manipulations to source or binaries are known and well defined | ✓ | ✓ | ✓ |
| **3.18** | Checksums of all first-party and third-party components are documented for every build | ✓ | ✓ | ✓ |
| **3.19** | Checksums of all components are accessible and delivered out-of-band whenever those components are packaged or distributed | | ✓ | ✓ |
| **3.20** | Unused direct and transitive components have been identified | | | ✓ |
| **3.21** | Unused direct and transitive components have been removed from the application | | | ✓ |
