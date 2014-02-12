var Config = (function () {
    function Config() {
    }
    Config.getKendoVersion = function () {
        return this.kendoVersion;
    };

    Config.getCDNPath = function () {
        return this.cdnPath;
    };

    Config.getJsFileExtension = function () {
        return this.jsFileExtension;
    };

    Config.getCssFileExtension = function () {
        return this.cssFileExtension;
    };
    Config.kendoVersion = "2013.1.319";
    Config.cdnPath = "http://localhost:93/";
    Config.jsFileExtension = ".js";
    Config.cssFileExtension = ".css";
    return Config;
})();
