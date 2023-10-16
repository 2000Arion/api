import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        // URL-Parameter:
        const { project } = req.query;

        // Prüfen, ob URL-Parameter angegeben wurden:
        if (!project) {
            throw new Error(`Du musst ein Projekt über den Parameter project angeben!`);
        }

        // https://api.papermc.io/v2/projects/${project} abfragen und neueste Version speichern:
        const route_projects_project = await fetch(`https://api.papermc.io/v2/projects/${project}`);
        if (!route_projects_project.ok) {
            throw new Error(`${route_projects_project.status} ${route_projects_project.statusText}`);
        }
        const projectData = await route_projects_project.json();

        const latestVersion = projectData.versions[projectData.versions.length - 1];

        // https://api.papermc.io/v2/projects/${project}/versions/${latestVersion} abfragen und neuesten Build speichern:
        const route_projects_project_versions_version = await fetch(`https://api.papermc.io/v2/projects/${project}/versions/${latestVersion}`);
        if (!route_projects_project_versions_version.ok) {
            throw new Error(`${route_projects_project_versions_version.status} ${route_projects_project_versions_version.statusText}`);
        }
        const versionData = await route_projects_project_versions_version.json();

        const latestBuild = versionData.builds[versionData.builds.length - 1];

        // https://api.papermc.io/v2/projects/${project}/versions/${latestVersion}/builds/${latestBuild} abfragen und neuesten Build speichern:
        const route_projects_project_versions_version_builds_build = await fetch(`https://api.papermc.io/v2/projects/${project}/versions/${latestVersion}/builds/${latestBuild}`);
        if (!route_projects_project_versions_version_builds_build.ok) {
            throw new Error(`${route_projects_project_versions_version_builds_build.status} ${route_projects_project_versions_version_builds_build.statusText}`);
        }
        const buildData = await route_projects_project_versions_version_builds_build.json();

        const downloadname = buildData.downloads.application.name;
        const downloadurl = `https://api.papermc.io/v2/projects/${project}/versions/${latestVersion}/builds/${latestBuild}/downloads/${downloadname}`;

        // Zu Downloadurl weiterleiten:
        res.writeHead(302, { Location: downloadurl });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            error: `${error.message}`,
        });
    }
    res.end();
}
