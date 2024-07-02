import { app } from "./app.js";
import { connectDB } from "./data/database.js";

connectDB();

console.log(process.env.PORT);
console.log(process.env.MONGO_URl);

app.listen(process.env.PORT, () => {
  console.log("hello");
});
