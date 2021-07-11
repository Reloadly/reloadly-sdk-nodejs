# Countries Operations

Reloadly supports 140+ Countries around the globe. You can get a list of all or specific supported countries. The
response will give you a list with complete details, iso, flag as well as calling codes for each country. You can also
further filter the countries by getting details for a specific country by its ISO-Alpha2 code.
See https://www.nationsonline.org/oneworld/country_code_list.htm for more details regarding country ISO codes.

```typescript
let api = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, Environment.SANDBOX);
let operation = await api.countries();

// Get Countries
let countriesReq = operation.list();
let countries = await countriesReq.execute();

// Get Country by ISO Code
let countryReq = operation.getByCode('GB');
let country = await countryReq.execute();
```
