const express = require("express")
const app = express();
const PORT = 4000;
  
app.use(express.json());
    
app.get('/', (req, res) => {
    res.end("Nothing to see here...");
})

require("./api/index")(app);
  
app.listen(PORT, (err) => {
    if (err) console.error(err);
    console.log("Server listening on PORT", PORT);
});