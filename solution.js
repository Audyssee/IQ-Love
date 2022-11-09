var solution73 = new Solution(73,[580,455,"e",true],[580,580,"o",false],[80,205,"s",false],[330,330,"n",true],[330,80,"o",false],[705,330,"s",true],
[580,205,"o",true],[580,80,"o",false],[80,455,"s",false],[330,580,"n",false]);

var solution74 = new Solution(74,[205,80,"e",false],[705,205,"s",false],[455,580,"e",false],[580,330,"s",false],
[455,80,"o",false],[205,455,"e",false],[205,330,"o",false],[80,455,"n",true],[330,205,"o",false],[705,455,"o",false]);

/*
var solution75 = new Solution(74, new Piece4(1, 4, "e", color(134,207,11), [205,80,125,125], [80,80,125,125], [330,80,455,205,330,205], [80,205,125,125]), 
new Piece4(2, 4, "s", color(3,13,182), [205,455,125,125], [80,455,125,125], [330,580,455,455,330,455], [205,455,80,455,80,330]),
new Piece4(3, 4, "e", color(235,238,24), [705,455,125,125], [705,580,125,125], [705,455,830,330,830,455], [580,580,705,705,705,580]),
new Piece5(4, 5, "o", color(214,122,21), [455,580,125,125], [330,455,125,125], [330,580,455,705,455,580], [455,580,455,455,580,580], [580,580,580,705,705,705]),
new Piece5(5, 5, "o", color(88,0,138), [455,80,125,125], [580,330,580,205,455,205], [705,205,580,205,580,330], [705,205,580,205,580,80], [455,205,455,80,330,80]),
new Piece3(6, 3, "n", color(255,0,0),[80,455,125,125], [205,455,125,125], [80,330,80,455,205,455]),
new Piece3(7, 3, "o", color(83,225,230), [205,330,125,125],  [330,330,330,455,455,455], [205,455,205,330,80,330]),
new Piece3(8, 3, "e", color(2,122,36), [205,580,125,125], [80,580,125,125], [330,705,455,705,330,580]),
new Piece5(9, 5, "o", color(253,50,158), [330,205,125,125], [205,205,125,125], [455,455,455,330,330,330], [580,330,455,330,455,455], [580,330,455,330,455,205]),
new Piece5(10, 5, "o", color(76,207,184), [580,330,125,125], [580,455,125,125], [580,580,580,455,455,455], [580,330,580,455,455,455], [705,205,705,330,580,330]));

var solution76 = new Solution(74, new Piece4(1, 4, "e", color(134,207,11), [205,205,125,125], [80,205,125,125], [330,205,455,330,330,330], [80,330,125,125]), 
new Piece4(2, 4, "s", color(3,13,182), [705,455,125,125], [705,580,125,125], [830,455,705,330,705,455], [705,580,705,705,580,705]),
new Piece4(3, 4, "e", color(235,238,24), [705,455,125,125], [705,580,125,125], [705,455,830,330,830,455], [580,580,705,705,705,580]),
new Piece5(4, 5, "o", color(214,122,21), [455,580,125,125], [330,455,125,125], [330,580,455,705,455,580], [455,580,455,455,580,580], [580,580,580,705,705,705]),
new Piece5(5, 5, "o", color(88,0,138), [455,80,125,125], [580,330,580,205,455,205], [705,205,580,205,580,330], [705,205,580,205,580,80], [455,205,455,80,330,80]),
new Piece3(6, 3, "n", color(255,0,0),[80,455,125,125], [205,455,125,125], [80,330,80,455,205,455]),
new Piece3(7, 3, "o", color(83,225,230), [205,330,125,125],  [330,330,330,455,455,455], [205,455,205,330,80,330]),
new Piece3(8, 3, "e", color(2,122,36), [205,580,125,125], [80,580,125,125], [330,705,455,705,330,580]),
new Piece5(9, 5, "o", color(253,50,158), [330,205,125,125], [205,205,125,125], [455,455,455,330,330,330], [580,330,455,330,455,455], [580,330,455,330,455,205]),
new Piece5(10, 5, "o", color(76,207,184), [580,330,125,125], [580,455,125,125], [580,580,580,455,455,455], [580,330,580,455,455,455], [705,205,705,330,580,330]));

var solution80 = new Solution(74, new Piece4(1, 4, "e", color(134,207,11), [205,205,125,125], [80,205,125,125], [330,205,455,330,330,330], [80,330,125,125]), 
new Piece4(2, 4, "s", color(3,13,182), [705,455,125,125], [705,580,125,125], [830,455,705,330,705,455], [705,580,705,705,580,705]),
new Piece4(3, 4, "e", color(235,238,24), [705,455,125,125], [705,580,125,125], [705,455,830,330,830,455], [580,580,705,705,705,580]),
new Piece5(4, 5, "o", color(214,122,21), [455,580,125,125], [330,455,125,125], [330,580,455,705,455,580], [455,580,455,455,580,580], [580,580,580,705,705,705]),
new Piece5(5, 5, "o", color(88,0,138), [455,80,125,125], [580,330,580,205,455,205], [705,205,580,205,580,330], [705,205,580,205,580,80], [455,205,455,80,330,80]),
new Piece3(6, 3, "n", color(255,0,0),[80,455,125,125], [205,455,125,125], [80,330,80,455,205,455]),
new Piece3(7, 3, "o", color(83,225,230), [205,330,125,125],  [330,330,330,455,455,455], [205,455,205,330,80,330]),
new Piece3(8, 3, "e", color(2,122,36), [205,580,125,125], [80,580,125,125], [330,705,455,705,330,580]),
new Piece5(9, 5, "o", color(253,50,158), [330,205,125,125], [205,205,125,125], [455,455,455,330,330,330], [580,330,455,330,455,455], [580,330,455,330,455,205]),
new Piece5(10, 5, "o", color(76,207,184), [580,330,125,125], [580,455,125,125], [580,580,580,455,455,455], [580,330,580,455,455,455], [705,205,705,330,580,330]));
*/

var solution81 = new Solution(81,[205,330,"o",true],[205,205,"e",false],[330,580,"e",false],
[580,205,"n",false],[455,80,"e",true],[80,455,"e",false],[455,330,"n",false],
[205,80,"e",true],[580,580,"e",false],[705,330,"o",false]);

var solution89 = new Solution(89,[580,580,"o",false],[580,330,"o",false],[580,80,"o",false],
[330,580,"o",false],[205,330,"o",true],[80,580,"o",true],[330,80,"o",false],
[455,205,"o",false],[455,455,"e",false],[80,205,"e",false]);

var solution92 = new Solution(92,[580,455,"o",true],[205,580,"e",true],[705,205,"s",true],
[455,330,"s",false],[455,80,"e",true],[580,330,"o",true],[80,330,"n",true],
[455,580,"o",true],[205,330,"s",false],[205,80,"s",true]);

var solution95 = new Solution(95,[330,205,"e",false],[80,205,"s",true],[580,580,"o",true],
[455,330,"e",false],[330,455,"n",true],[80,455,"n",false],[330,80,"o",true],
[205,580,"e",false],[580,80,"e",true],[705,330,"o",true]);

var solution102 = new Solution(102,[205,205,"e",false],[330,330,"e",false],[705,330,"s",true],
[455,455,"e",false],[330,580,"e",false],[80,580,"o",true],[455,80,"o",true],
[205,80,"e",true],[705,455,"s",true],[455,205,"s",false]);

var solution110 = new Solution(110,[580,455,"n",false],[205,330,"e",true],[705,580,"n",false],
[205,205,"o",false],[455,205,"o",false],[80,455,"n",true],[330,80,"0",false],
[705,330,"n",false],[455,455,"s",true],[580,80,"s",false]);

var solution112 = new Solution(112,[205,80,"e",false],[705,205,"s",false],[705,455,"n",false],[455,580,"o",false],[455,80,"o",false],
[80,455,"n",false],[205,330,"o",false],[205,580,"e",false],[330,205,"o",false],[580,330,"o",false]);

solutionD.push(solution81);
solutionD.push(solution74);
solutionD.push(solution73);

solutionC.push(solution89);
solutionC.push(solution92);
solutionC.push(solution95);

solutionE.push(solution102);
solutionE.push(solution110);
solutionE.push(solution112);