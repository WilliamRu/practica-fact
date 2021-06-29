const array1 = [1, 4, 6, 3, 2, 37];
const sorting = (arr, sortType) => {
    const sortTypes = {
        1: (a, b) => a - b,
        2: (a, b) => b - a
    }
    return arr.sort(sortTypes[sortType]);
};

const array2 = [1, 4, 6, 3, 2, [1, 2, 8], 37, [1, 2]];
const smoothing =  (arr) => {
    return arr.flat(Infinity);
}

const array3 = [1, 2, 3, -1, -2, 4, -5, 0, -9];
const filtered = (arr, filterFunc) => {
    return arr.filter(filterFunc);
}

const primitive = (arr, type) => {
    let result=[];
    const arrLengths=arr.length;
    let i = 0;
    for (i; i < arrLengths; i++) {
        if(typeof arr[i]===type){
            result.push(arr[i]);
        }
    }
    return result;
}

const array5 = [1, 2, 3, 5, 3, 4, 5, 6, 6, "test", "test", true];
const deduplication = (arr) => {
    let unique = [...new Set(arr)];
    return unique;
}

export const arrMethods = {
    sorting,
    smoothing,
    filtered,
    primitive,
    deduplication
}