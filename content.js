(() => {
  const metas = Array.from(document.querySelectorAll("meta"));
  const results = metas.map(meta => {
    return {
      name: meta.getAttribute("name") || meta.getAttribute("property") || "(no name)",
      content: meta.getAttribute("content") || ""
    };
  });
  return results;
})();
