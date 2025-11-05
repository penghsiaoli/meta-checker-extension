(() => {
  // cleanup old style.css
  const oldLink = document.getElementById("meta-checker-style");
  if (oldLink) oldLink.remove();

  // insert new style.css
  const link = document.createElement("link");
  link.id = "meta-checker-style";
  link.rel = "stylesheet";
  link.href = chrome.runtime.getURL("style.css") + `?v=${Date.now()}`; //タイムスタンプを追加 cacheを回避
  document.head.appendChild(link);

  const metas = Array.from(document.querySelectorAll("meta"))
    .map(meta => ({
      name: meta.getAttribute("name") || meta.getAttribute("property"),
      content: meta.getAttribute("content") || ""
    }))
    .filter(m => m.name); // 🚫 name/propertyのない項目を除外

  const wrapper = document.createElement("div");
  wrapper.id = "meta-checker-wrapper";
  
  const panel = document.createElement("div");
  panel.id = "meta-checker-panel";
  

  const header = document.createElement("div");
  header.className = "meta-checker-header";
  header.innerHTML=`
  <svg id="_レイヤー_2" data-name="レイヤー_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202.33 18.45">
    <g id="_レイヤー_1-2" data-name="レイヤー_1">
      <g>
        <path d="M3.13.23l5.91,7.09L14.95.23h3.1v17.98h-3.48V5.59h-.1l-5.2,6.33h-.49L3.58,5.59h-.1v12.63H0V.23h3.13Z" style="fill: #fff;"/>
        <path d="M33.64.23v2.72h-8.15v4.72h7.8v2.72h-7.8v5.11h8.33v2.72h-11.8V.23h11.62Z" style="fill: #fff;"/>
        <path d="M51.98.23v2.72h-6.38v15.27h-3.48V2.95h-6.39V.23h16.25Z" style="fill: #fff;"/>
        <path d="M63.74.23l7.94,17.98h-3.67l-1.87-4.38h-7.99l-1.74,4.38h-3.64L60.18.23h3.55ZM59.21,11.2h5.81l-3.04-7.12-2.77,7.12Z" style="fill: #fff;"/>
        <path d="M90.55,0c1.02,0,2.02.12,3,.35s2.03.63,3.17,1.18v3.27c-1.11-.63-2.13-1.09-3.07-1.38s-1.92-.42-2.94-.42c-1.28,0-2.43.26-3.46.79-1.03.53-1.83,1.27-2.4,2.23-.57.96-.86,2.03-.86,3.21s.28,2.28.85,3.23c.57.95,1.36,1.69,2.39,2.21,1.03.52,2.19.78,3.48.78.99,0,1.93-.14,2.83-.42.9-.28,2.03-.79,3.39-1.53v3.27c-1.17.61-2.24,1.04-3.22,1.3-.98.26-2.12.39-3.42.39-1.9,0-3.59-.38-5.08-1.13-1.49-.75-2.67-1.84-3.52-3.26-.85-1.42-1.28-2.98-1.28-4.67,0-1.81.44-3.44,1.32-4.88s2.09-2.55,3.63-3.33c1.54-.78,3.28-1.17,5.21-1.17Z" style="fill: #fff;"/>
        <path d="M103.71.23v7.57h9.33V.23h3.48v17.98h-3.48v-7.6h-9.33v7.6h-3.48V.23h3.48Z" style="fill: #fff;"/>
        <path d="M132.11.23v2.72h-8.15v4.72h7.8v2.72h-7.8v5.11h8.33v2.72h-11.8V.23h11.62Z" style="fill: #fff;"/>
        <path d="M144.97,0c1.02,0,2.02.12,3,.35s2.03.63,3.17,1.18v3.27c-1.11-.63-2.13-1.09-3.07-1.38s-1.92-.42-2.94-.42c-1.28,0-2.43.26-3.46.79-1.03.53-1.83,1.27-2.4,2.23-.57.96-.86,2.03-.86,3.21s.28,2.28.85,3.23c.57.95,1.36,1.69,2.39,2.21,1.03.52,2.19.78,3.48.78.99,0,1.93-.14,2.83-.42.9-.28,2.03-.79,3.39-1.53v3.27c-1.17.61-2.24,1.04-3.22,1.3-.98.26-2.12.39-3.42.39-1.9,0-3.59-.38-5.08-1.13-1.49-.75-2.67-1.84-3.52-3.26-.85-1.42-1.28-2.98-1.28-4.67,0-1.81.44-3.44,1.32-4.88s2.09-2.55,3.63-3.33c1.54-.78,3.28-1.17,5.21-1.17Z" style="fill: #fff;"/>
        <path d="M158.12.23v8.3h.08L164.79.23h3.95l-6.69,8.47,8.68,9.51h-4.45l-8.15-8.83v8.83h-3.48V.23h3.48Z" style="fill: #fff;"/>
        <path d="M184.21.23v2.72h-8.15v4.72h7.8v2.72h-7.8v5.11h8.33v2.72h-11.8V.23h11.62Z" style="fill: #fff;"/>
        <path d="M194.11.23c1.69,0,3.07.47,4.13,1.4,1.06.94,1.6,2.15,1.6,3.66,0,1.02-.26,1.91-.79,2.67-.53.76-1.31,1.36-2.35,1.8.58.31,1.09.73,1.53,1.26s1,1.43,1.66,2.69c1.1,2.18,1.91,3.68,2.45,4.51h-3.88c-.27-.39-.63-1.03-1.08-1.89-1-1.91-1.72-3.2-2.19-3.87s-.91-1.14-1.34-1.42-.92-.42-1.48-.42h-1.26v7.6h-3.48V.23h6.48ZM193.32,7.9c.91,0,1.62-.23,2.14-.68.52-.45.78-1.08.78-1.87s-.26-1.44-.77-1.85c-.51-.41-1.25-.61-2.2-.61h-2.16v5.01h2.21Z" style="fill: #fff;"/>
      </g>
    </g>
  </svg>
`;
  wrapper.appendChild(header);
  wrapper.appendChild(panel);

  // 🧭 dragging functionality
  let isDragging = false;
  let offsetX, offsetY;
  
  header.addEventListener("mousedown", (e) => {
    isDragging = true;
    const rect = wrapper.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    header.style.cursor = "grabbing";
  });
  
  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    wrapper.style.left = e.clientX - offsetX + "px";
    wrapper.style.top = e.clientY - offsetY + "px";
    wrapper.style.right = "auto";
  });
  
  document.addEventListener("mouseup", () => {
    isDragging = false;
    header.style.cursor = "grab";
  });

  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr><th>name/property</th><th>content</th></tr>
    </thead>
    <tbody>
      ${metas.map(m => `
        <tr>
          <td>${m.name}</td>
          <td>${m.content}
          ${(m.name==="og:image" || m.name==="twitter:image" || m.name==="twitter:image:secure_url")? `<br/><img src="${m.content}" style="max-width:200px; max-height:200px; margin-top:10px; margin-bottom:10px;"/>` : ``}
          </td>
        </tr>
      `).join("")}
    </tbody>
  `;
  panel.appendChild(table);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "×";
  closeBtn.className = "meta-checker-close";
  closeBtn.onclick = () => wrapper.remove();
  panel.appendChild(closeBtn);

  document.body.appendChild(wrapper);

})();


  