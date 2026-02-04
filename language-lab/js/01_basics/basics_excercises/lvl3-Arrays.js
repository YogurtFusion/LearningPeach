let users = ["Aniket", "Rahul", "Sneha", "Admin"];

console.log(users.pop(), users);

users.splice(0, 0, "Guest");
console.log(users);

let newUsers = users.slice(0, 3);
console.log(newUsers);

let prices = [100, 200, 300, 400];

let taxPrices = prices.map((price) => price * 1.1);

let filteredPrices = taxPrices.filter((prices) => prices > 250);

let total = filteredPrices.reduce((sum, prices) => sum + prices, 0);

console.log(total);
