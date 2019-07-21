import React from 'react';
import {Col, Label} from "reactstrap";
import helpers from "../helper";
import styles from "./style";
import PropTypes from "prop-types";

class Title extends React.PureComponent {
  render() {
    const { title, vertical, leftCol } = this.props;
    return (
      <Col
        md={helpers.titleCol({ vertical, leftCol })}
        style={styles.titleColumn}
      >
        {title && (
          <Label htmlFor="name">
            {title}
          </Label>
        )}
      </Col>
    );
  }
}

export default Title;

Title.propTypes = {
  title: PropTypes.string,
  vertical: PropTypes.bool,
  leftCol: PropTypes.number,
};

Title.defaultProps = {
  title: null,
  vertical: true,
  leftCol: 3,
};
