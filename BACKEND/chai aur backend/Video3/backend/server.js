import express from "express";
const app = express();

// middleware: .use
// app.use(express.static("dist")); // bad practice- dist come when you run build in frotend and you push it in backend with middleware which make you do that again and again when you change something in the frotned

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

// get a list of 5 jokes

// app.get("/jokes", (req, res) => {

// standardization and fixing for cors
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why do programmers prefer dark mode?",
      content: "Because light attracts bugs!",
    },
    {
      id: 2,
      title: "Why do Java programmers wear glasses?",
      content: "Because they don't C#.",
    },
    {
      id: 3,
      title: "How many programmers does it take to change a lightbulb?",
      content: "None, that's a hardware problem.",
    },
    {
      id: 4,
      title: "Why did the developer go broke?",
      content: "Because they used up all their cache.",
    },
    {
      id: 5,
      title: "What is a programmer's favorite hangout place?",
      content: "Foo Bar.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
