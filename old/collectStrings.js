function collectStrings(obj) {
  let array = []

  for (let key in obj) {
    if (typeof obj[key] ==='string') {
      array.push(obj[key]);
    } else {
      array = array.concat(collectStrings(obj[key]));
    }
  }

  return array;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz"
          }
        }
      }
    }
  }
}

console.log(collectStrings(obj));
