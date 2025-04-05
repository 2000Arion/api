import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const response = await fetch("https://api.arion2000.xyz/cdn-cgi/trace");
    const text = await response.text();

    const ipLine = text.split("\n").find((line) => line.startsWith("ip="))
    const ip = ipLine ? ipLine.split("=")[1] : "Unknown"

    res.status(200).send(ip);
    res.end();
  } catch (error) {
    console.error("Error retrieving IP adress:", error);
    res.status(500).send("Error retrieving IP adress");
  }  
}
