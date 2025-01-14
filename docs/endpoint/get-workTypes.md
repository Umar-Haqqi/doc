---
sidebar_label: "Get WorkTypes"
sidebar_position: 1
---

# GET - Get WorkTypes

```jsx  
{{environment_url}}api/configurations/getWorkTypes?dataSegmentId={{dataSegmentId}}
```

This API allows you to retrieve a predefined list of work types available in our system, along with their corresponding unique IDs. These IDs are essential for specifying the customer’s work details when adding or updating their profile.

**Use Case**

When submitting customer details, the work type field requires a specific ID from our system. This API helps you fetch the list of valid work types, ensuring accuracy and consistency in data entry. Use the returned ID for the desired work type and include it in the customer’s request body to complete the process successfully.

**Key Features**

- Retrieve a complete list of available work types.
- Access unique IDs for each work type for precise data mapping.
- Ensure data integrity and consistency when specifying work details for customers.

**Steps to Use**
1. Call this API to get the list of work types and their corresponding IDs.
2. Identify the appropriate work type for the customer from the response.
3. Use the ID of the selected work type in the request body when adding or updating customer details.

**Example Scenario**

If you want to add a customer who works as a "Software Engineer," use this API to retrieve the ID for "Software Engineer" `(e.g., workTypeId: 101)` and include it in your request to ensure proper categorization.

### PARAMS

- **dataSegmentId**: `{{dataSegmentId}}`
