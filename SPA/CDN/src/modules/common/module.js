/// <reference path="../../../scripts/Typings/jquery.d.ts" />
/// <reference path="../../../scripts/Typings/require.d.ts" />
define([
    'Boiler',
    './login/component'
], function (Boiler, LoginComponent) {
    var Module = function (globalContext) {
        var context = new Boiler.Context(globalContext);
        

        //scoped DomController that will be effective only on $('#page-content')
        var controller = new Boiler.DomController($('#siteWrapper'));

        //add routes with DOM node selector queries and relevant components
        controller.addRoutes({
            "#siteCommon": new LoginComponent(context)
        });

        controller.start();
    };

    return Module;
});
