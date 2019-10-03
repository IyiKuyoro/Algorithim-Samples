function stringifyNumbers(obj) {
  let newObj = Array.isArray(obj) ? [...obj] : Object.assign({}, obj);

  for (let value in obj) {
    if (typeof obj[value] === 'object') {
      newObj[value] = stringifyNumbers(obj[value]);
    } else if (typeof obj[value] === 'number') {
      newObj[value] = obj[value].toString();
    }
  }

  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66
    }
  }
}

console.log(stringifyNumbers(obj));
