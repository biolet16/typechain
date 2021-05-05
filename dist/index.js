"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//선언된 파라미터 뒤에 ? 붙일 경우 파라미터를 필수 사항이 아니게 만들어 줄 수 있음      
const sayHi = (name, age, gender) => {
    return `hello ${name}, you are ${age}, you are a ${gender}`;
};
console.log(sayHi('bora', 22, 'female'));
//# sourceMappingURL=index.js.map