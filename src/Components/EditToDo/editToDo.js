import React, { Fragment} from "react";
// import { v4 as uuidv4 } from 'uuid';
import { Redirect } from "react-router-dom";
import "./editToDo.css";
import { saveData } from "../../Services/api-service";
import { connect } from "react-redux";
import { editToDo  } from "../../Actions/ToDoListActions";

class EditToDo extends React.Component {

    state = {
            "todoDescription": this.props.List.todoDescription,
            "Deadline": this.props.List.Deadline,
            // "Deadline": this.props.CurrentToDo.Deadline,
            "isRedirect": false
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


    
    
    render(){   

        const { todoDescription, isRedirect, Deadline } = this.state;

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
                                            <div className="h4 text-center">Edit To Do Tasks</div>
                                            <div className="row pv-lg">
                                                <div className="col-lg-2"></div>
                                                <div className="col-lg-8">
                                                    <form onSubmit={this.editTasks} className="form-horizontal ng-pristine ng-valid">
                                                    {/* <form className="form-horizontal ng-pristine ng-valid"> */}
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label" htmlFor="inputContact1">To Do Description</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.gettodoDescription} className="form-control" id="inputContact1"
                                                                    type="text" placeholder={ todoDescription } name='name' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-3 control-label"
                                                                htmlFor="inputContact3">Deadline for this case</label>
                                                            <div className="col-sm-12">
                                                                <input onChange={this.getDeadline} className="form-control" id="inputContact3"
                                                                    type="text" placeholder={ Deadline } name='role' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="col-sm-offset-2 col-sm-10">
                                                                <button className="btn btn-info" type="submit">Change ToDo task</button>
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
    editToDo
}
export default connect(mapStateToProps, mapDispatchToProps)(EditToDo);