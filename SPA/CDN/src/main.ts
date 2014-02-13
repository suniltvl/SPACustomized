/// <reference path="../scripts/typings/config.d.ts" />
/// <reference path="../scripts/Typings/jquery.d.ts" />
/// <reference path="../scripts/Typings/require.d.ts" />

'use strict'; // avoid accidental global variable declarations


/*
 * Let's define short alias for commonly used AMD libraries and name-spaces. Using
 * these alias, we do not need to specify lengthy paths, when referring a child
 * files. We will 'import' these scripts, using the alias, later in our application.
 */
require.config({
    baseUrl: "http://localhost:93/src/",
    paths: {
        // requirejs plugins in use
        text: '../scripts/libs/require/text',
        i18n: '../scripts/libs/require/i18n',
        domReady: '../scripts/libs/require/domReady',
        path: '../scripts/libs/require/path',
        // namespace that aggregate core classes that are in frequent use
        Boiler: './core/_boiler_'
    },
    //defulat value is 7 seconds
    waitSeconds: 30
});



/*
 * This is the main entry to the application.
 * This script is called from the main HTML file.
 * 
 * We use requirejs for writing modular JavaScript. The 'require' function below
 * behaves just like 'import' in PHP or 'using' in .NET. You may define the
 * relative path to the script you wish to import in the first array parameter,
 * then requirejs will invoke the callback function (given in second param) with
 * the return values of those scripts.
 * 
 * Here we use the requirejs domReady plugin to run our code, once the DOM is ready to be used.
 */

define(function (require) {

    /*
     * Let's import all dependencies as variables of this script file.
     *
     * Note: when we define the variables, we use PascalCase for namespaces ('Boiler' in the case) and classes,
     * whereas object instances ('settings' and 'modules') are represented with camelCase variable names.
     */

    var applicationType: string = Config.getAppType();
    var appFileName: string = applicationType !== "" ?
        "./init_application" :
        "./application";

    var application = require([appFileName], function (app) {
        app.initialize()
    });
    //application.initialize();
});


/*

require(["./application", "domReady"], function (Application, domReady) {
    domReady(function () {

        jQuery.support.cors = true;
        var app = new Application();
    });
});
*/