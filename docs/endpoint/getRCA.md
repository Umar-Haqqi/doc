---
sidebar_label: "Get RCA"
sidebar_position: 1
---

# POST - Get RCA

```jsx  
{{environment_url}}customers/rca-endpoint
```

This API allows you to fetch detailed information about **relational hits** identified during the name screening process for a specific customer. Relational hits refer to connections or associations between the screened individual and other entities or individuals, which may be flagged for further review based on potential risks or compliance concerns.

**Use Case**

Relational hits provide insights into indirect risks or associations that could impact the overall risk profile of a customer. This API is designed to help compliance teams delve deeper into these relationships, ensuring thorough due diligence and informed decision-making.

**Notes**

By using this API, businesses can enhance their compliance processes by analyzing not only direct hits but also the broader network of relationships that may influence a customer's risk profile.

### Headers

- **Authorization**: `Bearer token`
- **apiKey**: `xxxxxx-xxdc-xxb7-axxx-xx24d7c62101`
- **apiSecret**: `xxxxxx1bb5xxabc7xxxxxx55xxba5d3742902e4`

```jsx  
{
    "relations" : 
        [
            "PK-SP-I-70-RCA-1",
            "PK-SP-I-70-RCA-2"
        ]
}
```