
  const width = document.getElementById("width")
  const height = document.getElementById("height")
  const availWedth = document.getElementById("availWedth")
  const availHeidth = document.getElementById("availHeidth")
  const colorDepth = document.getElementById("colorDepth")
  const pixelDepth = document.getElementById("pixelDepth")


  width.innerHTML = "Screen Width : " + screen.width; 
  height.innerHTML = "Screen Height : " + screen.height; 
  availWedth.innerHTML = "Screen availWidth : " + screen.availWidth; 
  availHeidth.innerHTML = "Screen availHeight : " + screen.availHeight; 
  colorDepth.innerHTML = "Screen colorDepth : " + screen.colorDepth; 
  pixelDepth.innerHTML = "Screen pixelDepth : " + screen.pixelDepth; 