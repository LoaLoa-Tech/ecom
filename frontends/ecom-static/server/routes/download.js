app.get('/download/:file(*)', function (req, res, next) {
    const { file } = req.params;
    res.download(path.join(__dirname, 'files', file), function (err) {
        if (!err) return; 
        if (err.status !== 404) return next(err); // non-404 error
        // file for download not found
        res.statusCode = 404;
        res.send('Cant find that file, sorry!');
    });
});