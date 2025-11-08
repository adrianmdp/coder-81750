const i = 4;

const obj = {
  name: "Adrián",
  email: "asd@asd.com",
  pass: "asdf1234",
  ["key" + i]: "Lorem",
};

const a = { address: "Lorem Ipsum", ...obj };

// const a = {
//     address: "Lorem Ipsum"
//     name: "Adrián",
//     email: "asd@asd.com",
//     pass: "asdf1234"
// }

const { name, ...rest } = obj;

const arr = ["hola", "mundo"];

const arr2 = ["Lorem", ...arr];

const user = {
  name: "Adrian",
};

const { name: userName } = obj;

const { name: val } = query;

// val = Perro
