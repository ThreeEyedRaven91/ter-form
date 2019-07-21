import React from 'react';
import {Col, Label} from "reactstrap";
import styles from "./style";
import PropTypes from "prop-types";

class TitleRight extends React.PureComponent {
  render() {
    const { titleRight } = this.props;
    return titleRight && (
      <Col md={2} style={styles.rightTitleCol}>
        {titleRight && (
          <Label style={styles.rightTitleLabel} htmlFor="name">
            {titleRight}
          </Label>
        )}
      </Col>
    );
  }
}

export default TitleRight;

TitleRight.propTypes = {
  titleRight: PropTypes.string,
};

TitleRight.defaultProps = {
  titleRight: null,
};
