const initialState = {
    List: [],
    CurrentToDo: ""
}

const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TASK_LIST_LOADED":  //контакт ліст з бази
            return {
                ...state,
                List: action.payload
            }
         case "ADD_NEW_TASK":
            return {
                List: [
                    ...state.List,
                    action.payload]
            }
        case "DELETE_TASK":  
            return {
                ...state,
                List: action.payload
            }
        case "SEARCH_TASK":  
            if (action.payload === 0) {
                return state;
            }
            const tmpList = state.List.slice();
            let newList = tmpList.filter((item) => {
                return item.todoDescription.toLowerCase().indexOf(action.payload.toLowerCase()) > -1;
            });
            if (newList.length === 0) {
                return {
                    ...state,
                    CurrentToDo: []
                }
            } else {
                return {
                    ...state,
                    CurrentToDo: newList
                }
            }

        
            
        default:
            return state;
    }
}

export default ToDoListReducer;