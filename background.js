//Documentation:
//	https://developer.chrome.com/extensions/content_scripts#pi
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {file: "inject_script.js"});
});
