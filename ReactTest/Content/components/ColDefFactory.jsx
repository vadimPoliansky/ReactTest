import SkillsCellRenderer from './SkillsCellRenderer.jsx';
import NameCellEditor from './NameCellEditor.jsx';
import ProficiencyCellRenderer from './ProficiencyCellRenderer.jsx';
import RefData from './RefData';
import SkillsFilter from './SkillsFilter.jsx';
import ProficiencyFilter from './ProficiencyFilter.jsx';

export default class ColDefFactory {

    createColDefs() {

        var columnDefs = [
            {headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
            suppressMenu: false, pinned: true},
            {headerName: 'Location', width: 100, suppressSorting: true,
            suppressMenu: false, pinned: true},
            {headerName: 'Department', width: 100, suppressSorting: true,
            suppressMenu: false, pinned: true},
            {headerName: 'Physician', width: 100, suppressSorting: true,
            suppressMenu: false, pinned: true},
            {headerName: 'Date_of_Assignemnt', width: 100, suppressSorting: true,
            suppressMenu: false, pinned: true},
            {headerName: 'Time', width: 100, suppressSorting: true,
            suppressMenu: false, pinned: true},
            {headerName: 'Patient_Last_Name', width: 100, suppressSorting: true,
            suppressMenu: false, pinned: true},
            {headerName: 'Patient_First_Name', width: 100, suppressSorting: true,
            suppressMenu: false, pinned: true},
            {headerName: 'Emailed', width: 100, checkboxSelection: true, suppressSorting: true,
            suppressMenu: false, pinned: true},


        ];
        return columnDefs;
    }
}

// this is a simple cell renderer, putting together static html, no
// need to use React for it.
function countryCellRenderer(params) {
    if (params.value) {
        var flag = "<img border='0' width='15' height='10' " +
            "style='margin-bottom: 2px' src='http://flags.fmcdn.net/data/flags/mini/"
            + RefData.COUNTRY_CODES[params.value] + ".png'>";
        return flag + " " + params.value;
    } else {
        return null;
    }
}

//Utility function used to pad the date formatting.
function pad(num, totalStringSize) {
    let asString = num + "";
    while (asString.length < totalStringSize) asString = "0" + asString;
    return asString;
}
