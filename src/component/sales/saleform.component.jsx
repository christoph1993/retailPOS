import React, { Component } from 'react';

//Form components
import CheckboxRadioButton from '../form/checkbox-radiobutton.component.jsx';
import Select from '../form/select.component.jsx';
import TextArea from '../form/textarea.component.jsx';
import TextInput from '../form/textinput.component.jsx';

import SaleTable from './saletable.component.jsx';

class SaleForm extends Component {
    constructor(props) {
        super(props);

        //Set initial State
        this.state = {
            saleISBN: '',
            rows: []
        };

        //All handle functions here
        this.handleSaleISBN = this.handleSaleISBN.bind(this);
        this.handleSaleButton = this.handleSaleButton.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);

    }

    handleSaleISBN(e) {
        this.setState({ saleISBN: e.target.value });
    }

    handleSaleButton(e) {
        e.preventDefault();
        var rowArray = this.state.rows;

        //Send ISBN to server, retrieve data and add to rows. This will render it through SaleTable.
        const formPayload = {
            saleISBN: this.state.saleISBN
        }

        fetch('sale/addproduct', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formPayload)
        }).then((response) => { return response.json() })
          .then((returnedValue) => { 
              var quantity;
              var index = rowArray.findIndex(array => returnedValue[0]['productCode'] === array[0]['productCode']);
              console.log(index, returnedValue[0]['productCode']); 
              if(index>-1){
                  rowArray[index][0].quantity = rowArray[index][0].quantity + 1;
                  rowArray[index][0].productCost = rowArray[index][0].quantity * rowArray[index][0].productCost; 
              } else {
                  quantity = 1;
                  returnedValue[0]['quantity'] = quantity;
                  rowArray.push(returnedValue);
              }
              this.setState({ rows: rowArray });
              this.setState({ saleISBN: '' });
           })
          .catch(function(err){console.log(err)});
    }

    handleFormSubmit(e) {
        //Function to handle form submission
        e.preventDefault();
        
        

        this.handleClearForm(e)
    }

    handleClearForm(e) {
        //Function to handle clearing form
        e.preventDefault();
        //Set state to default here...
        this.setState({
            saleISBN: 0,
            rows: []
        });
    }

    render() {
        return(
            <div>
            <form className="container">
                <h3>Sales</h3>
                <div className="form-group">
                    <TextInput
                        name={"saleIsbn"}
                        title={"ISBN"}
                        inputType={"text"}
                        controlFunction={this.handleSaleISBN}
                        content={this.state.saleISBN}
                        placeholder={'Enter ISBN here...'}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-default" onClick={this.handleSaleButton}>Add Product</button>
                </div>
            </form>
            <SaleTable rows={this.state.rows} />
            <button className="btn btn-default" onClick={this.handleClearForm}>Clear Sale</button>
            <button className="btn btn-default" onClick={this.handleFormSubmit}>Sell</button>
            </div>
        )
    }

}

export default SaleForm;