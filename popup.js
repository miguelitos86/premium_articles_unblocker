document.getElementById('extensionButton').addEventListener('click', () => {
  chrome.runtime.sendMessage({action: 'executeBackgroundScript'});
});

// Send a message to the content script to execute modifyDOM
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const activeTab = tabs[0];
  chrome.tabs.sendMessage(activeTab.id, { action: 'executeContentScript' });
});
