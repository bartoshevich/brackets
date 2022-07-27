module.exports = function check(str, bracketsConfig) {
   
  let brackets = Object.fromEntries(bracketsConfig); 
  let openBrackets = Object.keys(brackets);
  // console.log(openBrackets) ;  
  let closedBrackets = Object.values(brackets);
  // console.log(closedBrackets);
  
  let revBrackets = Object.fromEntries((bracketsConfig).map(([key,value])=>[value,key]));
  let arr = [];

for (let i = 0; i < str.length; i++) {
  if (arr.includes(str[i]) && brackets[str[i]] === revBrackets[str[i]]) {
    arr.pop();
  }  else if (openBrackets.includes(str[i])) {
          arr.push(str[i]);
} else if (closedBrackets.includes(str[i])) {
  if (revBrackets[str[i]] !== arr.pop()) {
        return false;
  } 
}
}
return arr.length === 0;
 
}
