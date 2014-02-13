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

    Config.getApplicationTitle = function () {
        return this.applicationTitle;
    };

    Config.getAppType = function () {
        return this.applicationJsType;
    };
    Config.kendoVersion = "2013.2.716";
    Config.cdnPath = "http://localhost:93/";
    Config.jsFileExtension = ".js";
    Config.cssFileExtension = ".css";
    Config.applicationTitle = "Shop Site 1";
    Config.applicationJsType = "init";
    return Config;
})();
