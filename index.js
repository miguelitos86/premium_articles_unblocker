import { modifyDOM } from './contentScript';

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
   if (message.action === 'executeBackgroundScript') {
      const currentTab = await getCurrentTab();
      const tabId = currentTab?.id;

      await chrome.scripting.executeScript({target: {tabId}, func: modifyDOM}).catch(console.error);
   }
});

async function getCurrentTab() {
   let queryOptions = { active: true, lastFocusedWindow: true };
   let [tab] = await chrome.tabs.query(queryOptions);

   return tab;
}
