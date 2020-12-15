var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = () => ({
    render: function () {
        return (
            <div className="top-bar" >
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Timer Application
                        </li>
                        <li>
                            <IndexLink to="/" activeClassName="active">Timer</IndexLink>
                        </li>
                        <li>
                            <Link to="/countdown" activeClassName="active">Countdown</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            Timer by <a href="https://github.com/KermaFTW" target="_blank">Marko Petricevic</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = Nav;