"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const express = require("express");
const path = require("path");
const index_1 = require("./routes/index");
const auth_1 = require("./routes/auth");
const auth_refresh_token_1 = require("./routes/auth_refresh_token");
const balance_1 = require("./routes/balance");
const operator_listbycountrycode_1 = require("./routes/operator_listbycountrycode");
const discount_byoperatorid_1 = require("./routes/discount_byoperatorid");
const country_list_1 = require("./routes/country_list");
const promotion_byid_1 = require("./routes/promotion_byid");
const topup_1 = require("./routes/topup");
const report_transaction_list_1 = require("./routes/report_transaction_list");
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index_1.default);
app.use('/auth', auth_1.default);
app.use('/auth/refresh_token', auth_refresh_token_1.default);
app.use('/balance', balance_1.default);
app.use('/operator_listbycountrycode', operator_listbycountrycode_1.default);
app.use('/country_list', country_list_1.default);
app.use('/discount_byoperatorid', discount_byoperatorid_1.default);
app.use('/promotion_byid', promotion_byid_1.default);
app.use('/topup', topup_1.default);
app.use('/report_transaction_list', report_transaction_list_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});
//# sourceMappingURL=app.js.map