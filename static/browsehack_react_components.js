//React file which contains definition for components to browse Hacks
var comments = []

var HackDetails = React.createClass({
    getInitialState:function(){
        return{
            comments_temp:[]
        }
    },
    show:function(){
        for(var i=0;i<hacks_list.length;i++)
            {
                //alert(hacks_list[i][0]);
                //alert(hacks_list[i][1]);
            }
    },
    openURL:function(){
        this.props.openURL(this.props.text)
    },
    render:function(){
        return(
            <div className="container " >
                <div className="panel panel-default">
                    <div className="panel-body menu-bg hover-panel">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
})

var HackDetailsLayout = React.createClass({
    getInitialState:function(){
        return{
        comments:hacks_list
    }
    },
    openURL:function(text){
        var url = hacks_details_url + '/';
        alert(url);
    },
    createButton:function(text,i){
        var url = hacks_details_url  + text[0] + '/';
        //alert(url);
        if(text[1]=="Sports")
        var label = <span className="label label-default">{text[1]}</span>;
        else if(text[1]=="Gaming")
        var label = <span className="label label-primary">{text[1]}</span>;
        else if(text[1] == "Kitchen")
        var label = <span className="label label-success">{text[1]}</span>;
        else if(text[1]=="Daily Life")
        var label = <span className="label label-info">{text[1]}</span>;
        else if(text[1] == "Fitness")
        var label = <span className="label label-warning">{text[1]}</span>;
        else if(text[1]=="Miscellaneous")
        var label = <span className="label label-danger">{text[1]}</span>;

        return(
            <HackDetails key={i} onClick={this.openURL} index={i}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <h4>{label}</h4>
                        <p><span className="glyphicon glyphicon-user"></span> : {text[3]}</p>
                        </div>
                        <div className="col-sm-10">
                            <h3><a href={url}>{text[2]}</a></h3>
                        </div>
                    </div>
                </div>
            </HackDetails>
        );
    },
    render:function () {
        return(
            <div>
            {this.state.comments.map(this.createButton)}
            </div>
        );
    }
})

ReactDOM.render(<HackDetailsLayout/>,document.getElementById("browse_layout"));