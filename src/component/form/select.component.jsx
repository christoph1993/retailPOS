import React from 'react';

const Select = (props) => (
    <div className="form-group">
        <select
            name={props.name}
            value={props.selectedOption}
            onChange={props.controlFunction}
            className="form-select">
            <option value="">{props.placeholder}</option>
            {props.options.map(option => {
                return (
                    <option
                        key={option}
                        value={option}>{option}</option>
                );
            })}
        </select>
    </div>
);

Select.propTypes = {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    selectedOption: React.PropTypes.string,
    controlFunction: React.PropTypes.func.isRequired,
    placeholder: React.PropTypes.string
};

export default Select;