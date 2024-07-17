import { FaUserLarge, FaPhone } from "react-icons/fa6";

import css from "./Contact.module.css";

export default function Contact({
  contactInfo: { name, number, id },
  onDelete,
}) {
  return (
    <div className={css.container}>
      <div>
        <div className={css.contactsInfo}>
          <FaUserLarge size={24} />
          <p className={css.name}>{name}</p>
        </div>

        <div className={css.contactsInfo}>
          <FaPhone size={24} />
          <p className={css.number}>{number}</p>
        </div>
      </div>

      <button
        type="button"
        className={css.button}
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
