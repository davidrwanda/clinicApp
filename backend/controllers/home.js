exports.getIndex = (req, res, next) => {
    res.status(200).json({
        result: 'Home page'
    });
    
}