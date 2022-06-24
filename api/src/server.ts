import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/message", async(_, res) => {
    const messages = ["Hard work pays off", "The only bas workout is the one you didn't do", "You can have results or excuses, not both"];
    const pick = Math.floor(Math.random() * messages.length);
    res.status(200);
    res.send(messages[pick]);
})

app.listen(4000, "0.0.0.0", () => console.log("Listening on 4000"));