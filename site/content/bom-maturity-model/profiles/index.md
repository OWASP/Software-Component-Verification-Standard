---
description: ''
sidebar: 'taxonomy'
---

# Profiles

The BOM Maturity Model provides support for profiles, which group multiple items in the model together along with 
weighted importance and other metadata. Organizations may create multiple profiles, each specific to various stakeholder 
requirements, or may opt for a global profile where a single organization profile contains all the required items of the 
model. With profiles, organizations can:

- Evaluate BOMs against various profiles so that end users may know what types of analysis can be performed on them
- Create and govern organizational policy, defined in profiles, for what is acceptable and not acceptable for various use cases

Profiles are defined in JSON and work together with the taxonomy.

### Example Profile
The following is an example profile that describes the [NTIA Minimum Elements for an SBOM](https://www.ntia.doc.gov/sites/default/files/publications/sbom_minimum_elements_report_0.pdf).

```json
{
  "$schema": "https://scvs.owasp.org/bom-maturity-profile-1.0.0.schema.json",
  "profiles": [
    {
      "name": "NTIA Minimum Elements",
      "version": "1.0",
      "description": "The Minimum Elements For a Software Bill of Materials (SBOM), Pursuant to Executive Order 14028 on Improving the Nation’s Cybersecurity",
      "creator": "OWASP Foundation",
      "elements": [
        {
          "structure": [ "metadata", "inventory" ],
          "identifiers": [
            "urn:owasp:scvs:bom:provenance:role:supplier",
            "urn:owasp:scvs:bom:resource:identifiers:coordinates",
            "urn:owasp:scvs:bom:resource:software:identity",
            "assembly"
          ],
          "weight": 1.0,
          "required": true
        },
        {
          "structure": [ "metadata" ],
          "identifiers": [
            "urn:owasp:scvs:bom:provenance:role:author",
            "timestamp"
          ],
          "weight": 1.0,
          "required": true
        },
        {
          "structure": [ "metadata", "inventory" ],
          "identifiers": [
            "urn:owasp:scvs:bom:resource:identifiers:cpe",
            "urn:owasp:scvs:bom:resource:identifiers:purl"
          ],
          "weight": 0.7,
          "required": false
        }
      ]
    }
  ]
}
```