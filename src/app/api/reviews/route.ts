// pages/api/reviews.js
import clientPromise from "@/lib/db";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("yourDatabaseName"); // Change 'yourDatabaseName' to your actual database name

    const reviews = await db.collection("reviews").find({}).toArray();

    res.json(reviews);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
