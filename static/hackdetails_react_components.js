var hacks_test = {hacks_category};

var HackPanels = React.createClass({
    render:function() {
        return (
            <div className="panel panel-default">
                <div className="panel-body hover-panel">
                    {this.props.children}
                </div>
            </div>
        );
    }
})

var HackDetails = React.createClass({
    getInitialState:function(){
        return{
            comments:hacks_list
        }
    },
    createButton:function(text,i){
        return(
            <HackPanels key={i} index={i}>{text}</HackPanels>
        );
    },
    render:function(){
        return(
            <div className="container " >
                <div className="panel panel-default menu-bg ">
                    <div className="panel-body">
                        <div className="row">
                        <h1>{hacks_title}</h1>
                        </div>
                        <div className="row">
                            <h3>Posted by {hacks_username}</h3>
                        </div>
                        {this.state.comments.map(this.createButton)}
                    </div>
                </div>
            </div>
        );
    }
})


ReactDOM.render(<HackDetails/>,document.getElementById("hackdetails_layout"));