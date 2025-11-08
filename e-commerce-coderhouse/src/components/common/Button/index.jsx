function Button({ text, callback, type, icon }) {
  return (
    <>
      <label htmlFor=""></label>
      <button onClick={callback} type={type}>
        {icon} {text}
      </button>
    </>
  );
}

export default Button;
