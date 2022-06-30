/*=============================================
=               IMPORT MODULES                =
=============================================*/
// Local modules
const client = require("../config/db.config")

/*=============================================
=                   QUERIES                   =
=============================================*/
// Get
const getUsers = async () => {
   // Query Conf
   const queryConf = {
      text: "SELECT * FROM usuarios",
   }

   try {
      const users = await client.query(queryConf)
      return users.rows
   } catch (err) {
      console.error(`Error getting users from DB:\n${err}`)
      throw err
   }
}

// Insert
const insertUser = async (obj) => {
   // Query Conf
   const queryConf = {
      text: "INSERT INTO usuarios (nombre, balance) VALUES ($1, $2) RETURNING *",
      values: Object.values(obj),
   }

   try {
      const res = await client.query(queryConf)
      console.log(`User added to DB`)
      return res.rows[0]
   } catch (err) {
      console.error(`Error adding user to DB:\n${err}`)
      throw err
   }
}

// Update
const updateUser = async (obj) => {
   // Query conf
   const queryConf = {
      text: "UPDATE usuarios SET nombre = $1, balance = $2 WHERE id = $3 RETURNING *",
      values: Object.values(obj),
   }

   try {
      const res = await client.query(queryConf)
      console.log(`User updated in DB`)
      return res.rows[0]
   } catch (err) {
      console.error(`Error updating user in DB:\n${err}`)
      throw err
   }
}

// Delete
const deleteUser = async (id) => {
   // Query conf
   const queryConf = {
      text: "DELETE FROM usuarios WHERE id = $1",
      values: [id],
   }

   try {
      const res = await client.query(queryConf)
      console.log(`User deleted from DB`)
      return res.rows[0]
   } catch (err) {
      console.error(`Error deleting user from DB:\n${err}`)
      throw err
   }
}

/*=============================================
=                   EXPORTS                   =
=============================================*/
module.exports = {
   getUser,
   insertUser,
   updateUser,
   deleteUser,
}
