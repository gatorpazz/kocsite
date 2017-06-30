module.exports.home = function(req, res){
  res.render('index', {
    title: 'Knights of Columbus Council 12402',
    knightOfTheMonth: "Knight of the month for May was awarded to Brother Michael Schwartz.",
    familyOfTheMonth: "Family of the month for May was awarded to Mark and Liz Zeitler."
  });
};
