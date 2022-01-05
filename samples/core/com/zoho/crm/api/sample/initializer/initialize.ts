import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class SDKInitializer {
    public static async initializeSDK() {
        /*
         * Create an instance of Logger Class that takes two parameters
         * level -> Level of the log messages to be logged. Can be configured by typing Levels "." and choose any level from the list displayed.
         * filePath -> Absolute file path, where messages need to be logged.
         */
        let logger: ZOHOCRMSDK.Logger = new ZOHOCRMSDK.LogBuilder()
            .level(ZOHOCRMSDK.Levels.INFO)
            .filePath("/Users/Documents/".concat(new Date().toISOString().split('T')[0], ".log"))
            .build();

        /*
         * Create an UserSignature instance that takes user Email as parameter
         */
        let user = new ZOHOCRMSDK.UserSignature("abc@zoho.com");

        /*
         * Configure the environment
         * which is of the pattern Domain.Environment
         * Available Domains: USDataCenter, EUDataCenter, INDataCenter, CNDataCenter, AUDataCenter
         * Available Environments: PRODUCTION(), DEVELOPER(), SANDBOX()
         */
        let environment: ZOHOCRMSDK.Environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();

        /*
         * A Boolean value to allow or prevent auto-refreshing of the modules' fields in the background.
         * if true - all the modules' fields will be auto-refreshed in the background whenever there is any change.
         * if false - the fields will not be auto-refreshed in the background. The user can manually delete the file(s) or the specific module's fields using methods from ModuleFieldsHandler
         */
        let sdkConfig = new ZOHOCRMSDK.SDKConfigBuilder().autoRefreshFields(false).pickListValidation(true).build();

        let token: ZOHOCRMSDK.OAuthToken = new ZOHOCRMSDK.OAuthBuilder()
            // .id("typescript_abc_us_prd_ac6b")
            .clientId("clientId")
            .clientSecret("clientSecret")
            // .grantToken("grantToken")
            .refreshToken("refreshToken")
            // .accessToken("accessToken")
            // .redirectURL("redirectURL")
            .build();

        /*
         * Create an instance of TokenStore.
         * 1 -> DataBase host name. Default "localhost"
         * 2 -> DataBase name. Default "zohooauth"
         * 3 -> DataBase user name. Default "root"
         * 4 -> DataBase password. Default ""
         * 5 -> DataBase port number. Default "3306"
         */
        // let tokenstore: ZOHOCRMSDK.DBStore = new ZOHOCRMSDK.DBBuilder().build();

        let tokenstore: ZOHOCRMSDK.FileStore = new ZOHOCRMSDK.FileStore("/Users/Documents/tokens1.txt");

        /*
         * The path containing the absolute directory path to store user specific JSON files containing module fields information. 
         */
        let resourcePath: string = "/Users/Documents";

        let proxyBuilder: ZOHOCRMSDK.RequestProxy = new ZOHOCRMSDK.ProxyBuilder()
        .host("")
        .port(10)
        .build();

        /*
         * Call the static initialize method of Initializer class that takes the following arguments
         * user -> UserSignature instance
         * environment -> Environment instance
         * token -> Token instance
         * store -> TokenStore instance
         * SDKConfig -> SDKConfig instance
         * resourcePath -> resourcePath
         * logger -> Logger instance
         */
        try {
            (await new ZOHOCRMSDK.InitializeBuilder())
                .user(user)
                .environment(environment)
                .token(token)
                .store(tokenstore)
                .SDKConfig(sdkConfig)
                .resourcePath(resourcePath)
                .logger(logger)
                .initialize();
        } catch (error) {
            console.log(error);
        }
        
        // console.log(await tokenstore.deleteTokens());

        // console.log(await tokenstore.getTokens());
    }
}
