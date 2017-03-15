import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/*  Import all Components here */



/* Routing goes here */
render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="sale" component={}/>
            <Route path="inventory">
                <IndexRoute component={} />
                <Route path="invoice" component={} />
                <Route path="newproduct" component={} />
                <Route path="stocktake" component={} />
            </Route>
            <Route path="report" component={}/>
            <Route path="about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('root')
);