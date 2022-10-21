

const add = document.getElementById('add');

add.addEventListener("click", function(e){
    e.preventDefault();
    
    const olItem = document.getElementById('olItem');
    const inputValue = document.getElementById('inputId').value;
    const text = document.createTextNode(inputValue);
    const newItem = document.createElement("li");
    newItem.appendChild(text);
    olItem.appendChild(newItem);
    // console.log(olItem);

});