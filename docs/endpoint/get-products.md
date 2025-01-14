---
sidebar_label: "Get Products"
sidebar_position: 3
---

# GET - Get Products

```jsx  
{{environment_url}}api/configurations/getProducts?dataSegmentId={{dataSegmentId}}
```

This API allows you to retrieve a predefined list of products available in our system, along with their corresponding unique IDs. These IDs are essential for specifying the customer's product preferences or purchases when adding or updating their profile.

**Use Case**

When submitting customer details, the product field requires a specific ID from our system. This API helps you fetch the list of valid products, ensuring accuracy and consistency in data entry. Use the returned ID for the desired product and include it in the customer’s request body to complete the process successfully.

**Key Features**

- Retrieve a complete list of available products.
- Access unique IDs for each product for precise data mapping.
- Ensure data integrity and consistency when specifying product details for customers.

**Steps to Use**

1. Call this API to get the list of products and their corresponding IDs.
2. Identify the appropriate product for the customer from the response.
3. Use the ID of the selected product in the request body when adding or updating customer details.

**Example Scenario**

If the customer has purchased or is interested in the product "Compliance Manager," use this API to retrieve the ID for "Compliance Manager" `(e.g., productId: 501)` and include it in your request to ensure proper tracking.

### PARAMS

- **dataSegmentId**: `{{dataSegmentId}}`
