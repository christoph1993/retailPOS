import React, { Component } from 'react';
import './sales.styling.css';

class SaleTable extends Component {
    render() {
        if(this.props.rows) {
            const { rows }= this.props.rows;
            return (
                <table>
                    <thead>
                        <tr>
                            <td>Product Code</td>
                            <td>Product Description 1</td>
                            <td>Product Description 2</td>
                            <td>Product Quantity</td>
                            <td>Product Cost</td>
                        </tr>
                    </thead>
                    <tbody>
                        rows.map((row) => {
                            <tr>
                                <td>row.code</td>
                                <td>row.description1</td>
                                <td>row.description2</td>
                                <td>row.quantity</td>
                                <td>row.cost</td>
                            </tr>
                        });
                    </tbody>
                </table>
            );
        } else {
            return (
                <p>Enter products in field above</p>
            );
        }
    }
}

export default SaleTable;