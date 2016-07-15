chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: { urlContains: 'iflscience' }
					})
				],
				actions: [ 
					new chrome.declarativeContent.ShowPageAction()
				]
			}
		]);
	});
});
	
chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.query({active: true, currentWindow: true }, function (tabs) {
		var activeTab = tabs[0];
		curl = activeTab.url;
	});
	
	chrome.tabs.update(null, { url: curl+'all'});
});
