/* eslint-disable prettier/prettier */
const createBoard = (rows, columns) => {
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      return Array(columns)
        .fill(0)
        .map((_, column) => {
          return {
            row,
            column,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0,
          };
        });
    });
};

const spreadMines = (board, minesAmount) => {
  const rows = board.length;
  const columns = board[0].length;
  let minesPlanted = 0;

  while (minesPlanted < minesAmount) {
    const rowSel = parseInt(Math.random() * rows, 10);
    const columnSel = parseInt(Math.random() * columns, 10);

    if (!board[rowSel][columnSel].mined) {
      board[rowSel][columnSel].mined = true;
      minesPlanted++;
    }
  }
};

const createMinedBoard = (rows, columns, minesAmount) => {
  const board = createBoard(rows, columns);
  spreadMines(board, minesAmount);
  return board;
};

const cloneBoard = (board) => {
  return board.map(rows => {
    return rows.map(field => {
      return { ...field }
    })
  })
}

const getNeighboors = (board, row, column) => {
  const neigboors = []
  const rows = [row - 1, row + 1]
  const columns = [column - 1, column + 1]

  rows.map(r => {
    columns.map(c => {
      const diff = r !== row || c !== column
      const validRow = r >= 0 && r < board.length
      const validCol = c >= 0 && c < board[0].length
      if (diff && validRow && validCol) {
        neigboors.push(board[r][c])
      }
    })
  })
  return neigboors
}

const safeNeighboorhood = (board, row, column) => {
  const safes = (result, neighboor) => result && !neighboor.mined
  return getNeighboors(board, row, column).reduce(safes, true)
}

const openField = (board, row, column) => {
  const field = board[row][column]

  if (!field.opened) {
    field.opened = true

    if (field.mined) {
      field.exploded = true
    } else if (safeNeighboorhood(board, row, column)) {
      getNeighboors(board, row, column)
        .map(n => openField(board, n.row, n.column))
    } else {
      const neighboors = getNeighboors(board, row, column)
      field.nearMines = neighboors.filter(n => n.mined).length
    }

  }
}

const fields = board => [].concat(...board)
const hadExplosion = board => fields(board).filter(f => f.exploded).length > 0
const pendding = field => (field.mined && !field.mined)
  || (!field.mined && !field.opened)
const wonGame = board => fields(board).filter(pendding).length === 0
const showMines = board => fields(board)
  .filter(field => field.mined)
  .map(f => f.opened = true)

const invertFlag = (board, row, column) => {
  const field = board[row][column]
  field.flagged = !field.flagged
}

const flagsUsed = (board) => fields(board).filter(field => field.flagged).length


export {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
};
