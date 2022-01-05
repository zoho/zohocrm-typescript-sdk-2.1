import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class AssignmentRules {
    /**
     * <h3> Get AssignmentRules</h3>
     * This method is used to get assignment rules
     * @returns 
     */
    public static async getAssignmentRules() {
        //Get instance of AssignmentRulesOperations Class
        let assignmentRulesOperations: ZOHOCRMSDK.AssignmentRules.AssignmentRulesOperations = new ZOHOCRMSDK.AssignmentRules.AssignmentRulesOperations();

        //Call getAssignmentRules method
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.AssignmentRules.ResponseHandler.MasterModel> = await assignmentRulesOperations.getAssignmentRules();

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.AssignmentRules.ResponseHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                if (responseObject instanceof ZOHOCRMSDK.AssignmentRules.ResponseWrapper) {
                    //Get the list of obtained AssignmentRule instances
                    let assignmentRules: ZOHOCRMSDK.AssignmentRules.AssignmentRule[] = responseObject.getAssignmentRules();

                    assignmentRules.forEach(assignmentRule => {
                        //Get the  ModifiedTime of each AssignmentRule
                        console.log("AssignmentRule ModifiedTime : " + assignmentRule.getModifiedTime());

                        //Get the  createdTime of each AssignmentRule
                        console.log("AssignmentRule CreatedTime : " + assignmentRule.getCreatedTime());

                        let defaultAssignee: ZOHOCRMSDK.AssignmentRules.DefaultUser = assignmentRule.getDefaultAssignee();

                        if (defaultAssignee != null) {
                            //Get the id of DefaultAssignee
                            console.log("AssignmentRule DefaultAssignee Id : " + defaultAssignee.getId());

                            //Get the name of DefaultAssignee
                            console.log("AssignmentRule DefaultAssignee Name : " + defaultAssignee.getName());
                        }

                        let module: ZOHOCRMSDK.Modules.Module = assignmentRule.getModule();

                        if (module != null) {
                            //Get the id of  Module
                            console.log("AssignmentRule Module Id : " + module.getId());

                            //Get the apiName of  Module
                            console.log("AssignmentRule Module APIName : " + module.getAPIName());
                        }

                        //Get the name of each AssignmentRule
                        console.log("AssignmentRule Name : " + assignmentRule.getName());

                        let modifiedBy: ZOHOCRMSDK.Users.User = assignmentRule.getModifiedBy();

                        if (modifiedBy != null) {
                            //Get the id of ModifiedBy
                            console.log("AssignmentRule ModifiedBy User-Id : " + modifiedBy.getId());

                            //Get the name of ModifiedBy
                            console.log("AssignmentRule ModifiedBy User-Name : " + modifiedBy.getName());

                            //Get the name of CreatedBy
                            console.log("AssignmentRule ModifiedBy User-Email : " + modifiedBy.getEmail());
                        }

                        let createdBy: ZOHOCRMSDK.Users.User = assignmentRule.getCreatedBy();

                        if (createdBy != null) {
                            //Get the id of CreatedBy
                            console.log("AssignmentRule CreatedBy User-Id : " + createdBy.getId());

                            //Get the name of CreatedBy
                            console.log("AssignmentRule CreatedBy User-Name : " + createdBy.getName());

                            //Get the name of CreatedBy
                            console.log("AssignmentRule CreatedBy User-Email : " + createdBy.getEmail());
                        }

                        //Get the ID of each AssignmentRule
                        console.log("AssignmentRule ID : " + assignmentRule.getId());

                        //Get the  description of each AssignmentRule
                        console.log("AssignmentRule Description : " + assignmentRule.getDescription());
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.AssignmentRules.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

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
     * <h3> Get AssignmentRule</h3>
     * This method is used to get a single assignment rule
     * @param {BigInt} ruleId The id of the assignment rule
     * @returns 
     */
    public static async getAssignmentRule(ruleId: bigint) {
        let paramInstance = new ZOHOCRMSDK.ParameterMap();

        await paramInstance.add(ZOHOCRMSDK.AssignmentRules.GetAssignmentRuleParam.MODULE, "Leads");

        //Get instance of AssignmentRulesOperations Class
        let assignmentRulesOperations: ZOHOCRMSDK.AssignmentRules.AssignmentRulesOperations = new ZOHOCRMSDK.AssignmentRules.AssignmentRulesOperations();

        //Call getAssignmentRule method that takes ruleId and ParameterMap instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Attachments.ResponseHandler.MasterModel> = await assignmentRulesOperations.getAssignmentRule(ruleId, paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.AssignmentRules.ResponseHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                if (responseObject instanceof ZOHOCRMSDK.AssignmentRules.ResponseWrapper) {
                    //Get the list of obtained AssignmentRule instances
                    let assignmentRules: ZOHOCRMSDK.AssignmentRules.AssignmentRule[] = responseObject.getAssignmentRules();

                    assignmentRules.forEach(assignmentRule => {
                        //Get the  ModifiedTime of each AssignmentRule
                        console.log("AssignmentRule ModifiedTime : " + assignmentRule.getModifiedTime());

                        //Get the  createdTime of each AssignmentRule
                        console.log("AssignmentRule CreatedTime : " + assignmentRule.getCreatedTime());

                        let defaultAssignee: ZOHOCRMSDK.AssignmentRules.DefaultUser = assignmentRule.getDefaultAssignee();

                        if (defaultAssignee != null) {
                            //Get the id of DefaultAssignee
                            console.log("AssignmentRule DefaultAssignee Id : " + defaultAssignee.getId());

                            //Get the name of DefaultAssignee
                            console.log("AssignmentRule DefaultAssignee Name : " + defaultAssignee.getName());
                        }

                        let module: ZOHOCRMSDK.Modules.Module = assignmentRule.getModule();

                        if (module != null) {
                            //Get the id of  Module
                            console.log("AssignmentRule Module Id : " + module.getId());

                            //Get the apiName of  Module
                            console.log("AssignmentRule Module APIName : " + module.getAPIName());
                        }

                        //Get the name of each AssignmentRule
                        console.log("AssignmentRule Name : " + assignmentRule.getName());

                        let modifiedBy: ZOHOCRMSDK.Users.User = assignmentRule.getModifiedBy();

                        if (modifiedBy != null) {
                            //Get the id of ModifiedBy
                            console.log("AssignmentRule ModifiedBy Id : " + modifiedBy.getId());

                            //Get the name of ModifiedBy
                            console.log("AssignmentRule ModifiedBy Name : " + modifiedBy.getName());

                            //Get the name of CreatedBy
                            console.log("AssignmentRule ModifiedBy User-Email : " + modifiedBy.getEmail());
                        }

                        let createdBy: ZOHOCRMSDK.Users.User = assignmentRule.getCreatedBy();

                        if (createdBy != null) {
                            //Get the id of CreatedBy
                            console.log("AssignmentRule CreatedBy Id : " + createdBy.getId());

                            //Get the name of CreatedBy
                            console.log("AssignmentRule CreatedBy Name : " + createdBy.getName());

                            //Get the name of CreatedBy
                            console.log("AssignmentRule CreatedBy User-Email : " + createdBy.getEmail());
                        }

                        //Get the ID of each AssignmentRule
                        console.log("AssignmentRule ID : " + assignmentRule.getId());

                        //Get the  description of each AssignmentRule
                        console.log("AssignmentRule Description : " + assignmentRule.getDescription());
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.AssignmentRules.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

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