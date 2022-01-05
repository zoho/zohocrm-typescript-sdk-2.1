import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class VariableGroups {
    /**
     * <h3> Get Variable Groups </h3>
     * This method is used to get the details of all the variable groups and print the response.
     */
    public static async getVariableGroups() {
        //Get instance of ZOHOCRMSDK.VariableGroups.VariableGroupsOperations Class
        let variableGroupsOperations: ZOHOCRMSDK.VariableGroups.VariableGroupsOperations = new ZOHOCRMSDK.VariableGroups.VariableGroupsOperations();

        //Call getVariableGroups method
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.VariableGroups.ResponseHandler.MasterModel> = await variableGroupsOperations.getVariableGroups();

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.VariableGroups.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.VariableGroups.ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.VariableGroups.ResponseWrapper) {
                    //Get the array of obtained VariableGroup instances
                    let variableGroups: ZOHOCRMSDK.VariableGroups.VariableGroup[] = responseObject.getVariableGroups();

                    variableGroups.forEach(variableGroup => {
                        //Get the DisplayLabel of each VariableGroup
                        console.log("VariableGroup DisplayLabel: " + variableGroup.getDisplayLabel());

                        //Get the APIName of each VariableGroup
                        console.log("VariableGroup APIName: " + variableGroup.getAPIName());

                        //Get the Name of each VariableGroup
                        console.log("VariableGroup Name: " + variableGroup.getName());

                        //Get the Description of each VariableGroup
                        console.log("VariableGroup Description: " + variableGroup.getDescription());

                        //Get the ID of each VariableGroup
                        console.log("VariableGroup ID: " + variableGroup.getId());
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.VariableGroups.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string, any> = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     * <h3> Get Variable Group By Id </h3>
     * This method is used to get the details of any variable group with group id and print the response.
     * @param variableGroupId The ID of the VariableGroup to be obtained
     */
    public static async getVariableGroupById(variableGroupId: bigint) {
        //example
        //let variableGroupId = 34096432275023n;

        //Get instance of ZOHOCRMSDK.VariableGroups.VariableGroupsOperations Class
        let variableGroupsOperations: ZOHOCRMSDK.VariableGroups.VariableGroupsOperations = new ZOHOCRMSDK.VariableGroups.VariableGroupsOperations();

        //Call getVariableGroupById method that takes variableGroupId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.VariableGroups.ResponseHandler.MasterModel> = await variableGroupsOperations.getVariableGroupById(variableGroupId);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.VariableGroups.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.VariableGroups.ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.VariableGroups.ResponseWrapper) {
                    //Get the array of obtained VariableGroup instances
                    let variableGroups: ZOHOCRMSDK.VariableGroups.VariableGroup[] = responseObject.getVariableGroups();

                    variableGroups.forEach(variableGroup => {
                        //Get the DisplayLabel of each VariableGroup
                        console.log("VariableGroup DisplayLabel: " + variableGroup.getDisplayLabel());

                        //Get the APIName of each VariableGroup
                        console.log("VariableGroup APIName: " + variableGroup.getAPIName());

                        //Get the Name of each VariableGroup
                        console.log("VariableGroup Name: " + variableGroup.getName());

                        //Get the Description of each VariableGroup
                        console.log("VariableGroup Description: " + variableGroup.getDescription());

                        //Get the ID of each VariableGroup
                        console.log("VariableGroup ID: " + variableGroup.getId());
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.VariableGroups.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string, any> = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }

    /**
     * <h3> Get Variable Group By APIName </h3>
     * This method is used to get the details of any variable group with group API name and print the response.
     * @param variableGroupAPIName The API Name of the VariableGroup to be obtained
     */
    public static async getVariableGroupByAPIName(variableGroupAPIName: string) {
        //example
        //let variableGroupAPIName = "General";

        //Get instance of ZOHOCRMSDK.VariableGroups.VariableGroupsOperations Class
        let variableGroupsOperations: ZOHOCRMSDK.VariableGroups.VariableGroupsOperations = new ZOHOCRMSDK.VariableGroups.VariableGroupsOperations();

        //Call getVariableGroupByAPIName method that takes variableGroupAPIName as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.VariableGroups.ResponseHandler.MasterModel> = await variableGroupsOperations.getVariableGroupByAPIName(variableGroupAPIName);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.VariableGroups.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.VariableGroups.ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.VariableGroups.ResponseWrapper) {
                    //Get the array of obtained VariableGroup instances
                    let variableGroups: ZOHOCRMSDK.VariableGroups.VariableGroup[] = responseObject.getVariableGroups();

                    variableGroups.forEach(variableGroup => {
                        //Get the DisplayLabel of each VariableGroup
                        console.log("VariableGroup DisplayLabel: " + variableGroup.getDisplayLabel());

                        //Get the APIName of each VariableGroup
                        console.log("VariableGroup APIName: " + variableGroup.getAPIName());

                        //Get the Name of each VariableGroup
                        console.log("VariableGroup Name: " + variableGroup.getName());

                        //Get the Description of each VariableGroup
                        console.log("VariableGroup Description: " + variableGroup.getDescription());

                        //Get the ID of each VariableGroup
                        console.log("VariableGroup ID: " + variableGroup.getId());
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.VariableGroups.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string, any> = responseObject.getDetails();

                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }

                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}