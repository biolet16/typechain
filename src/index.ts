// //인터페이스 = 객체의 타입 정의(js로 컴파일 되지않음)
// // interface Human {
// //     name:string,
// //     age:number,
// //     gender?:string
// // };

// //클래스(js 컴파일 가능)
// class Human {
//     //js에서는 privacy를 가지고 있지 않기 때문에 노출x(private로 지정할 경우 클래스 외에서는 접근 불가능하게 보호할 수 있음)
//     public name: string;
//     public age: number;
//     public gender: string;

//     constructor(name: string, age: number, gender: string) {
//         this.name=name;
//         this.age=age;
//         this.gender=gender;
//     }
// }

// const bora = new Human("bora", 27, "female");

// // const person = {
// //     name:"bora",
// //     age:27,
// //     gender:"female"
// // };

// //선언된 파라미터 뒤에 ? 붙일 경우 파라미터를 필수 사항이 아니게 만들어 줄 수 있음      
// const sayHi = (person:Human):string => {
//     return `hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
// };

// console.log(sayHi(bora));

//blockchain start
class Block {
    public index: number;
    public hash: string;
    public previosHash: string;
    public data: string;
    public timestamp: number;

    constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
        this.index=index;
        this.hash=hash;
        this.previosHash=previousHash;
        this.data=data;
        this.timestamp=timestamp;
    }
}

const someBlock: Block = new Block(1,"121213132", "", "hello", 12345);

let blockchain: [Block] = [someBlock];

console.log(blockchain);


export {};