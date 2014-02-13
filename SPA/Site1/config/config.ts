// Interface
interface IConfig {
    getKendoVersion(): string;
    getCDNPath(): string;
    getJsFileExtension(): string;
    getCssFileExtension(): string;
    getApplicationTitle(): string;
    getAppType(): string;

}

class Config implements IConfig {

    private static kendoVersion: string = "2013.2.716";
    private static cdnPath: string = "http://localhost:93/";
    private static jsFileExtension: string = ".js";
    private static cssFileExtension: string = ".css";
    private static applicationTitle: string = "Shop Site 1";
    private static applicationJsType: string = "init";


    static getKendoVersion(): string {
        return this.kendoVersion;
    }

    static getCDNPath(): string {
        return this.cdnPath;
    }

    static getJsFileExtension(): string {
        return this.jsFileExtension;
    }

    static getCssFileExtension(): string {
        return this.cssFileExtension;
    }

    static getApplicationTitle(): string {
        return this.applicationTitle;
    }

    static getAppType(): string {
        return this.applicationJsType;
    }
}