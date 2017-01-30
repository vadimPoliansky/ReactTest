'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

import GoldenLayout from 'golden-layout'

import MyApp from './myApp.jsx';
//import Form from './AuthForm.js';

// is there a better way of doing this?
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';

import { DateField, DatePicker } from 'react-date-picker'
import 'react-date-picker/index.css'



// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

var Test = React.createClass({

    render: function () {
        return (
            <DateField
                dateFormat="YYYY-MM-DD HH:mm:ss"
                forceValidDate={true}
                defaultValue={1485718982833}
                >
                <DatePicker
                    navigation={true}
                    locale="en"
                    forceValidDate={true}
                    highlightWeekends={true}
                    highlightToday={true}
                    weekNumbers={false}
                    weekStartDay={0}
                    />
            </DateField>
        )
    }
})


var Test2 = React.createClass({

    getInitialState () {
        return {
            selectValue: 'AK'
        };
    },
    updateValue (newValue) {
        console.log('State changed to ' + newValue);
        this.setState({
            selectValue: newValue
        });
    },
    render: function () {
        return (
            <div>
                <h3 className="section-heading">Department</h3>
                <Select
                    name="form-field-name"
                    simpleValue
                    value={this.state.selectValue}
                    options={departments}
                    onChange={this.updateValue}
                />
            </div>
        )
}
})

var myLayout = new GoldenLayout({
    content: [{
        type: 'row',
        content:[{
            type:'react-component',
            component: 'test-component',
            props: { label: 'A' }
        }]
    }]
});

var TestComponent = React.createClass({
    render: function() {
        return (<h1>{this.props.label}</h1>)
    }
});

myLayout.registerComponent( 'test-component', Test2 );

//Once all components are registered, call
myLayout.init();

var Select = require('react-select');
var departments = [
    { value: 'NICU', label: 'NICU' },
    { value: 'ICU', label: 'ICU' },
    { value: '11S', label: '11S' },
];
// waiting for dom to load before booting react. we could alternatively
// put the index.js reference at the end fo the index.html, but i prefer this way.
document.addEventListener('DOMContentLoaded', () => {
    var container = document.getElementById('myAppContainer');
    


    ReactDOM.render(
        React.createElement(MyApp),
        container
    );
});
