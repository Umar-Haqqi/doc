---
sidebar_label: "Fetch Customer"
sidebar_position: 1
---

# GET - Fetch Customer


Fetch Customer can be called in order to retrieve the customer's complete information, including the Risk Rating and Name Screening results.

**Note**

IdenfoId is mandatory field in this API, so make sure to save the IdenfoId in your system when onboarding a new customer.

```jsx  
{{environment_url}}/api/customers/fetch-customer-endpoint/192
```

This endpoint takes the "idenfoId" key (generated while creating a customer) as an argument, and brings back the latest information of that customer.

### Headers

- **Authorization**: `Bearer token`
- **apiKey**: `xxxxxx-xxdc-xxb7-axxx-xx24d7c62101`
- **apiSecret**: `xxxxxx1bb5xxabc7xxxxxx55xxba5d3742902e4`
