const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port_env = process.env.PORT || 5000


// Config
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('views/images'))
app.use(express.static('views/styles'))

app.set("view engine", "hbs");

app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials/',
    extname: 'hbs',
    defaultLayout: 'main'
}));

// Routes
app.get('/', (req, res) => {
    res.render("home", {
        layout: "main",
    });
});

app.get('/interactive', (req, res) => {
    res.render("interactive", { layout: "main" });
})


// Listening
app.listen(port_env, () => {
    console.log(`app listening on port ${port_env}...`)
})