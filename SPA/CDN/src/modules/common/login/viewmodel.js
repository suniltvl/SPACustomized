/// <reference path="../../../scripts/Typings/require.d.ts" />
/// <reference path="../../../scripts/Typings/jquery.d.ts" />
/// <reference path="../../../scripts/Typings/kendo.web.d.ts" />
define(["Boiler"], function (Boiler) {
    var ViewModel = function (moduleContext) {
        //end of observable
        var loginViewModel = kendo.observable({});

        return {
            data: loginViewModel
        };
    };

    //end of ViewModel
    return ViewModel;
});
