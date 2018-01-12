// This contains all the react code utilized by the application


// Styles for React components
var Width100 = {width:'100%'};
var Width50 = {width:'50%'};
var UpperMargin10 = {marginTop:'5px',textAlign:'center'};
var Test = "{% csrf_token %}";

// Definition for React components
var Login = React.createClass({
    render:function(){
            return(<div>
                        <input type="text" className="form-control" placeholder="Enter a username" name="UserNameTextField" id="UserNameTextField" style={Width100} />
                </div>
            );
        }
});

ReactDOM.render(<Login />,document.getElementById("login_component"));