const handleError = (req, res, error) => {
    res.error.detail = error.detail;
    return res.error.send(error.statusCode, error.message);
};


module.exports = {
    handleError
};
