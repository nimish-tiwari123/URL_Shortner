const mongoose = require("mongoose");

const handleConnectMongoDB = async (url) => {
  return mongoose.connect(url);
};

module.exports = { handleConnectMongoDB };
