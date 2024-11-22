import express from "express";
import logger from "morgan";
import cors from "cors";

import booksRouter from "./routes/books";
import membersRouter from "./routes/members";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use("/books", booksRouter);
app.use("/members", membersRouter);

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
