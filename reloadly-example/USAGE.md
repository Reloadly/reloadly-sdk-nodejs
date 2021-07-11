# Example Application

An example Node.JS Express web application is provided to demonstrate the full API usage in a real-life scenario.

You may examine the application or just copy & paste code from it into your application.

The application exposes several HTTP GET endpoints, each providing an example to the usage of a different Airtime API operation such as accounts or promotions. The list of these endpoints are:

```
/auth
/auth/refresh_token // An example of how to handle expired refresh tokens if setting access token manually
/balance
/operator_listbycountrycode
/country_list'
/discount_byoperatorid'
/promotion_byid'
/topup
/report_transaction_list
```
