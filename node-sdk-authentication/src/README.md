# @reloadly/reloadly.authentication

The implementation is based on the [Airtime API Docs](https://developers.reloadly.com/#airtime-api).

## Usage

```typescript
import ReloadlyAuthentication = require("@reloadly/reloadly.authentication");
import ReloadlyCore = require("@reloadly/reloadly.core");

var api = new ReloadlyAuthentication.AuthenticationApi("<client id>", "<client secret>", ReloadlyCore.ServiceURLs.AIRTIME_SANDBOX);
var operation = api.clientCredentials();
var request = operation.getAccessToken();
var response = await request.execute();
var token = response.access_token;
```

You may find more information on the repository homepage:
https://github.com/Reloadly/reloadly-sdk-nodejs
