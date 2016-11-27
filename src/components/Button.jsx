import React from 'react';

function Button(props) {
    return (
        <button className={props.className}>
           <i className="material-icons">{props.icon}</i>
        </button>
    );
}

Button.proptype = {
    icon: React.PropTypes.string,
    className: React.PropTypes.string

}

export default Button;