import s from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <>
      <li className={s.ContactItem}>
        <p className={s.ContactName}>{contact.name}</p>
        <p className={s.ContactNumber}>{contact.number}</p>
        <button
          className={s.ContactItemButton}
          type="button"
          onClick={() => onDeleteContact(contact.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;