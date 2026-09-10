function Addtodo(){
    return <div class="container text-center">
        <div class="row items-container">
          <div class="col-6">
            <input type="text" placeholder="to do task" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success react-btn">
              Add
            </button>
          </div>
        </div>
    </div>
}

export default Addtodo;