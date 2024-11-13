const PORT = 8000;

const express = require("express");
const cors = require("cors");

const app = express(); // express 객체를 app으로 저장해 사용
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World Tasks App Node Test Root"); // .send 브라우저에 찍힘
});

app.use(require("./routes/getRoutes"));
app.use(require("./routes/deleteRoutes"));
app.use(require("./routes/postRoutes"));
app.use(require("./routes/updateRoutes"));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
