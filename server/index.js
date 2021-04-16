const express = require("express");
const cors = require('cors')
const multer = require('multer');

const upload = multer({ dest: './' })

const app = express();
app.use(cors())

app.post("/file_maker", upload.single('file'), (req, res) => {
  console.log(req.file.path);

  return res.status(200).send("Received");
});

app.listen(4000, () => {
  console.log("Listening on port 4000.");
});
