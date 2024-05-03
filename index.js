const express = require("express");
const app = express();
require("dotenv").config();
const connectDb = require("./config/db");

const port = process.env.PORT || 3000;

//require all routes from routes folder
const productRoutes = require("./routes/productRoutes.js");
const teamRoutes = require("./routes/teamRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const roleRoutes = require("./routes/roleRoutes.js");
const pageRoutes = require("./routes/pageRoutes.js");
const eventRoutes = require("./routes/eventRoutes.js");
const contactFormRoutes = require("./routes/contactFormRoutes.js");
const contactFormEmailRoutes = require("./routes/contactFormEmailRoutes.js");
const leadRoutes = require("./routes/leadRoutes.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/products", productRoutes);
app.use("/teams", teamRoutes);
app.use("/users", userRoutes);
app.use("/roles", roleRoutes);
app.use("/pages", pageRoutes);
app.use("/events", eventRoutes);
app.use("/contact-form", contactFormRoutes);
app.use("/contact-form-email", contactFormEmailRoutes);
app.use("/leads", leadRoutes);


connectDb();

app.get("/", (req,res)=>{

    res.send("working fine")
})


app.listen(port, () => {

  console.log(`Server is running on port ${port}`);
});
