"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    { id: 1, name: "Ana", age: 25 },
    { id: 2, name: "Pedro", age: 30 },
    { id: 3, name: "Maria", age: 22 }
];
function getNamesOver23(users) {
    return users
        .filter(user => user.age > 23)
        .map(user => user.name);
}
const result = getNamesOver23(users);
console.log(result);
//# sourceMappingURL=index.js.map