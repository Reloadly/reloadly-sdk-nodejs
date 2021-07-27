# @reloadly/reloadly.airtime

The implementation is based on the [Airtime API Docs](https://developers.reloadly.com/#airtime-api).

## Usage

```typescript
const ReloadlyAirtime = require("@reloadly/reloadly.airtime");
const ReloadlyCore = require("@reloadly/reloadly.core");

var api = new ReloadlyAirtime.AirtimeApi("<client id>", "<client secret>", null, ReloadlyCore.Environment.SANDBOX);
var operation = await api.accounts();
var request = operation.getBalance();
var balanceInfo = await request.execute();
```

You may find more information on the repository homepage:
https://github.com/Reloadly/reloadly-sdk-nodejs
