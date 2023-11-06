// program to check if an object is an array

function checkObject(arr) {
    // check if arr is array
    const result = Array.isArray(arr);

    if(result) {
        document.write(`[${arr}] is an array.`);
    }
    else {
        document.write(`[${arr}] is not an array.`);
    }

}
// call the function
checkObject(seriesList);