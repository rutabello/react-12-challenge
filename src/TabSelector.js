import React, { Component } from 'react';

class TabSelector extends Component {

  render() {
    return (
      <div className="TabSelector">
        <button
          id="home"
          onClick={this.props.handleChangeTab}
          className={this.props.activeId === 'home' ? 'active' : ''}
        >
          Home
        </button>
        <button
          id="about"
          onClick={this.props.handleChangeTab}
          className={this.props.activeId === 'about' ? 'active' : ''}
        >
          About
        </button>
        <button
          id="contact"
          onClick={this.props.handleChangeTab}
          className={this.props.activeId === 'contact' ? 'active' : ''}
        >
          Contact
        </button>
      </div>
    );
  }
}

export default TabSelector;
