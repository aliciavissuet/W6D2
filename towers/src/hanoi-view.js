class HanoiView {
  constructor(game, rootEl) {
    this.game = game;
    this.$rootEl = rootEl;
    this.setupTowers();
  }

  setupTowers() {
    const towers = this.game.towers
    towers.forEach((tower) => {
      let $tower = $('<ul>');
      $tower.addClass('tower');
      tower.forEach( (el) => {
        let $li = $('<li>');
        $li.addClass(`disc${el}`);
        $tower.append($li);
      });
      const $base = $('<li>');
      $base.addClass('base');
      $tower.append($base);

      this.$rootEl.append($tower);
    })
    // for(let i = 0; i < 3; i++) {
    //   this.setupTower(i);
    // }
  }

  // setupTower(i) {
  //   let $tower = $('<ul>');
  //   $tower.attr('id', `tower${i}`);
  //   for (let i = 0; i < 4; i++) {
  //     let $li = $('<li>');
  //     $tower.append($li);
  //   }
  //   this.$rootEl.append($tower);
  // }


}

module.exports = HanoiView;