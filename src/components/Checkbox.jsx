import React from 'react';

class Checkbox extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            checked: this.props.initiallyChecked
        };

        this.hendeleClick = this.hendeleClick.bind(this);
    }

    hendeleClick(event){
        this.setState({
            checked: !this.state.checked
        });

    }

    render(){
        return (
            <button className="checkbox icon" onClick={this.hendeleClick}>
                <i className="material-icons">{ this.state.checked ? 'check_box' : 'check_box_outline_blank' }</i>
            </button>
        );
    }
    
}

Checkbox.protoType ={
    initiallyChecked: React.PropTypes.bool.isRequired 
}

export default Checkbox;