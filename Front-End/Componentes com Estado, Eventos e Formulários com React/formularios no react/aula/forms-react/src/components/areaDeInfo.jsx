import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class AreaInfo extends Component {


    render() {
      const {eventChangeControl} = this.props
    return (
      <div>
        <textarea name="textA" maxLength={400} onChange={eventChangeControl} />
      </div>
    );
  }
};

AreaInfo.protoType = {
  eventChangeControl: PropTypes.func.isRequired
}