import axios from "axios";

function getAllContacts() {
  /* const esempioDiToken = { headers: {"Authorization" : `Bearer ${userLog.accessToken}`} } */
  return function (dispatch) {
    return axios
      .get("http://localhost:3000/contacts")
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Error: " + response.status);
        }
        return dispatch({
          type: "LOADED_ALL_CONTACTS",
          payload: response.data,
        });
      })
      .catch((error) => {
        throw new Error("Error: " + error);
      });
  };
}

function removeContact(id) {
  return function (dispatch) {
    return axios
      .delete("http://localhost:3000/contacts/" + id)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Error: " + response.status);
        }
        return dispatch({ type: "REMOVE_CONTACT", id: id });
      })
      .catch((error) => {
        throw new Error("Error: " + error);
      });
  };
}

function addContact(obj) {
  return function (dispatch) {
    return axios
      .post("http://localhost:3000/contacts", obj)
      .then((response) => {
        if (response.status !== 201) {
          throw new Error("Error: " + response.status);
        }
        return dispatch({ type: "ADD_CONTACT", contact: response.data });
      })
      .catch((error) => {
        throw new Error("Error: " + error);
      });
  };
}

function updateContact(obj) {
  return function (dispatch) {
    return axios
      .put("http://localhost:3000/contacts/" + obj.id, obj)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Error: " + response.status);
        }
        return dispatch({ type: "UPDATE_CONTACT", contact: response.data });
      })
      .catch((error) => {
        throw new Error("Error: " + error);
      });
  };
}

// Login/Register

function register(obj) {
  return function (dispatch) {
    return axios
    .post("http://localhost:3000/users", obj)
    .then((response) => {
      if (response.status !== 201) {
        throw new Error("Error: " + response.status);
      }
    })
    .catch((error) => {
      throw new Error("Error: " + error);
    });
  }
}

function login(obj) {
  return function (dispatch) {
    return axios
      .post("http://localhost:3000/login", obj)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Error: " + response.status);
        }
        //console.log(response.data);
        localStorage.setItem("userLogin", JSON.stringify(response.data));
        return  dispatch({ type: "LOGIN_USER", user: response.data });
      })
      .catch((error) => {
        throw new Error("Error: " + error);
      });
  }
}

function logout() {
  return function (dispatch) {
    return dispatch({ type: "LOGOUT_USER" });
  }
}
export { getAllContacts, removeContact, addContact, updateContact, register, login, logout };