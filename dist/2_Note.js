"use strict";
const isFetching = true;
const isLoading = false;
const int = 42;
const float = 4.2;
const num = 3e10;
const message = 'Hello Typescript';
const numberArray = [1, 1, 2, 3, 5, 8, 13];
const numberArray2 = [1, 1, 2, 3, 5, 8, 13];
const words = ['Hello', 'Typescript'];
const contact = ['Vladilen', 1234567];
let variable = 42;
variable = 'New String';
variable = [];
function sayMyName(name) {
    console.log(name);
}
sayMyName('Хайзенберг');
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
const login = 'admin';
const id1 = 1234;
const id2 = '1234';
const rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
const rect2 = {
    id: '12345',
    size: {
        width: 10,
        height: 5
    }
};
rect2.color = 'black';
const rect3 = {};
const rect4 = {};
const rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea() {
        return this.size.width * this.size.height;
    }
};
class Clock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
const membership = Membership.Standard;
const membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
const social = SocialMedia.INSTAGRAM;
console.log(social);
function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty: ', position());
console.log('One param: ', position(42));
console.log('Two params: ', position(10, 15));
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
class MyResponse {
    constructor() {
        this.header = 'response header';
        this.result = 'response result';
    }
}
class MyError {
    constructor() {
        this.header = 'error header';
        this.message = 'error message';
    }
}
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}
function setAlertType(type) {
}
setAlertType('success');
setAlertType('warning');
const arrayOfNumbers = [1, 1, 2, 3, 5];
const arrayOfStrings = ['Hello', 'Vladilen'];
function reverse(array) {
    return array.reverse();
}
reverse(arrayOfNumbers);
reverse(arrayOfStrings);
let key = 'name';
key = 'age';
let u1 = 'name';
//# sourceMappingURL=2_Note.js.map