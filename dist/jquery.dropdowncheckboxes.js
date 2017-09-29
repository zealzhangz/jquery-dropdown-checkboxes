/*
 *  jQuery dropdowncheckboxes - v0.0.2
 *  An easy-to-use dropdown checkbox jQuery plugin
 *  https://github.com/zealzhangz/jquery-dropdowncheckboxes
 *
 *  Made by zealzhangz/zealzhangz@gmail.com
 *  Under MIT License
 */
//dropdowncheckboxes.js

if (typeof jQuery === 'undefined') {
    throw new Error('jquery-confirm requires jQuery');
}
// numerator and denominator
;(function ($) {
    var pluginName = 'dropdowncheckboxes',
        defaults = {
            'targetId': '',
            'mode': 'auto',
            'isAjax': true,
            'changeCallback': undefined,
            'saveClickCallback': undefined,
            'options': [{text: 'Option1', name: 'myOption1', id: '_myOption1', isChecked: 1}, {
                text: 'Option2',
                name: 'myOption2',
                id: '_myOption2',
                isChecked: 0
            }],
            'template': '<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
            'Dropdown' +
            '<span class="caret"></span>' +
            '</button>',
            'btnCleatText': 'Clear',
            'btnSaveText': 'Save'
        };

    // The  plugin constructor
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this.initial();
    }

    Plugin.prototype = {
        initial: function () {
            var e = this;
            e.renderDropdown(e.settings.options);
        },
        renderDropdown: function (optionObjects) {
            var e = this;
            var t = $(e.element);
            var dropdownHtml = '';
            dropdownHtml += e.settings.template;
            dropdownHtml += '<ul class="dropdown-menu scrollbar">';
            //concat option html
            for (var i = 0; i < optionObjects.length; i++) {
                dropdownHtml += '<li><label><input name="' + optionObjects[i].name + '" type="checkbox" id="' + optionObjects[i].id;
                dropdownHtml += optionObjects[i].isChecked === 1 ? '" checked>' : '">';
                dropdownHtml += ' <a>' + optionObjects[i].text + '</a></label></li>';
            }
            if (e.settings.mode === 'button') {
                dropdownHtml += '<li class="text-center li-button">';
                dropdownHtml += '<button type="button" id="dropdown-btn-clear" class="btn btn-xs btn-default btn-clear" value="Clear">' + e.settings.btnCleatText + '</button>';
                dropdownHtml += '<button type="button" id="dropdown-btn-save" class="btn btn-xs btn-default btn-save" value="Save">' + e.settings.btnSaveText + '</button>';
                dropdownHtml += '</li>';
            }
            dropdownHtml += '</ul>';
            t.html(dropdownHtml);
            var checkboxGroup = e.settings.targetId + ' input:checkbox';
            if (e.settings.mode === 'auto') {
                //Call after initial
                e.settings.changeCallback.call(this, e.getAllBoxes());
                //Register checkbox change Event
                $(checkboxGroup).on('change', function () {
                    // var currentBox = $(this);
                    var boxes = {};
                    if ($.isFunction(e.settings.changeCallback)) {
                        boxes = e.getAllBoxes();
                        e.settings.changeCallback.call(this, boxes);
                    } else {
                        console.log('Change callback function is invalided.');
                    }
                });
            } else if (e.settings.mode === 'button') {
                //Call after initial
                e.settings.saveClickCallback.call(this, e.getAllBoxes());
                $('#dropdown-btn-clear').on('click', function () {
                    var checkboxGroup = e.settings.targetId + ' input:checkbox:checked';
                    $(checkboxGroup).prop('checked', false);
                });
                $('#dropdown-btn-save').on('click', function () {
                    var boxes = {};
                    if ($.isFunction(e.settings.saveClickCallback)) {
                        boxes = e.getAllBoxes();
                        e.settings.saveClickCallback.call(this, boxes);
                        $('[data-toggle="dropdown"]').parent().removeClass('open');
                    } else {
                        console.log('Save callback function is invalided.');
                    }
                });
            }
            //set event stopPropagation
            t.find('.dropdown-menu').click(function (e) {
                e.stopPropagation();
            });
        },
        getAllBoxes: function () {
            var e = this;
            var checkboxGroup = e.settings.targetId + ' input:checkbox';
            var boxes = [];
            $(checkboxGroup).each(function () {
                boxes.push($(this));
            });
            return boxes;
        }
    };
    $.fn[pluginName] = function (options) {
        var e = this;
        e.each(function () {
            if (!$.data(e, 'plugin_' + pluginName)) {
                $.data(e, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
        return e;
    };
})(jQuery);
