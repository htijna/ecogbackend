const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://anjithkj:njith038@cluster0.8uatvth.mongodb.net/organic?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.error("DB connection error:", err));