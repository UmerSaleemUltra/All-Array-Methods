let arr = [
    {
        id: 1,
        name: "T-shirt",
        price: 19.99,
        description: "Comfortable cotton t-shirt",
        category: "Clothing",
        stock: 10
    },
    {
        id: 2,
        name: "Jeans",
        price: 39.99,
        description: "Classic blue jeans",
        category: "Clothing",
        stock: 5
    },
    {
        id: 3,
        name: "Sneakers",
        price: 59.99,
        description: "Sporty sneakers",
        category: "Footwear",
        stock: 8
    },
    {
        id: 4,
        name: "Backpack",
        price: 49.99,
        description: "Durable backpack for daily use",
        category: "Accessories",
        stock: 3
    },
    {
        id: 5,
        name: "Smartphone",
        price: 699.99,
        description: "Latest smartphone with high-end features",
        category: "Electronics",
        stock: 15
    }
];
// forEach
function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

// map
function myMap(arr, callback) {
    let mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(callback(arr[i], i, arr));
    }
    return mappedArray;
}

// filter
function myFilter(arr, callback) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

// reduce
function myReduce(arr, callback, initialValue) {
    let accumulator = initialValue === undefined ? arr[0] : initialValue;
    let startIndex = initialValue === undefined ? 1 : 0;
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

// some
function mySome(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

// every
function myEvery(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

// find
function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return arr[i];
        }
    }
    return undefined;
}

// findIndex
function myFindIndex(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}

// includes
function myIncludes(arr, searchElement) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return true;
        }
    }
    return false;
}

// indexOf
function myIndexOf(arr, searchElement) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchElement) {
            return i;
        }
    }
    return -1;
}

// push
function myPush(arr, ...elements) {
    for (let i = 0; i < elements.length; i++) {
        arr[arr.length] = elements[i];
    }
    return arr.length;
}

// pop
function myPop(arr) {
    if (arr.length === 0) return undefined;
    let element = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return element;
}

// shift
function myShift(arr) {
    if (arr.length === 0) return undefined;
    let firstElement = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    return firstElement;
}

// unshift
function myUnshift(arr, ...elements) {
    let newArray = [...elements, ...arr];
    for (let i = 0; i < newArray.length; i++) {
        arr[i] = newArray[i];
    }
    return arr.length;
}

// reverse
function myReverse(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

// slice
function mySlice(arr, start = 0, end = arr.length) {
    let result = [];
    for (let i = start; i < end; i++) {
        if (i >= 0 && i < arr.length) {
            result.push(arr[i]);
        }
    }
    return result;
}

// splice
function mySplice(arr, start, deleteCount, ...items) {
    let removedElements = [];
    for (let i = start; i < start + deleteCount; i++) {
        removedElements.push(arr[i]);
    }

    let tempArray = [...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount)];
    for (let i = 0; i < tempArray.length; i++) {
        arr[i] = tempArray[i];
    }
    arr.length = tempArray.length;

    return removedElements;
}
