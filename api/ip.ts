import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const forwarded = req.headers["cf-connecting-ip"] || req.headers["x-forwarded-for"];
    const ip = Array.isArray(forwarded)
      ? forwarded[0]
      : forwarded?.split(",")[0] ?? req.socket.remoteAddress;

    res.status(200).send(ip + "\n");
    res.end();
  } catch (error) {
    console.error("Error retrieving IP adress:", error);
    res.status(500).send("Error retrieving IP adress");
  }  
}
