import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Form, TERForm } from './form';
import template from './template';

TERForm.bootstrap();

function App() {
  return (
    <div className="App">
      <Form
        template={template}
        value={{}}
      />
    </div>
  );
}

export default App;
