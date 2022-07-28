import React, { useState } from "react";
import Alert from '../../lib/Alert';
import "./Form.css";

const initialForm = {
  code: "",
};

type Props = {
  handlerSearch: any
}

const Form: React.FC<Props> = ({ handlerSearch }) => {
  const [form, setForm] = useState(initialForm);

  const handlerChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e: any) => {
    e.preventDefault();

    if (!form.code) {
      Alert("Llena el campos para buscar de manera efectiva tu producto");
      return;
    }

    handlerSearch(form);

    setForm(initialForm);
  };

  return (
    <div className="container Form__container">
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="code"
          className="codeInput"
          id="codeId"
          placeholder="Numero de codigo"
          onChange={handlerChange}
          value={form.code}
        />
        <button type="submit" className="button">
          Buscar codigo
        </button>
      </form>
    </div>
  );
};

export default Form;
