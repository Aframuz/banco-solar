/*=============================================
=               IMPORT MODULES                =
=============================================*/
// Local modules
const client = require("../config/db.config")

/*=============================================
=                   QUERIES                   =
=============================================*/
// Get, RETURN (date, sender Name, receiver Name, amount)
const get = async () => {
   // Query Conf
   const queryConf = {
      text: "SELECT tr.fecha, u1.nombre as emisor, u2.nombre as receptor, tr.monto FROM transferencias tr LEFT JOIN usuarios u1 ON u1.id = tr.emisor LEFT JOIN usuarios u2 ON u2.id = tr.receptor;",
   }

   try {
      const transfers = await client.query(queryConf)
      return transfers.rows
   } catch (err) {
      console.error(`Error getting transfers from DB:\n${err}`)
      throw err
   }
}

// Insert transfer
const insert = async (obj) => {
   // Queries Conf
   const insertTransfer = {
      text: "INSERT INTO transferencias (emisor, receptor, monto, fecha) VALUES ($1, $2, $3, NOW()) RETURNING *",
      values: Object.values(obj),
   }
   const addBalanceSend = {
      text: "UPDATE usuarios SET balance = balance - $3 WHERE id = $1",
   }
   const subBalanceReceiv = {
      text: "UPDATE usuarios SET balance = balance + $3 WHERE id = $2",
   }

   try {
      const res = await client.transaction([insertTransfer, addBalanceSend, subBalanceReceiv])
      console.log(`transfer added to DB`)
      return res.rows[0]
   } catch (err) {
      console.error(`Error adding transfer to DB:\n${err}`)
      throw err
   }
}
/*=============================================
=                   EXPORTS                   =
=============================================*/
module.exports = {}
