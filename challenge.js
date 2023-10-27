function cal(Var1, Var2, operator) {
    if (operator === "+") {
      return Var1 + Var2;
    } else if (operator === "-") {
      return Var1 - Var2;
    } else if (operator === "") {
      return Var1 + Var2;
    } else if (operator === "/") {
      if (Var2 === 0) {
        return "Cannot divide by zero";
      } else {
        return Var1 / Var2;
      }
    } else {
      return "Invalid operator";
    }
  }
  
  
  console.log(cal(2, 2, "+"));t: 
  console.log(cal(9, 3, "-")); 
  console.log(cal(9, 20, "*")); 
  console.log(cal(10, 4, "/")); 
  console.log(cal(4, 5, "/")); 
  console.log(cal(40, 6, "%")); 