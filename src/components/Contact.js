import PropTypes from 'prop-types';

import React from "react";
import "./Contact.css";



function Contact(props) {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src={props.image}
        alt={props.user}
      />
      <div>
        <p className="name">{props.user}</p>
        <div className="status">
          <div className={props.status ? 'status-online' : 'status-offline' }/>
          <p className="status-text">{props.text ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  image: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,

};

export default Contact;
