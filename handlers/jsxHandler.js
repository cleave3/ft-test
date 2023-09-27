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
