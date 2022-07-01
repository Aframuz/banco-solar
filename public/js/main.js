/*=============================================
=               IMPORT MODULES                =
=============================================*/
import fetchData from "./fetch.js"
import elements from "./dom-elements.js"

/*=============================================
=              GLOBAL VARIABLES               =
=============================================*/
let editMode = false

let users = []
let transfers = []

/*=============================================
=                FETCH METHODS                =
=============================================*/
const getUsers = async () => {
   const users = await fetchData("/users", "GET")
   return users
}

const addUser = async () => {
   const newUserData = {} // FROM SOMEWHERE
   await fetchData("/users", "POST", newUserData)
   // RELOAD MAYBE?
}

const updateUser = async (userId) => {
   const updatedUserData = {} // FROM SOMEWHERE
   const url = `/users/${userId}`
   await fetchData(url, "PUT", updatedUserData)
   // RELOAD MAYBE?
}

const deleteUser = async (userId) => {
   const url = `/users/${userId}`
   await fetchData(url, "DELETE")
   // RELOAD MAYBE?
}

const setInfoModal = (nombre, balance, id) => {
   $("#nombreEdit").val(nombre)
   $("#balanceEdit").val(balance)
   $("#editButton").attr("onclick", `editUsuario('${id}')`)
}

const editUsuario = async (id) => {
   const name = $("#nombreEdit").val()
   const balance = $("#balanceEdit").val()
   try {
      const { data } = await axios.put(`/usuario?id=${id}`, {
         name,
         balance,
      })
      $("#exampleModal").modal("hide")
      location.reload()
   } catch (e) {
      alert("Algo salió mal..." + e)
   }
}

/*=============================================
=              DOM MANIPULATION              =
=============================================*/
