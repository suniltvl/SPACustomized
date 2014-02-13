/// <reference path="../../scripts/Typings/kendo.web.d.ts" />
/// <reference path="../../scripts/Typings/jquery.d.ts" />
/// <reference path="../../scripts/Typings/require.d.ts" />
//Pass in a reference to Core, just in case...
define(["Boiler", 'text!./ajaxError.htm', 'text!./scriptError.htm'], function (Boiler, ajaxErrorTempl, scriptErrorTempl) {

    $(document).ajaxError(function (event, xhr, settings) {


        var message = xhr.status + ' ' + xhr.statusText + ' ' + xhr.responseText;

        var vm = kendo.observable(
            {
                message: message,
                url: settings.url
            });


        //$info.helpers.errorMsgShow(ajaxErrorTempl, vm);

        //$info.helpers.hideWorkAreaBusyCursor();
        //$info.helpers.hidePageBusyCursor();

    });


    window.onerror = function (message, url, line) {

        var vm = kendo.observable(
            {
                message: message,
                url: url,
                line: line
            });

        //$info.helpers.errorMsgShow(scriptErrorTempl, vm);
        //$info.helpers.hideWorkAreaBusyCursor();
        //$info.helpers.hidePageBusyCursor();
    };

});