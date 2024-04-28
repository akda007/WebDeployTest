module.exports = {
    async getRoot(req, res) {
        res.status(200).render("root.ejs");
    }
}