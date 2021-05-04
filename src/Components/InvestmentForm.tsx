import React, { useState } from "react";
import { Form } from "react-bootstrap";

const InvestmentForm: React.FC = () => {
  const [state, setState] = useState<{ principal: string }>({ principal: "" });
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type='text'
        name='pricipal'
        placeholder='10000'
        value={state.principal}
        onChange={e =>
          setState(prevState => {
            return { ...prevState, principal: e.target.value };
          })
        }
      />
    </Form>
  );
};

export default InvestmentForm;
