import type { VercelRequest, VercelResponse } from '@vercel/node';
import * as fs from 'fs';
import { RedirectToGithub } from '../../../static/js/githubref.ts';

export default function handler(req: VercelRequest, res: VercelResponse) {
    try {
        const cssContent = fs.readFileSync('/static/css/index.css', 'utf-8');
        res.setHeader('Content-Type', 'text/css');
        res.send(cssContent);

        res.send("Weiterleitung...");

        res.send(RedirectToGithub());
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
    res.end();
}
