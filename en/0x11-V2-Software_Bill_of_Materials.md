# V2: Software Bill-of-Materials (SBOM) Requirements

## Control Objective

> TODO

<div style="page-break-after: always;"> 
</div>

## Verification Requirements

| # | SCVS-ID | Description | L1 | L2 | L3 |
| :---: | :--- | :--- | :---: | :---: | :---: |
| **2.1** | SCVS-BOM-01 | A standardized software bill-of-materials (SBOM) format can be produced | ✓ | ✓ | ✓ |
| **2.2** | SCVS-BOM-02 | SBOM creation is automated and reproducable | | ✓ | ✓ |
| **2.3** | SCVS-BOM-03 | Each SBOM has a unique identifier | ✓ | ✓ | ✓ |
| **2.4** | SCVS-BOM-04 | SBOM has been signed by publisher and/or supplier | | ✓ | ✓ |
| **2.5** | SCVS-BOM-05 | SBOM signature verification exists | | ✓ | ✓ |
| **2.6** | SCVS-BOM-06 | SBOM signature verification is performed | | | ✓ |
| **2.7** | SCVS-BOM-07 | SBOM can be consumed by tools capable of analyzing them | ✓ | ✓ | ✓ |
| **2.8** | SCVS-BOM-08 | SBOM are analyzed for various forms of risk (NOTE: reference component risk assements above) | ✓ | ✓ | ✓ |
| **2.9** | SCVS-BOM-09 | SBOM contains an accurate inventory of all components for the asset or application it describes | ✓ | ✓ | ✓ |
| **2.10** | SCVS-BOM-10 | Components are identified using values derived from its native ecosystem (if applicable) | ✓ | ✓ | ✓ |
| **2.11** | SCVS-BOM-11 | Components have a valid Package URL (PURL) (if applicable) | ✓ | ✓ | ✓ |
| **2.12** | SCVS-BOM-12 | Components defined in SBOM have accurate license information  | ✓ | ✓ | ✓ |
| **2.13** | SCVS-BOM-13 | Components defined in SBOM have valid SPDX license ID's or expressions (if applicable) | ✓ | ✓ | ✓ |
| **2.14** | SCVS-BOM-14 | Components defined in SBOM have valid copyright statements  | | ✓ | ✓ |
| **2.15** | SCVS-BOM-15 | Components defined in SBOM which have been modified from the original have detailed provenance and pedigree information  | | | ✓ |
