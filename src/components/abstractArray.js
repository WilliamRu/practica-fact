let array1=[1,4,6,3,2,37];
let sorting = function(array1, sortType) {
    const sortTypes={
        1: (a,b) => a-b,
        2: (a,b) => b-a
    }
    return array1.sort(sortTypes[sortType]);
};
sorting(array1, 1);

let array2=[1,4,6,3,2, [1,2,8], 37, [1,2]];
let smoothing=function(array2){
    return array2.flat(Infinity);
}
smoothing(array2);

let array3=[1,2,3,-1,-2,4,-5,0,-9];
let filtered=function(array3){
    return array3.filter(number => number <=0);
}
filtered(array3);

let array4=['kk', 'k'];
let primitive=function(array4){
    for (let i=0; i<array4.length; i++) {
        return typeof array4[i];
    }
}
primitive(array4);

let array5 = [1,2,3,5,3,4,5,6,6,"test","test",true];
let deduplication=function(array5){
    let unique = [...new Set(array5)];
    return unique;
}
deduplication(array5);
