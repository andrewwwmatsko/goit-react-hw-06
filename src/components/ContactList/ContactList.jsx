import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

export default function ContactList({ data, onDelete }) {
  return (
    <ul className={css.list}>
      {data.map((contact) => {
        return (
          <li key={contact.id} className={css.item}>
            <Contact contactInfo={contact} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}
