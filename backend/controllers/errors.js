
exports.getError = (req, res, next) => {
    res.status('404').json({message: 'Page not Found'});
    console.log('Page not found');
}