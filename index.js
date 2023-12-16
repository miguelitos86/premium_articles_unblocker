
// Send a message to the content script to execute modifyDOM
chrome.browserAction.onClicked.addListener(() => {
   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
     chrome.tabs.sendMessage(tabs[0].id, { action: 'executeContentScript' });
   });
 });
 
