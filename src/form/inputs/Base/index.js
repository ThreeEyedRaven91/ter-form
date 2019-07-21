import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  FormGroup,
} from 'reactstrap';
import helpers from './helper';

import Title from './Title';
import TitleRight from './TitleRight';
import MessageError from './MessageError';

class BaseItem extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = {
      edited: false,
    };
  }

  onChangeText(text) {
    const { edited } = this.state;
    if (!edited) {
      this.setState({ edited: true });
    }

    const { onChange, inputKey } = this.props;
    const completeText = this.preProcessTextChange(text);
    onChange({
      key: inputKey,
      value: completeText,
    });
  }

  preProcessTextChange(text) {
    return text;
  }

  renderControl() {
    return null;
  }

  render() {
    const {
      title,
      inputKey,

      validationResult,
      forceValidate,

      vertical,
      leftCol,
      rightCol,

      titleRight,
    } = this.props;
    const { edited } = this.state;

    return (
      <FormGroup row>
        <Title
          title={title}
          vertical={vertical}
          leftCol={leftCol}
        />
        <Col md={helpers.controlCol({ vertical, rightCol, title })}>
          {this.renderControl()}
          <MessageError
            inputKey={inputKey}
            validationResult={validationResult}
            edited={edited}
            forceValidate={forceValidate}
          />
        </Col>
        <TitleRight
          titleRight={titleRight}
        />
      </FormGroup>
    );
  }
}

export default BaseItem;
BaseItem.propTypes = {
  title: PropTypes.string,
  inputKey: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

  forceValidate: PropTypes.bool,
  validationResult: PropTypes.object,

  vertical: PropTypes.bool,
  leftCol: PropTypes.number,
  rightCol: PropTypes.number,

  titleRight: PropTypes.string,
};

BaseItem.defaultProps = {
  title: null,
  onChange: null,

  forceValidate: false,
  validationResult: null,

  vertical: true,
  left_col: 3,
  right_col: 9,

  title_right: null,
};
