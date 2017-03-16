import React, { Component } from 'react';

class SaleTable extends Component {
    render() {
        var r = this.props.rows.map((row) => {
            return (
                <tr key={row[0]['productCode']}>
                    <td>{row[0]['productCode']}</td>
                    <td>{row[0]['productType']}</td>
                    <td>{row[0]['productStyle']}</td>
                    <td>{row[0]['quantity']}</td>
                    <td>{row[0]['productCost']}</td>
                </tr>
            )})

        if(this.props.rows.length > 0) {
            return (
                <div>
                    <table className="table table-striped sale-table">
                        <thead>
                            <tr>
                                <td>Product Code</td>
                                <td>Product Type</td>
                                <td>Product Style</td>
                                <td>Product Quantity</td>
                                <td>Product Cost</td>
                            </tr>
                        </thead>
                        <tbody>
                            {r}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return (
                <p>Enter products in field above</p>
            );
        }
    }
}

export default SaleTable;