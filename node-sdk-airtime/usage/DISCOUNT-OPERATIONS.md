# Discounts Operations

Discounts or commissions are a way for you to check what percentage discount rate will you get for each operator when
you send a successful top-up. These operations can be used to calculate your profits. All Commissions are paid instantly
when a top-up is processed.

One thing to note on the response is that All Operators provide two types of discounts, One is the international
discount, and the other is the local discount. These are returned as the internationalPercentage and localPercentage
fields in the response object. Depending on your account currency the country you are sending the topup to, you are
eligible for either one of these discounts. For example if you're sending from the US to Canada you will be eligible for
the international discount for the canadian operator. While sending within the same country you will be eligible for the
local discount of the operator **if available**. Note that, local discount may not always be available; in which case
the international discount will be applied.

```typescript
let api = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, Environment.SANDBOX);
let operation = await api.discounts();

// Get by operator ID
let discountRequest = operation.getByOperatorId(BigInt(5));
let discount = await discountRequest.execute();

// List
let discountsRequest = operation.list();
let discounts = await discountsRequest.execute();

// List with filters
let discountsWithFiltersRequest = operation.list(new QueryFilter().withPage(/*page*/ 2, /*count*/ 5));
let discountsWithFilters = await discountsByPageRequest.execute();
```
