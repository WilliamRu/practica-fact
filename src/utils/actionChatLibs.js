const sum = (arr) => arr.reduce((accum, curr) => +accum + +curr);
const minus = (arr) => arr.reduce((accum, curr) => +accum - +curr);

export const mathMethods = {
	sum,
	minus
}
