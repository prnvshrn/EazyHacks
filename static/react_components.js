// This contains all the react code utilized by the application
// Styles for React components
var Width100 = {width:'100%'};
var Width50 = {width:'50%'};
var UpperMargin10 = {marginTop:'5px',textAlign:'center'};

// Definition for React components
var Login = React.createClass({
    render:function(){
            return(
                <div className="container bg-warning" style={Width50}>
                    <p style={UpperMargin10}>Enter a username to enter EazyHacks</p>
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