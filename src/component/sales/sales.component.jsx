import React, { Component } from 'react';

//Form components
import CheckboxRadioButton from '../form/checkbox-radiobutton.component.jsx';
import Select from '../form/select.component.jsx';
import TextArea from '../form/textarea.component.jsx';
import TextInput from '../form/textinput.component.jsx';

import SaleForm from './saleform.component.jsx';

class Sales extends Component {
    render() {
        return (
            <div>
                <SaleForm />
            </div>
        )
    }
}

export default Sales;