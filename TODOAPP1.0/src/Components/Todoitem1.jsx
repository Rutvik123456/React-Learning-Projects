function Todoitem1() {
    
  let task = 'Buy milk';
  let date = '04/10/25';
  

    return (
    <div class="container text-center">
      <div class="row items-container">
        <div class="col-6">{task}</div>
        <div class="col-4">{date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger react-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem1;
