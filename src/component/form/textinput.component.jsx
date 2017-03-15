import React from 'react';

const TextInput = (props) => (
    <div className="form-group">
        <label className="form-label">{props.title}:</label>
        <input
            className="form-input"
            name={props.name}
            type={props.inputType}
            value={props.content}
            onChange={props.controlFunction}
            placeholder={props.placeholder} />
    </div>
);

TextInput.propTypes = {
    inputType: React.PropTypes.oneOf(['text','number', 'password']).isRequired,
    title: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    controlFunction: React.PropTypes.func.isRequired,
    content: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
    ]).isRequired,
    placeholder: React.PropTypes.string
};

export default TextInput;