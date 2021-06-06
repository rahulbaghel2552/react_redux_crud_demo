import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Contact from "./Contact";
import {
  selectAllContact,
  clearAllContact,
  deleteAllContact,
} from "../../actions/contactAction";

const Contacts = () => {
  const dispatch = useDispatch();
  const [checkAll, setCheckAll] = useState(false);
  const contacts = useSelector((state) => state.contact.contacts);
  const selectContacts = useSelector(
    (state) => state.contact.selectAllContacts
  );

  useEffect(() => {
    if (checkAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [checkAll]);

  return (
    <>
      {selectContacts.length > 1 ? (
        <button
          className="btn btn-danger mb-2"
          onClick={() => dispatch(deleteAllContact())}
        >
          Delete All
        </button>
      ) : null}

      <table className="contact_table shadow ">
        <thead className="bg-dark text-white font-bold ">
          <tr className="contact_table_row">
            <th>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  onClick={() => setCheckAll(!checkAll)}
                />
                <label
                  className="form-check-label"
                  for="flexCheckDefault"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Phone No.</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Contact contact={contact} key={contact.id} checkAll={checkAll} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Contacts;
