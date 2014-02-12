/// <reference path="../scripts/Typings/Config.d.ts" />
/// <reference path="../scripts/Typings/require.d.ts" />
/*
* This AMD module define a object containing settings as its properties. This settings file is
* getting loaded to GlobalContext, so that the settings defined here are available to all
* sub contexts.
* Settings can be simple literal variables or objects having complex definitions.
*/
define({
    appName: "Inforius PMS Mock",
    serviceUrl: Config.getCDNPath(),
    uiLang: "de",
    theme: "red"
});
