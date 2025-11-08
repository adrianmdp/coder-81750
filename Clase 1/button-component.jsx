function Button({ text, callback, type }) {
  return (
    <>
      <label htmlFor=""></label>
      <button onClick={callback} type={type}>
        {text}
      </button>
    </>
  );
}

<Button text="Login" callback={login} type="button" />;
