/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const data = transactions.reduce((acc,item)=>{
    if(item.category in acc){
      acc[item.category] += item.price;
    }
    else{
      acc[item.category] = item.price;
    }
    return acc;
  },{})
  let ans = [];
  for(let key in data){
    ans.push({category:key,totalSpent:data[key]});
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
