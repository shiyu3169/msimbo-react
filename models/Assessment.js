var mongoose = require("mongoose");

var AssessmentSchema = mongoose.Schema(
  {
    quizTitle: { type: String, required: true },
    quizSynopsis: String,
    questions: [
      {
        question: String,
        questionType: String,
        answers: [String]
      }
    ],
    correctAnswer: String,
    messageForCorrectAnswer: String,
    messageForIncorrectAnswer: String,
    explanation: String,
    dateCreated: { type: Date, default: Date.now }
  },
  { collection: "assessment" }
);

module.exports = mongoose.model("assessment", AssessmentSchema);
