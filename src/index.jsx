import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/*  Import all Components here */
// Import common components
import Home from './component/common/home.component.jsx';
import Main from './component/common/main.component.jsx';
import NotFound from './component/common/notfound.component.jsx';
import About from './component/common/about.component.jsx';

import Sales from './component/sales/sales.component.jsx';
import Report from './component/report/report.component.jsx';
import AddProduct from './component/inventory/addProduct.component.jsx';
import AdjustStock from './component/inventory/adjustStock.component.jsx';
import Inventory from './component/inventory/inventory.component.jsx';
import Stocktake from './component/inventory/stocktake.component.jsx';

/* Routing goes here */
render(
    <Router history={browserHistory}>
        <Route component={Main}>
            <Route path="/" component={Home}/>
            <Route path="sale" component={Sales}/>
            <Route path="inventory">
                <IndexRoute component={Inventory} />
                <Route path="invoice" component={AdjustStock} />
                <Route path="newproduct" component={AddProduct} />
                <Route path="stocktake" component={Stocktake} />
            </Route>
            <Route path="report" component={Report}/>
            <Route path="about" component={About}/>
            <Route path="*" component={NotFound}/>
        </Route>
    </Router>,
    document.getElementById('root')
);