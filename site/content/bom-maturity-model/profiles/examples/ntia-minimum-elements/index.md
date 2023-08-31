---
description: ''
sidebar: 'taxonomy'
---

# Profile: NTIA Minimum Elements

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
          "structure": [ "urn:owasp:scvs:bom:structure:metadata", "urn:owasp:scvs:bom:structure:inventory" ],
          "identifiers": [
            "urn:owasp:scvs:bom:provenance:role:supplier",
            "urn:owasp:scvs:bom:resource:identifiers:coordinates",
            "urn:owasp:scvs:bom:resource:software:identity",
            "urn:owasp:scvs:bom:resource:relationships:assembly"
          ],
          "weight": 1.0,
          "required": true
        },
        {
          "structure": [ "urn:owasp:scvs:bom:structure:metadata" ],
          "identifiers": [
            "urn:owasp:scvs:bom:provenance:role:author",
            "timestamp"
          ],
          "weight": 1.0,
          "required": true
        },
        {
          "structure": [ "urn:owasp:scvs:bom:structure:metadata", "urn:owasp:scvs:bom:structure:inventory" ],
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