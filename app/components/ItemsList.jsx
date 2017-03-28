var React = require("react");
var ItemInfo = require("./ItemInfo.jsx")

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    //We will add addSchool functionality here
                </div>
                <div className="col-md-6">
                    {
                        this.props.items.map(function(s,index){
                            return(
                                <ItemInfo info={s} key={"school"+index} />
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});