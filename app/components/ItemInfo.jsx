var React = require("react");

module.exports = React.createClass({
    render: function () {
        return (
            <div className="col-sm-6">
                <div className="item-simple">
                    <input type="checkbox" name="menuItem[]" value="{this.props.info.id}"/>
                    <div className="item-simple-content">
                        <div className="item-detail col-sm-4">
                            <a href="#" className="pull-left">
                                <img alt=""
                                     src="http://preview.byaviators.com/template/realsite/assets/img/tmp/medium/1.jpg"/>
                            </a>
                        </div>
                        <div className="item-detail col-sm-8">
                            <h2 className="item-simple-title">{this.props.info.name}</h2>
                            <ul className="item-simple-location">
                                <li><a href="#">{this.props.info.tagline}</a>,</li>
                            </ul>
                            <p className="hline"></p>
                            <p>
                                <span className="currency-color pull-left">&#x20b9;&#x20b9;&#x20b9; &nbsp;&nbsp; </span>
                                <span className="star-option">
                                    <i className="fa fa-star star-option-icon-color" aria-hidden="true"></i><span className="star-text-option">3.7</span>
                                </span>
                                 <span className="time-option">
                                     <span className="time-option-color">40</span>
                                     <span className="time-text-option">Mins</span>
                                 </span>
                            </p>
                        </div>
                    </div>

                    {/* <div className="panel-body">
                     {this.props.info.tagline}
                     </div>*/}
                </div>
            </div>

        )
    }
})