module.exports.home = function(req, res){
  res.render('index', {
    title: 'Knights of Columbus Council 12402',
    knightOfTheMonth: "Knight of the month for May was awarded to Brother Michael Schwartz. Brother Michael helped out with the Youth BBQ, Laps for Life, is a regular at the monthly pancake breakfast, and effectively coordinated the building of the handicap ramp for the Marine veteran with the Center for Independent Living. Brother Michael will also be taking on his 1st officer position this fraternal year. Congrats to Brother Michael.",
    familyOfTheMonth: "Family of the month for May was awarded to Mark and Liz Zeitler. Brother Steven and Susan continue to provide outstanding support to the council, to the community, and to the church. Brother Steven was cooking up white cod at the 1st Fish Fry, helped at the Youth BBQ, regularly Feeds the Homeless, participated in Laps for Life and he represents the council at the monthly Stewardship meeting. Brother Steven and Susan are lectors and Susan serves as a Eucharistic Minister and regularly provides homemade baked goods for the monthly baked goods sale. Brother Steven and Susan have also been the lead FOCCUS couple. Thanks for setting such a wonderful example. Congrats!"
  });
};
