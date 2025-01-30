exports.getContactusPage = (req, res, next) => {
    res.render('contactus', {
        pageTitle: 'Contaic Us',
        path: '/contactus',
        // formsCSS: true,
        // productCSS: true,
        // activeContactus: true
    });
}

exports.postSuccessPage = (req, res, next) => {
    res.render('success', {
        pageTitle: 'Success Message',
        path: '/success',
        // formsCSS: true,
        // productCSS: true,
    });
}