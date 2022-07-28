import React, { useState } from "react";
import "./CodeSearch.css";
import Form from "./../Form/Form";

const CodeSearch = () => {
  const [search, setSearch] = useState(null);
  
  const handlerSearch = (data: any) => {
    setSearch(data);
  };

  return (
    <div>
      <div>
        <Form handlerSearch={handlerSearch} />
      </div>
    </div>
  );
};

export default CodeSearch;
