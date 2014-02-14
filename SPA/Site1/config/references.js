/// <reference path="config.ts" />
/// <reference path="../Scripts/Typings/lab.d.ts" />
/// <reference path="../Scripts/Typings/jquery.d.ts" />
var References = (function () {
    function References() {
    }
    References.loadJsReferences = function () {
        var cdn = Config.getCDNPath();
        var requireJsPath = cdn + "scripts/libs/require/require.js";
        var mainJsPath = cdn + "src/main.js";
        var jsFilesExtension = Config.getJsFileExtension();

        //+Loading files Started
        $LAB.script(cdn + "scripts/libs/underscore/underscore-1.3.3.js").script(cdn + "scripts/libs/signals/signals.min.js").script(cdn + "scripts/libs/crossroads/crossroads.min.js").script(cdn + "scripts/libs/hasher/hasher.min.js").script(cdn + "scripts/libs/pubsub/pubsub-20120708.js").script(cdn + "scripts/libs/backbone/backbone-min-0.9.2.js").script(cdn + "scripts/libs/math.uuid.js").script(cdn + "scripts/libs/signals/signals.min.js").script(cdn + "scripts/libs/kendo/" + Config.getKendoVersion() + "/kendo.web.min.js").wait(function () {
            document.title = Config.getApplicationTitle();
            $("head").append("<script type=\"text/javascript\" data-main=\"" + mainJsPath + "\" id=\"requirejs\" src=\"" + requireJsPath + "\"></script>");
        });
    };

    References.loadCssReferences = function () {
        var cdn = Config.getCDNPath();
        var cssFileExtension = Config.getCssFileExtension();
        var head = document.head || document.getElementsByTagName("head");
        var cssFilesArray = [
            "content/css/shopcart.css",
            "content/css/stil.css"
        ];

        for (var fileIndex = 0; fileIndex < cssFilesArray.length; fileIndex++) {
            var oLink = document.createElement("link");
            var fileUrl = cssFilesArray[fileIndex];
            oLink.rel = "stylesheet";
            oLink.type = "text/css";
            oLink.href = fileUrl;
            $("head").append(oLink);
        }
    };
    return References;
})();
