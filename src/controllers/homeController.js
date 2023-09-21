const getHomepage = (req, res) => {
    res.send("Hello Home Page");
};

const getAbout = (req, res) => {
    res.render("sample.ejs");
};

module.exports = {
    getHomepage,
    getAbout,
};
