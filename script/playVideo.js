
var content = document.getElementById("content");

var videoId = JSON.parse(localStorage.getItem("videoId"));

var iframe = document.createElement("iframe");

iframe.src = `https://www.youtube.com/embed/${videoId}`
iframe.width = "100%";
iframe.height = "100%";
iframe.allowFullscreen = true;
content.append(iframe);