import { connectToDatabase } from "./mongodb";

export default async function handler(req, res) {
    if (req.method !== "GET") return res.status(405).json({ error: "Method Not Allowed" });

    const db = await connectToDatabase();
    const collection = db.collection("visitors");

    const visitor = await collection.findOne({});
    res.status(200).json({ count: visitor ? visitor.count : 0 });
}
    