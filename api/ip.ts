import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  res.status(200).send(ip);

  res.end();
}
