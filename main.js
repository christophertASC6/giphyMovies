function resizeIframe(obj) {
    console.log(typeof obj);
     obj.style.width  = obj.contentWindow.document.body.scrollWidth + 'px';
    obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  }
  
  
  function findGiphy() {
    
    event.preventDefault();
    const query = document.getElementById("search-txt").value
    const form = document.getElementById("find-giphy")
    
  
    const fullQuery = "http://api.giphy.com/v1/gifs/search?q="+ query +"&api_key=dc6zaTOxFJmzC&limit=18"
    const xhr = new XMLHttpRequest()
  
    xhr.onreadystatechange = function() {
      let results = document.getElementById('results')
      while (results.firstChild) {
        results.removeChild(results.firstChild);
      }
      
      if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText)
  
        response.data.map(item => {
          let iframe = document.createElement("iframe")
          iframe.src = item.embed_url
        //  iframe.height = item.images.original.height
        //  iframe.width= item.images.original.width
          
          iframe.frameborder= "0";
          iframe.scrolling= "no";
          iframe.onload="resizeIframe(this)"
          results.appendChild(iframe)
        })
  
  
      }
    };
    xhr.open("GET", fullQuery, true);
    xhr.send();
  
  }
  
  