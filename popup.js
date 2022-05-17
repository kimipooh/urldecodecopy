document.querySelector('#PopupCopyUrlA').addEventListener('click', async (event) => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => 
  {
    var url = tabs[0].url;

    if( (new RegExp('https:\/\/*')).test(url) )
    {
      chrome.scripting.executeScript(
        {
          target:{tabId: tabs[0].id},
          func: CopyUrl,
          args: [url]
        },
        notifyResults
      );
    }
  });
});

document.querySelector('#PopupCopyUrlB').addEventListener('click', async (event) => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => 
  {
    var url = tabs[0].url;

    if( (new RegExp('https:\/\/*')).test(url) )
    {
      chrome.scripting.executeScript(
        {
          target:{tabId: tabs[0].id},
          func: CopyUrl2,
          args: [url]
        },
        notifyResults
      );
    }
  });
});

function notifyResults(results) {
  var res = results[0].result;
  let opt = {
    type: "basic",
    title: "URLコピー成功",
    message: res,
    iconUrl: "icon_48x48.png"
  };
  chrome.notifications.create(opt);
  window.close();
}

function CopyUrl(url){
  let decodeURL = "";
  try{
    decodeURL = decodeURIComponent(url);
  }catch(e){}
  let elem = document.createElement( 'a' );
  elem.href = url;
  elem.appendChild(document.createTextNode(decodeURL));
  document.body.appendChild(elem);
  var range = document.createRange();
  range.selectNode(elem);
  var selection = document.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  document.getSelection().removeAllRanges();
  document.body.removeChild(elem);
  return url;
}

function CopyUrl2(url){
  let decodeURL = "";
  try{
    decodeURL = decodeURIComponent(url);
  }catch(e){}
  let get_tag = "h1";
  if( (new RegExp('https:\/\/kitaney-google\.blogspot\.com\/*')).test(url) ||  
      (new RegExp('https:\/\/kitaney-wordpress\.blogspot\.com\/*')).test(url) ){
      get_tag = "h3";
  }else if( (new RegExp('https:\/\/news\.yahoo\.co\.jp\/*')).test(url) ){
      get_tag = "article > header > h1";
  }
  
  let title = document.querySelector(get_tag).innerText;
  if(!title){
     get_tag = "h2";
     title = document.querySelector(get_tag).innerText;  
     if(!title){
         get_tag = "h3";
         title = document.querySelector(get_tag).innerText;  
     }
  }
  let elem = document.createElement( 'a' );
  elem.href = url;
  elem.appendChild(document.createTextNode(title));
  document.body.appendChild(elem);
  var range = document.createRange();
  range.selectNode(elem);
  var selection = document.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand('copy');
  document.getSelection().removeAllRanges();
  document.body.removeChild(elem);
  return title;
}

