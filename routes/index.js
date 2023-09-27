const { Router } = require("express");
const { loadJsxHomeScreen } = require("../handlers/jsxHandler");
const { loadHandlebarsHomeScreen } = require("../handlers/handleBarsHandler");

const router = Router();

router.get("/", (_, res) => {
    res.render("start");
});

// JSX Routes
router.get("/jsx", loadJsxHomeScreen);

// Handlebars Routes
router.get("/handlebars", loadHandlebarsHomeScreen);

module.exports = router;
