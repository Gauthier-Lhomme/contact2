import PropTypes from "prop-types";

import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.image} alt={this.props.user} />
        <div>
          <p className="name">{this.props.user}</p>
          <div
            onClick={(event) => {
              const switchStatus = !this.state.online;
              this.setState({ online: switchStatus });
            }}
            className="status"
          >
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            />
            <p className="status-text">
              {this.state.online ? "Online" : "Offline"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  image: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  text: PropTypes.bool.isRequired,
};

export default Contact;
