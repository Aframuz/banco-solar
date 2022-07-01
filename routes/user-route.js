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
router.route("/:id").put(userController.update).delete(userController.deleteU)
router.route("/").get(userController.get).post(userController.add)
/*=============================================
=                   EXPORTS                   =
=============================================*/
module.exports = router
