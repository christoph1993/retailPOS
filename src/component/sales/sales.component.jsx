import React, { Component } from 'react';
import './sales.styling.css';

//Form components
import CheckboxRadioButton from '../form/checkbox-radiobutton.component.jsx';
import Select from '../form/select.component.jsx';
import TextArea from '../form/textarea.component.jsx';
import TextInput from '../form/textinput.component.jsx';

class Sales extends Component {
    constructor(props) {
        super(props);

        //Set initial State
        this.state = {
            saleISBN: 0
        };

        //All handle functions here
        this.handleSaleISBN = this.handleSaleISBN.bind(this);
        

    }

    handleSaleISBN(e) {
        this.setState({ saleISBN: e.target.value });
    }

    handleFormSubmit(e) {
        //Function to handle form submission
        e.preventDefault();
        
        const formPayload = {
            saleISBN: this.state.ISBN
        }

        fetch('URI', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify(formPayload)
        });

        this.handleClearForm(e)
    }

    handleClearForm(e) {
        //Function to handle clearing form
        e.preventDefault();
        //Set state to default here...
        this.setState({

        });
    }

    render() {
        return(
            <form className="container" onSubmit={this.handleFormSubmit}>
                <h3>Sales</h3>
                <div className="form-group">
                    <TextInput
                        name={"saleIsbn"}
                        title={"ISBN"}
                        inputType={"number"}
                        controlFunction={this.handleSaleISBN}
                        content={this.state.ISBN}
                        placeholder={'Enter ISBN here...'}
                    />
                </div>
            </form>
        )
    }

}

export default Sales;