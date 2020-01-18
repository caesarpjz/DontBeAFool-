'use strict';

let changeColor = document.getElementById('changeColor');
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});
changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };

// var vis = (function(){
//     var stateKey, eventKey, keys = {
//         hidden: "visibilitychange",
//         webkitHidden: "webkitvisibilitychange",
//         mozHidden: "mozvisibilitychange",
//         msHidden: "msvisibilitychange"
//     };
//     for (stateKey in keys) {
//         if (stateKey in document) {
//             eventKey = keys[stateKey];
//             break;
//         }
//     }
//     return function(c) {
//         if (c) document.addEventListener(eventKey, c);
//         return !document[stateKey];
//     }
// })();

// vis(function(){
// 	document.title = vis() ? 'Visible' : 'Not visible';
// 	console.log(new Date, 'visible ?', vis());
// });

// // to set the initial state
// document.title = vis() ? 'Visible' : 'Not visible';

// document.addEventListener('visibilitychange', function(ev) {
//     console.log(`Tab state : ${document.visibilityState}`);
//   });

// var visibilitychange = getVisibilityEvent();
// var time = [];
// document.addEventListener(visibilityChangeEvent, function(e) {

// // If the document is hidden we want to pause the video.
// if (document[hidden]) {
//     console.log("nothing")
// } else {
//     t
// }
// });
chrome.storage.sync.set({key: value}, function() {
    console.log('Value is set to ' + value);
  });

  chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });

chrome.tabs.onCreated.addEventListener( function(tab) {
    chrome.local.sync.set(tab.id = performance.now());
    console.log(tab.id, "tab")
});