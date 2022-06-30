/*=============================================
=              IMPORT MODULES                =
=============================================*/
// Local modules
const db = require("../models/user")

/*=============================================
=                  HANDLERS                   =
=============================================*/
// Get
const get = async (req, res) => {
   try {
      const users = await db.getUser()
      res.status(200).json(users)
   } catch (err) {
      console.error(`Error getting users from DB:\n${err}`)
      res.status(500).send("Error getting users")
   }
}

// Inserting
const add = async (req, res) => {
   const newUser = req.body

   try {
      const insertedUser = await db.insertUser(newUser)
      res.status(201).json(insertedUser)
   } catch (err) {
      console.error(`Error adding user to DB:\n${err}`)
      res.status(500).send("Error adding user")
   }
}

// Updating
const update = async (req, res) => {
   const newUserData = {
      id: req.params.id,
      ...req.body,
   }

   try {
      const updatedUser = await db.updateUser(newUserData)
      res.status(201).json(updatedUser)
   } catch (err) {
      console.error(`Error updating user in DB:\n${err}`)
      res.status(500).send("Error updating user")
   }
}

// Deleting
const deleteU = async (req, res) => {
   const id = req.params.id

   try {
      const deletedUser = await db.deleteUser(id)
      res.status(201).json(deletedUser)
   } catch (err) {
      console.error(`Error deleting user from DB:\n${err}`)
      res.status(500).send("Error deleting user")
   }
}

/*=============================================
=                   EXPORTS                   =
=============================================*/
module.exports = {
   get,
   add,
   update,
   deleteU,
}
