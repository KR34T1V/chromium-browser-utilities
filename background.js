// background.js

// Event listener for when the extension is installed or updated
chrome.runtime.onInstalled.addListener(function() {
    alert('Extension installed or updated.');
});
  