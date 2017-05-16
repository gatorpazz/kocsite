module.exports.home = function(req, res){
  res.render('index', {
    title: 'Knights of Columbus Council 12402',
    knightOfTheMonth: "Knight of the month for March was awarded to Brother Raul Rodriguez. Brother Raul participated in the 1st fish fry on Friday, Habitat for Humanity on Saturday, and Fed the Homeless on Monday – all over 72 hours. Brother Raul joined our council in Sep 2016 as a 1st degree and made his 2nd, 3rd, and 4th degrees by Nov 2016. Congrats on this well deserved award.",
    familyOfTheMonth: "Family of the month for March was awarded to Mark and Liz Zeitler. Brother Mark and family have been engaged in a number of activities over the past month starting with the St. Patrick’s Day Dinner, Laps for Life, and our 1st fish fry. Brother Mark & Liz participated in Cursillo and Mark did a stellar job as the lead for That Man Is You. All are also very active at St. James School. Thanks to the Zeitler family for the tremendous example that they are setting and congrats on this well deserved award."
  });
};
