import React from 'react';
import { Input } from 'reactstrap';
import Base from '../Base';

class TERInput extends Base {
  preProcessTextChange(text) {
    if (text.trim().length === 0) {
      return null;
    }

    return text;
  }

  renderControl() {
    return (
      <Input
        className="form-control"
        {...this.props}
        onChange={event => this.onChangeText(event.nativeEvent.target.value)}
      />
    );
  }
}

export default TERInput;
