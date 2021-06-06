import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { deleteContact } from "../../actions/contactAction";

import { useDispatch } from "react-redux";

const Contact = ({ contact,checkAll }) => {
  const dispatch = useDispatch();
  const { name, phone, email, id } = contact;
  return (
    <tr className="contact_table_row">
      <td>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={checkAll}
            id="flexCheckDefault"
          />
          <label className="form-check-label" for="flexCheckDefault"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size={40} round={true} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td className="actions">
        <Link to={`/contacts/EditContact/${id}`} className="action_btn">
          <span className="material-icons ">edit</span>
        </Link>
        <Link
          to="#"
          onClick={() => dispatch(deleteContact(id))}
          className="action_btn"
        >
          <span className="material-icons text-danger">remove_circle</span>
        </Link>
      </td>
    </tr>
  );
};
export default Contact;
