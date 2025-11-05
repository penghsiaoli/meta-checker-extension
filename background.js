chrome.action.onClicked.addListener(async (tab) => {
  // 檢查是否已存在
  const [{ result: hasPanel }] = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => !!document.getElementById("meta-checker-wrapper")
  });

  if (hasPanel) {
    // 已經有面板 → 移除它
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => document.getElementById("meta-checker-wrapper")?.remove()
    });
  } else {
    // 沒有面板 → 注入腳本與樣式
    await chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["style.css"]
    });
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  }
});
