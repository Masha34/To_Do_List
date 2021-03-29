// URL = "https://todolist-1e639-default-rtdb.firebaseio.com/List.json";
URL = "https://todolistnew-5fdaf-default-rtdb.firebaseio.com/List.json";


  export const updateDatabase = () => {
    const data = fetch(URL)  
    .then(responce => {
      // console.log("update => ", responce)
      return responce.json();
    // }).catch(err => {
    //   return err;
    }).then(data => {
      // console.log("update ", data);
      if (data !== null) {
               return data
      } else {
        return []
      }   
    })
    // .catch(err => console.log(err))
    .catch(err => {
        return err
    })
    return data;
  }

  // Add new todo
    export const saveData = (todoList) => {
    //   console.log("saveData ", contactList)
    const response = fetch(URL, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todoList), // данные могут быть 'строкой' или {объектом}!
    }).then(response => {
      return response;
      // console.log("saveDate responce =>", response);
    }).catch(err => {
      return err;
    });
    return response
  }

