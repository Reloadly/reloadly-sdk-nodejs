# Operators Operations

Apart from supporting Over 140 Countries, Reloadly also supports 600+ Operators. The SDK operators options allows for
the retrieval complete detail of each operator, including what type of operator this is, what topup types it support and
even details on the commissions for the operator.

Within the reloadly platform, There exists two types of Operators. One that support Range values (Anything between the
minimum and maximum range). While the other that support Fixed values (Only a certain values are supported). Reloadly
will return you the type of the operator within the response in denominationType variable. If this is set to ```RANGE```
you will receive the minimum and maximum values in the minAmount and maxAmount variables for that operator. However, if
the denomination type is ```FIXED``` you will not get these values but rather get an array of all values supported in
the fixedAmounts variable. **Now a point to remember here is that these values are already converted into your account's
currency**.

```typescript
let api = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, Environment.SANDBOX);
let operation = await api.discounts();

var request0 = operation.autoDetect("+50936377111", "HT");
var result0 = await request0.execute();

var request1 = operation.getById(123);
var result1 = await request1.execute();

var request2 = operation.list(new OperatorFilter()
    .includeBundles(true) //Whether to include bundle operators in the returned resource list. See field "bundle" on the [API Docs](https://developers.reloadly.com/api.html#list-all-operators).
    .includeData(true) //Whether to include data (internet) operators in the returned resource list. See field "data" on the [API Docs](https://developers.reloadly.com/api.html#list-all-operators).
    .includeFixedDenominationType(true) //Whether to include operators with denomination type FIXED in the returned resource list. See field "denominationType" on the [API Docs](https://developers.reloadly.com/api.html#list-all-operators).
    .includePin(true) //Whether to include PIN based operators in the returned resource list. See field "pin" on the [API Docs](https://developers.reloadly.com/api.html#list-all-operators).
    .includeRangeDenominationType(true) //Whether to include operators with denomination type RANGE in the returned resource list. See field "denominationType" on the [API Docs](https://developers.reloadly.com/api.html#list-all-operators).
    .includeSuggestedAmounts(true) //Whether to populate the suggestedAmounts field on the operators in the returned resource list, this only applies to operators where denominationType is RANGE. See field "suggestedAmounts" on the [API Docs](https://developers.reloadly.com/api.html#list-all-operators).
    .includeSuggestedAmountsMap(true)); //Whether to populate the suggestedAmountsMap field on the operators in the returned resource list. This field represents a map of international amounts to local amounts for a given operator where applicable. See field "suggestedAmountsMap" on the [API Docs](https://developers.reloadly.com/api.html#list-all-operators).
var result2 = await request2.execute();

var request3 = operation.listByCountryCode("TR");
var operator3 = await request3.execute();

// In order to estimate what amount will be received on the receiver end. For example, If your account is in US Dollar and you are trying to send a transaction to a nigerian operator, you can quickly calculate what amount you will receive in Nigerian Naira.
var request4 = operation.calculateFxRate(123 /*operator id*/, 12.3m /*amount*/);
var fxRate = await request4.execute();
```
