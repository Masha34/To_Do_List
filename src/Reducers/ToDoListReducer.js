const initialState = {
    List: []
}

const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TASK_LIST_LOADED":  //контакт ліст з бази
            return {
                List: action.payload
            }
         case "ADD_NEW_TASK":
            return {
                List: [
                    ...state.List,
                    action.payload]
            }
        default:
            return state;
    }
}

export default ToDoListReducer;