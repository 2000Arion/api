import type { VercelRequest, VercelResponse } from '@vercel/node';
import { RedirectToGithub } from '../../static/js/githubref';

export default function handler(req: VercelRequest, res: VercelResponse) {
    try {

        res.send("Weiterleitung...");

        res.send(RedirectToGithub);
    } catch (error) {
        console.error(error);
        res.status(500).send(`${error}`);
    }
}
