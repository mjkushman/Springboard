//Assignment: https://lessons.springboard.com/Connect-Four-OO-08caea512cb74243b025b460545a6a5e
function makeHtmlBoard() {
  console.log('makeHTMLboard')
}

class Game {
  constructor(height, width) {
    this.HEIGHT = height;
    this.WIDTH = width;
    this.currPlayer = 1;
    this.board = [];
    this.makeBoard();
    this.makeHtmlBoard();

    } 
    
    makeBoard() {
      for (let y = 0; y < this.HEIGHT; y++) {
        this.board.push(Array.from({ length: this.WIDTH }));
        // console.log('is it running?')
      }
    }
    makeHtmlBoard() {
      // const board = document.getElementById('board');
  
      // make column tops (clickable area for adding a piece to that column)
      const top = document.createElement('tr');
      top.setAttribute('id', 'column-top');
      // top.addEventListener('click', console.log('clicked'));
      top.addEventListener('click', this.handleClick.bind(this)); // I added this. to handleClick. Not sure if that's right or wrong.
      for (let x = 0; x < this.WIDTH; x++) {
        const headCell = document.createElement('td');
        headCell.setAttribute('id', x);
        top.append(headCell);
      }
  
      board.append(top);
  
      // make main part of board
      for (let y = 0; y < this.HEIGHT; y++) {
        const row = document.createElement('tr');
  
        for (let x = 0; x < this.WIDTH; x++) {
          const cell = document.createElement('td');
          cell.setAttribute('id', `${y}-${x}`);
          row.append(cell);
        }
  
        board.append(row);
      }
    }
    //new function
    //am I here?
    findSpotForCol(x) {
      // console.log('finSpotForCol ran. This:',this)
      for (let y = this.HEIGHT - 1; y >= 0; y--) {
        if (!this.board[y][x]) {
          return y;
        }
      }
      return null;
    } 
    // END OF FINDSPOTFORCOL
    //
    placeInTable(y, x) {
      const piece = document.createElement('div');
      piece.classList.add('piece');
      piece.classList.add(`p${this.currPlayer}`);
      piece.style.top = -50 * (y + 2);
    
      const spot = document.getElementById(`${y}-${x}`);
      spot.append(piece);
    } //END OF PLACEINTABLE

    endGame(msg) {
      console.log('endGame ran')
      window.alert(msg);
    }//END OF ENDGAME

    handleClick(evt) {
      //check to see if fired
      // console.log('handleClick ran. This:',this)
      // get x from ID of clicked cell
      const x = +evt.target.id;
      // console.log('this is x',x);

      // get next spot in column (if none, ignore click)
      const y = this.findSpotForCol(x);
      if (y === null) {
        return;
      }
    
      // place piece in board and add to HTML table
      this.board[y][x] = this.currPlayer;
      this.placeInTable(y, x);
    
      // check for win
      if (this.checkForWin()) {
        // console.log('if checkForWin: True. This:',this)
        return this.endGame(this,`Player ${this.currPlayer} won!`);
      }
      // console.log('if checkForWin: False')
      // check for tie
      if (this.board.every(row => row.every(cell => cell))) {
        return this.endGame('Tie!');
      }
      // switch players
      this.currPlayer = this.currPlayer === 1 ? 2 : 1;

    }//END OF HANDLE CLICK

    checkForWin() {
      // console.log('THIS while inside checkforwin:',this)
      
      const _win = cells => {
        cells.every(
          ([y, x]) =>
            y >= 0 &&
            y < this.HEIGHT &&
            x >= 0 &&
            x < this.WIDTH &&
            this.board[y][x] === this.currPlayer
        )
      }


      // function _win(cells) {
      //   console.log('THIS while inside _win',this)
      //   console.log('cells:',cells)
      //   // Check four cells to see if they're all color of current player
      //   //  - cells: list of four (y, x) cells
      //   //  - returns true if all are legal coordinates & all match currPlayer
      //   console.log('inside _win inside checkforwin')//adding console check
      //   return cells.every( //add bind this
      //     ([y, x]) =>
      //       y >= 0 &&
      //       y < this.HEIGHT &&
      //       x >= 0 &&
      //       x < this.WIDTH &&
      //       this.board[y][x] === this.currPlayer
      //   );
      // }// end of legacy _win function
    
      for (let y = 0; y < this.HEIGHT; y++) {
        // console.log('y',y)
        for (let x = 0; x < this.WIDTH; x++) {
          // console.log('x',x)
          // get "check list" of 4 cells (starting here) for each of the different
          // ways to win
          const horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
          const vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
          const diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
          const diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
    
          // console.log(' horiz',horiz,y,x)
          // console.log(' vert',vert)
          // console.log(' diagDR',diagDR)
          // console.log(' diagDL',diagDL)
          // console.log('win horiz',_win(horiz))
          // console.log('win vert',_win(vert))
          // console.log('win diagDR',_win(diagDR))
          // console.log('win diagDL',_win(diagDL))

          // find winner (only checking each win-possibility as needed)
          if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
            console.log('win = true')
            return true;
          }
        }
      }
    } // END OF CHECKFORWIN

} //END OF THE BIG CLASS
  
  //Code copied from assignment. Adding to the bottom but it might need to be moved up somewhere:
new Game(6, 7);   // assuming constructor takes height, width

makeHtmlBoard()

