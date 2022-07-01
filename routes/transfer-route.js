/*=============================================
=              IMPORT MODULES                =
=============================================*/
// 3rd party modules
const express = require("express")
// Local modules
const transferController = require("../controllers/transfer-controller")

/*=============================================
=                    INIT                     =
=============================================*/

const router = express.Router()

/*=============================================
=                   ROUTES                    =
=============================================*/
router.route("/").get(transferController.get).post(transferController.add)
/*=============================================
=                   EXPORTS                   =
=============================================*/
module.exports = router
