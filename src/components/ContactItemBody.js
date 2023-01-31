import React from "react";

function ContactItemBody({ name, tag }) {
  return (
    <div className="contact-item__body">
      <div className="contact-item__title">{name}</div>
      <div className="contact-item__username">{tag}</div>
    </div>
  );
}
export default ContactItemBody;
