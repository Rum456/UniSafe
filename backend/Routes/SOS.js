const express = require("express");
const router = express.Router();

router.post("/send", (req, res) => {
  console.log("🚨 SOS ALERT RECEIVED");

  res.json({
    success: true,
    message: "SOS Alert Sent Successfully",
  });
});

module.exports = router;