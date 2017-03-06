/// <reference path="RowDataFactory.js" />
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var GoldenLayout = require('golden-layout');
import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-light-theme.css';

import {Grid, Row, Column} from 'react-cellblock';
//import Form from './AuthForm.js'; is there a better way of doing this?
import 'ag-grid/dist/styles/ag-grid.css';
import 'ag-grid/dist/styles/theme-material.css';

import {DateField, DatePicker} from 'react-date-picker';
import 'react-date-picker/index.css';

import Checkbox from './Checkbox.js';

import {AgGridReact} from "ag-grid-react";
import RowDataFactory from "./RowDataFactory";
import ColDefFactory from "./ColDefFactory.jsx";
import "./myApp2.css";

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

class TextForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.value};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An input was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
        <div>
            <h5 className="section-heading">{this.props.label}</h5>
          <form onSubmit={this.handleSubmit}>
          <input type="text" className="text-form" value={this.state.value} onChange={this.handleChange} />
      </form>
     </div>
    );
}
}

var AutoDropDown = React.createClass({
    /*componentWillMount: function() {
        var xhr = new XMLHttpRequest();
        var params = JSON.stringify({Type: this.prop.label})
        xhr.open('get','Interpreter/GetFields', true);
        xhr.onload = function() {
            var data = JSON.parse(xhr.responseText);
            console.log(data)
            this.setState({ data: data });
        }.bind(this);
        xhr.send(params);
    },*/
    getInitialState() {
        return {
            selectValue: this.props.selectValue,
            data: []
        };
    },
    updateValue(newValue) {
        console.log('State changed to ' + newValue);
        this.setState({selectValue: newValue});
    },
    render: function () {
        return (
            <div>
                <h5 className="section-heading">{this.props.label}</h5>
                <Select
                    name="form-field-name"
                    simpleValue
                    value={this.state.selectValue}
                    options={departments}
                    onChange={this.updateValue}
                    rowHeight="90"
                    placeholder=''/>
            </div>

        )
    }
})


var InterpForm = React.createClass({

    getInitialState: function () {
        return {
            cuuID: cuuID,
            cuuDepartment: cuuDepartment,
            request: []
        }
    },
    componentWillMount: function () {
        this
            .props
            .glEventHub
            .on('req-select', this.setReq);

            var xhr = new XMLHttpRequest();
            var params = JSON.stringify({Type: ''})
            xhr.open('get','Interpreter/GetRequests', true);
            xhr.onload = function() {
                var data = JSON.parse(xhr.responseText);
                this.setState({ data: data });
            }.bind(this);
            xhr.send(params);
    },
    componentWillUnmount: function () {
        this
            .props
            .glEventHub
            .off('req-select', this.setReq);

    },
    setReq: function (reqData) {
        this.setState(reqData);
    },
    render: function () {
        return (
            <div>
                <Grid>
                    <h1>{this.state.cuuID}</h1>
                    <Row>
                        <Column width="1/3">
                            
                            <input type="text" name="tset" value={this.state.cuuDepartment}>
                        </Column>
                        <Column width="1/3">
                            <AutoDropDown label='Physician'/>
                        </Column>
                        <Column width="1/3">
                            <AutoDropDown label='Program'/>
                        </Column>
                    </Row>
                    <Row><Column width="1/2">
                    <div className='FormBox'>
                        <Row>
                            <Column width="1/2">
                                <Checkbox label="Pre-Booked"/>
                            </Column>
                            <Column width="1/2">
                                <Checkbox label="Immediate Requests"/>
                            </Column>
                        </Row>
                        <Row>
                            <Column width="1/2">
                                <Test/>
                            </Column>
                            <Column width="1/2"></Column>
                        </Row>
                        <Row>
                            <Column width="1/1">
                                <AutoDropDown label='Language'/>
                            </Column>
                        </Row>  
                        <Row>
                            <Column width="8/8">
                                <AutoDropDown label='Location'/>
                            </Column>
                        </Row>
                        <Row>
                            <Column width="1/2">
                                <AutoDropDown label='Staff in Charge'/>
                            </Column>
                            <Column width="1/2">
                                <AutoDropDown label='Phone'/>
                            </Column>
                        </Row>
                        <Row>
                            <Column width="8/8">
                                <AutoDropDown label='Nature of Assignment'/>
                            </Column>
                        </Row>
                        <Row>
                            <Column width="1/4">
                                <Checkbox label='Precautions'/>
                            </Column>
                            <Column width="3/4">
                                <AutoDropDown/>
                            </Column>
                        </Row>
                    </div>
                    <div className='FormBox'>
                    <Row>
                        <Column width="1/2">
                            <AutoDropDown label='First Name'/>
                        </Column>
                        <Column width="1/2">
                            <AutoDropDown label='Last Name'/>
                        </Column>
                    </Row>
                    <Row>
                        <Column width="1/1">
                            <AutoDropDown label='MRN'/>
                        </Column>
                    </Row>
                    <Row>
                        <Column width="1/1">
                            <AutoDropDown label="Patient's Telehpne"/>
                        </Column>
                    </Row>
                    </div>
                    </Column>
                    <Column width="1/2">
                    <div className='FormBox'>
                        <Row>
                            <Column width="1/1">
                                <h5 className='section-heading'> Date of Request</h5> <Test/>
                            </Column>
                        </Row>
                        <Row>
                            <Column width="1/2">
                                <AutoDropDown label='Dispatcher'/>
                            </Column>
                            <Column width="1/2"></Column>
                        </Row>  
                        <Row>
                            <Column width="1/1">
                                <AutoDropDown label='Volunteer Name'/>
                            </Column>
                        </Row>  
                        <Row>
                            <Column width="1/4">
                                <Checkbox label="Emailed?"/>
                            </Column>
                            <Column width="1/4">
                                <Checkbox label="Confirmed?"/>
                            </Column>
                            <Column width="1/4">
                                <Checkbox label="Reminder"/>
                            </Column>
                            <Column width="1/4">
                                <Checkbox label="Going Directly?"/>
                            </Column>
                        </Row>
                        <Row>
                            <Column width="1/2">
                                <AutoDropDown label='Agency'/>
                            </Column>
                            <Column width="1/2">
                                <AutoDropDown label='Agency Ph'/>
                            </Column>
                        </Row>  
                        <Row>
                            <Column width="1/2">
                                <AutoDropDown label='Agency Interpreter Name'/>
                            </Column>
                            <Column width="1/2">
                                <AutoDropDown label='Agency Ref#'/>
                            </Column>
                        </Row>  
                        <Row>
                            <Column width="1/1">
                                <Checkbox label="Emailed?"/>
                            </Column>
                        </Row>
                        <Row>
                            <Column width="1/3">
                                <Checkbox label="Y"/>
                            </Column>
                            <Column width="1/3">
                                <Checkbox label="LST"/>
                            </Column>
                            <Column width="1/3">
                                <Checkbox label="Cancelled"/>
                            </Column>
                        </Row>
                        <Row>
                            <Column width="1/1">
                                <AutoDropDown label='Comments'/>
                            </Column>
                        </Row>
                    </div>
                    </Column>
                    </Row>
                </Grid>
            </div>
        )
    }
})

var InterpForm2 = React.createClass({

    getInitialState: function () {
        return {
            cuuID: cuuID,
            cuuDepartment: cuuDepartment,
            request: []
        }
    },
    componentWillMount: function () {
        this
            .props
            .glEventHub
            .on('req-select', this.setReq);

        var xhr = new XMLHttpRequest();
        var params = JSON.stringify({Type: ''})
        xhr.open('get','Interpreter/GetRequests', true);
        xhr.onload = function() {
            var data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        }.bind(this);
        xhr.send(params);
    },
    componentWillUnmount: function () {
        this
            .props
            .glEventHub
            .off('req-select', this.setReq);

    },
    setReq: function (reqData) {
        this.setState(reqData);
    },
    render: function () {
        return (
            <div>
                <Grid>

                </Grid>
            </div>
        )
    }
})

var FormBox = React.createClass({
    render: function () {
        return (
            <div class='FormBox'></div>
        )
    }
})

var cuuID = 99;
var cuuDepartment = 'NICU';
var myLayout = new GoldenLayout({
    content: [
        {
            type: 'column',
            content: [
                {
                    type: 'react-component',
                    component: 'test-component2',
                    props: {
                        cuuID: cuuID,
                        cuuDepartment: cuuDepartment,
                        label: 'A'
                    }
                }, {
                    type: 'react-component',
                    component: 'test-component',
                    props: {
                        cuuID: cuuID,
                        cuuDepartment: cuuDepartment,
                        label: 'B'
                    },
                    height: 80
                }, {
                    type: 'react-component',
                    component: 'test-component3',
                    props: {
                        cuuID: cuuID,
                        cuuDepartment: cuuDepartment,
                        label: 'B'
                    },
                    height: 80
                }
            ]
        }
    ]
});

var TestComponent = React.createClass({
    componentWillMount: function() {
        var rowData = [];

        var xhr = new XMLHttpRequest();
        xhr.open('get','Interpreter/GetRequests', true);
        xhr.onload = function() {
            var data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        }.bind(this);
        xhr.send();
    },
    onCellClicked(event) {
        //cuuID = event.data.id;
        this.state = {
            cuuID: event.data.ID,
            cuuDepartment: event.data.Department
        };
        console.log('onCellClicked: ' + event.data.Department + ', col ' + this.state.cuuDepartment);
        this
            .props
            .glEventHub
            .emit('req-select', this.state)
    },
    getInitialState: function () {

        return {
            quickFilterText: null,
            showGrid: true,
            showToolPanel: false,
            columnDefs: new ColDefFactory().createColDefs(),
            data: [],
            icons: {
                columnRemoveFromGroup: '<i class="fa fa-remove"/>',
                filter: '<i class="fa fa-filter"/>',
                sortAscending: '<i class="fa fa-long-arrow-down"/>',
                sortDescending: '<i class="fa fa-long-arrow-up"/>',
                groupExpanded: '<i class="fa fa-minus-square-o"/>',
                groupContracted: '<i class="fa fa-plus-square-o"/>',
                columnGroupOpened: '<i class="fa fa-minus-square-o"/>',
                columnGroupClosed: '<i class="fa fa-plus-square-o"/>'
            }
        }
    },
    render: function () {
        return (
            <div className="ag-material">
                <AgGridReact onCellClicked={this
                    .onCellClicked
                    .bind(this)} // listen for events with React callbacks
                    // binding to properties within React State or Props
                    // column definitions and row data are immutable, the grid
                    // will update when these lists change
                    columnDefs={this.state.columnDefs} rowData={this.state.data} // or provide props the old way with no binding
                    rowSelection="multiple" enableSorting="true" enableFilter="true" rowHeight="30"/></div>
        )
    }
});
myLayout.registerComponent('test-component', InterpForm);
myLayout.registerComponent('test-component3', InterpForm2);
myLayout.registerComponent('test-component2', TestComponent);
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