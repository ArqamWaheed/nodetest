import { Router } from "express";
const testRouter = Router();

testRouter.get("/", (req, res) => {
    res.send("<h2>Testing</h2>");
})
testRouter.get("/:authorId", (req, res) => {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
});

export {testRouter};
