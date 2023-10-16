export function RedirectToGithub(): string {
    const path = window.location.pathname;
    if (path.endsWith("index.html")) {
        let result = path.slice(0, path.length - "index.html".length);
        return window.location.href = `https://github.com/2000Arion/api/tree/main${result}`;
    } else {
        let result = window.location.pathname;
        return window.location.href = `https://github.com/2000Arion/api/tree/main${result}`;
    }
}
