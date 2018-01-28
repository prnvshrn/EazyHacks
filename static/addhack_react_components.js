//React file which contains definition for components to add Hacks

var Width100 = {width:'100%'};
var InputArray = [];
var MaginTop10 = {marginTop:'10px'};
var Width50 = {width:'50%'};
var Panelbackground = {backgroundColor : '#D9D9D9'};
var ContainerBackground = {backgroundColor:'#ffefd2'};
var MarginLeftRight = {marginLeft:'5px', marginRight:'5px'};
var GreenColor = {color:'#228B22'};

var HackDetails = React.createClass({
    getInitialState:function(){
        return{
            comments_temp:[],
            saved:false
        }
    },
    add:function(){
      this.props.addComponent(this.state.value);
    },
    addHacks:function(){
        this.state.saved = true;
        this.props.addHacks(this.state.value, this.props.index);
    },
      remove:function(){
     this.props.deleteComponent(this.props.index);
   },
    changewa:function(event){
           this.setState({value: event.target.value});
    },
    test:function(){
        InputArray.push(this.state.value);
    },
    hidelabel:function(){
        this.state.saved = false;
    },
    render:function(){
        if(this.state.saved == true)
            var label = <p className="text-success"><span style={GreenColor} className="glyphicon glyphicon-ok-circle"></span>This step has been saved</p>;
        else
        var label = '';
        return(

                <div className="panel panel-default" style={MaginTop10}>
                    <div className="panel-body" style={Panelbackground}>
                <div className="form-group">
                    {label}
                <div className="input-group">
                <input type="text" className="form-control" onClick={this.hidelabel}  value={this.state.value} onChange={this.changewa}/>
                    <div className="input-group-btn">
                    <button type="button"  onClick={this.remove} className="btn btn-danger"><span className="glyphicon glyphicon-minus"></span></button>
                    <button type="button" className="btn btn-success" onClick={this.addHacks}><span className="glyphicon glyphicon-ok"></span></button>
                    </div>
                </div>
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
        var arr2 = InputArray;
        arr2.splice(i,1);
        InputArray:arr2;
        this.setState({comments:arr});
    },
    addButton:function(text){
        var arr = this.state.comments;
        arr.push(text);
        this.setState({comments:arr});
    },
    addHacks:function(text,i){
        if(InputArray[i]!=undefined)
        {
            InputArray[i] = text;
        }
        else{
        InputArray.push(text);
        }
        var arr = this.state.comments;
        this.setState({comments:arr});
    },
    removeAll:function () {
        this.setState({comments : []});
    }
    ,
    createButton:function(text,i){
        return(
            <HackDetails key={i} index={i} addHacks={this.addHacks} addComponent={this.addButton.bind(null,"Something")} deleteComponent={this.removeButton}>{text}</HackDetails>
        );
    },
    render:function(){
            var test="";
            for(var i=0;i<InputArray.length;i++)
            {
                test = test + InputArray[i] + ";"
            }
            return(

                <div className="container" style={ContainerBackground}>

                <div className="form-group">
                <label htmlFor="CategoryList">Select a category:</label>
                <select className="form-control" form="HackForm" name="CategoryList" id="CategoryList">
                    <option>Sports</option>
                    <option>Kitchen</option>
                    <option>Fitness</option>
                    <option>Gaming</option>
                    <option>Daily Life</option>
                    <option>Miscellaneous</option>
                  </select>
                </div>
                <div className="form-group">
                    <label htmlFor="TitleTextbox">Title:</label>
                    <input type="text" form="HackForm" id="TitleTextbox" name="TitleTextBox" className="form-control"/>
                </div>

                    <div className="row" style={MarginLeftRight}>
                    <button  onClick={this.addButton.bind(null,"Defaultwa")} style={Width50} className="btn btn-info">Add Step</button>
                    <button  onClick={this.removeAll} style={Width50} className="btn btn-danger">Remove All Steps</button>
                    </div>

                    {this.state.comments.map(this.createButton)}

                    <input type="text" id="TempHackDetails" value={test} className="hide-element" />
                </div>

            );
        }
});

ReactDOM.render(<HacksLayout/>,document.getElementById("hacks_layout"));

