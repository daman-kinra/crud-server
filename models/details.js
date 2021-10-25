const db = require("mongoose");

const details = db.Schema(
  {
    year: {
      type: String,
    },
    make: {
      type: String,
    },
    model: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = db.model("details", details);
