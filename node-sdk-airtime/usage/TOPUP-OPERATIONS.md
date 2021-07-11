# Topup Operations

In order to send a successful topup. There are a few prerequisites to the system. We need to know the phone number to
send the topup to, the operator id of the phone number, the country of the operator, the amount for the topup.

Reloadly also provides the ability to top up using local values. By default, the values will be available in your
account’s currency, but you can maintain one wallet and top up in different local values from many countries. **Please
note that this is only possible when local values are supported in Reloadly system**. If you want to send exact amounts
in Local/Operator's/Receiver's currency, then simply set the `.UseLocalAmount(true)` on the request object. This
will tell the platform that you are sending the amount in local currency and not in your dashboard's currency or
international pipe. Not all operator's support a local amount yet so make sure to check the operator's details to know
whether it supports local or not.

Reloadly also supports Nauta Cuba for top-ups. However the process is a bit different from sending phone topups. Instead
of using `PhoneTopupRequest` use `EmailTopupRequest`, substitute `RecipientPhone(phone)` with
`RecipientEmail(email)` and that's it. The rest of the process is exactly the same as sending any other topup.

Note, There are two types of email domains that are allowed for Nauta Cuba Top-up : `@nauta.com.cu`
and `@nauta.co.cu`.

```typescript
let api = new AirtimeApi(ApiCredentials.ClientId, ApiCredentials.ClientSecret, null, Environment.SANDBOX);
let operation = await api.topups();

let req0 = operation.send(new PhoneTopupRequest(
    /*The amount is in your Reloadly account currency*/ 15,
    operatorId,
    new Phone(/*Sender Phone*/ "+17862541236", "US"),
    /*Use local amount*/ false,  
    new Phone(/*Recipient Phone*/ "+50936377111", "HT"),
    /*Optional, for your internal reference*/ "<reference>"));

let transaction0 = await req0.execute();

let req1 = operation.send(new PhoneTopupRequest(
    /*The amount is two thousand Nigerian Naira*/ 2000,
    operatorId,
    new Phone(/*Sender Phone*/ "+17862541236", "US"),
    /*Use local amount*/ true, 
    new Phone(/*Recipient Phone*/ "+2349045150334", "NG")));

let transaction1 = await req1.execute();

let req2 = operation.send(new EmailTopupRequest(
    /*The amount is in your Reloadly account currency*/ 15m,
    operatorId,
    /*Recipient email*/ "example@nauta.com.cu",
    /*Sender phone*/ new Phone(/*Sender Phone*/ "+17862541236", "US")
};

let transaction2 = await req2.execute();
```
