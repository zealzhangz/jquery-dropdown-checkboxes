# jQuery dropdown checkboxes Plugin by zealzhangz (https://github.com/zealzhangz/jquery-dropdown-checkboxes)

![jquery-dropdown-checkboxes](https://github.com/zealzhangz/jquery-dropdown-checkboxes/blob/master/readme.png)

# DISCLAIMER
An easy-to-use dropdown checkbox jQuery plugin based on Bootstrap dropdown.You can simply customize the style of the control.This control
has two modes "auto" and "button",in "auto" mode every checkboxes' status changed can trigger callback.In another mode "button" callback
can be triggered when you click save button,the two models can not coexist.The default mode is "auto" mode.Both modes you can get all checkboxes
jQuery object when it was triggered from callback.Please refer to the specific sample.

## Install - Bower

Install `bower` globally
```sh
npm install -g bower
```

Install jquery-dropdown-checkboxes and dependencies
```
bower install jquery-dropdown-checkboxes --save
```

Include jquery,bootstrap and jquery-dropdown-checkboxes in your page
```html
<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css"/>
<link rel="stylesheet" href="bower_components/jquery-dropdown-checkboxes/dist/jquery.dropdowncheckboxes.min.css"/>
<script src="bower_components/jquery/dist/jquery.min.js"></script>
<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="bower_components/jquery-dropdown-checkboxes/dist/jquery.dropdowncheckboxes.min.js"></script>
```

## Using the plugin
```javascript
    $("#mydropdowncheckbox2").dropdowncheckboxes({
        "targetId": "#mydropdowncheckbox2",
        "changeCallback": myCallback,
        'options': [
        {text: 'Apple', name: 'Apple', id: '_myApple', isChecked: 1},
        {text: 'Orange',name: 'Orange',id: '_myOrange',isChecked: 0},
        {text: 'Banana',name: 'Banana',id: '_myBanana',isChecked: 1}],
        "template": '<a data-toggle="dropdown" aria-expanded="true">Fruits<span class="caret"></span></a>'
    });

    function myCallback(boxes) {
        var values = '';
        $(boxes).each(function () {
            if ($(this).is(":checked")) {
                values += $(this).attr("name") + ',';
            }
        });
        $("#checkboxValue").val(values.slice(0, -1));
    }
```
#### [demo/](https://github.com/zealzhangz/jquery-dropdown-checkboxes/tree/master/demo)

Contains a simple HTML file to demonstrate your plugin.

#### [dist/](https://github.com/zealzhangz/jquery-dropdown-checkboxes/tree/master/dist)

This is where the generated files are stored once Grunt runs.

#### [.jshintrc](https://github.com/zealzhangz/jquery-dropdown-checkboxes/blob/master/.jshintrc)

List of rules used by JSHint to detect errors and potential problems in JavaScript.

#### [Gruntfile.js](https://github.com/zealzhangz/jquery-dropdown-checkboxes/blob/master/Gruntfile.js)

Contains all automated tasks using Grunt.

#### [package.json](https://github.com/zealzhangz/jquery-dropdown-checkboxes/blob/master/package.json)

Specify all dependencies loaded via Node.JS.

## Contributing

Check [CONTRIBUTING.md](https://github.com/zealzhangz/jquery-dropdown-checkboxes/blob/master/CONTRIBUTING.md)

## History

Check [Release](https://github.com/zealzhangz/jquery-dropdown-checkboxes/releases) list.

## License

[MIT License](http://zealzhangz.mit-license.org/)