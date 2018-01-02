// This contains all the react code utilized by the application
// Styles for React components
var Width100 = {width:'100%'};
var Width50 = {width:'50%'};

// Definition for React components
var Login = React.createClass({
    render:function(){
            return(
                <div className="container bg-warning" style={Width50}>
                    <form>
                        <div className="form-group">
                        <input type="text" className="form-control" style={Width100}/>
                        </div>
                        <div className="form-group" >
                        <button className="btn btn-success" style={Width100}>Login</button>
                        </div>
                        <div className="form-group">
                        <button className="btn btn-warning" style={Width100}>Reset</button>
                        </div>
                    </form>
                </div>
            );
        }
});

ReactDOM.render(<Login />,document.getElementById("login_component"));

var AppMenu = React.createClass({
    render:function(){
            return(
                <div>
                  <nav class="navbar navbar-default">
                      <div class="container-fluid">
                        <div class="navbar-header">
                          <a class="navbar-brand" href="#">WebSiteName</a>
                        </div>
                        <ul class="nav navbar-nav">
                          <li class="active"><a href="#">Home</a></li>
                          <li><a href="#">Page 1</a></li>
                          <li><a href="#">Page 2</a></li>
                          <li><a href="#">Page 3</a></li>
                        </ul>
                      </div>
                    </nav>
                </div>
            );
        }
});

ReactDOM.render(<AppMenu/>,document.getElementById("AppMenu"));

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">Link</NavItem>
      <NavItem eventKey={2} href="#">Link</NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
);

ReactDOM.render(navbarInstance, mountNode);