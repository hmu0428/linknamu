import getMongoClientPromise from "@/lib/mongodb";

const DB_NAME = "linknamu";
const COLLECTION_NAME = "link_clicks";

interface LinkClickDoc {
  linkId: string;
  count: number;
}

export async function incrementLinkClick(linkId: string): Promise<number> {
  const client = await getMongoClientPromise();
  const collection = client
    .db(DB_NAME)
    .collection<LinkClickDoc>(COLLECTION_NAME);

  const result = await collection.findOneAndUpdate(
    { linkId },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" }
  );

  return result?.count ?? 1;
}

export async function getLinkClicks(): Promise<Record<string, number>> {
  const client = await getMongoClientPromise();
  const collection = client
    .db(DB_NAME)
    .collection<LinkClickDoc>(COLLECTION_NAME);

  const docs = await collection.find().toArray();
  return Object.fromEntries(docs.map((doc) => [doc.linkId, doc.count]));
}
