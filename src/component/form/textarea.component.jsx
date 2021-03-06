import React from 'react';

const TextArea = (props) => (
    <div className="form-group">
        <label className="form-label">{props.title}:</label>
        <textarea
            className="form-input"
            style={props.resize ? null : {resize: 'none'}}
            name={props.name}
            rows={props.rows}
            value={props.content}
            onChange={props.controlFunction}
            placeholder={props.placeholder}  />
    </div>
);

TextArea.propTypes = {
    title: React.PropTypes.string.isRequired,
    resize: React.PropTypes.bool,
    name: React.PropTypes.string.isRequired,
    rows: React.PropTypes.number.isRequired,
    content: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    controlFunction: React.PropTypes.func.isRequired
};

export default TextArea;