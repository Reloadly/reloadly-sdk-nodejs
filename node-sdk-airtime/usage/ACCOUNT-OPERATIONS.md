# Account Operations

Use the account operations to perform account related actions.

## Retrieve account balance info

```typescript
var api = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, Environment.SANDBOX);
var operation = await api.accounts();
var request = operation.getBalance();
var balanceInfo = await request.execute();
```
