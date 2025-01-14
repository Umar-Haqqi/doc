---
sidebar_label: "Edit Customer"
sidebar_position: 4
---

# PUT - Edit Customer

```jsx  
{{environment_url}}customers/edit-customer-endpoint
```

In case the customer information is incorrectly added in the system, it can be easily edited using the Edit Customer API. Simply call this API with the updated information, to edit a customer's profile.

**Note:**

All information, with the exception of First Name, can be edited using this API.

### AUTHORIZATION (Bearer Token)

- **Token**: `{{authToken}}`

### Headers

- **apiKey**: `xxxxxx-xxdc-xxb7-axxx-xx24d7c62101`
- **apiSecret**: `xxxxxx1bb5xxabc7xxxxxx55xxba5d3742902e4`

### Body

```jsx  
{
    "_id": "65de5bfb7d8e635f98618999",
    "basicInfo": {
        // "firstName": "John Smith", // not editable
        "fatherName": "Alice Smith",
        "dateOfBirth": "1971-05-11T19:00:00.000Z",
        "nationality": "United Kingdom",
        "countryOfResidence": "United Kingdom",
        "gender": "Male"
    },
    "identityInfo": {
        "type": "id",
        "number": "1234567890",
        "expiryDate": "2024-04-24T19:00:00.000Z",
        "isLifetimeExpiry": null,
        "passport": {
            "number": "12345ABC",
            "expiryDate": "2024-05-28T19:00:00.000Z"
        }
    },
    "occupationInfo": {
        "workTypeId": "64b9859fbcf7b54488be177e",
        "industryId": "64b9859fbcf7b54488be179a",
        "companyName": "ABC Company",
        "industry": "Electricity, gas, steam and air conditioning supply",
        "workType": "Salaried-General"
    },
    "pepDeclaration": {
        "anyPublicPos": "No",
        "posLastTwoMonths": "No",
        "everPublicPosition": "No",
        "diplomaticImmunity": "No",
        "relativeTwelveMonths": "No",
        "closeAssociateTwelveMonths": "No",
        "conviction": "Yes",
        "other": "this is an example description"
    },
    "sourceOfWealth": {
        "evidenced": [
            "Salary",
            "Inheritance",
            "Investments"
        ],
        "OtherEvidenced": "sample information"
    },
    "sourceOfFunds": {
        "evidenced": [
            "Salary",
            "Investments",
            "Inheritance"
        ],
        "OtherEvidenced": "Sample Information"
    },
    "contactInfo": {
        "address": "10, X street, ABC road",
        "state": "",
        "city": "London",
        "postalCode": "12345",
        "isdCode": "+44",
        "phoneNumber": "123456789",
        "email": "test@email.com",
        "confirmEmail": "test@email.com"
    },
    "accountInfo": {
        "products": [
            {
                "_id": "64bf0d423efe2955d43c4205",
                "title": "Simple Loan"
            }
        ]
    },
    "type": "individual" // change value  to "company" for companies
}
```