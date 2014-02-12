/// <reference path="config.ts" />
/// <reference path="../Scripts/Typings/lab.d.ts" />
/// <reference path="../Scripts/Typings/jquery.d.ts" />

interface IReferences {
    loadJsReferences(): void;
    loadCssReferences(): void;
}

class References implements IReferences {

    static loadJsReferences(): void {
        var cdn: string = Config.getCDNPath();
        var requireJsPath = cdn + "scripts/libs/require/require.js";
        var jsFilesExtension = Config.getJsFileExtension();
        //+Loading files Started
        $LAB
            .script(cdn + "scripts/libs/underscore/underscore-1.3.3.js")
            .script(cdn + "scripts/libs/signals/signals.min.js")
            .script(cdn + "scripts/libs/crossroads/crossroads.min.js")
            .script(cdn + "scripts/libs/hasher/hasher.min.js")
            .script(cdn + "scripts/libs/pubsub/pubsub-20120708.js")
            .script(cdn + "scripts/libs/backbone/backbone-min-0.9.2.js")
            .script(cdn + "scripts/libs/math.uuid.js")
            .script(cdn + "scripts/libs/signals/signals.min.js")
            .wait(function () {
                $("head").append("<script type=\"text/javascript\" data-main=\"/config/main.js\" id=\"requirejs\" src=\"" + requireJsPath + "\"></script>");
            });

    }

    static loadCssReferences(): void {
        var cdn: string = Config.getCDNPath();
        var cssFileExtension = Config.getCssFileExtension();
        var head = document.head || document.getElementsByTagName("head");
        var cssFilesArray = [
        //"Content/kendo/" + Config.getKendoVersion() + "/kendo.common.min.css",
        //"Content/kendo/" + Config.getKendoVersion() + "/theme1.less",
            "content/css/shopcart.css",
            "content/css/stil.css"
        ];

        for (var fileIndex: number = 0; fileIndex < cssFilesArray.length; fileIndex++) {

            var oLink: HTMLLinkElement = document.createElement("link");
            var fileUrl: string = cssFilesArray[fileIndex];
            oLink.rel = "stylesheet";
            oLink.type = "text/css";
            oLink.href = fileUrl;
            $("head").append(oLink);
        }
    }
}