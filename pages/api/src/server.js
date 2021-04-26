const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/quiz/:item/questions", (req, res) => {
  // Get data from JSON and return questions
  fs.readFile("./src/public/rules.json", "utf8", (err, data) => {
    if (err) {
      res.status(402).send(err);
    } else {
      const questions = JSON.parse(data)
        ["items"].filter((item) => item.name == req.params.item)[0]
        ["quiz"].map((item) => item.question);
      res.status(200).json({ questions });
    }
  });
});

app.post("/quiz/:item/answer/:id", (req, res) => {
  // Get data from JSON and validate an answer
  fs.readFile("./src/public/rules.json", "utf8", (err, data) => {
    if (err) {
      res.status(402).send(err);
    } else {
      const answer = JSON.parse(data)["items"].filter(
        (item) => item.name == req.params.item
      )[0]["quiz"][req.params.id].answer;
      const userInput = req.body.answer;
      const isCorrect = answer == userInput ? true : false;
      res.status(200).json({ isCorrect });
    }
  });
});

app.get("/map/:item/questions/:question", (req, res) => {
  fs.readFile("./src/public/rules.json", "utf8", (err, data) => {
    if (err) {
      res.status(402).send(err);
    } else {
      const questions = JSON.parse(data)
        ["items"].filter((item) => item.name == req.params.item)[0]
        ["map"].map((item) => ({
          icon: item.icon,
          question: item.questions.map((item) => item.question)[
            req.params.question
          ],
          answers: item.questions.map((item) => item.answers)[
            req.params.question
          ],
        }));
      res.status(200).json({ questions });
    }
  });
});

app.post(`/map/:item/answer/:icon/:question`, (req, res) => {
  fs.readFile("./src/public/rules.json", "utf8", (err, data) => {
    if (err) {
      res.status(402).send(err);
    } else {
      const userAnswer = req.body.answer;
      const correctAnswer = JSON.parse(data)
        ["items"].filter((item) => item.name)[0]
        ["map"].filter((item) => item.icon == req.params.icon)[0].questions[
        req.params.question
      ].correct;

      const message = JSON.parse(data)
        ["items"].filter((item) => item.name)[0]
        ["map"].filter((item) => item.icon == req.params.icon)[0].questions[
        req.params.question
      ].correctMessage;

      res.status(200).json({
        isCorrect: userAnswer == correctAnswer ? true : false,
        message,
      });
    }
  });
});

app.listen(8000, () => console.log("app running on port 8000"));
