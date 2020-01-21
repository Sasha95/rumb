const express = require("express");
const bodyParser = require("body-parser");
const {postSession} = require("./stripe");

const app = express();
const router = express.Router();
const port = process.env.PORT || 7000;

router.post("/stripe/charge", async (req, res) => {
  const rez = await postSession(req.body);
  res.send(JSON.stringify(rez));
});
router.all("*", (_, res) =>
  res.json({ message: "please make a POST request to /stripe/charge" })
);

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());
app.use("/api", router);

app.listen(port, () => console.log(`server running on port ${port}`));
