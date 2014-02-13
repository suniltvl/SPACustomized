interface ConfigStatic {
    getKendoVersion(): string;
    getCDNPath(): string;
    getJsFileExtension(): string;
    getCssFileExtension(): string;
    getApplicationTitle(): string;
    getAppType(): string;
}

declare var Config: ConfigStatic;