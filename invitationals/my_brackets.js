var minimalData = {
  teams : [
    ["Player 1", "Player 2"], /* first matchup */
    ["Player 3", "Player 4"]  /* second matchup */
  ],
  results : [
    //[[1,2], [3,4]],       /* first round */
    //[[4,6], [2,1]]        /* second round */
  ]
};

function startBracket(){
  $(function() {
    $('.tournament').bracket({
      init: minimalData /* data to initialize the bracket with */ })
    });
};
