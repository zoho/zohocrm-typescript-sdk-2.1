import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

class SampleRecord {
    public static async call() {
        /*
         * Create an instance of Logger Class that takes two parameters
         * level -> Level of the log messages to be logged. Can be configured by typing Levels "." and choose any level from the list displayed.
         * filePath -> Absolute file path, where messages need to be logged.
         */
        let logger: ZOHOCRMSDK.Logger = new ZOHOCRMSDK.LogBuilder()
            .level(ZOHOCRMSDK.Levels.INFO)
            .filePath("/Users/Documents/final-logs.log")
            .build();

        /*
         * Create an UserSignature instance that takes user Email as parameter
         */
        let user1 = new ZOHOCRMSDK.UserSignature("abc@zoho.com");

        /*
         * Configure the environment
         * which is of the pattern Domain.Environment
         * Available Domains: USDataCenter, EUDataCenter, INDataCenter, CNDataCenter, AUDataCenter
         * Available Environments: PRODUCTION(), DEVELOPER(), SANDBOX()
         */
        let environment1: ZOHOCRMSDK.Environment = ZOHOCRMSDK.USDataCenter.PRODUCTION();

        /*
        * Create a Token instance
        * clientId -> OAuth client id.
        * clientSecret -> OAuth client secret.
        * grantToken -> OAuth Grant Token. 
        * refreshToken -> OAuth Refresh Token token.
        * redirectURL -> OAuth Redirect URL.
        */
        let token1 = new ZOHOCRMSDK.OAuthBuilder()
            .clientId("clientId")
            .clientSecret("clientSecret")
            // .grantToken("grantToken")
            .refreshToken("refreshToken")
            // .redirectURL("redirectURL")
            .build();

         /*
        * Create an instance of TokenStore.
        * host -> DataBase host name. Default "localhost"
        * databaseName -> DataBase name. Default "zohooauth"
        * userName -> DataBase user name. Default "root"
        * password -> DataBase password. Default ""
        * portNumber -> DataBase port number. Default "3306"
        * tableName -> DataBase table name. Default "oauthtoken"
        */
        // let tokenstore: ZOHOCRMSDK.DBStore = new ZOHOCRMSDK.DBBuilder()
        //  .host("hostName")
        //  .databaseName("databaseName")
        //  .userName("userName")
        //  .portNumber(3306)
        //  .tableName("tableName")
        //  .password("password")
        //  .build();

        /*
         * Create an instance of FileStore that takes absolute file path as parameter
         */
        let store: ZOHOCRMSDK.FileStore = new ZOHOCRMSDK.FileStore("/Users/Documents/ts_sdk_tokens.txt");

        /*
        * autoRefreshFields
        * if true - all the modules' fields will be auto-refreshed in the background, every    hour.
        * if false - the fields will not be auto-refreshed in the background. The user can manually delete the file(s) or refresh the fields using methods from ModuleFieldsHandler(utils/util/module_fields_handler.js)
        *
        * pickListValidation
        * A boolean field that validates user input for a pick list field and allows or disallows the addition of a new value to the list.
        * True - the SDK validates the input. If the value does not exist in the pick list, the SDK throws an error.
        * False - the SDK does not validate the input and makes the API request with the user’s input to the pick list
        */
        let sdkConfig: ZOHOCRMSDK.SDKConfig = new ZOHOCRMSDK.SDKConfigBuilder()
        .pickListValidation(false)
        .autoRefreshFields(true)
        .build();

        /*
         * The path containing the absolute directory path to store user specific JSON files containing module fields information.
         */
        let resourcePath: string = "/Users/Documents";

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
                .user(user1)
                .environment(environment1)
                .token(token1)
                .store(store)
                .SDKConfig(sdkConfig)
                .resourcePath(resourcePath)
                .logger(logger)
                .initialize();
        } catch (error) {
            console.log(error);
        }

        await SampleRecord.getRecords("leads");

        // await ZOHOCRMSDK.Initializer.removeUserConfiguration(user1, environment1);

        // let user2: ZOHOCRMSDK.UserSignature = new ZOHOCRMSDK.UserSignature("abc2@zoho.eu");

        // let environment2: Environment = EUDataCenter.SANDBOX();

        // let token2: ZOHOCRMSDK.OAuthToken = new ZOHOCRMSDK.OAuthBuilder()
        //  .clientId("1000.724QU3SPR58DWVN4AJ4E6TJUSVAE0W")
        //  .clientSecret("4a996f9f119932562afabae0c1d5f6954634b4f9e5")
        //  // .grantToken("1000.a4952d6a867dd86e31132ea2f012ae23.a919c554f86b157f5236ed1c8ffe2b28")
        //  .refreshToken("1000.50d28e145a688f9616fcbc4db8f8023c.c31c4f88d98a284d790e0cdbf019125e")
        //  .redirectURL("https://www.zoho.com")
        //  .build();

        // let sdkConfig2: ZOHOCRMSDK.SDKConfig = new ZOHOCRMSDK.SDKConfigBuilder().pickListValidation(true).autoRefreshFields(true).build();

        // (await new ZOHOCRMSDK.InitializeBuilder())
        // .user(user2)
        // .environment(environment2)
        // .token(token2)
        // .SDKConfig(sdkConfig2)
        // // .requestProxy(requestProxy)
        // .switchUser();

        // await SampleRecord.getRecords("Leads");
    }

    static async getRecords(moduleAPIName: string) {
        try {
            let moduleAPIName = "Leads";
            //Get instance of RecordOperations Class
            let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();
            let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();
            await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.APPROVED, "both");
            let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();
            await headerInstance.add(ZOHOCRMSDK.Records.GetRecordsHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T00:00:00+05:30"));
            //Call getRecords method that takes paramInstance, headerInstance and moduleAPIName as parameters
            let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ResponseHandler.MasterModel> = await recordOperations.getRecords(moduleAPIName, paramInstance, headerInstance);
            if (response != null) {
                //Get the status code from response
                console.log("Status Code: " + response.getStatusCode());
                if ([204, 304].includes(response.getStatusCode())) {
                    console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                    return;
                }
                //Get the object from response
                let responseObject: ZOHOCRMSDK.Records.ResponseHandler.MasterModel = response.getObject();
                if (responseObject != null) {
                    //Check if expected ResponseWrapper instance is received
                    if (responseObject instanceof ZOHOCRMSDK.Records.ResponseWrapper) {
                        //Get the array of obtained Record instances
                        let records: ZOHOCRMSDK.Records.Record[] = responseObject.getData();
                        for (let record of records) {
                            //Get the ID of each Record
                            console.log("Record ID: " + record.getId());
                            //Get the createdBy User instance of each Record
                            let createdBy = record.getCreatedBy();
                            //Check if createdBy is not null
                            if (createdBy != null) {
                                //Get the ID of the createdBy User
                                console.log("Record Created By User-ID: " + createdBy.getId());
                                //Get the name of the createdBy User
                                console.log("Record Created By User-Name: " + createdBy.getName());
                                //Get the Email of the createdBy User
                                console.log("Record Created By User-Email: " + createdBy.getEmail());
                            }
                            //Get the CreatedTime of each Record
                            console.log("Record CreatedTime: " + record.getCreatedTime());
                            //Get the modifiedBy User instance of each Record
                            let modifiedBy = record.getModifiedBy();
                            //Check if modifiedBy is not null
                            if (modifiedBy != null) {
                                //Get the ID of the modifiedBy User
                                console.log("Record Modified By User-ID: " + modifiedBy.getId());
                                //Get the name of the modifiedBy User
                                console.log("Record Modified By User-Name: " + modifiedBy.getName());
                                //Get the Email of the modifiedBy User
                                console.log("Record Modified By User-Email: " + modifiedBy.getEmail());
                            }
                            //Get the ModifiedTime of each Record
                            console.log("Record ModifiedTime: " + record.getModifiedTime());
                            //Get the list of Tag instance each Record
                            let tags: ZOHOCRMSDK.Tags.Tag[] = record.getTag();
                            //Check if tags is not null
                            if (tags != null) {
                                tags.forEach(tag => {
                                    //Get the Name of each Tag
                                    console.log("Record Tag Name: " + tag.getName());
                                    //Get the Id of each Tag
                                    console.log("Record Tag ID: " + tag.getId());
                                });
                            }
                            //To get particular field value
                            console.log("Record Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                            console.log("Record KeyValues: ");
                            let keyValues: Map<string, any> = record.getKeyValues();
                            let keyArray: string[] = Array.from(keyValues.keys());
                            for (let keyName of keyArray) {
                                let value: any = keyValues.get(keyName);
                                console.log(keyName + " : " + value);
                            }
                        }
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
}

SampleRecord.call();
