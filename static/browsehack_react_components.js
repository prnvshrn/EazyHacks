//React file which contains definition for components to browse Hacks

var HackDetails = React.createClass({
    getInitialState:function(){
        return{
            comments_temp:[]
        }
    },
    show:function(){
        for(var i=0;i<hacks_list.length;i++)
            {
                //alert(hacks_list[i]);
            }
    },
    render:function(){
        return(
            <div className="container" >
                    <button type="button" className="btn btn-success" onClick={this.show}></button>
                {hacks_list[0]}
            </div>
        );
    }
})

ReactDOM.render(<HackDetails/>,document.getElementById("browse_layout"));