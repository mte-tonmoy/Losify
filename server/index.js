const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.x93in5k.mongodb.net/?retryWrites=true&w=majority`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  
  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
       client.connect();
  
      const itemCollections = client.db("itemCollections").collection("itemData");
      const requestcollection = client.db("itemCollections").collection("requestData");
      
      app.post("/additem", async (req, res) => {
        const addToys = req.body;
      //   console.log(addToys);
  
        const result = await itemCollections.insertOne(addToys);
        res.send(result);
      });

      app.get("/allitem", async (req, res) => {
        const cursor = itemCollections.find();
        const result = await cursor.toArray();
        res.send(result);
      });
     

      // request collection

      app.post("/requestData", async (req, res) => {
        const addToys = req.body;
        const result = await requestcollection.insertOne(addToys);
        res.send(result);
      });

      app.get("/requestData", async (req, res) => {
        const cursor = requestcollection.find();
        const result = await cursor.toArray();
        res.send(result);
      });
     
  
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
    } finally {
      // Ensures that the client will close when you finish/error
      // await client.close();
    }
  }
  run().catch(console.dir);
  
  app.get("/", (req, res) => {
    res.send("server is running");
  });
  
  app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
  });