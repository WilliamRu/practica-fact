const sum = (arr) => arr.reduce((accum, curr, ) => +accum + +curr);
const minus = (arr) => arr.reduce((accum, curr) => +accum - +curr);
const mul = (arr) => arr.reduce((accum, curr) => +accum * +curr);
const division = (arr) => arr.reduce((accum, curr) => +accum / +curr);

export const mathActions = {
    sum,
    minus,
    mul,
    division
}