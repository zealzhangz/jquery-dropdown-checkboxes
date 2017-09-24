/*
 *  jQuery dropdowncheckboxes - v0.0.1
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
            'isAjax': true,
            'changeCallback': undefined,
            'options': [{text: 'Option1', name: 'myOption1', id: '_myOption1', isChecked: 1}, {
                text: 'Option2',
                name: 'myOption2',
                id: '_myOption2',
                isChecked: 0
            }],
            'template': '<button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
            'Dropdown' +
            '<span class="caret"></span>' +
            '</button>'
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
            dropdownHtml += '</ul>';
            t.html(dropdownHtml);
            //Call after initial
            e.settings.changeCallback.call(this, e.getAllBoxes());
            var checkboxGroup = e.settings.targetId + ' input:checkbox';
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
