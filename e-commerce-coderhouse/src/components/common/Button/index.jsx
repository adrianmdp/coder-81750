function Button({ children, callback, type }) {
  return (
    <>
      <label htmlFor=""></label>
      <button onClick={callback} type={type}>
        {children}
      </button>
    </>
  );
}

export default Button;
