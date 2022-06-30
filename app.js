/*=============================================
=               IMPORT MODULES               =
=============================================*/
// 3rd party modules
const express = require("express")
// Local modules
const userRoute = require("./routes/user-route")
const transferRoute = require("./routes/transfer-route")
// Core modules
const path = require("path")
/*=============================================
=                  VARIABLES                  =
=============================================*/
const PORT = process.env.PORT || 3000
const publicDir = path.join(__dirname, "public")
const app = express()
/*=============================================
=         MIDDLEWARE & APP SETTINGS           =
=============================================*/
app.use(express.static(publicDir))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set("view engins", "pug")
/*=============================================
=                   ROUTES                    =
=============================================*/
app.use("/users", userRoute)
app.use("/transfers", transferRoute)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
