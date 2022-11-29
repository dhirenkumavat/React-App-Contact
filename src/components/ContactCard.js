import React from "react";
import user from "../image/user.png";
const ContactCard = (props) => {
  const { id, name, email } = props.contacts;
  const mystyle = {
    color: "red",
    marginTop: "7px",
    float: "right",
  };
  return (
    <div className="item">
      <img src={user} className="ui avatar image"></img>
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i className="trash alternate outline icon" style={mystyle}></i>
    </div>
  );
};
export default ContactCard;
