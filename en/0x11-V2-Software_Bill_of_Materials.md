# V2: Software Bill-of-Materials (SBOM) Requirements

## Control Objective

Automatically creating accurate Software Bill-of-Materials (SBOM) in the build pipeline is one indicator of mature development processes. Generated SBOMs should always use a recognized or industry-standard format such as CycloneDX, SPDX, or SWID. Each format has different capabilities and use-cases they excel in. Part of adopting SBOMs is identifying the use-cases and capabilities necessary to achieve those use cases and aligning them to the format which best suites a specific purpose. While SBOM format standardization across an organization may be desirable, it may be necessary to adopt more then one to meet contractual, compliance, or regulatory requirements.

<div style="page-break-after: always;"> 
</div>

## Verification Requirements

| # | Description | L1 | L2 | L3 |
| :---: | :--- | :---: | :---: | :---: |
| **2.1** | A structured, machine readable software bill-of-materials (SBOM) format is present | ✓ | ✓ | ✓ |
| **2.2** | SBOM creation is automated and reproducible | | ✓ | ✓ |
| **2.3** | Each SBOM has a unique identifier | ✓ | ✓ | ✓ |
| **2.4** | SBOM has been signed by publisher, supplier, or certifying authority | | ✓ | ✓ |
| **2.5** | SBOM signature verification exists | | ✓ | ✓ |
| **2.6** | SBOM signature verification is performed | | | ✓ |
| **2.7** | SBOM is timestamped | ✓ | ✓ | ✓ |
| **2.8** | SBOM is analyzed for risk | ✓ | ✓ | ✓ |
| **2.9** | SBOM contains a complete and accurate inventory of all components the SBOM describes | ✓ | ✓ | ✓ |
| **2.10** | SBOM contains an accurate inventory of all test components for the asset or application it describes | | ✓ | ✓ |
| **2.11** | SBOM contains metadata about the asset or software the SBOM describes | | ✓ | ✓ |
| **2.12** | Component identifiers are derived from their native ecosystems (if applicable) | ✓ | ✓ | ✓ |
| **2.13** | Component point of origin is identified in a consistent, machine readable format (e.g. PURL) | | | ✓ |
| **2.14** | Components defined in SBOM have accurate license information | ✓ | ✓ | ✓ |
| **2.15** | Components defined in SBOM have valid SPDX license ID's or expressions (if applicable) | | ✓ | ✓ |
| **2.16** | Components defined in SBOM have valid copyright statements | | | ✓ |
| **2.17** | Components defined in SBOM which have been modified from the original have detailed provenance and pedigree information  | | | ✓ |
| **2.18** | Components defined in SBOM have one or more file hashes (SHA-256, SHA-512, etc) | | | ✓ |
