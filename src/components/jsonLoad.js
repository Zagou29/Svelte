
export const fetchJSON = async (/** @type {RequestInfo | URL} */ url) => {
  const r = await fetch(url);
  if (!r.ok) throw new Error(" d'URL", { cause: r });
  return r.json();
};
