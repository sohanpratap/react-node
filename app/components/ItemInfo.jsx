var React = require("react");

module.exports = React.createClass({
    render:function(){
        return(
            <div className="col-sm-3">
                <div className="property-simple">
                    <a className="property-simple-image" href="#">
                        <img alt="" src="http://preview.byaviators.com/template/realsite/assets/img/tmp/medium/1.jpg" />
                    </a><input type="checkbox" name="menuItem[]" value="{this.props.info.id}"/>

                    <div className="property-simple-content">
                        <h2 className="property-simple-title"><a href="#">{this.props.info.name}</a></h2>

                        <ul className="property-simple-location">
                        <li><a href="#">{this.props.info.tagline}</a>,</li>
                        </ul>
                    </div>

                    {/* <div className="panel-body">
                        {this.props.info.tagline}
                    </div>*/}
                </div>    
            </div>
        )
    }
})