import type { VercelRequest, VercelResponse } from "@vercel/node";
import { v4 as uuid } from "uuid";

export default function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send(`
    // Server data
    const serverData = {
    standard: [
        { id: '${uuid()}', vCPU: 2, RAM: 3, SSD: 30, hourly: 0.0070, monthly: 4.51, fees: 0.08 },
        { id: '${uuid()}', vCPU: 4, RAM: 7, SSD: 70, hourly: 0.0120, monthly: 7.72, fees: 0.10 },
        { id: '${uuid()}', vCPU: 8, RAM: 15, SSD: 150, hourly: 0.0240, monthly: 14.86, fees: 0.12 },
        { id: '${uuid()}', vCPU: 16, RAM: 30, SSD: 310, hourly: 0.0470, monthly: 29.14, fees: 0.13 },
    ],
    premium: [
        { id: '${uuid()}', vCPU: 2, RAM: 3, SSD: 30, hourly: 0.0071, monthly: 4.51, fees: 0.13 },
        { id: '${uuid()}', vCPU: 4, RAM: 7, SSD: 70, hourly: 0.0134, monthly: 8.09, fees: 0.17 },
        { id: '${uuid()}', vCPU: 8, RAM: 15, SSD: 150, hourly: 0.0325, monthly: 19.52, fees: 0.17 },
        { id: '${uuid()}', vCPU: 16, RAM: 30, SSD: 310, hourly: 0.0643, monthly: 38.56, fees: 0.21 },
    ],
    dedicated: [
        { id: '${uuid()}', vCPU: 2, RAM: 7, SSD: 70, hourly: 0.0238, monthly: 14.86, fees: 0.12 },
        { id: '${uuid()}', vCPU: 4, RAM: 15, SSD: 150, hourly: 0.0466, monthly: 29.14, fees: 0.21 },
        { id: '${uuid()}', vCPU: 8, RAM: 30, SSD: 230, hourly: 0.0925, monthly: 57.70, fees: 0.24 },
        { id: '${uuid()}', vCPU: 16, RAM: 62, SSD: 350, hourly: 0.1840, monthly: 114.82, fees: 0.26 },
        { id: '${uuid()}', vCPU: 32, RAM: 126, SSD: 590, hourly: 0.3671, monthly: 229.06, fees: 0.29 },
        { id: '${uuid()}', vCPU: 48, RAM: 186, SSD: 950, hourly: 0.5501, monthly: 343.30, fees: 0.32 },
    ],
};
    `);
}
