const StringifyNum = (totalAum) => {
  if (totalAum) {
    let aumString = String(totalAum);
    let aumDecimal;
    if (aumString.includes('.')) {
      aumDecimal = String(
        aumString.slice(aumString.indexOf('.'), aumString.indexOf('.') + 3)
      );
      aumString = aumString.slice(0, aumString.indexOf('.'));
    }
    const startIndex = aumString.length - 1;
    const aumArray = [];
    let commaCount = 0;
    for (let i = startIndex; i >= 0; i--) {
      if (commaCount === 3) {
        aumArray.unshift(aumString[i], ',');
        commaCount = 1;
      } else {
        commaCount++;
        aumArray.unshift(aumString[i]);
      }
    }
    aumArray.unshift('$');
    if (aumDecimal) {
      aumArray.push(aumDecimal);
    }
    return aumArray.join('');
  }
};

export default StringifyNum;
