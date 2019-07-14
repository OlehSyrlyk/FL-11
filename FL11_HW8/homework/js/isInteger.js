function isInteger(num) {
    if((parseFloat(num) === parseInt(num)) && !isNaN(num)){
        return true;
    } else {
        return false;
    }
  }
  console.log(isInteger(5))
  console.log(isInteger(5.1))