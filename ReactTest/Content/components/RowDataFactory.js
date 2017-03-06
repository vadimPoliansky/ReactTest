import RefData from './RefData';

export default class RowDataFactory {

    createRowData() {
        var rowData = [];

        var xhr = new XMLHttpRequest();
        xhr.open('get','Interpreter/GetRequests', true);
        xhr.onload = function() {
            var data = JSON.parse(xhr.responseText);
            console.log(data);
            return data;
            //this.setState({ data: data });
        }.bind(this);
        xhr.send();

    }

    createRandomPhoneNumber() {
        var result = '+';
        for (var i = 0; i < 12; i++) {
            result += Math.round(Math.random() * 10);
            if (i === 2 || i === 5 || i === 8) {
                result += ' ';
            }
        }
        return result;
    }

}