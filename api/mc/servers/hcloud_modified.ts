import type { VercelRequest, VercelResponse } from '@vercel/node';
import { v4 as uuid } from 'uuid';

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(`
    // Server data
    const serverData = {
        standard: [
            { id: '${uuid()}', vCPU: 2, RAM: 3, SSD: 30, hourly: 0.0070, monthly: 4.51 },
            { id: '${uuid()}', vCPU: 4, RAM: 7, SSD: 70, hourly: 0.0120, monthly: 7.72 },
            { id: '${uuid()}', vCPU: 8, RAM: 15, SSD: 150, hourly: 0.0240, monthly: 14.86 },
            { id: '${uuid()}', vCPU: 16, RAM: 30, SSD: 310, hourly: 0.0470, monthly: 29.14 },
        ],
        premium: [
            { id: '${uuid()}', vCPU: 2, RAM: 3, SSD: 30, hourly: 0.0104, monthly: 6.37 },
            { id: '${uuid()}', vCPU: 3, RAM: 3, SSD: 70, hourly: 0.0143, monthly: 8.98 },
            { id: '${uuid()}', vCPU: 2, RAM: 7, SSD: 70, hourly: 0.0182, monthly: 11.54 },
            { id: '${uuid()}', vCPU: 4, RAM: 7, SSD: 150, hourly: 0.0261, monthly: 16.18 },
            { id: '${uuid()}', vCPU: 4, RAM: 15, SSD: 150, hourly: 0.0340, monthly: 20.71 },
            { id: '${uuid()}', vCPU: 8, RAM: 15, SSD: 230, hourly: 0.0496, monthly: 29.99 },
            { id: '${uuid()}', vCPU: 8, RAM: 30, SSD: 230, hourly: 0.0653, monthly: 39.15 },
            { id: '${uuid()}', vCPU: 16, RAM: 30, SSD: 350, hourly: 0.1047, monthly: 65.33 },
        ],
        dedicated: [
            { id: '${uuid()}', vCPU: 2, RAM: 7, SSD: 70, hourly: 0.0238, monthly: 14.86 },
            { id: '${uuid()}', vCPU: 4, RAM: 15, SSD: 150, hourly: 0.0466, monthly: 29.14 },
            { id: '${uuid()}', vCPU: 8, RAM: 30, SSD: 230, hourly: 0.0925, monthly: 57.70 },
            { id: '${uuid()}', vCPU: 16, RAM: 62, SSD: 350, hourly: 0.1840, monthly: 114.82 },
            { id: '${uuid()}', vCPU: 32, RAM: 125, SSD: 590, hourly: 0.3671, monthly: 229.06 },
            { id: '${uuid()}', vCPU: 48, RAM: 185, SSD: 950, hourly: 0.5501, monthly: 343.30 },
        ],
    };
    `)
}
