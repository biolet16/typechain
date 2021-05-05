const name = "bora",
      age = 27,
      gender="woman";

//선언된 파라미터 뒤에 ? 붙일 경우 파라미터를 필수 사항이 아니게 만들어 줄 수 있음      
const sayHi = (name, age, gender?) => {
    console.log(`hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age);

export {};