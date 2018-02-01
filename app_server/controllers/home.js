module.exports.home = function(req, res){
  res.render('index', {
    title: 'Knights of Columbus Council 12402',
    knightOfTheMonth: "Knight of the month for January was awarded to Brother Jerry Tisdell. Brother Jerry Tisdell did an excellent job supporting the seminarian luncheon, a recent pancake breakfast, and attended the annual Christmas party.  Congrats Brother Jerry.",
    familyOfTheMonth: "Family of the month for January was awarded to the Gertel Family. DGK Steven Gertel did a wonderful job stepping up as the Acting Grand Knight for the past 2 months.  Brother Steven is a regular at the Feeding of the Homeless, assisted at the Coalition for the Homeless, regularly attends That Man Is You, and is a lector at St. James.  Susan always supports the homemade baked goods sale, serves as a Eucharistic Minister and hosts a weekly woman’s bible study.  Congrats!"
  });
};
