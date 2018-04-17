import React from 'react';
import Child from '../components/child';
class Parent extends React.Component {

    notifyParentFunc() {
        console.log("Parent notified");
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                <Child parentName="Jamie" notifyParentFunc={this.notifyParentFunc} />
            </div>
        );
    };
}

export default Parent;