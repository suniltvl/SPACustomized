/// <reference path="../scripts/Typings/require.d.ts" />
define(function (require) {
    //dependencies
    var Boiler = require("Boiler"), settings = require("./settings"), moduleContexts = require("./module/modules"), errorHandler = "./handlers/errorHandler";

    //return an object with the public interface for an 'application' object. Read about module pattern for details.
    return {
        initialize: function () {
            /* In JavaScript, functions can be used similarly to classes in OO programming. Below,
            * we create an instance of 'Boiler.Context' by calling the 'new' operator. Then add
            * global settings. These will be propagated to child contexts
            */
            var appContext = new Boiler.Context();
            if (settings.uiLang) {
                if (!localStorage.getItem("user-language")) {
                    appContext.setLanguage(settings.uiLang);
                }
            }
            appContext.addSettings(settings);
            //appContext.loadChildContexts(moduleContexts);
        }
    };
});
