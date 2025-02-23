import type { VercelRequest, VercelResponse } from "@vercel/node";
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { lb = false } = req.query;

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/javascript");

  if (lb === "true") {
    const dataPackagePath = path.join(__dirname, '../../../lib/gsc-calc/pricing_package.ts');
    let dataPackageContent = fs.readFileSync(dataPackagePath, 'utf-8');

    let currentProperty = "";
    dataPackageContent = dataPackageContent.split('\n').map(line => {
      const propertyMatch = line.match(/^\s*([a-z]{2})\s*:\s*{/);
      if (propertyMatch) {
        currentProperty = propertyMatch[1];
      }
      return line.replace(/\$\{id\((.*?)\)\}/g, (_, idValue) => {
        return crypto.createHash('md5').update(currentProperty + '/' + idValue).digest('hex');
      });
    }).join('\n');

    res.send(dataPackageContent);
  } else {
    const dataPackagePath = path.join(__dirname, '../../../lib/gsc-calc/pricing_package_legacy.ts'); 
    let dataPackageContent = fs.readFileSync(dataPackagePath, 'utf-8');

    dataPackageContent = dataPackageContent.replace(/\$\{id\((.*?)\)\}/g, (_, idValue) => {
      return crypto.createHash('md5').update(idValue).digest('hex');
    });

    res.send(dataPackageContent);
  }
}
