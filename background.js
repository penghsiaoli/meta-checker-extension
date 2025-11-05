chrome.action.onClicked.addListener(async (tab) => {
  const [{ result: hasPanel }] = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => !!document.getElementById("meta-checker-wrapper")
  });

  if (hasPanel) {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => document.getElementById("meta-checker-wrapper")?.remove()
    });
  } else {
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
