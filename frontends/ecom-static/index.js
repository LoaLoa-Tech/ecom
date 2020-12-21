const port = 3910;
const { exec } = require('child_process');
const express = require('express')
const app = express()
app.get('/:bash', (req, res) => {
  const { bash } = req.params;
  const cmd = `bash ./${bash}.sh`;
  console.log(cmd);
  exec(cmd, (error, stdout, stderr) => {
    res.send(`error: ${error}. stdout: ${stdout}. stderr: ${stderr}.`);
  });
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
