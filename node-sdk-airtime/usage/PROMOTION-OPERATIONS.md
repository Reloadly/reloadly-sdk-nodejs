# Promotions Operations

Reloady also support operators promotions. These are provided by the operators and can be activated by sending a
specific topup amount as per the details of the promotion. Using the promotion operations you can retrieve all details
on the different operators promotions and to showcase these to your customers.

```typescript
let api = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, Environment.SANDBOX);
let operation = await api.promotions();

var request0 = await operation.getByCountryCode("EC");
var promotions0 = await request0.execute();

var request1 = await operation.getById(123);
var promotions1 = await request1.execute();

var request2 = await operation.getByOperatorId(123);
var promotions2 = await request2.execute();

var request3 = await operation.list();
var promotions3 = await request3.execute();
```
