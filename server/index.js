const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8080;
const cors = require('cors');
const authRouter = require('./routes/auth-router');




app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/auth/', authRouter);

async function start() {
  try {
    await mongoose.connect('mongodb+srv://test:123456aS@cluster0-sggye.mongodb.net/collection',  
      { useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true
      });
    app.listen(PORT, () => {
      console.log("SERVER STARTED ON PORT", PORT);
    });
  } catch(e) {
    console.log(e);
  }
}

start();
