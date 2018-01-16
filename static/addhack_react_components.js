var Width100 = {width:'100%'};

var AddHack = React.createClass({
    render:function(){
        return(
            <div className="container">
                <div className="form-group">
                <label for="sel1">Select a category:</label>
                <select className="form-control" id="sel1">
                    <option>Sports</option>
                    <option>Kitchen</option>
                    <option>Fitness</option>
                    <option>Gaming</option>
                    <option>Daily Life</option>
                    <option>Miscellaneous</option>
                  </select>
                </div>
                <div className="form-group">
                <input type="text" className="form-control"/>

                </div>
            </div>
        );
    }
})

var HackDetails = React.createClass({
      remove:function(){
     this.props.deleteComponent(this.props.index);
   },

    render:function(){
        return(
            <div className="container">
                <div className="input-group">
                <input type="text" className="form-control"/>
                    <div className="input-group-btn">
                    <button type="button" onClick={this.remove} className="btn btn-danger">Remove</button>
                    </div>
                </div>
            </div>
        );
    }
})

var HacksLayout = React.createClass({
    getInitialState:function(){
        return{
            comments:[]
        }
    },
    removeButton:function(i){
        var arr = this.state.comments;
        arr.splice(i,1);
        this.setState({comments:arr});
    },
    addButton:function(text){
        var arr = this.state.comments;
        arr.push(text);
        this.setState({comments:arr});
    },
    createButton:function(text,i){
        return(
            <HackDetails key={i} index={i} deleteComponent={this.removeButton}>{text}</HackDetails>
        );
    },
    render:function(){
            return(
                <div>
                <div className="form-group center-block">
                    <input type="button" onClick={this.addButton.bind(null,"Defaultwa")} className="btn btn-info" value="Add Step"/>
                </div>
                    {this.state.comments.map(this.createButton)}
                </div>
            );
        }
});

ReactDOM.render(<AddHack/>,document.getElementById("child_component"));
ReactDOM.render(<HacksLayout/>,document.getElementById("hacks_layout"));

