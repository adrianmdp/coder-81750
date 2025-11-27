const AuthLayout = ({ Outlet }) => {
  return (
    <div>
      <h2>Auth Layout - Rutas Protegidas</h2>
      <Aside />
      {Outlet}
    </div>
  );
};
