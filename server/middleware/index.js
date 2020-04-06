const requiresLogin = (req, res, next) => {
    if (!req.session.account) {
        return res.redirect('/');
    }
    return next();
}

const requiresLogout = (req, res, next) => {
    if (req.session.account) {
        return res.redirect('/maker');
    }
    return next();
}

const requiresSecure = (req, res, next) => {
    next();
}

module.exports.requiresLogin = requiresLogin;
module.exports.requiresLogout = requiresLogout;

if (process.env.NODE_ENV === 'production') {
    module.exports.requiresSecure = requiresSecure;
} else {
    module.exports.requiresSecure = bypassSecure;
}
