//input: lineareSearch(['a','b','c','d','c'], 'c')
//output : 2 or Not Found;
//problem LinearSeach( function ti implement kore dekhano)

function lineareSearch(arr, val) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        if(arr[i] == val){
            return i;
        }
        // console.log(i);
    }
    return "Not Found";
}
console.log(lineareSearch(["a", "b", "c", "d", "c"], "g"));
