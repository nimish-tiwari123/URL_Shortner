const express = require("express");
const {
  handleGenerateShortURL,
  handleAnalytics,
  handleUrlEntry,
} = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenerateShortURL);

router.get("/analytics/:shortId", handleAnalytics);

router.get("/:shortId", handleUrlEntry);

module.exports = router;
