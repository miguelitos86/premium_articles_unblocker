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

 // Execute modifyDOM function when content script is injected
modifyDOM();

// Attach the function to the window object
if (typeof window.modifyDOM === 'undefined') {
  window.modifyDOM = modifyDOM;
}

console.log(window.modifyDOM); // Check if modifyDOM is attached to the window object

// Listen for messages from the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
   if (message.action === 'executeContentScript') {
     // Execute the modifyDOM function when instructed by the extension
     modifyDOM()
    }
   });

