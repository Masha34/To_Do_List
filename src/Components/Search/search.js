import React, {Fragment} from "react";
import { searchTask } from "../../Actions/ToDoListActions";
import { connect } from "react-redux";

import "./search.css";

const Search = ({searchTask}) => {
    
    const onSearch = (event) => {
        searchTask(event.target.value)
    }

    return(
        <Fragment>
        <div className="container">
             <div className="row container d-flex justify-content-center">
                <div className="col-lg-12">
                    <div className="search_input">
                        <div className="add-items d-flex"> <input onChange={onSearch} type="text" className="form-control todo-list-input" placeholder="What do you need to do today?" />
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
        </Fragment>
    )
}
// const mapStateToProps = ({ToDoListReducer}) => {
//     const { List } = ToDoListReducer;
//     return { List }
// }
const mapDispatchToProps = {
    searchTask
}
export default connect(null, mapDispatchToProps)(Search);