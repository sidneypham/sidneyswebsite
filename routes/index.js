var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res) {
  res.render("content/index", {
  	title: "Sidney's Website"
  });
});

router.get("/about", function(req, res) {
	res.render("content/about", {
		title: "Sidney's Website | About"
	});
});

router.get("/experimental", function(req, res) {
	res.render("content/experimental", {
		title: "Sidney's Website | Experimental Page"
	});
});

router.get("/randomiser", function(req, res) {
	res.render("content/randomiser", {
		title: "Sidney's Website | List Randomiser"
	});
});

router.get("/chat", function(req, res) {
	res.render("content/chat", {
		title: "Sidney's Website | Chat"
	});
});

router.get("/other", function(req, res) {
	res.render("content/other", {
		title: "Sidney's Website | Other"
	});
});

router.get("/secret", function(req, res) {
	res.render("content/secret", {
		title: "Sidney's Website | Secret Page"
	})
})


router.get("*", function(req, res) {
    res.status(404).render("404");
});

module.exports = router;