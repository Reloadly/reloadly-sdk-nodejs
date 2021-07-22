# Airtime API

The implementation is based on the [Airtime API Docs](https://developers.reloadly.com/#airtime-api).

## Usage

Create an `AirtimeAPI` instance by providing the Application details (client id & secret) from
the [dashboard](https://www.reloadly.com/developers/api-settings).

Some key things to keep in mind regarding the Airtime API :

* The API has 2 environments, SANDBOX (for development & testing) and LIVE.
* If neither environment is specified, the SDK defaults to SANDBOX
* Each environment has a set of credentials (client id & secret) that are different from the other.<br />
    * SANBOX credentials can only be used for SANDBOX environment
    * LIVE credentials can only be used for LIVE environment
* If not environment is specified the SDK defaults to SANDBOX
* You MUST supply either the credentials, or an access token in order to call the API
  <br /><br />

As stated above, requests to the Airtime API require authentication/authorization, there are several options :

### Option 1

Set the client id & client secret; this is probably the most straight-forward or simplest way. An access token will be
acquired automatically before the API call is made.
Import Airtime API and create an `AirtimeApi` instance:

```typescript
import {
    AirtimeApi
} from "../../node-sdk-airtime/src/Airtime";

import {
    Environment
} from "../../node-sdk-core/src/Core";

var api = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, Environment.SANDBOX);
```

Create an operation class and a request, and execute the request:

```typescript
var operation = await api.accounts();
var request = operation.getBalance();
var balanceInfo = await request.execute();
```

Use the result:

```typescript
res.send(balanceInfo);
```

### Option 2

You may alternatively acquire an access token from the
[AuthenticationAPI](https://github.com/reloadly/reloadly-sdk-nodejs/blob/master/node-sdk-authentication/USAGE.md)
and then set it.

```typescript
// Retrieve the access token from the Authentication API
var authApi = new AuthenticationApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, ServiceURLs.AIRTIME_SANDBOX);
var operation = authApi.clientCredentials();
var accessTokenRequest = operation.getAccessToken();
var accessTokenResponse = await accessTokenRequest.execute();
var accessToken = accessTokenResponse.access_token;

// Use the token to create the Airtime API
var airtimeApi = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, accessToken, Environment.SANDBOX);
var countriesOperation = await airtimeApi.countries();
var countriesRequest = countriesOperation.list();
var countries = await countriesRequest.execute();
```

**Note : Access tokens obtain for Reloadly APIs have a finite
lifetime. [See the API docs](https://developers.reloadly.com/#authentication_auth_anc)**

Using the example above has some benefits and drawbacks:

#### Pro

* API requests become efficient & performant.
* Setting the access token skips the automatic token acquisition API calls that would have otherwise been made before
  each Airtime API service calls.

#### Cons

* However, because access tokens have a finite lifetime, you now have to manage or handle the expiration of the access
  token in your application code.
* In the sample above, the AirtimeAPI will continue using the same access token until it expires. Therefore, the
  responsibility false on you to handle token renewal when the token expires.

### Sample token expiration handling

```typescript
// Retrieve the access token from the Authentication API
var authApi = new AuthenticationApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, ServiceURLs.AIRTIME_SANDBOX);
var operation = authApi.clientCredentials();
var accessTokenRequest = operation.getAccessToken();
var accessTokenResponse = await accessTokenRequest.execute();
var accessToken = accessTokenResponse.access_token;

// Use the token to create the Airtime API
var airtimeApi = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, accessToken, Environment.SANDBOX);
var countriesOperation = await airtimeApi.countries();
var countriesRequest = countriesOperation.list();

var countries;

try {
    countries = await countriesRequest.execute();
} catch (ex) {
    if (ex.errorCode.toUpperCase() === 'TOKEN_EXPIRED') {
        airtimeApi.refreshAccessToken(countriesRequest);
        countries = await countriesRequest.execute(); //Re-execute the request
    } else {
        //Handle other errors....
    }
}
```

### Logging request & response

To enable API request/response logging

```typescript
var airtimeApi = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, accessToken, Environment.SANDBOX,
    // enable logging
    true,
    // Prevent the access token from being displayed in the logs
    [HttpHeader.AUTHORIZATION]
    );
```

## Customizing The API Client Instance

### Configuring Timeouts

Timeouts can be configured globally:

```typescript
var api = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, Environment.SANDBOX)
    .timeout(60000 /*timeout in milliseconds*/);
```

### Proxy Configuration

```typescript
var proxyPort = 8085; //Your proxy port
var proxyHost = "you-proxy-host-name.com";

// Optional
var proxyProtocol = "https";

// Optional auth if your proxy requires authentication
var username = "your-proxy-authentication-username";
var password = "your-proxy-authentication-password";
var proxyAuth = new ProxyOptionsAuth(username, password); 

var proxyOptions = new ProxyOptions(proxyHost, proxyPort, proxyProtocol, proxyAuth);

// Optionally without protocol and authentication
// var proxyOptions = new ProxyOptions(proxyHost, proxyPort);

var api = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, Environment.SANDBOX)
    .proxy(proxyOptions);
```

### Request latency telemetry

By default, the library sends request latency telemetry to Reloadly. These numbers help Reloadly improve the overall
latency of its API for all users.

You can disable this behavior if you prefer:

```typescript
var airtimeApi = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, accessToken, Environment.SANDBOX,
    null, null, false /* enable telemetry* /);
```
