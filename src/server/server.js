import * as express from 'express';
import apiRouter from "./routes";

const app = express();

app.use("/api", apiRouter);
app.use(express.static('public'));

// app.get("*", (req,res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server listening on port: ${port}`));