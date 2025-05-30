function isSameType(value1, value2) {

  if (typeof value1 !== typeof value2) {
    return false;
  }


  if (typeof value1 === 'number' && typeof value2 === 'number') {
    const bothAreNaN = isNaN(value1) && isNaN(value2);
    const oneIsNaN = isNaN(value1) || isNaN(value2);

    // If both are NaN => true, if only one is => false
    if (oneIsNaN) {
      return bothAreNaN;
    }
  }

  return true;
}



// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

