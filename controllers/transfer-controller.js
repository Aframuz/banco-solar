/*=============================================
=              IMPORT MODULES                =
=============================================*/
// Local modules
const db = require("../models/transfer")

/*=============================================
=                  HANDLERS                   =
=============================================*/
// Get
const get = async (req, res) => {
   try {
      const transfers = await db.getTransfers()
      res.status(200).json(transfers)
   } catch (err) {
      console.error(`Error getting transfers from DB:\n${err}`)
      res.status(500).send("Error getting transfers")
   }
}

// Inserting
const add = async (req, res) => {
   const newTransfer = req.body

   try {
      const insertedTransfer = await db.insertTransfer(newTransfer)
      res.status(201).json(insertedTransfer)
   } catch (err) {
      console.error("Error adding transfer to DB:\n${err}")
      res.status(500).send("Error adding transfer")
   }
}

/*=============================================
=                   EXPORTS                   =
=============================================*/
module.exports = {
   get,
   add,
}
