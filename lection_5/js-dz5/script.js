// Massiv
//1.
function sortAlph(str) {
    let arr = [];
    for (let i = 0; i <= str.length - 1; i++) {
        arr[i] = str[i];
    }
    arr.sort(function (prev, next) {
        if (prev < next) return 1;
        if (prev > next) return -1;
    });
    
    return arr.join('');
}

console.log(sortAlph('bcdaeflmjgkhi'));

//2.
function sortArr(arr) {
    arr.sort(function (prev, next) {
        return next - prev;
    });
    return arr;
}

console.log(sortArr([2, 4, 7, 1, -2, 10, -9]));

//3.
function getNewArray(arr, start, end) {
    return arr.slice(start, end + 1);
}

console.log(getNewArray(['a', 'b', 'c', 'd', 'e', 'f'], 2, 4));

//4.
function doubleArrayFunc(arr = []) {
    return arr.concat(arr);
}

console.log(doubleArrayFunc(['one', 2, 'three', 4]));

//5.
function deleteArray(arr, start, end) {
    arr.splice(start, end + 1 - start);
    return arr;
}

console.log(deleteArray([1, 2, 3, 4, 5], 2, 3));

//6.
function editArray(arr, start, end) {
    arr.splice(start, end + 1 - start, 'three', 'four');
    return arr;
}

console.log(editArray([1, 2, 3, 4, 5], 2, 3));

//7.
function insertArray(arr, string) {
    arr.splice(3, 0, string);
    return arr;
}

console.log(insertArray(['I', 'am', 'an', 'array'], 'awesome'));

//8.
let array8 = [
    [14, 45],
    [1],
    ['a', 'b', 'c']
];

function sortSomeArr(arr) {
    arr.sort(function (prev, next) {
        return prev.length - next.length;
    });
    return arr;
}

console.log(sortSomeArr(array8));

//9.
function copyFunc(str) {
    return str.slice();
}

console.log(copyFunc('Hello world'));

//10.
let item = [
    {
        cpu: 'Intel',
        info: {
            cores: 2,
            cache: 3
        }
    },
    {
        cpu: 'Intel',
        info: {
            cores: 4,
            cache: 4
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 1,
            cache: 1
        }
    },
    {
        cpu: 'Intel',
        info: {
            cores: 3,
            cache: 2
        }
    },
    {
        cpu: 'amd',
        info: {
            cores: 4,
            cache: 2
        }
    }
];

item.sort(function (prev, next) {
    return prev.info.cores - next.info.cores;
});

console.log(item);

//11.
const products = [
    {
        title: 'prod1',
        price: 5.2
    },
    {
        title: 'prod2',
        price: 0.18
    },
    {
        title: 'prod3',
        price: 15
    },
    {
        title: 'prod4',
        price: 25
    },
    {
        title: 'prod5',
        price: 18.9
    },
    {
        title: 'prod6',
        price: 8
    },
    {
        title: 'prod7',
        price: 19
    },
    {
        title: 'prod8',
        price: 63
    }
];

function filterCollection(arr, min, max) {
    let result = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price >= min && products[i].price <= max) {
            result.push(products[i]);
        }
    }
    result.sort(function (prev, next) {
        return prev.price - next.price;
    });
    return result;
}

console.log(filterCollection(products, 15, 30));


// Callback
function firtFunc(arr, callback) {
    let res = '';
    return 'New value: ' + callback(arr);
}

//1.
console.log(firtFunc(['my', 'name', 'is', 'Trinity'], function (arr) {
    for (let i = 0; i <= arr.length - 1; i++) arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    return arr.join('');
    })
);

//2.
console.log(firtFunc([10, 20, 30], function (arr) {
    for (let i = 0; i <= arr.length - 1; i++) arr[i] *= 10;
    return arr.join(', ');
    })
);

//3.
console.log(firtFunc([{name: 'John', age: 45}, {name: 'Aaron', age: 20}], function (arr) {
    let res = '';
    for (let i = 0; i < arr.length; i++) res += arr[i].name + ' is ' + arr[i].age + ', ';
    res = res.slice(0, -1);
    return res;
    })
);

//4.
console.log(firtFunc(['abc', '123'], function (arr) {
    let str = arr.join(',');
    let res = '';
    for (let i = str.length - 1; i >= 0; i--) res += str[i];
    return res;
    })
);







