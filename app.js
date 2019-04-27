const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const adminRouter = require('./routes/admin.js');
const staffRouter = require('./routes/staff.js');
const membershipRouter = require('./routes/membership/membership.js');
const membershipsRouter = require('./routes/membership/memberships.js');
const memberRouter = require('./routes/member.js');
const membersRouter = require('./routes/members.js');
const reportRouter = require('./routes/report.js');
const driverToMembershipRouter = require('./routes/driverToMembership.js');
const driverToMembershipsRouter = require('./routes/driverToMemberships.js');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.error = {
        detail: '',
        reqMsg: req.originalUrl,
        send: (status) => {
            res.status(status).type('json').send(JSON.stringify(res.error)).end();
        }
    };
    next();
});

app.use('/api/admin', adminRouter);
app.use('/api/staff', staffRouter);
app.use('/api/membership', membershipRouter);
app.use('/api/memberships', membershipsRouter);
app.use('/api/member', memberRouter);
app.use('/api/members', membersRouter);
app.use('/api/report', reportRouter);
app.use('/api/driverToMembership', driverToMembershipRouter);
app.use('/api/driverToMemberships', driverToMembershipsRouter);

module.exports = app;
