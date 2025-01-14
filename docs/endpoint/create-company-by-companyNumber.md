---
sidebar_label: "Create Company by companyNumber"
sidebar_position: 3
---

# POST - Create Company by companyNumber

```jsx  
{{environment_url}}/api/customers/create-company
```

This API endpoint is used to create a company for **UK customers**. The HTTP POST request should be sent to environment_url/api/customers/create-company with the payload containing the company number. The response will be in JSON format with a status code of 200. The response will include various data fields related to the created company, including contact information, identity information, risk ratings, screening status, and dynamic input values for company directors and authorised persons.

This endpoint is used to create a new company.

### Request Body
- companyNumber (text, required): The number of the company to be created.

### Response
- **Status:** 200
- **Content-Type:** application/json
- **message (string):** A message related to the response.
- **data (array):** An array containing the details of the newly created company, including identity information, contact information, risk ratings, screening status, and other company-specific data.

### Headers

- **Authorization**: `Bearer token`
- **apiKey**: `xxxxxx-xxdc-xxb7-axxx-xx24d7c62101`
- **apiSecret**: `xxxxxx1bb5xxabc7xxxxxx55xxba5d3742902e4`

### Body

```jsx  
{
    "companyNumber":"12001945"
}
```