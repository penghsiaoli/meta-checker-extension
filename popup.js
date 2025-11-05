document.addEventListener("DOMContentLoaded", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  const [{ result: metas }] = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      return Array.from(document.querySelectorAll("meta"))
        .map(meta => ({
          name: meta.getAttribute("name") || meta.getAttribute("property"),
          content: meta.getAttribute("content") || ""
        }))
        // 🚫 篩掉沒有 name/property 的 meta
        .filter(m => m.name);
    }
  });

  const table = document.createElement("table");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";
  table.innerHTML = `
    <thead>
      <tr>
        <th style="text-align:left; border-bottom:1px solid #ccc;">name / property</th>
        <th style="text-align:left; border-bottom:1px solid #ccc;">content</th>
      </tr>
    </thead>
    <tbody>
      ${metas.map(m => `
        <tr>
          <td style="padding:4px 8px; border-bottom:1px solid #eee;">${m.name}</td>
          <td style="padding:4px 8px; border-bottom:1px solid #eee;">${m.content}</td>
        </tr>
      `).join("")}
    </tbody>
  `;
  document.body.appendChild(table);
});
