// There is no reason for the name here except as an
// example of how to set something for the POST
let names = [];

const hostIndex = (req, res) => {
  return res.render('index', {
    title: 'Home Page',
    username: names[names.length - 1] || 'Unknown',
  })
};

const hostPage1 = (req, res) => {
  return res.render('page1', {
    title: 'Page 1',
    names: names.filter(x => names.length - 10),
  })
};

const hostPage2 = (req, res) => {
  return res.render('page2');
};

const getName = (req, res) => {
  return res.json({ names });
};

const setName = (req, res) => {
  if(!req.body.firstname || !req.body.lastname) {
    return res.status(400).json({ 
      error: 'First and last name are required',
      id: 'setNameMissingParams',
    });
  }

  names.push(`${req.body.firstname} ${req.body.lastname}`);
  return res.json({name: names[names.length - 1]});
};

const notFound = (req, res) => {
  return res.status(404).render('notFound', {
    url: req.url,
  });
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  getName,
  setName,
  notFound,
};
