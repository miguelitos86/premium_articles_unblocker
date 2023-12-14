function getDOM() {
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


chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
   if (message.action === 'executeBackgroundScript') {
      //let domRes = await chrome.scripting.executeScript({target: {tabId: info.tabId}, func: getDOM,}).catch(console.error);
      console.log("Well done");
      // query info about the currently active tab in the current window
      // provides  callback function that receives an array of tabs
      chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
         // Currently active tab
         const activeTab = tabs[0];
         console.log(tabs);
         // Method that allows background script to execute a script within a tab
         // Takes an object as argument (the tab) and the function to be executed
         chrome.scripting.executeScript({
            target: {tabId:activeTab.id},
            function: () => {
               getDOM();
            },
         });
      });
      //if (!domRes) return;
   }
});
