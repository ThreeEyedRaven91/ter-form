import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'reactstrap';
import TERForm from '../controller';

class Form extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      value: props.value,
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(prev => ({
      ...prev,
      value: {
        ...prev.value,
        ...nextProps.value,
      },
    }));

    const { template: { fetchDataAPI, refetchCondition } } = this.props;
    if (refetchCondition && refetchCondition({ nextProps, props: this.props })) {
      fetchDataAPI({
        state: this.state,
        props: this.props,
      });
    }
  }

  onChange({ key, value }) {
    if (!key) return;

    this.setState(prev => ({
      value: {
        ...prev.value,
        [key]: value,
      },
    }));

    const { onChange, parent, stateKey } = this.props;
    if (onChange) {
      onChange({ key, value });
    }

    if (parent) {
      if (stateKey) {
        parent.setState(prevState => ({
          ...prevState,
          [stateKey]: {
            ...prevState[stateKey],
            [key]: value,
          },
        }));
      } else {
        parent.setState({
          [key]: value,
        });
      }
    }
  }

  render() {
    const { template: { elements }, validationResult, forceValidate, key } = this.props;
    const { value } = this.state;

    return (
      <Row>
        {elements.map((element) => {
          const Control = TERForm.inputFromType(element.type);

          return (
            <Col xs={element.col || 12}>
              <Control
                {...element}
                key={`${key}_${element.inputKey}`}
                value={value && value[element.inputKey]}
                formValue={value}
                onChange={this.onChange}

                validationResult={validationResult}
                forceValidate={forceValidate}
              />
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Form;

Form.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.object,
  template: PropTypes.object.isRequired,

  onSubmit: PropTypes.func,

  validationResult: PropTypes.object,
  forceValidate: PropTypes.object,

  parent: PropTypes.object,
  stateKey: PropTypes.string,
  key: PropTypes.string,
};

Form.defaultProps = {
  onChange: null,
  value: null,
  onSubmit: null,

  validationResult: null,
  forceValidate: false,
  parent: null,
  stateKey: null,
  key: 'form',
};
