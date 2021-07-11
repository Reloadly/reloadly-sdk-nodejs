import debug = require('debug');
import express = require('express');
import path = require('path');

import routes from './routes/index';
import auth from './routes/auth';
import auth_refresh_token from './routes/auth_refresh_token';
import balance from './routes/balance';
import operator_listbycountrycode from './routes/operator_listbycountrycode';
import discount_byoperatorid from './routes/discount_byoperatorid';
import country_list from './routes/country_list';
import promotion_byid from './routes/promotion_byid';
import topup from './routes/topup';
import report_transaction_list from './routes/report_transaction_list';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/auth', auth);
app.use('/auth/refresh_token', auth_refresh_token);
app.use('/balance', balance);
app.use('/operator_listbycountrycode', operator_listbycountrycode);
app.use('/country_list', country_list);
app.use('/discount_byoperatorid', discount_byoperatorid);
app.use('/promotion_byid', promotion_byid);
app.use('/topup', topup);
app.use('/report_transaction_list', report_transaction_list);

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
    app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
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
