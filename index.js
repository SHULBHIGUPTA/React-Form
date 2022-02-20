class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Email: "",
      Phone: "",
    };
  }

  postData = (someUser) => {
    axios.post("https://reqres.in/api/users", someUser).then((res) => {
      console.log(res);
    });
    console.log(this.state.Name, this.state.Email, this.state);
  };

  
  changeName = (event) => {
    this.setState((prev) => {
      return {
        Name: event.target.value,
      };
    });
  };

  changeEmail = (event) => {
    this.setState((prev) => {
      return {
        Email : event.target.value,
      };
    });
  };

  changePhone = (event) => {
    this.setState((prev) => {
      return {
        Phone : event.target.value,
      };
    });
  };


  render() {
    return (
      <div className="app-container">
        <div className="alert alert-primary">Form</div>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={this.state.Name}
              onChange={this.changeName}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Email"
              value={this.state.Email}
              onChange={this.changeEmail}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone No."
              value={this.state.Phone}
              onChange={this.changePhone}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={this.postData}>
            Submit
          </button>
        </form>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
