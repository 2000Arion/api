import type { VercelRequest, VercelResponse } from "@vercel/node";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { lb = false } = req.query;

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/javascript");

    if (lb === "true") {
      const dataPackagePath = path.join(process.cwd(), "/data/gsc-calc/pricing_package.js");
      console.log("Data package path:", dataPackagePath);
      let dataPackageContent = await fs.readFile(dataPackagePath, "utf-8");

      let currentProperty = "";
      dataPackageContent = dataPackageContent
        .split("\n")
        .map((line) => {
          const propertyMatch = line.match(/^\s*([a-z]{2})\s*:\s*{/);
          if (propertyMatch) {
            currentProperty = propertyMatch[1];
          }
          return line.replace(/\$\{id\((.*?)\)\}/g, (_, idValue) => {
            return crypto
              .createHash("md5")
              .update(currentProperty + "/" + idValue)
              .digest("hex");
          });
        })
        .join("\n");

      res.send(dataPackageContent);
    } else {
      const legacyDataPackagePath = path.join(process.cwd(), "/data/gsc-calc/pricing_package_legacy.js");
      console.log("Legacy data package path:", legacyDataPackagePath);
      let dataPackageContent = await fs.readFile(legacyDataPackagePath, "utf-8");

      dataPackageContent = dataPackageContent.replace(
        /\$\{id\((.*?)\)\}/g,
        (_, idValue) => {
          return crypto.createHash("md5").update(idValue).digest("hex");
        }
      );

      res.send(dataPackageContent);
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
}
