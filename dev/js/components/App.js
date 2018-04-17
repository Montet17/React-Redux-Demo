import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import Parent from './parent';
require('../../scss/style.scss');

var divStyle = {
    border: '1px solid silver',
    padding: '30px'
};

const App = () => (
    <div>
        <div style={divStyle}>
            <h2>User List</h2>
            <UserList />
            <hr />
            <h2>User Details- Jamie</h2>
            <UserDetails />
        </div>
        <div style={divStyle}>
            <Parent />
        </div>
    </div>
);

export default App;
