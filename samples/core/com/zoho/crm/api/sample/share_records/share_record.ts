import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class ShareRecords {
    /**
     * <h3> Get Shared Record Details </h3>
     * This method is used to get the details of a shared record and print the response.
     * @param moduleAPIName The API Name of the module to get shared record details.
     * @param recordId The ID of the record to be obtain shared information
     */
    public static async getSharedRecordDetails(moduleAPIName: string, recordId: bigint) {
        //example
        //let moduleAPIName = "Contacts";
        //let recordId = 34096432112011n;

        //Get instance of ZOHOCRMSDK.ShareRecords.ShareRecordsOperations Class that takes moduleAPIName and recordId as parameter
        let sharedRecordsOperations: ZOHOCRMSDK.ShareRecords.ShareRecordsOperations = new ZOHOCRMSDK.ShareRecords.ShareRecordsOperations(recordId, moduleAPIName);

        //Get instance of ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters of Get Shared Record Details operation */
        await paramInstance.add(ZOHOCRMSDK.ShareRecords.GetSharedRecordDetailsParam.VIEW, "summary");

        // await paramInstance.add(GetSharedRecordDetailsParam.SHAREDTO, "3409643302031");

        //Call getSharedRecordDetails method that takes ParameterMap instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ShareRecords.ResponseHandler.MasterModel> = await sharedRecordsOperations.getSharedRecordDetails(paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.ShareRecords.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.ShareRecords.ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.ShareRecords.ResponseWrapper) {
                    //Get the array of obtained ShareRecord instances
                    let shareRecords: ZOHOCRMSDK.ShareRecords.ShareRecord[] = responseObject.getShare();

                    shareRecords.forEach(shareRecord => {
                        //Get the ShareRelatedRecords of each ShareRecord
                        console.log("ShareRecord ShareRelatedRecords: " + shareRecord.getShareRelatedRecords().toString());

                        //Get the SharedThrough instance of each ShareRecord
                        let sharedThrough: ZOHOCRMSDK.ShareRecords.SharedThrough = shareRecord.getSharedThrough();

                        //Check if sharedThrough is not null
                        if (sharedThrough != null) {
                            //Get the EntityName of the SharedThrough
                            console.log("ShareRecord SharedThrough EntityName: " + sharedThrough.getEntityName());

                            let module: ZOHOCRMSDK.Modules.Module = sharedThrough.getModule();

                            if (module != null) {
                                //Get the ID of the Module
                                console.log("ShareRecord SharedThrough Module ID: " + module.getId().toString());

                                //Get the name of the Module
                                console.log("ShareRecord SharedThrough Module Name: " + module.getName());
                            }

                            //Get the ID of the SharedThrough
                            console.log("ShareRecord SharedThrough ID: " + sharedThrough.getId());
                        }

                        //Get the SharedTime of each ShareRecord
                        console.log("ShareRecord SharedTime: " + shareRecord.getSharedTime().toString());

                        //Get the Permission of each ShareRecord
                        console.log("ShareRecord Permission: " + shareRecord.getPermission().toString());

                        //Get the sharedBy of each ShareRecord
                        let sharedBy: ZOHOCRMSDK.Users.User = shareRecord.getSharedBy();

                        if (sharedBy != null) {
                            //Get the ID of the  User
                            console.log("ShareRecord SharedBy-ID: " + sharedBy.getId());

                            //Get the FullName of the  User
                            console.log("ShareRecord SharedBy-FullName: " + sharedBy.getFullName());

                            //Get the Zuid of the  User
                            console.log("ShareRecord SharedBy-Zuid: " + sharedBy.getZuid());
                        }

                        //Get the shared User instance of each ShareRecord
                        let user: ZOHOCRMSDK.Users.User = shareRecord.getUser();

                        //Check if user is not null
                        if (user != null) {
                            //Get the ID of the shared User
                            console.log("ShareRecord User-ID: " + user.getId());

                            //Get the FullName of the shared User
                            console.log("ShareRecord User-FullName: " + user.getFullName());

                            //Get the Zuid of the shared User
                            console.log("ShareRecord User-Zuid: " + user.getZuid());
                        }
                    });

                    let shareableUsers: ZOHOCRMSDK.Users.User[] = responseObject.getShareableUser();

                    if (shareableUsers != null && shareableUsers != undefined) {
                        shareableUsers.forEach(shareableUser => {
                            //Get the ID of the shareable User
                            console.log("Shareable User User-ID: " + shareableUser.getId());

                            //Get the FullName of the shareable User
                            console.log("Shareable User User-FullName: " + shareableUser.getFullName());

                            //Get the Zuid of the shareable User
                            console.log("Shareable User User-Zuid: " + shareableUser.getZuid());
                        });
                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.ShareRecords.APIException) {
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
     * <h3> Share Record </h3>
     * This method is used to share the record and print the response.
     * @param moduleAPIName The API Name of the module to share record.
     * @param recordId The ID of the record to be shared
     */
    public static async shareRecord(moduleAPIName: string, recordId: bigint) {
        //example
        //let moduleAPIName = "Contacts";
        // let recordId = 34096432112011n;

        //Get instance of ZOHOCRMSDK.ShareRecords.ShareRecordsOperations Class that takes moduleAPIName and recordId as parameter
        let sharedRecordsOperations: ZOHOCRMSDK.ShareRecords.ShareRecordsOperations = new ZOHOCRMSDK.ShareRecords.ShareRecordsOperations(recordId, moduleAPIName);

        //Get instance of ZOHOCRMSDK.ShareRecords.BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.ShareRecords.BodyWrapper = new ZOHOCRMSDK.ShareRecords.BodyWrapper();

        //Array to hold ShareRecord instances
        let shareRecordArray: ZOHOCRMSDK.ShareRecords.ShareRecord[] = [];

        //Get instance of ShareRecord Class
        let shareRecord: ZOHOCRMSDK.ShareRecords.ShareRecord = new ZOHOCRMSDK.ShareRecords.ShareRecord();

        //Set boolean value to share related records
        shareRecord.setShareRelatedRecords(false);

        //Set the permission. Possible values - full_access, read_only, read_write
        shareRecord.setPermission("read_write");

        //Get instance of User Class
        let user: ZOHOCRMSDK.Users.User = new ZOHOCRMSDK.Users.User();

        //Set User ID
        user.setId(BigInt("34770615791024"));

        //Set the User instance to user
        shareRecord.setUser(user);

        //Add the instance to array
        shareRecordArray.push(shareRecord);

        //Set the array to share of ZOHOCRMSDK.ShareRecords.BodyWrapper instance
        request.setShare(shareRecordArray);

        //Call shareRecord method that takes ZOHOCRMSDK.ShareRecords.BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ShareRecords.ActionHandler.MasterModel> = await sharedRecordsOperations.shareRecord(request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.ShareRecords.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.ShareRecords.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.ShareRecords.ActionWrapper) {

                    //Get the array of obtained ZOHOCRMSDK.ShareRecords.ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.ShareRecords.ActionResponse.MasterModel[] = responseObject.getShare();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.ShareRecords.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.ShareRecords.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.ShareRecords.APIException) {
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
     * <h3> Update Share Permissions </h3>
     * This method is used to update the sharing permissions of a record granted to users as Read-Write, Read-only, or grant full access.
     * @param moduleAPIName The API Name of the module to update share permissions.
     * @param recordId The ID of the record
     */
    public static async updateSharePermissions(moduleAPIName: string, recordId: bigint) {
        //example
        //let moduleAPIName = "Contacts";
        // let recordId = 34096432112011n;

        //Get instance of ZOHOCRMSDK.ShareRecords.ShareRecordsOperations Class that takes moduleAPIName and recordId as parameter
        let sharedRecordsOperations: ZOHOCRMSDK.ShareRecords.ShareRecordsOperations = new ZOHOCRMSDK.ShareRecords.ShareRecordsOperations(recordId, moduleAPIName);

        //Get instance of ZOHOCRMSDK.ShareRecords.BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.ShareRecords.BodyWrapper = new ZOHOCRMSDK.ShareRecords.BodyWrapper();

        //Array to hold ShareRecord instances
        let shareRecordArray: ZOHOCRMSDK.ShareRecords.ShareRecord[] = [];

        //Get instance of ShareRecord
        let shareRecord: ZOHOCRMSDK.ShareRecords.ShareRecord = new ZOHOCRMSDK.ShareRecords.ShareRecord();

        //Set the permission
        shareRecord.setPermission("full_access");

        //Set the boolean value to share related records
        shareRecord.setShareRelatedRecords(true);

        //Get instance of User Class
        let user: ZOHOCRMSDK.Users.User = new ZOHOCRMSDK.Users.User();

        //Set ID to the User
        user.setId(BigInt("34770615791024"));

        //Set user instance to user in ShareRecord instance
        shareRecord.setUser(user);

        //Add the instance to array
        shareRecordArray.push(shareRecord);

        //Set the array to share in ZOHOCRMSDK.ShareRecords.BodyWrapper
        request.setShare(shareRecordArray);

        //Call updateSharePermissions method that takes ZOHOCRMSDK.ShareRecords.BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ShareRecords.ActionHandler.MasterModel> = await sharedRecordsOperations.updateSharePermissions(request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.ShareRecords.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.ShareRecords.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.ShareRecords.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.ShareRecords.ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.ShareRecords.ActionResponse.MasterModel[] = responseObject.getShare();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.ShareRecords.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.ShareRecords.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.ShareRecords.APIException) {
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
     * <h3> Revoke Shared Record </h3>
     * This method is used to revoke access to a shared record that was shared to users and print the response.
     * @param moduleAPIName The API Name of the module to revoke shared record.
     * @param recordId The ID of the record
     */
    public static async revokeSharedRecord(moduleAPIName: string, recordId: bigint) {
        //example
        //let moduleAPIName = "Contacts";
        // let recordId = 34096432112011n;

        //Get instance of ZOHOCRMSDK.ShareRecords.ShareRecordsOperations Class that takes moduleAPIName and recordId as parameter
        let shareRecordsOperations: ZOHOCRMSDK.ShareRecords.ShareRecordsOperations = new ZOHOCRMSDK.ShareRecords.ShareRecordsOperations(recordId, moduleAPIName);

        //Call revokeSharedRecord method
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ShareRecords.DeleteActionHandler.MasterModel> = await shareRecordsOperations.revokeSharedRecord();

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.ShareRecords.DeleteActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.ShareRecords.DeleteActionWrapper) {
                    let deleteActionResponse: ZOHOCRMSDK.ShareRecords.DeleteActionResponse.MasterModel = responseObject.getShare();

                    if (deleteActionResponse instanceof ZOHOCRMSDK.ShareRecords.SuccessResponse) {
                        console.log("Status: " + deleteActionResponse.getStatus().getValue());

                        console.log("Code: " + deleteActionResponse.getCode().getValue());

                        console.log("Details");

                        let details: Map<string, any> = deleteActionResponse.getDetails();

                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }

                        console.log("Message: " + deleteActionResponse.getMessage().getValue());
                    }
                    else if (deleteActionResponse instanceof ZOHOCRMSDK.ShareRecords.APIException) {
                        console.log("Status: " + deleteActionResponse.getStatus().getValue());

                        console.log("Code: " + deleteActionResponse.getCode().getValue());

                        console.log("Details");

                        let details: Map<string, any> = deleteActionResponse.getDetails();

                        if (details != null) {
                            Array.from(details.keys()).forEach(key => {
                                console.log(key + ": " + details.get(key));
                            });
                        }

                        console.log("Message: " + deleteActionResponse.getMessage().getValue());
                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.ShareRecords.APIException) {

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