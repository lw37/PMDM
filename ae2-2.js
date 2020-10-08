function average(dataArray) {
    if (dataArray.length == 0)
        return undefined;
    let suma = dataArray.reduce((a, b) => { return a += b });
    return suma / dataArray.length;
    
}

const a = [1, 6, 3, 5, 4];

console.log(average(a));

const b = [];

console.log(average(b))