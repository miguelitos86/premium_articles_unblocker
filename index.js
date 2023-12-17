
// Send a message to the content script to execute modifyDOM
chrome.browserAction.onClicked.addListener((tab) => {
   chorme.scripting.executeScript({
    target: {tabId: tab.id},
    files: ["contentScript.js"]
   })
 });
 
