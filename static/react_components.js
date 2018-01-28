// This contains all the react code utilized by the application

// Styles for React components
var Width100 = {width:'100%'};
var Width50 = {width:'50%'};
var UpperMargin10 = {marginTop:'5px',textAlign:'center'};
var TextCenter = "{% csrf_token %}";
var Width100Height250 = {width:'100%',height:'150px'}
var ColoredBackground = {backgroundColor:'#ffefd2'};

// Definition for React components
var Login = React.createClass({
    render:function(){
            return(
                <div>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="Enter a username" name="UserNameTextField" id="UserNameTextField" style={Width100} />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="Enter a password" name="PasswordTextField" id="PasswordTextField" style={Width100} />
                </div>
                </div>
            );
        }
});

ReactDOM.render(<Login />,document.getElementById("login_component"));

function ImageBox (props){
        return(
                <div className="thumbnail" style={ColoredBackground}>
                    <a href={props.img_url}>
                        <img src={props.img_src} style={Width100Height250} />
                        <div className="caption text-center">
                            <h3>{props.img_caption}</h3>
                        </div>
                    </a>
                </div>
        );
}

class ImageBoxLayout extends React.Component
{
    render()
    {
        return(
            <div className="body-bg">
                <div className="row">
                    <div className="col-md-4">
                        <ImageBox img_src={soocer_image} img_url={soocer_url} img_caption={soocer_caption}/>
                    </div>
                    <div className="col-md-4">
                        <ImageBox img_src={kitchen_image} img_url={kitchen_url} img_caption={kitchen_caption}/>
                    </div>
                    <div className="col-md-4">
                        <ImageBox img_src={fitness_image} img_url={fitness_url} img_caption={fitness_caption}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ImageBox img_src={gaming_image} img_url={gaming_url} img_caption={gaming_caption}/>
                    </div>
                    <div className="col-md-4">
                        <ImageBox img_src={dailylife_image} img_url={dailylife_url} img_caption={dailylife_caption}/>
                    </div>
                    <div className="col-md-4">
                        <ImageBox img_src={miscellaneous_image} img_url={miscellaneous_url} img_caption={miscellaneous_caption}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ImageBoxLayout />,document.getElementById("image_box_layout"));
