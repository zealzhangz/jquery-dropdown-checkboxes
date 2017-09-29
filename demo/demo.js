$(function () {
    $("#mydropdowncheckbox").dropdowncheckboxes({
        "targetId": "#mydropdowncheckbox",
        "changeCallback": myCallback,
        'options': [{text: 'Dog', name: 'Dog', id: '_dog', isChecked: 1}, {
            text: 'Cat',
            name: 'Cat',
            id: '_cat',
            isChecked: 0
        }],
        "template": '<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
        'Animals' +
        '<span class="caret"></span>' +
        '</button>'
    });
    $("#mydropdowncheckbox2").dropdowncheckboxes({
        "targetId": "#mydropdowncheckbox2",
        "changeCallback": myCallback2,
        'options': [{text: 'Apple', name: 'Apple', id: '_myApple', isChecked: 1}, {
            text: 'Orange',
            name: 'Orange',
            id: '_myOrange',
            isChecked: 0
        }, {
            text: 'Banana',
            name: 'Banana',
            id: '_myBanana',
            isChecked: 1
        }],
        "template": '<a data-toggle="dropdown" aria-expanded="true">Fruits<span class="caret"></span></a>'
    });
    $("#mydropdowncheckbox3").dropdowncheckboxes({
        "targetId": "#mydropdowncheckbox3",
        'mode': 'button',
        "saveClickCallback": saveCallback3,
        'options': [{text: 'Apple', name: 'Apple', id: '_myApple', isChecked: 1}, {
            text: 'Orange',
            name: 'Orange',
            id: '_myOrange',
            isChecked: 1
        }, {
            text: 'Banana',
            name: 'Banana',
            id: '_myBanana',
            isChecked: 1
        }],
        "template": '<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
        'Fruits' +
        '<span class="caret"></span>' +
        '</button>',
        'btnCleatText': 'Clear',
        'btnSaveText': 'Save'
    });
})

function myCallback(boxes) {
    var values = '';
    $(boxes).each(function () {
        if ($(this).is(":checked")) {
            values += $(this).attr("name") + ',';
        }
    });
    $("#checkboxValue").val(values.slice(0, -1));
}

function myCallback2(boxes) {
    var values = '';
    $(boxes).each(function () {
        if ($(this).is(":checked")) {
            values += $(this).attr("name") + ',';
        }
    });
    $("#checkboxValue2").val(values.slice(0, -1));
}

function saveCallback3(boxes) {
    var values = '';
    $(boxes).each(function () {
        if ($(this).is(":checked")) {
            values += $(this).attr("name") + ',';
        }
    });
    $("#checkboxValue3").val(values.slice(0, -1));
}