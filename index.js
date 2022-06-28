//1
const data = { a: 1 };
// Here i check if the object is not null and if the type of the object is object.If the object is not null and the type of the object is object, the code returns true.If the object is null or the type of the object is not object, the code returns false.

function isPlainObject(obj) {
	return obj !== null && typeof obj === "object" && obj.constructor === Object;
}

const isPlainObject1 = (obj) =>
	obj !== null && typeof obj === "object" && obj.constructor === Object;

console.log(isPlainObject({ a: 1 })); // true
console.log(isPlainObject([1, 2, 3]));

console.log(isPlainObject1({ a: 1 })); // true
console.log(isPlainObject1([1, 2, 3]));

//2

const data2 = { a: 1, b: 2 };
// .keys returns the names of the enumerable string properties and methods of an object. .map calls a defined callback function on each element of an array, and returns an array that contains the results.
const makePairs = (obj) => Object.keys(obj).map((key) => [key, obj[key]]);

function makePairs1(obj) {
	return Object.keys(obj).map((key) => [key, obj[key]]);
}

console.log(makePairs(data2)); // [['a', 1], ['b', 2]]
console.log(makePairs1(data2)); // [['a', 1], ['b', 2]]

//3

const data3 = { a: 1, b: 2 };
// I created new object using spread operator.forEach metod is used to iterate over the keys array.
const without1 = (obj, ...keys) => {
	const newObj = { ...obj };
	keys.forEach((key) => delete newObj[key]);
	return newObj;
};

function without(obj, ...keys) {
	return Object.keys(obj).reduce((acc, key) => {
		if (!keys.includes(key)) {
			acc[key] = obj[key];
		}
		return acc;
	}, {});
}
console.log(without(data3, "b")); // { a: 1 }
console.log(without1(data3, "b")); // { a: 1 }

//4

const data4 = { a: 1, b: undefined };
const data40 = { a: undefined };
// .every determines whether all the members of an array satisfy the specified test.
// .some determines whether any of the members of an array satisfy the specified test.
function isEmpty(obj) {
	return Object.values(obj).every((value) => value === undefined);           
	// return !Object.values(obj).some((value) => value !== undefined);
}
console.log(isEmpty(data4)); // false
console.log(isEmpty(data40)); // true

console.log();

//5
const data5 = { a: 1, b: 1 };
const data51 = { a: 1, b: 1 };
const data52 = { a: 1, b: 2 };
//JSON stringify converts an object to a JSON string.
// function isEqual(obj1, obj2) {
// 	return JSON.stringify(obj1) === JSON.stringify(obj2);
// }


//below i check if the objects are equal.If not it returns false.
//.keys returns the names of the enumerable string properties and methods of an object.
//.every determines whether all the members of an array satisfy the specified test.
const isEqual = (obj1, obj2) => {
	return Object.keys(obj1).every((key) => obj1[key] === obj2[key]);
};

console.log(isEqual(data5, data51)); // true
console.log(isEqual(data5, data52)); // false

console.log();
