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
The following is an example profile that.... TODO

```json
{
  "profile": {
    "name": "Example profile",
    "version": "1.0",
    "description": "",
    "creator": "",
    "elements": [
      {
        "identifiers": [
          "urn:owasp:scvs:bmm:inventory:identifiers:name",
          "urn:owasp:scvs:bmm:inventory:identifiers:version"
        ],
        "weight": 1.0,
        "required": true
      },
      {
        "identifiers": [
          "urn:owasp:scvs:bmm:inventory:identifiers:cpe",
          "urn:owasp:scvs:bmm:inventory:identifiers:purl"
        ],
        "weight": 0.7,
        "required": false
      }
    ]
  }
}
```