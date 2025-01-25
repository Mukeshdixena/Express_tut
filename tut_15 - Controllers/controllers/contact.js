exports.getContactusPage = (req, res, next) => {
    res.render('contactus', {
        pageTitle: 'Contaic Us',
        path: '/contactus',
    });
}

exports.postSuccessPage = (req, res, next) => {
    res.render('success', {
        pageTitle: 'Success Message',
        path: '/success',
    });
}