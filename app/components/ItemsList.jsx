var React = require("react");
var ItemInfo = require("./ItemInfo.jsx");

module.exports = React.createClass({
   render:function(){
       return(
          <div className="row">
            <div className ="content col-sm-12 col-md-12">    
              
              <div className="row">
                <div className="col-md-10 col-md-offset-1">
                  <div className="form-section">
                    <div className="row">
                      <form role="form">
                          <div className="col-md-2">
                            <div className="form-group">
                              <select className="form-control" name="cities" id="cities">
                                  <option value="">CITIES</option>
                                  <option value="mumbai">Mumbai</option>
                                  <option value="delhi">Delhi</option>
                                  <option value="banglore">Banglore</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-8">
                            <div className="form-group">
                              <input type="text" placeholder="Search for restaurants,dishes or cuisines" id="restaurant" name="restaurant" className="form-control" />
                            </div>
                          </div>

                          <div className="col-md-2">
                          <button className="btn btn-default btn-primary" type="submit">Search</button>
                          </div>
                      </form>
                    </div>

                    <div className="row">
                      <form role="form">

                          <div className="col-md-2">
                            <div className="form-group">
                              FILTER BY:
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="form-group">
                              <select className="form-control" name="cuisine" id="cuisine">
                                  <option value="">CUISINE</option>
                                  <option value="mumbai">Mumbai</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="form-group">
                              <select className="form-control" name="budget" id="budget">
                                  <option value="">BUDGET</option>
                                  <option value="mumbai">Mumbai</option>
                              </select>
                            </div>
                          </div>
                          
                          <div className="col-md-2">
                            <div className="form-group">
                            </div>
                          </div>

                          <div className="col-md-2">
                            <div className="form-group">
                              <select className="form-control" name="budget" id="budget">
                                  <option value="">SORT BY</option>
                                  <option value="asc">ASC</option>
                                  <option value="desc">DESC</option>
                              </select>
                            </div>
                          </div>

                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box">
                <h1>
                  <a className="action" href="#">PROCEED TO CHECKOUT</a>
                </h1>
                <div className="row property-simple-wrapper">
                {
                    this.props.items.map(function(s,index){
                        return(
                            <ItemInfo info={s} key={"school"+index} />
                        )         
                    })
                }
                </div>

              </div>
            </div>    
          </div>
       )
   } 
});