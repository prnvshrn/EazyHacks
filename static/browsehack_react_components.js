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
                    <div className="panel-body menu-bg" onClick={this.openURL}>
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
        var url = hacks_details_url + '/';
        //alert(url);
        return(
            <HackDetails key={i} openURL={this.openURL} index={i}>
                <h4><span className="label label-default">{text[1]}</span></h4>
                <h3>{text[2]}</h3>
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