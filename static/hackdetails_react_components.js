var hacks_test = {hacks_category};
var leftMargin = {marginLeft:'10px'};
var rightMargin = {marginRight:'10px'};

var HackPanels = React.createClass({
    render:function() {
        return (
            <div>
            <div className="panel panel-default">
                <div className="panel-body hover-panel">
                    {this.props.children}
                </div>
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
        if(hacks_category=="Sports")
        var label = <span className="label label-default">{hacks_category}</span>;
        else if(hacks_category=="Gaming")
        var label = <span className="label label-primary">{hacks_category}</span>;
        else if(hacks_category == "Kitchen")
        var label = <span className="label label-success">{hacks_category}</span>;
        else if(hacks_category=="Daily Life")
        var label = <span className="label label-info">{hacks_category}</span>;
        else if(hacks_category == "Fitness")
        var label = <span className="label label-warning">{hacks_category}</span>;
        else if(hacks_category=="Miscellaneous")
        var label = <span className="label label-danger">{hacks_category}</span>;

        return(
            <div className="container menu-bg" >
                <div className="row" style={leftMargin}>
                        <h1>{hacks_title}</h1>
                        </div>
                        <div className="row" style={leftMargin}>
                            <h3>Posted by: {hacks_username} <span className="pull-right" style={rightMargin}>Tags: {label}</span> </h3>
                        </div>
                {this.state.comments.map(this.createButton)}
            </div>
        );
    }
})


ReactDOM.render(<HackDetails/>,document.getElementById("hackdetails_layout"));