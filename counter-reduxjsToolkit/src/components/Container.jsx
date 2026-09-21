const Container = ({ children }) => {
  return (
    <div className="card card-container" style={{ width: "28rem" }}>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Container;
