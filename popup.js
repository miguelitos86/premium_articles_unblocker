document.getElementById('extensionButton').addEventListener('click', () => {
  chrome.runtime.sendMessage({action: 'executeBackgroundScript'});
});
