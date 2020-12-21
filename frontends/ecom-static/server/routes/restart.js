var express = require('express');
var router = express.Router();
var { exec } = require('child_process');
router.get('/:bash', (req, res) => {
    const { bash } = req.params;
    const cmd = `bash ./${bash}.sh`;
    console.log(cmd);
    exec(cmd, (error, stdout, stderr) => {
        res.send(`error: ${error}. stdout: ${stdout}. stderr: ${stderr}.`);
    });
})
