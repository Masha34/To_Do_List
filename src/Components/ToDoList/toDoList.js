import React, {Fragment, useEffect} from "react"; //useEffect замінить componentDidMounth()
import {connect} from "react-redux";
import ToDoListItem from "./ToDoListItem/toDoListItem"
// import { updateDatabase } from "../../Services/api-service";
// import { getAllContacts } from "../../Actions/ContactListActions";

// const ContactList = ({List, onStatusChange, onDelete, onEdit }) => {
// const ToDoList = ({List}) => {
const ToDoList = () => {
    // // console.log("ContactList ", List);
    // useEffect(() => {
    //     // updateDatabase()
    //     updateDatabase().then(data => { //відловлюємо нашу відповідь з api-services
    //         // console.log("data ===>>", data);
    //         getAllContacts(data);
    //     })
    // // }, [])
    // })
    // const item = List.map(contact => {
    //      return(
    //          <ContactItem Id={contact.Id} key={contact.Id} Avatar={contact.Avatar} Name={contact.Name} Created={contact.Created} Role={contact.Role} Status={contact.Status} Email={contact.Email} Gender={contact.Gender} />
    //      )
    // })
    return(
        <Fragment>
            <div className="container">
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-md-12">
                            <div className="card px-3">
                                <div className="card-body">
                                    <div className="add-items d-flex"> <input type="text" className="form-control todo-list-input" placeholder="What do you need to do today?" />
                                    </div>
                                    <div className="list-wrapper">
                                        <ul className="d-flex flex-column-reverse todo-list">
                                           <ToDoListItem />
                                        </ul>
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
// const mapStateToProps = ({ToDoListReducer}) => {
//     const { List } = ToDoListReducer;
//     return { List }
// }
// const mapDispatchToProps = {
//     getAllContacts
// }
export default connect()(ToDoList);