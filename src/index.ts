import app from "./app";
import createCharacter from "./endpoints/createCharacter";
import deleteCharacter from "./endpoints/deleteCharacter";
import getAllCharacters from "./endpoints/getAllCharacter";

app.get("/character", getAllCharacters)
app.put("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)