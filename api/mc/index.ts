import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as fs from 'fs';
import { RedirectToGithub } from '../../static/js/githubref';

export default function handler(req: VercelRequest, res: VercelResponse) {
    try {
        try {
            const cssContent = fs.readFileSync('../../static/css/styles.css', 'utf-8');
            res.setHeader('Content-Type', 'text/css');
            res.send(cssContent);
        } catch (error) {
            console.log(error);
        }

        res.send("Weiterleitung...");

        res.send(RedirectToGithub);
    } catch (error) {
        console.error(error);
        res.status(500).send(`${error}`);
    }
    res.end();
}
