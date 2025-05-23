function isSameType(value1, value2) {
  if (typeof value1 !== typeof value2) {
    return false;
  }

  // Special case for NaN (since NaN !== NaN)
  if (typeof value1 === 'number' && typeof value2 === 'number') {
    if (isNaN(value1) && isNaN(value2)) {
      return true;
    }
  }

  return true;
}


// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

