const https = require("https");
const { ASSET_URL } = require("../utils");

exports.loadJsxHomeScreen = async (_, res) => {
    https
        .get(ASSET_URL, response => {
            let data = [];
            response.on("data", chunk => {
                data.push(chunk);
            });

            response.on("end", () => {
                const result = JSON.parse(Buffer.concat(data).toString());
                res.render("jsx/Main.jsx", { error: null, data: result?.data?.items });
            });
        })
        .on("error", ({ message }) => {
            res.render("jsx/Main.jsx", { error: message, data: [] });
        });
};

exports.loadHandlebarsHomeScreen = async (_, res) => {
    // This object is passed to the Handlebars template.
    const templateData = {
        pageTitle: "Home",
        content: "Hello World!",
    };

    // This renders the Handlebars view at `views/home.handlebars`.
    res.render("handlebars/home", templateData);
};
