---
sidebar_label: "Deep Link"
sidebar_position: 3
---

# POST - Deep Link

```jsx  
{{environment_url}}/api/customers/save-customer-endpoint
```

Through this API, a deeplink email will be sent to the customer to onboard themselves on the Idenfo system. Once the customer clicks on the link sent in the email, they will be taken through the Idenfo Onboarding process. Once their onboarding is completed, the customer will be successfully onboarded to the Idenfo System for KYC.

**Note:**

If Webhooks are configured, the customer's KYC result will be automatically sent to your system once it is ready.

### Headers

- **Authorization**: `Bearer token`
- **apiKey**: `xxxxxx-xxdc-xxb7-axxx-xx24d7c62101`
- **apiSecret**: `xxxxxx1bb5xxabc7xxxxxx55xxba5d3742902e4`

### Body

```jsx  
{
	"contactInfo":
	{
		"email":"test@xyz.com"
	},
	"basicInfo":
	{
		"firstName":"Test User",
		"lastName":"user Test"
	}
}
```