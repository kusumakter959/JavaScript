const obj = {
    a: "kusum",
    b: undefined,
    c: "Learn with sumith",
    d: false,
    e: "",
    f: "apple",
    g: 50,
    h: "k",
    i: true,
    j: NaN
};
const truethyObject = function(obj){
    for(i in obj){
        if(!obj[i]){
            delete obj[i];
        }
    }
    return obj;
}
console.log(truethyObject(obj));