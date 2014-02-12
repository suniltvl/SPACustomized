/// <reference path="../scripts/typings/config.d.ts" />
/// <reference path="../scripts/Typings/jquery.d.ts" />
/// <reference path="../scripts/Typings/require.d.ts" />

'use strict';

require.config({
    baseUrl: Config.getCDNPath() + "src/",
    paths: {
        // requirejs plugins in use
        text: '../scripts/libs/require/text',
        order: '../scripts/libs/require/order',
        i18n: '../scripts/libs/require/i18n',
        domReady: '../scripts/libs/require/domReady',
        path: '../scripts/libs/require/path',
        // namespace that aggregate core classes that are in frequent use
        Boiler: './core/_boiler_'
    },
    //defulat value is 7 seconds
    //waitSeconds: 30
});
