var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use(express.static("public"));

//index
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/api/:data?", (req, res) => {
  const reqData = req.params.data;

  if (!reqData) {
    // Return current time if no date is provided
    const currentDate = new Date();
    res.json({
      unix: currentDate.getTime(),
      utc: currentDate.toUTCString()
    });
  } else {

    let date;
  
    if (!isNaN(reqData)) {
      date = new Date(parseInt(reqData));
    } else {
      date = new Date(reqData);
    }
  
    if (isNaN(date.getTime())) {
      res.json({ error: "Invalid Date" });
      return;
    }
  
  
    res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }
});


const port = 3000;
var listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
