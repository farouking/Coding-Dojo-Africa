function firstValArray(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    var arrnew = []; // Initialize arrnew as an empty array

    for (var i = 1; i < arr.length; i++) {
        arrnew.push(arr[i]);
    }

    return [arr[0], arrnew];
}
var x=firstValArray([1,2,3,4,5]);
console.log(x);