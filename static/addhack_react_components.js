var Width100 = {width:'100%'};
var InputArray = [];
var MaginTop10 = {marginTop:'5px'};
var Width50 = {width:'50%'};

var AddHack = React.createClass({
    render:function(){
        return(
            <div className="container">
                <div className="form-group">
                <label htmlFor="CategoryList">Select a category:</label>
                <select className="form-control" id="CategoryList">
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
    getInitialState:function(){
        return{
            comments:[]
        }
    },
    add:function(){
      this.props.addComponent(this.state.value);
    },
      remove:function(){
     this.props.deleteComponent(this.props.index);
   },
    changewa:function(event){
           this.setState({value: event.target.value});
                   InputArray.push(this.state.value);
           //alert(this.state.value);
    },
    display:function(event){
        //alert(this.state.value);
    },
    render:function(){
        return(
            <div className="container" style={MaginTop10}>
                <div className="input-group">
                <input type="text" className="form-control" value={this.state.value} onChange={this.changewa}/>
                    <div className="input-group-btn">
                    <button type="button"  onClick={this.remove} className="btn btn-danger"><span className="glyphicon glyphicon-minus"></span></button>
                    <button type="button" className="btn btn-success"><span className="glyphicon glyphicon-ok"></span></button>
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
            <HackDetails key={i} index={i} addComponent={this.addButton.bind(null,"Something")} deleteComponent={this.removeButton}>{text}</HackDetails>
        );
    },
    render:function(){
            var test="";
            for(var i=0;i<InputArray.length;i++)
            {
                test = test + InputArray[i] + ";"
            }
            return(

                <div className="container">
                    <div className="row">
                    <button  onClick={this.addButton.bind(null,"Defaultwa")} className="btn btn-info">Add Step</button>
                    <button  className="btn btn-danger">Remove All Steps</button>
                    </div>
                    {this.state.comments.map(this.createButton)}
                    <input type="text" value={test} />
                </div>

            );
        }
});

ReactDOM.render(<AddHack/>,document.getElementById("child_component"));
ReactDOM.render(<HacksLayout/>,document.getElementById("hacks_layout"));

