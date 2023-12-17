
// Send a message to the content script to execute modifyDOM
chrome.action.onClicked.addListener((tab) => {
   chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ["contentScript.js"]
   })
 });
 
