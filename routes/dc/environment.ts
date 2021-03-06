/**
 * This class represents the Zoho CRM environment.
 */
class Environment {
    private url: string;

    private accountsUrl: string;

    private fileUploadUrl: string;

    private name: string;

    /**
     * Creates an Environment class instance with the specified parameters.
     * @param {string} url - A String representing the domain URL
     * @param {string} accountsUrl - A String representing the accounts URL to fetch tokens.
     * @param {string} fileUploadUrl - A string representing the file Upload URL
     * @param {string} name - A string
     */
    constructor(url: string, accountsUrl: string, fileUploadUrl: string, name: string) {
        this.url = url;

        this.accountsUrl = accountsUrl;

        this.fileUploadUrl = fileUploadUrl;

        this.name = name;
    }

    /**
     * The method is used to get the Zoho CRM API URL.
     * @returns {string} A String representing the Zoho CRM API URL.
     */
    public getUrl(): string {
        return this.url;
    }

    /**
     * The method to get the Zoho CRM Accounts URL.
     * @returns {string} A String representing the accounts URL.
     */
    public getAccountsUrl(): string {
        return this.accountsUrl;
    }

    /**
     * The method to get the File Upload URL.
     * @returns {string} A String representing the File Upload URL.
     */
    public getFileUploadUrl(): string {
        return this.fileUploadUrl;
    }

    /**
     * This method to get name.
     * @return {string} A string representing the name.
     */
    public getName(): string {
        return this.name;
    }
}

export {
	Environment as MasterModel,
	Environment as Environment
}