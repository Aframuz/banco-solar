/*=============================================
=              IMPORT MODULES                =
=============================================*/
// 3rd party modules
const express = require("express")
// Local modules
const userController = require("../controllers/user-controller")

/*=============================================
=                    INIT                     =
=============================================*/

const router = express.Router()

/*=============================================
=                   ROUTES                    =
=============================================*/
router.route("/")
/*=============================================
=                   EXPORTS                   =
=============================================*/
module.exports = router
