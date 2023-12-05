// {
//   id: 1,
//   name: "Gta 5",
// },
// {
//   id: 2,
//   name: "Gta ",
// },
const arr = [1, 2, 3, 1, 2, 3, 5, 6];

// const cart = {};
const num = {};
function count(item) {
  if (num[item]) {
    num[item]++;
  } else {
    num[item] = 1;
  }
}
arr.forEach((element) => {
  count(element);
});
console.log(num);

// const addToCard = ({ id, name }) => {
//   if (cart[id]) {
//     card[id]++;
//   } else {
//     cart[id] = { id, name, qty: 1 };
//   }
// };

// addToCard(arr[0]);

// addToCard(arr[1]);

// const removeFromCart = ({ id }) => {
//   if (cart[id]) {
//     delete cart[id];
//   }
// };

// removeFromCart(arr[0]);

// console.log(cart);
