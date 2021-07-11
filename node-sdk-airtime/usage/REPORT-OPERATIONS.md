# Report Operations

Retrieve various reports such as transaction history etc...

```typescript
let api = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, Environment.SANDBOX);
let operation = await api.reports().transactionsHistory()

var request0 = operation.getById("Your-Transaction-Custom-Identifier");
var transaction0 = await request0.execute();

var request1 = operation.list();
var transactions1 = await request1.execute();

var request2 = operation.list(
    new TransactionHistoryFilter()
        .countryCode("HT")
        .customIdentifier("Your-Transaction-Custom-Identifier")
        .endDate(new Date())
        .operatorId(123)
        .operatorName("Digicel Haiti")
        .startDate(new Date() - 1)
        .withPage(1 /*pageNumber*/, 20 /*pageSize*/)
);
var transactions2 = await request2.execute();
```
