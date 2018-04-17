import React from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.notifyParent = this.notifyParent.bind(this);
    }
    notifyParent() {
        var val = this.refs.childName.value;
        console.log(val, " is trying to notify parent");
        this.props.notifyParentFunc();
    }

    render() {
        return (
            <div>
                <div>
                    <h2>I am the child</h2>
                    <span>My parents name is {this.props.parentName}</span>
                </div>
                <div>
                    <input ref="childName" type="text" placeholder="Childs Name"></input>
                    <button onClick={this.notifyParent}>Notify parent</button>
                </div>
            </div>
        );
    };
}
export default Child;