const { Router } = require("express");
const { loadJsxHomeScreen, loadHandlebarsHomeScreen } = require("../handlers");

const router = Router();

router.get("/", (_, res) => {
    res.render("start");
});

// JSX Routes
router.get("/jsx", loadJsxHomeScreen);

// Handlebars Routes
router.get("/handlebars", loadHandlebarsHomeScreen);

module.exports = router;
