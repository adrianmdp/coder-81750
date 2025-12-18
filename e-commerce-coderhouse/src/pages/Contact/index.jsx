import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const inputNameRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    // Process
    // inputNameRef.current.focus();
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="nombre" ref={inputNameRef} />

      <input type="text" />

      <input type="texat" />

      {/* code */}

      <button type="submit">Enviar</button>
    </form>
  );
};

export { Contact };
