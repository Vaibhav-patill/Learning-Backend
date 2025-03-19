exports.getAddHome = (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
  });
};
const registeredHomes = [];

exports.postAddHome = (req, res, next) => {
  console.log(
    "Home Registration successful for:",
    req.body,
    req.body.houseName
  );
  registeredHomes.push({ houseName: req.body.houseName });
  res.render("homeAdded", { pageTitle: "Home Added Successfully" });
};

exports.getHomes=(req, res, next) => {
    console.log(registeredHomes);
    res.render('home', {registeredHomes: registeredHomes, pageTitle: 'airbnb Home'});
  }

