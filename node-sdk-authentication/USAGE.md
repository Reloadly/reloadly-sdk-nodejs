# Authentication API

The implementation is based on the [Authentication API Docs](https://developers.reloadly.com/#authentication-api).

## Usage

Create an `AuthenticationAPI` instance by providing the Application credentials details (client id & secret) from
the [dashboard](https://www.reloadly.com/developers/api-settings).

```typescript
var api = new AuthenticationApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, ServiceURLs.AIRTIME_SANDBOX);
var operation = api.clientCredentials();
var request = operation.getAccessToken();

var response = await request.execute();
console.log("access token: " + response.access_token);
```

### Logging request & response

To enable API request/response logging

```typescript
var api = new AuthenticationApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, ServiceURLs.AIRTIME_SANDBOX,
    /* enable logging */ true);
```

## Customizing The API Client Instance

### Configuring Timeouts

Timeouts can be configured globally:

```typescript
var api = new AuthenticationApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, ServiceURLs.AIRTIME_SANDBOX)
    .timeout(/* timeout in milliseconds */ 60000);
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

var api = new AuthenticationApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, Environment.SANDBOX)
    .proxy(proxyOptions);
```

### Request latency telemetry

By default, the library sends request latency telemetry to Reloadly. These numbers help Reloadly improve the overall
latency of its API for all users.

You can disable this behavior if you prefer:

```typescript
var airtimeApi = new AuthenticationApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, accessToken, Environment.SANDBOX,
    null, null, false /* enable telemetry* /);
```