exports.getAdminIndex = (req, res, next) => {
    res.json({title: 'admin page'});
    console.log('adminpage');
}