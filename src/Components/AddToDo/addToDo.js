import React, { Fragment} from "react";
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from "react-router-dom";
import "./addToDo.css";
import { saveData } from "../../Services/api-service";
import { connect } from "react-redux";
import { addNewTask  } from "../../Actions/ToDoListActions";

class AddToDo extends React.Component {

    state = {
        // List: [
        //     {
            "todoDescription": "",
            "Deadline": "",
            "isRedirect": false
    //     }
    // ],
    //     curCont: ""
    }
    gettodoDescription = (event) => {
        // console.log(event.target.value)
        this.setState({
            todoDescription: event.target.value
        })
    }
    getDeadline = (event) => {
        this.setState({
            Deadline: event.target.value
        })
    }
    addNewTasks = (event) =>{
        event.preventDefault();
        const { todoDescription, Deadline } = this.state;
        const Id = uuidv4();
        const newItem = { Id, todoDescription, Deadline };
        const { List, addNewTask } = this.props;
        addNewTask(newItem);
        List.push(newItem);
        saveData(List).then(() => {
            this.setState({
                isRedirect: true
            })
        })
    }


    // addNewContact = (event) => {
    //     event.preventDefault();
    //     console.log("addNewContact");
    //     const { Avatar, Name, Role, Status, Email, Gender } = this.state;
    //     let Created = Date.now();
    //     const Id = uuidv4();
    //     // Створимо новий обєкт
    //     const newContact = { Id, Avatar, Name, Role, Status, Email, Gender, Created };
    //     // console.log("newContact = ", newContact)

    //     // const { onAddContact } = this.props;
    //     const { List } = this.props;
      
    //     // List.push(newContact)

    //      // addNewContact
    //      const newList = [...List, newContact]

    //     // onAddContact(newContact);
    //     saveData(newList);
    //     this.setState({
    //         isRedirect: true
    //     })
    // }
    
    render(){   

        const { isRedirect } = this.state;

        if (isRedirect) {     
            return (
                <Redirect to="/" />
            )
        }

        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="container bootstrap snippets bootdey">
                            <div className="row ng-scope">
                                <div className="col-md-12">
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <div className="pull-right">
                                            </div>
                                            <div className="h4 text-center">Needed To Do Tasks</div>
                                            <div className="row pv-lg">
                                                <div className="col-lg-2"></div>
                                                <div className="col-lg-8">
                                                    <form onSubmit={this.addNewTasks} className="form-horizontal ng-pristine ng-valid">
                                                    {/* <form className="form-horizontal ng-pristine ng-valid"> */}
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">To Do Description</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.gettodoDescription} className="form-control" id="inputContact1"
                                                                    type="text" placeholder="Name" name='name' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label"
                                                                htmlFor="inputContact3">Deadline for this case</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getDeadline} className="form-control" id="inputContact3"
                                                                    type="text" placeholder="Role" name='role' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="col-sm-offset-2 col-sm-10">
                                                                <button className="btn btn-info" type="submit">Add ToDo task</button>
                                                            </div>
                                                        </div>
                                                    </form>
        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
            )
    }
    
}
const mapStateToProps = ({ToDoListReducer}) => {
    const { List } = ToDoListReducer;
    return { List }
}
const mapDispatchToProps = {
    addNewTask 
}
export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);