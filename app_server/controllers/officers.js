module.exports.officers = function(req, res){
  res.render('officers', {
    title: 'Council Officers',
    officers: [{
      title: 'Chaplain',
      name: 'Fr. Martin Nguyen',
      picture: 'chaplain.jpg'
    }, {
      title: 'Grand Knight',
      name: 'Patrick Schmidt',
      picture: 'grandknight.jpg'
    }, {
      title: 'Deputy Grand Knight',
      name: 'Steve Gertel',
      picture: 'deputygrandknight.jpg'
    }, {
      title: 'Chancellor',
      name: 'John Rice',
      picture: 'chancellor.jpg'
    }, {
      title: 'Recorder',
      name: 'Michael Pascuzzi',
      picture: 'recorder.jpg'
    }, {
      title: 'Financial Secretary',
      name: 'Yebrail Brennan',
      picture: 'financialsecretary.jpg'
    }, {
      title: 'Treasurer',
      name: 'Patrick Hayes',
      picture: 'treasurer.jpg'
    }, {
      title: 'Lecturer',
      name: 'Gary Gagnon',
      picture: 'lecturer.png'
    }, {
      title: 'Advocate',
      name: 'Kraig Johnson',
      picture: 'advocate.jpg'
    }, {
      title: 'Warden',
      name: 'Ralph Briscoe',
      picture: 'warden.jpg'
    }, {
      title: 'Inside Guard',
      name: 'Michael Schwartz',
      picture: 'insideGuard.jpg'
    }, {
      title: 'Outside Guard',
      name: 'Raul Rodriguez',
      picture: 'outsideGuard.jpg'
    }, {
      title: 'One Year Trustee',
      name: 'George Olson',
      picture: 'oneYearTrustee.jpg'
    }, {
      title: 'Two Year Trustee',
      name: 'Rick Brennan',
      picture: 'twoYearTrustee.jpg'
    }, {
      title: 'Three Year Trustee',
      name: 'Bill Simpson',
      picture: 'threeYearTrustee.jpg'
    }, ]
  });
};
