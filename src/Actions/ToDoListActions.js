
// import ToDoList from "../Components/ToDoList/toDoList";

export const getAllList = (todoList) => {
    return {
        type: "TASK_LIST_LOADED",
        payload: todoList  
    }
}
export const addNewTask = (todoList) => {
    return {
        type: "ADD_NEW_TASK",
        payload: todoList  
    }
}
// export const addNewItem = (item) => {
//     return {
//         type: "ADD_NEW_ITEM",
//         payload: item
//     }
// }