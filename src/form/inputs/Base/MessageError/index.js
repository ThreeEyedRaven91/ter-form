import React from 'react';
import styles from "./style";
import PropTypes from "prop-types";

class MessageError extends React.PureComponent {
  render() {
    const {
      edited,
      forceValidate,
      validationResult,
      inputKey,
    } = this.props;
    if (!edited && !forceValidate) {
      return null;
    }

    if (validationResult && validationResult.fields && validationResult.fields[inputKey]) {
      const messages = validationResult.fields[inputKey];
      return messages.map(message => (
        <p style={styles.errorLabel}>
          {message}
        </p>
      ));
    }

    return null;
  }
}

export default MessageError;

MessageError.propTypes = {
  edited: PropTypes.bool,
  forceValidate: PropTypes.bool,
  validationResult: PropTypes.object,
  inputKey: PropTypes.string.isRequired,
};

MessageError.defaultProps = {
  edited: false,
  forceValidate: false,
  validationResult: null,
};
