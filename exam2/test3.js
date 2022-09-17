// kono Array theke kivabe sob theke boro array khuje ber korbe,, and index number dekhabe

function longstring(names){
    // let length = names.length;
    let longword = " ";
    for(name of names){
        if(name.length > longword.length){
            longword = name;
        }
    }
    return[longword, names.indexOf(longword)];
}
console.log(longstring(['kusum akter','kutta lili','limon']));