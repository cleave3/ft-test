exports.loadHandlebarsHomeScreen = async (_, res) => {
    // This object is passed to the Handlebars template.
    const templateData = {
        pageTitle: "Home",
        content: "Hello World!",
    };

    // This renders the Handlebars view at `views/home.handlebars`.
    res.render("handlebars/home", templateData);
};
