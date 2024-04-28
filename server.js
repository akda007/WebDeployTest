const express = require("express");
const routes = require("./routes")

const port = 80;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(routes);

app.set("views", "./src/views");
app.set("view engine", 'ejs');

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})