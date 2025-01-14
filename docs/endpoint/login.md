---
sidebar_label: "Login"
sidebar_position: 1
---

# POST - LOGIN

```jsx  
{{environment_url}}/api/users/login-endpoint
```

Before calling any other API, the first step is to get the Access Token from the Idenfo Server. You will use your login credentails that you created while signing up for Idenfo Direct.

### Headers

- **Content-Type**: `application/json`
- **apiKey**: `xxxxxx-xxdc-xxb7-axxx-xx24d7c62101`
- **apiSecret**: `xxxxxx1bb5xxabc7xxxxxx55xxba5d3742902e4`

### Body

```jsx  
{
	"username":"you@email.com",
	"password":"some-password"
}
```

