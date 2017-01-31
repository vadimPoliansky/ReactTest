'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var GoldenLayout = require('golden-layout');
import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-light-theme.css';

import MyApp from './myApp.jsx';

import {Grid, Row, Column} from 'react-cellblock';
//import Form from './AuthForm.js'; is there a better way of doing this?
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-fresh.css';

import {DateField, DatePicker} from 'react-date-picker';
import 'react-date-picker/index.css';

import Checkbox from './Checkbox.js';

// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';

var Test = React.createClass({

    render: function () {
        return (
            <DateField
                dateFormat="YYYY-MM-DD HH:mm:ss"
                forceValidDate={true}
                defaultValue={1485718982833}>
                <DatePicker
                    navigation={true}
                    locale="en"
                    forceValidDate={true}
                    highlightWeekends={true}
                    highlightToday={true}
                    weekNumbers={false}
                    weekStartDay={0}/>
            </DateField>
        )
    }
})

var AutoDropDown = React.createClass({
    propTypes: {
        label: React.PropTypes.string
    },
    getInitialState() {
        return {selectValue: 'AK'};
    },
    updateValue(newValue) {
        console.log('State changed to ' + newValue);
        this.setState({selectValue: newValue});
    },
    render: function () {
        return (
            <div>
                <h4 className="section-heading">{this.props.label}</h4>
                <Select
                    name="form-field-name"
                    simpleValue
                    value={this.state.selectValue}
                    options={departments}
                    onChange={this.updateValue}/>
            </div>

        )
    }
})

var InterpForm = React.createClass({
    render: function () {
        return (
            <div>
                <Grid>
                    <Row>
                        <Column width="1/3">
                            <AutoDropDown label='Department'/>
                        </Column>
                        <Column width="1/3">
                            <AutoDropDown label='Physician'/>
                        </Column>
                        <Column width="1/3">
                            <AutoDropDown label='Program'/>
                        </Column>
                    </Row>
                    <Row>
                        <Column width="1/2">
                            <Checkbox label="Pre-Booked"/>
                        </Column>
                        <Column width="1/2" className='right-align'>
                            <Checkbox label="Immediate Requests"/>
                        </Column>
                    </Row>
                    <Row>
                        <Column width="1/2">
                            <Test/>
                        </Column>
                        <Column width="1/2">
                        </Column>
                    </Row>
                    <Row>
                        <Column width="1/2">
                            <AutoDropDown label='Language'/>
                        </Column>
                        <Column width="1/2">
                            <AutoDropDown label='Other'/>
                        </Column>
                    </Row>
                    <Row>
                        <Column width="1/2">
                            <AutoDropDown label='Location'/>
                        </Column>
                        <Column width="1/2">
                            <AutoDropDown label='Other'/>
                        </Column>
                    </Row>
                </Grid>
            </div>
        )
    }
})

var FormBox = React.createClass({
    render: function() {
        return (
                <div class ='FormBox'>
                </div>
            )
    }    
})

var myLayout = new GoldenLayout({
    content: [
        {
            type: 'column',
            content: [
                {
                    type: 'react-component',
                    component: 'test-component2',
                    props: {
                        label: 'A'
                    }
                },
                    {
                    type: 'react-component',
                    component: 'test-component',
                    props: {
                        label: 'B'
                    },
                    height: 80
        }
            ]
        }
    ]
});
var TestComponent = React.createClass({
    render: function () {
        return (
            <h1>{this.props.label}</h1 >
        )
    }
});
myLayout.registerComponent('test-component', InterpForm);
myLayout.registerComponent('test-component2', MyApp);
myLayout.init();
var Select = require('react-select');
import 'react-select/dist/react-select.css';

var departments = [
    {
        value: 'NICU',
        label: 'NICU'
    }, {
        value: 'ICU',
        label: 'ICU'
    }, {
        value: '11S',
        label: '11S'
    }
];
document.addEventListener('DOMContentLoaded', () => {
    var container = document.getElementById('myAppContainer');

});