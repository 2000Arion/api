import type { VercelRequest, VercelResponse } from "@vercel/node";
import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { location_based = false } = req.query;

    res.setHeader("Access-Control-Allow-Origin", "*");

    if (location_based === "true") {
      res.setHeader("Content-Type", "application/json");

      const dataPackagePath = path.join(__dirname, "pricing_data.json");
      console.log("---------\n[1 DEBUG] --- calc_data.ts path:", __filename);
      console.log("[2 DEBUG] --- Data package path:", dataPackagePath);
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
      res.end();
    } else {
      res.setHeader("Content-Type", "application/javascript");

      const legacyDataPackagePath = path.join(
        __dirname,
        "pricing_data_legacy.json"
      );
      console.log("---------\n[1 DEBUG] --- calc_data.ts path:", __filename);
      console.log("[2 DEBUG] --- Data package path:", legacyDataPackagePath);
      let dataPackageContent = await fs.readFile(
        legacyDataPackagePath,
        "utf-8"
      );

      dataPackageContent = dataPackageContent.replace(
        /\$\{id\((.*?)\)\}/g,
        (_, idValue) => {
          return crypto.createHash("md5").update(idValue).digest("hex");
        }
      );

      let jsCompiledDataPackage = dataPackageContent.replace(/"/g, "");

      res.send(
        `// [WARNING: LEGACY VERSION] Server data\n// For new version, add ?location_based=true to the URL\n\nconst serverData = ${jsCompiledDataPackage}`
      );
      res.end();
    }
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).send("Internal Server Error");
  }
}
