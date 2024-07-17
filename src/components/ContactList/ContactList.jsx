import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";

import Contact from "../Contact/Contact";

import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id} className={css.item}>
            <Contact contactInfo={contact} />
          </li>
        );
      })}
    </ul>
  );
}
