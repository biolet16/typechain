//선언된 파라미터 뒤에 ? 붙일 경우 파라미터를 필수 사항이 아니게 만들어 줄 수 있음      
const sayHi = (name:string, age:number, gender:string):string => {
    return `hello ${name}, you are ${age}, you are a ${gender}`;
};

console.log(sayHi('bora', 22, 'female'));

export {};