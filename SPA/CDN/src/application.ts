/// <reference path="../scripts/Typings/require.d.ts" />

define(function (require) {

    //dependencies
    var Boiler = require("Boiler"), // BoilerplateJS namespace used to access core classes, see above for the definition
        settings = require("./settings"), //global settings file of the product suite
        moduleContexts = require("./modules/modules"),
        errorHandler = "./handlers/errorHandler"; //file where all of your product modules will be listed

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
            appContext.loadChildContexts(moduleContexts);
        }
    };
});

