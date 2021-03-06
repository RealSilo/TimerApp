var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

//import 'style!css!foundation-sites/dist/foundation.min.css';
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Timer} />
        <Route path="countdown" component={Countdown} />
      </Route>
    </Router>
  </div>,
  document.getElementById('app')
);

