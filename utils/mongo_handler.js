import mongoose from "mongoose";


export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
    console.log("Connected To DB");
  } catch (e) {
    console.error(`Could not connect to DB: ${e}`);
  }
  
  const db = mongoose.connection;

  db.on("error", (e) => console.error(`ghghghge`));
  db.once("open", () => console.log("Connected to Database"));
};
