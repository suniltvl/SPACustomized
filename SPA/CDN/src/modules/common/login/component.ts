/// <reference path="../../../scripts/Typings/jquery.d.ts" />
/// <reference path="../../../scripts/Typings/kendo.web.d.ts" />
/// <reference path="../../../scripts/Typings/require.d.ts" />

define(['require', 'Boiler', 'text!./view.html', 'i18n!./nls/resources', './viewmodel'], function (require, Boiler, template, nls, ViewModel) {
    var Component = function (moduleContext) {
        debugger;
        var vm, panel = null;

        this.activate = function (parent, params) {
            debugger;
            if (!panel) {
                panel = new Boiler.ViewTemplate(parent, template, nls);
                vm = new ViewModel(moduleContext);
                kendo.bind(panel.getDomElement(), vm.data);
            }
            panel.show();

        }

        this.deactivate = function () {
            if (panel) {
                panel.hide();
            }
        }

    };

    return Component;
});