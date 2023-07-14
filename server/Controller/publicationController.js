const axios = require("axios");
const catchAsyncError = require("../Utils/catchAsyncError");

exports.getPublication = catchAsyncError(async (req, res) => {
  const response = await axios.get(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ansari028amaan"
  );
  const publications = await response.data;
  res.json(publications);
});
