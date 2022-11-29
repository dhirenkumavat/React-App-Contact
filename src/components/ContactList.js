import React from "react";
import ContactCard from "./ContactCard";
const ContactList = (props) => {
  console.log(props);
  const renderContract = props.contacts.map((contacts) => {
    return <ContactCard contacts={contacts}></ContactCard>;
  });
  return <div className="ui celled list">{renderContract}</div>;
};

export default ContactList;
