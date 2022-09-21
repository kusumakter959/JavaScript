
// Eelement add korar jonno
const para = document.createElement("h1");
const node = document.createTextNode("Hello Bangladesh");


para.appendChild(node);
const element = document.getElementById("div1");
// Eelement add korar jonno
element.appendChild(para);
console.log(para);


// Creating new HTML Elements - insertBefore()
element.insertBefore(para, p2);

// Removing Existing HTML Elements
element.removeChild(p3);

// Replacing HTML Elements 
element.replaceChild(p2, para);
    // ki diye replace kora hoy
    //kake replace kora hocche
