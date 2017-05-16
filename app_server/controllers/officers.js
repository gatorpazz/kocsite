module.exports.officers = function(req, res){
  res.render('officers', {
    title: 'Council Officers',
    officers: [{
      title: 'Chaplain',
      name: 'Fr. Martin Nguyen',
      picture: 'chaplain.jpg'
    }, {
      title: 'Grand Knight',
      name: 'George Olson',
      picture: 'grandknight.jpg'
    }, {
      title: 'Deputy Grand Knight',
      name: 'Patrick Schmidt',
      picture: 'deputygrandknight.jpg'
    }, {
      title: 'Chancellor',
      name: 'Steve Gertel',
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
      name: 'John Rice',
      picture: 'lecturer.png'
    }, {
      title: 'Advocate',
      name: 'Kraig Johnson',
      picture: 'advocate.jpg'
    }, {
      title: 'Warden',
      name: 'Jim Fields',
      picture: 'warden.jpg'
    }, {
      title: 'Inside Guard',
      name: 'Ralph Briscoe',
      picture: 'insideGuard.jpg'
    }, {
      title: 'Outside Guard',
      name: 'Gary Gagnon',
      picture: 'outsideGuard.jpg'
    }, {
      title: 'One Year Trustee',
      name: 'Rick Brennan',
      picture: 'oneYearTrustee.jpg'
    }, {
      title: 'Two Year Trustee',
      name: 'Bill Simpson',
      picture: 'twoYearTrustee.jpg'
    }, {
      title: 'Three Year Trustee',
      name: 'Ed Gold',
      picture: 'threeYearTrustee.jpg'
    }, ]
  });
};
