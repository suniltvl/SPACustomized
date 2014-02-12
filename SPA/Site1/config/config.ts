// Interface
interface IConfig {
    getKendoVersion(): string;
    getCDNPath(): string;
    getJsFileExtension(): string;
    getCssFileExtension(): string;

}

class Config implements IConfig {

    private static kendoVersion: string = "2013.1.319";
    private static cdnPath: string = "http://localhost:93/";
    private static jsFileExtension: string = ".js";
    private static cssFileExtension: string = ".css";

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
}