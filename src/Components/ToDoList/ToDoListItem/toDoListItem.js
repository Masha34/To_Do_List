import React from "react";
import { Link } from "react-router-dom";
import "./toDoListItem.css";
import { connect } from "react-redux";
import { deleteTask } from "../../../Actions/ToDoListActions";
import { saveData } from "../../../Services/api-service"

class ToDoListItem extends React.Component  {

    onDeleteToDoTask = () => {
        const { List, deleteTask } = this.props;
        const task = this.props;
        const newList = List.filter((contact_task) => {
            return contact_task.Id !== task.Id;
        });
        deleteTask(newList);
        saveData(newList).then(() => {
            this.setState({
                List: newList,
                isRedirect: true
            })
        }) 
    }

    render(){
        const { todoDescription, Deadline} = this.props;
        return(  
            <li className="rr">
            <div className="form-check"> 
                <label className="form-check-label"> 
                    <input className="checkbox" type="checkbox" /> 
                    { todoDescription } 
                    <i className="input-helper"></i>
                </label> 
            </div> 

            <div className="tt">
            <div className="deadline"><i className="fa fa-exclamation" aria-hidden="true"></i> { Deadline } 
            </div>
            <Link to="/edit-todo" className="table-link">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                        </span>
                    </Link>
            <i onClick={this.onDeleteToDoTask} className="remove mdi mdi-close-circle-outline"></i>
            </div>

        </li>
        // <li className="completed">
        //     <div className="form-check"> <label className="form-check-label"> 
        //     <input className="checkbox" type="checkbox" checked="" /> For what reason would it be advisable for me to think. 
        //     <i class="input-helper"></i> </label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
        // </li>
        // <li>
        //     <div className="form-check"> <label clasNames="form-check-label"> 
        //     <input className="checkbox" type="checkbox" />  it be advisable for me to think about business content? 
        //     <i className="input-helper"></i></label> </div> <i className="remove mdi mdi-close-circle-outline"></i>
        // </li>
        // <li>
        //     <div className="form-check"> <label class="form-check-label"> 
        //     <input className="checkbox" type="checkbox" /> Print Statements all
        //     <i className="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
        // </li>
        // <li className="completed">
        //     <div className="form-check"> <label class="form-check-label"> 
        //     <input className="checkbox" type="checkbox" checked="" /> Call Rampbo 
        //     <i className="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
        // </li>
        // <li>
        //     <div class="form-check"> <label class="form-check-label"> 
        //     <input class="checkbox" type="checkbox" /> Print bills 
        //     <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
        // </li>                     
        )
    }
}
const mapStateToProps = ({ToDoListReducer}) => {
    const { List } = ToDoListReducer;
    return { List }
}
const mapDispatchToProps = {
    deleteTask
}
export default connect(mapStateToProps, mapDispatchToProps)(ToDoListItem);