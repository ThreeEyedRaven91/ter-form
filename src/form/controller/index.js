import { Input } from '../inputs';

let _inputs = {};
let _defaultInput = null;

const registerInput = (type, component, isDefault = false) => {
  _inputs[type] = component;
  if (isDefault) {
    _defaultInput = component;
  }
};

const clearInput = () => {
  _inputs = {};
  _defaultInput = null;
};

const inputFromType = (type) => {
  if (_inputs[type]) return _inputs[type];
  return _defaultInput;
};

const bootstrap = () => {
  registerInput('input', Input, true);
};

const TERFormController = {
  registerInput,
  clearInput,
  inputFromType,
  bootstrap,
};

export default TERFormController;