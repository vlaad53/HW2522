//1//

const user = {
  name: "Vlad",
  age: 17,
  hobby: "Backetball",
  premium: true,
};

user.mood = "happy";

user.hobby = "skydiving";

user.premium = false;

const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}


//2// 

function countProps(obj) {
  return Object.keys(obj).length;
}

console.log(countProps({ name: "Alice", age: 25 })); // 2
console.log(countProps({}));                         // 0

//3//

function findBestEmployee(employees) {
  let bestName = "";
  let maxTasks = 0;

  for (const name in employees) {
    if (employees[name] > maxTasks) {
      maxTasks = employees[name];
      bestName = name;
    }
  }

  return bestName;
}

console.log(
  findBestEmployee({
    Ann: 18,
    Misha: 18,
    Matvey: 17,
    Egor: 19,
  })
);


//4//

function countTotalSalary(employees) {
  let total = 0;

  for (const key in employees) {
    total += employees[key];
  }

  return total;
}

console.log(
  countTotalSalary({
    Mango: 100,
    Poly: 150,
    Alfred: 80,
  })
);


//5//
function getAllPropValues(arr, prop) {
  const values = [];

  for (const obj of arr) {
    if (prop in obj) {
      values.push(obj[prop]);
    }
  }

  return values;
}

const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

console.log(getAllPropValues(products, "name")); 
console.log(getAllPropValues(products, "price")); 
console.log(getAllPropValues(products, "category"));

//6//

function calculateTotalPrice(allProducts, productName) {
  let total = 0;

  for (const product of allProducts) {
    if (product.name === productName) {
      total = product.price * product.quantity;
      break;
    }
  }

  return total;
}

console.log(calculateTotalPrice(products, "Radar"));  
console.log(calculateTotalPrice(products, "Droid"));   