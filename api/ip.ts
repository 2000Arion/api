import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
    const { v4, v6 } = req.query;

    const xForwardedFor = req.headers['x-forwarded-for'] as string;
    const socketRemoteAddress = req.socket.remoteAddress;

    const ips = (xForwardedFor ? xForwardedFor.split(',') : []).concat(socketRemoteAddress || []);

    let ipv4: string | null = null;
    let ipv6: string | null = null;

    ips.forEach(ip => {
        ip = ip.trim();
        if (ipv4 === null && ip.match(/(\d{1,3}\.){3}\d{1,3}/)) {
            ipv4 = ip;
        } else if (ipv6 === null && ip.includes(':')) {
            ipv6 = ip;
        }
    });

    if (v6) {
        if (ipv6) {
            res.status(200).send(ipv6);
        } else {
            res.status(404).send('IPv6 address not found');
        }
    } else {
        if (ipv4) {
            res.status(200).send(ipv4);
        } else {
            res.status(404).send('IPv4 address not found');
        }
    }

    res.end();
}
