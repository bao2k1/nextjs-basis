import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://bao2k1:baopro2001@cluster0.ekxryku.mongodb.net/nextjs?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    client.close();
    res.status(201).json({message:'Meetup inserted'});
  }
}
export default handler;
