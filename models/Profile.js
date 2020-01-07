const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  books: [
    {
      title: {
        type: String,
        required: true
      },
      summaries: [
        {
          summary: {
            type: String
          }
        }
      ],
      quotes: [
        {
          quote: {
            type: String
          }
        }
      ],
      words: [
        {
          word: {
            type: String
          }
        }
      ]
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
