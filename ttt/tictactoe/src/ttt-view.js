class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }
  
  bindEvents() {
    // const $board = $('<ul>'); 
    this.$el.on('click', '.unclicked', (e) => {
      const $square = $(e.target);
      this.makeMove($square);
    })
  }

  makeMove($square) {
    const pos = $square.data('pos');
    if ($square.hasClass('clicked')) {
      alert('Not valid move!')
    }
    this.game.playMove(pos);
    const mark = this.game.currentPlayer === 'x' ? 'o' : 'x'
    $square.text(mark);
    $square.addClass('clicked')
    if (this.game.winner()) {
      const mark = this.game.winner();
      window.setTimeout(() => alert(`${mark} wonnnn!`), 500);
    }
  }

  setupBoard() {
    const positions = [
      [0, 0], [0, 1], [0, 2],
      [1, 0], [1, 1], [1, 2],
      [2, 0], [2, 1], [2, 2]
    ]
    // debugger;
    const $board = $('<ul>');
    $board.addClass('board');
    for(let i = 0; i < 9; i++) {
      let $li = $('<li>');
      $li.addClass('unclicked');
      $li.data('pos', positions[i]);
      $board.append($li);
    }
    this.$el.append($board);
  }
}

module.exports = View;
