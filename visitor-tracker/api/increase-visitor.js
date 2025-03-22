import { connectToDatabase } from "./mongodb";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

    const db = await connectToDatabase();
    const collection = db.collection("visitors");

    let visitor = await collection.findOne({});
    if (!visitor) {
        visitor = { count: 1 };
        await collection.insertOne(visitor);
    } else {
        visitor.count += 1;
        await collection.updateOne({}, { $set: { count: visitor.count } });
    }

    res.status(200).json({ count: visitor.count });
}
