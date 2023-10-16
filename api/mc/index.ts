import { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    try {
        if (req.url) {
            const path = req.url;
            if (path.endsWith("index.html")) {
                let result = path.slice(0, path.length - "index.html".length);
                res.writeHead(302, { Location: `https://github.com/2000Arion/api/tree/main${result}` });
                res.end();
            } else {
                let result = req.url;
                res.writeHead(302, { Location: `https://github.com/2000Arion/api/tree/main${result}` });
                res.end();
            }
        } else {
            res.status(400).send("Bad Request: req.url is not defined");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send(`${error}`);
    }
}
