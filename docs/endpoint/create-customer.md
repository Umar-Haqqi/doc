---
sidebar_label: "Create Customer"
sidebar_position: 2
---

# POST - Create Customer

```jsx  
{{environment_url}}/api/customers/create-customer-endpoint
```

This API allows you to create a new customer profile object in the system. You can use this endpoint to create profiles for both individuals and companies. Sample requests for both scenarios are provided for your reference.

Once the customer profile is successfully created, the API will return a response containing a unique key, **idenfoId**. This key serves as the identifier for the customer and can be stored in your system for future use. The **idenfoId** can later be used to fetch the customer's information via the Fetch Customer Information endpoint.

#### Note:

For Type Field, LOVs are: `individual` `company` 

### Headers

- **Content-Type**: `application/json`
- **Authorization**: `Bearer token`
- **apiKey**: `xxxxxx-xxdc-xxb7-axxx-xx24d7c62101`
- **apiSecret**: `xxxxxx1bb5xxabc7xxxxxx55xxba5d3742902e4`

### Body for adding a company

```jsx  
{
    "type": "company", 
    // only basicInfo.firstName is required, every other key can be null
    "basicInfo": {
        "companyName": "ABC Company", // required 
        "dateOfIncorporation": "1971-05-11T19:00:00.000Z", 
        "countryOfOperation": "Australia",
        "countryOfDomicile": "United Kingdom"
    },
    // key to add officiers
    "dynamicInputValues": {
        "companyDirectors": [
            {
                "name": "New Director",
                "dob": "1997-10-1",
                "onboard": true,
                "isExisting": false
            }
        ],
        "authorisedPersons": [
            {
                "name": "New Authroised person",
                "dob": "1997-10-1",
                "onboard": true,
                "isExisting": false
            }
        ]
    },
    "identityInfo": {
        "type": "id",
        "companyNumber": "1234567890", 
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
        // "industry": "Electricity, gas, steam and air conditioning supply",
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
    }
}
```

### Body for adding a individual

```jsx  
{
    "type": "individual", //required
    "basicInfo": {
        "firstName": "James Bond", // required 
        "dateOfBirth": "1971-05-11T19:00:00.000Z",
        "nationality": "Australia",
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
    }
}
```
