function Todoitem({ task, date }) {
  return (
    <div className="container text-center">
      <div className="row items-container">
        <div className="col-6">{task}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger react-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
