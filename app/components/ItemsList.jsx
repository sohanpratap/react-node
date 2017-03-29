var React = require("react");
var ItemInfo = require("./ItemInfo.jsx");

module.exports = React.createClass({
   render:function(){
       return(
          <div className="row">
            <div className ="content col-sm-12 col-md-12">
              <div className="row">
                <div className="col-md-12 col-md-offset-0">
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

                          <div className="col-md-8 pull-left">
                            <div className="form-group form-control-by-1">
                                <input type="text" placeholder="&#61442; Search for restaurants,dishes or cuisines" id="restaurant" name="restaurant" className="form-control-search search-input-box"/>
                            </div>
                          </div>

                          <div className="col-md-2">
                          <button className="btn btn-default btn-success" type="submit">Search</button>
                          </div>
                      </form>
                    </div>

                    <div className="row">
                      <form role="form">
                          <div className="col-md-1">
                            <div className="form-group font-group-font-size">
                              FILTER BY:
                            </div>
                          </div>

                          <div className="col-md-2 pull-left">
                            <div className="form-group">
                              <select className="form-control form-control-by-1" name="cuisine" id="cuisine">
                                  <option value="">CUISINE</option>
                                  <option value="mumbai">Mumbai</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-md-2 pull-left">
                            <div className="form-group">
                              <select className="form-control form-control-by-2" name="budget" id="budget">
                                  <option value="">BUDGET</option>
                                  <option value="mumbai">Mumbai</option>
                              </select>
                            </div>
                          </div>
                          
                          <div className="col-md-2">
                            <div className="form-group">
                            </div>
                          </div>

                          <div className="col-md-3 pull-right">
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
                <div className="row">
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