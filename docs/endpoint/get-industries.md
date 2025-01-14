---
sidebar_label: "Get Industries"
sidebar_position: 2
---

# GET - Get Industries

```jsx  
{{environment_url}}api/configurations/getIndustries?dataSegmentId={{dataSegmentId}}
```

This API allows you to retrieve a predefined list of industries available in our system, along with their corresponding unique IDs. These IDs are essential for specifying the customer’s industry details when adding or updating their profile.

**Use Case**

When submitting customer details, the industry field requires a specific ID from our system. This API helps you fetch the list of valid industries, ensuring accuracy and consistency in data entry. Use the returned ID for the desired industry and include it in the customer’s request body to complete the process successfully.

**Key Features**

- Retrieve a complete list of available industries.
- Access unique IDs for each industry for precise data mapping.
- Ensure data integrity and consistency when specifying industry details for customers.

**Steps to Use**

1. Call this API to get the list of industries and their corresponding IDs.
2. Identify the appropriate industry for the customer from the response.
3. Use the ID of the selected industry in the request body when adding or updating customer details.

**Example Scenario**

If the customer operates in the "Finance" industry, use this API to retrieve the ID for "Finance" `(e.g., industryId: 205)` and include it in your request to ensure proper categorization.

### PARAMS

- **dataSegmentId**: `{{dataSegmentId}}`
