import React from "react";
import "./toDoListItem.css";
import { connect } from "react-redux";
import { deleteTask } from "../../../Actions/ToDoListActions";
import { saveData } from "../../../Services/api-service"

class ToDoListItem extends React.Component  {

    onDeleteToDoTask = () => {
        const { List, deleteTask } = this.props;
        const contact = this.props;
        const newList = List.filter((contact_item) => {
            return contact_item.todoDescription !== contact.todoDescription;
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
            <li>
            <div className="form-check"> 
                <label className="form-check-label"> 
                    <input className="checkbox" type="checkbox" /> 
                    { todoDescription } 
                    <i className="input-helper"></i>
                </label> 
            </div> 
            <div className="deadline"><i className="fa fa-exclamation" aria-hidden="true"></i> { Deadline } </div>
            <i onClick={this.onDeleteToDoTask} className="remove mdi mdi-close-circle-outline"></i>
            
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