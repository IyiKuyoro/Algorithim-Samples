const matrix = [
  ['S', 'S', 'S', 'S', 'S'],
  ['S', 'S', 'S', 'S', 'S'],
  ['S', 'S', 'S', 'S', 'S'],
  ['S', 'S', 'S', 'S', 'S'],
  ['S', 'S', 'S', 'S', 'S']
];
const path = [];
let steps = 0;

function move(r, c, str, mv) {
  if ((r >= 5 || r < 0 || c >= 5 || c < 0)
    || (matrix[r][c] === 'X')) {
    return false;
  }
  if (steps === str.length) {
    if (r === 4 && c === 4) {
      path.push(mv)
      return true;
    }
    
    return false;
  }

  steps++;
  if (str[steps - 2]) path.push(mv);
  matrix[r][c] = 'X';
  if (str[steps - 1] !== '?') {
    const nextDir = getNextStep(str[steps - 1], r, c);
    const res = move(nextDir[0], nextDir[1], str, str[steps - 1]);
    if (res) {
      return true;
    } else {
      stepBack(r, c);
      return false;
    }
  } else {
    const avaMoves = getNextAvailableMoves(r, c);
    let res = false;
    while (!res && avaMoves.length > 0) {
      const nextDir = avaMoves.pop();
      res = move(nextDir[0], nextDir[1], str, nextDir[2]);
    }
    if (res) {
      return true;
    } else {
      stepBack(r, c);
      return false;
    }
  }
}

function stepBack(r, c) {
  matrix[r][c] = 'S';
  steps--;
  path.pop();
}

function getNextStep(direction, r, c) {
  switch (direction) {
    case 'u':
      return [r - 1, c];
    case 'd':
      return [r + 1, c];
    case 'r':
      return [r, c + 1];
    default:
      return [r, c - 1];
  }
}

function getNextAvailableMoves(r, c) {
  const avaMoves = [];
  if (matrix[r - 1] && matrix[r - 1][c] === 'S') avaMoves.push([r - 1, c, 'u']);
  if (matrix[r + 1] && matrix[r + 1][c] === 'S') avaMoves.push([r + 1, c, 'd']);
  if (matrix[r][c + 1] === 'S') avaMoves.push([r, c + 1, 'r']);
  if (matrix[r][c - 1] === 'S') avaMoves.push([r, c - 1, 'l']);

  return avaMoves;
}

function CorrectPath(str) {
  move(0, 0, str, str[0]);
  // code goes here  
  return path.join('');
}

console.log(CorrectPath("drdr??rrddd?"));
