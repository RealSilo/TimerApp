var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

import 'style!css!foundation-sites/dist/foundation.min.css';
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
  <div>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute />
      </Route>
    </Router>
  </div>,
  document.getElementById('app')
);

