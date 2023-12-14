chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
   if (message.action === 'executeBackgroundScript') {
      const currentTab = await getCurrentTab();
      const tabId = currentTab?.id;

      await chrome.scripting.executeScript({target: {tabId}, func: modifyDOM}).catch(console.error);
   }
});

function modifyDOM() {
   // remove class fc-ab-root
   let elements = document?.getElementsByClassName('fc-ab-root');
   while(elements?.length > 0){
      elements[0]?.parentNode?.removeChild(elements[0]);
   }

   // remove overflow hidden from body
   const body = document?.getElementsByTagName('body')[0];
   body?.style?.removeProperty("overflow");

   // remove element ctn_freemium_article
   document.getElementById("ctn_freemium_article")?.remove()

   // remove classes a_b_wall _dn
   elements = document.getElementsByClassName("a_b_wall _dn")
   while(elements.length > 0){
      elements[0].classList = []
   }

   return [];
}

async function getCurrentTab() {
   let queryOptions = { active: true, lastFocusedWindow: true };
   let [tab] = await chrome.tabs.query(queryOptions);

   return tab;
}
