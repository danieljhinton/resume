/**
 * Resolves a root-relative asset path (e.g. '/assets/photos/1.jpg') against
 * Vite's configured base path, so images work both in dev (base '/') and
 * once deployed under a subpath on GitHub Pages (base '/resume/').
 */
export function assetUrl(path) {
  if (!path) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, '');
}
