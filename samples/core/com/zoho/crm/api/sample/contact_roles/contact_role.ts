import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class ContactRoles {
    /**
     * <h3> Get Contact Roles </h3>
     * This method is used to get all the Contact Roles and print the response.
     */
    public static async getContactRoles() {
        //Get instance of ContactRolesOperations Class
        let contactRolesOperations: ZOHOCRMSDK.ContactRoles.ContactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();

        //Call getContactRoles method
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ContactRoles.ResponseHandler.MasterModel> = await contactRolesOperations.getContactRoles();

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.ContactRoles.ResponseHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected ZOHOCRMSDK.ContactRoles.ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.ContactRoles.ResponseWrapper) {
                    //Get the array of obtained ContactRole instances
                    let contactRoles: ZOHOCRMSDK.ContactRoles.ContactRole[] = responseObject.getContactRoles();

                    contactRoles.forEach(contactRole => {
                        //Get the ID of each ContactRole
                        console.log("ContactRole ID: " + contactRole.getId());

                        //Get the name of each ContactRole
                        console.log("ContactRole Name: " + contactRole.getName());

                        //Get the sequence number of each ContactRole
                        console.log("ContactRole SequenceNumber: " + contactRole.getSequenceNumber());
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string, any> = responseObject.getDetails();

                    if (details !== null) {
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
     * <h3> Get Contact Role </h3>
     * This method is used to get single Contact Role with ID and print the response.
     * @param contactRoleId The ID of the ContactRole to be obtained
     */
    public static async getContactRole(contactRoleId: bigint) {
        //example
        //let contactRoleId = 34096432212003n;

        //Get instance of ContactRolesOperations Class
        let contactRolesOperations: ZOHOCRMSDK.ContactRoles.ContactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();

        //Call getContactRole method that takes contactRoleId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ContactRoles.ResponseHandler.MasterModel> = await contactRolesOperations.getContactRole(contactRoleId);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject !== null) {
                //Check if expected ZOHOCRMSDK.ContactRoles.ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.ContactRoles.ResponseWrapper) {

                    //Get the array of obtained ContactRole instances
                    let contactRoles: ZOHOCRMSDK.ContactRoles.ContactRole[] = responseObject.getContactRoles();

                    contactRoles.forEach(contactRole => {
                        //Get the ID of each ContactRole
                        console.log("ContactRole ID: " + contactRole.getId());

                        //Get the name of each ContactRole
                        console.log("ContactRole Name: " + contactRole.getName());

                        //Get the sequence number of each ContactRole
                        console.log("ContactRole SequenceNumber: " + contactRole.getSequenceNumber());
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string, any> = responseObject.getDetails();

                    if (details !== null) {
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
     * <h3> Create Contact Roles </h3>
     * This method is used to create Contact Roles and print the response.
     */
    public static async createContactRoles() {
        //Get instance of ContactRolesOperations Class
        let contactRolesOperations: ZOHOCRMSDK.ContactRoles.ContactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.ContactRoles.BodyWrapper = new ZOHOCRMSDK.ContactRoles.BodyWrapper();

        //Array to hold ContactRole instances
        let contactRolesArray: ZOHOCRMSDK.ContactRoles.ContactRole[] = [];

        for (let index = 0; index < 5; index++) {
            //Get instance of ContactRole Class
            let contactRole: ZOHOCRMSDK.ContactRoles.ContactRole = new ZOHOCRMSDK.ContactRoles.ContactRole();

            //Set name of the Contact Role
            contactRole.setName("contactRole-ts" + index.toString());

            //Set sequence number of the Contact Role
            contactRole.setSequenceNumber(index + 1);

            //Add ContactRole instance to the array
            contactRolesArray.push(contactRole);
        }

        //Set the array of contactRoles in BodyWrapper instance
        request.setContactRoles(contactRolesArray);

        //Call createContactRoles method that takes BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ContactRoles.ActionHandler.MasterModel> = await contactRolesOperations.createContactRoles(request);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.ContactRoles.ActionHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.ContactRoles.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.ContactRoles.ActionResponse.MasterModel[] = responseObject.getContactRoles();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details !== null) {
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
                else if (responseObject instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details !== null) {
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
     * <h3> Update Contact Roles </h3>
     * This method is used to update Contact Roles and print the response.
     */
    public static async updateContactRoles() {
        //Get instance of ContactRolesOperations Class
        let contactRolesOperations: ZOHOCRMSDK.ContactRoles.ContactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.ContactRoles.BodyWrapper = new ZOHOCRMSDK.ContactRoles.BodyWrapper();

        //Array to hold ContactRole instances
        let contactRolesArray: ZOHOCRMSDK.ContactRoles.ContactRole[] = [];

        //Get instance of ContactRole Class
        let cr1: ZOHOCRMSDK.ContactRoles.ContactRole = new ZOHOCRMSDK.ContactRoles.ContactRole();

        //Set ID to the ContactRole instance
        cr1.setId(BigInt("347706112517013"));

        //Set name to the ContactRole instance
        cr1.setName("Edited1-typescript");

        //Add ContactRole instance to the array
        contactRolesArray.push(cr1);

        //Get instance of ContactRole Class
        cr1 = new ZOHOCRMSDK.ContactRoles.ContactRole();

        //Set ID to the ContactRole instance
        cr1.setId(BigInt("347706110910008"));

        //Set name to the ContactRole instance
        cr1.setName("Edited12");

        //Add ContactRole instance to the array
        contactRolesArray.push(cr1);

        //Set the array to contactRoles in BodyWrapper instance
        request.setContactRoles(contactRolesArray);

        //Call updateContactRoles method that takes BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ContactRoles.ActionHandler.MasterModel> = await contactRolesOperations.updateContactRoles(request);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.ContactRoles.ActionHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.ContactRoles.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.ContactRoles.ActionResponse.MasterModel[] = responseObject.getContactRoles();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
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
                else if (responseObject instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string, any> = responseObject.getDetails();

                    if (details !== null) {
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
     * <h3> Delete Contact Roles </h3>
     * This method is used to delete Contact Roles and print the response.
     * @param contactRoleIds The array of ContactRole IDs to be deleted.
     */
    public static async deleteContactRoles(contactRoleIds: string[]) {
        //example
        //let contactRoleIds = [34096432157002n, 34096431619001n, 34096430006883n];

        //Get instance of ContactRolesOperations Class
        let contactRolesOperations: ZOHOCRMSDK.ContactRoles.ContactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        //Add ids to ParameterMap instance
        for (let contactRoleId of contactRoleIds) {
            await paramInstance.add(ZOHOCRMSDK.ContactRoles.DeleteContactRolesParam.IDS, contactRoleId);
        }

        //Call deleteContactRoles method that takes paramInstance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ContactRoles.ActionHandler.MasterModel> = await contactRolesOperations.deleteContactRoles(paramInstance);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.ContactRoles.ActionHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.ContactRoles.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.ContactRoles.ActionResponse.MasterModel[] = responseObject.getContactRoles();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
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
                else if (responseObject instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string, any> = responseObject.getDetails();

                    if (details !== null) {
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
     * <h3> Update Contact Role </h3>
     * This method is used to update single Contact Role with ID and print the response.
     * @param contactRoleId The ID of the ContactRole to be updated
     */
    public static async updateContactRole(contactRoleId: bigint) {
        //example
        //let contactRoleId = 34096432212003n;

        //Get instance of ContactRolesOperations Class
        let contactRolesOperations: ZOHOCRMSDK.ContactRoles.ContactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.ContactRoles.BodyWrapper = new ZOHOCRMSDK.ContactRoles.BodyWrapper();

        //Array to hold ContactRole instances
        let contactRolesArray: ZOHOCRMSDK.ContactRoles.ContactRole[] = [];

        //Get instance of ContactRole Class
        let cr1: ZOHOCRMSDK.ContactRoles.ContactRole = new ZOHOCRMSDK.ContactRoles.ContactRole();

        //Set sequence number to the ContactRole instance
        cr1.setName("Edited-cr");

        //Add ContactRole instance to the array
        contactRolesArray.push(cr1);

        //Set the array to contactRoles in BodyWrapper instance
        request.setContactRoles(contactRolesArray);

        //Call updateContactRole method that takes BodyWrapper instance and contactRoleId as parameters
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ContactRoles.ActionHandler.MasterModel> = await contactRolesOperations.updateContactRole(contactRoleId, request);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.ContactRoles.ActionHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.ContactRoles.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.ContactRoles.ActionResponse.MasterModel[] = responseObject.getContactRoles();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
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
                else if (responseObject instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string, any> = responseObject.getDetails();

                    if (details !== null) {
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
     * <h3> Delete Contact Role </h3>
     * This method is used to delete single Contact Role with ID and print the response.
     * @param contactRoleId ID of the ContactRole to be deleted
     */
    public static async deleteContactRole(contactRoleId: bigint) {
        //example
        //let contactRoleId = 34096432212003n;

        //Get instance of ContactRolesOperations Class
        let contactRolesOperations: ZOHOCRMSDK.ContactRoles.ContactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();

        //Call deleteContactRole which takes contactRoleId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ContactRoles.ActionHandler.MasterModel> = await contactRolesOperations.deleteContactRole(contactRoleId);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.ContactRoles.ActionHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.ContactRoles.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.ContactRoles.ActionResponse.MasterModel[] = responseObject.getContactRoles();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
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
                else if (responseObject instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details: Map<string, any> = responseObject.getDetails();

                    if (details !== null) {
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

    public static async getAllContactRolesOfDeal(dealId: bigint) {
        //Get instance of ContactRolesOperations Class
        let contactRolesOperations: ZOHOCRMSDK.ContactRoles.ContactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        // await paramInstance.add(GetAllContactRolesOfDealParam.IDS, 34096432267003n);

        //Call getAllContactRolesOfDeal method that takes Param instance as parameter 
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ContactRoles.RecordResponseHandler.MasterModel> = await contactRolesOperations.getAllContactRolesOfDeal(dealId, paramInstance);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get the object from response
            let responseHandler = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.ContactRoles.RecordResponseWrapper) {
                //Get the received ZOHOCRMSDK.ContactRoles.ResponseWrapper instance
                let responseWrapper = responseHandler;

                //Get the array of obtained Record instances
                let records: ZOHOCRMSDK.Records.Record[] = responseWrapper.getData();

                for (let record of records) {
                    //Get the ID of each Record
                    console.log("Record ID: " + record.getId());

                    //Get the createdBy User instance of each Record
                    let createdBy: ZOHOCRMSDK.Users.User = record.getCreatedBy();

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
                    let modifiedBy: ZOHOCRMSDK.Users.User = record.getModifiedBy();

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

                    let keyArray = Array.from(keyValues.keys());

                    for (let keyName of keyArray) {
                        let value: any = keyValues.get(keyName);

                        if (Array.isArray(value)) {
                            console.log("Record keyName: " + keyName);

                            for (let data of value) {
                                if (data instanceof Map) {
                                    for (let mapKey in data) {
                                        console.log(mapKey + " : " + data.get(mapKey));
                                    }
                                }
                                else {
                                    console.log(data);
                                }
                            }
                        }
                        else if (value instanceof Map) {
                            console.log("Record keyName: " + keyName);

                            for (let mapKey in value) {
                                console.log(mapKey + " : " + value.get(mapKey));
                            }
                        }
                        else {
                            console.log("Record keyName: " + keyName + " - Value - " + value);
                        }
                    }
                }

                //Get the obtained Info instance
                let info: ZOHOCRMSDK.Records.Info = responseWrapper.getInfo();

                if (info != null) {
                    if (info.getCount() != null) {
                        //Get the Count of the Info
                        console.log("Record Info Count: " + info.getCount().toString());
                    }

                    if (info.getMoreRecords() != null) {
                        //Get the MoreRecords of the Info
                        console.log("Record Info MoreRecords: " + info.getMoreRecords().toString());
                    }
                }
            }
            //Check if the request returned an exception
            else if (responseHandler instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                //Get the Status
                console.log("Status: " + responseHandler.getStatus().getValue());

                //Get the Code
                console.log("Code: " + responseHandler.getCode().getValue());

                console.log("Details");

                //Get the details map
                let details: Map<string, any> = responseHandler.getDetails();

                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }

                //Get the Message
                console.log("Message: " + responseHandler.getMessage().getValue());
            }
        }
    }

    public static async getContactRoleOfDeal(contactId: bigint, dealId: bigint) {
        //Get instance of ContactRolesOperations Class
        let contactRolesOperations: ZOHOCRMSDK.ContactRoles.ContactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        //Call getContactRoleOfDeal method that takes Param instance as parameter 
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ContactRoles.RecordResponseHandler.MasterModel> = await contactRolesOperations.getContactRoleOfDeal(contactId, dealId);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get the object from response
            let responseHandler: ZOHOCRMSDK.ContactRoles.RecordResponseHandler.MasterModel = response.getObject();

            if (responseHandler instanceof ZOHOCRMSDK.ContactRoles.RecordResponseWrapper) {
                //Get the received ZOHOCRMSDK.ContactRoles.ResponseWrapper instance
                let responseWrapper = responseHandler;

                //Get the array of obtained Record instances
                let records: ZOHOCRMSDK.Records.Record[] = responseWrapper.getData();

                for (let record of records) {
                    //Get the ID of each Record
                    console.log("Record ID: " + record.getId());

                    //Get the createdBy User instance of each Record
                    let createdBy: ZOHOCRMSDK.Users.User = record.getCreatedBy();

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
                    let modifiedBy: ZOHOCRMSDK.Users.User = record.getModifiedBy();

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

                    let keyArray = Array.from(keyValues.keys());

                    for (let keyName of keyArray) {
                        let value: any = keyValues.get(keyName);

                        if (Array.isArray(value)) {
                            console.log("Record keyName: " + keyName);

                            for (let data of value) {
                                if (data instanceof Map) {
                                    for (let mapKey in data) {
                                        console.log(mapKey + " : " + data.get(mapKey));
                                    }
                                }
                                else {
                                    console.log(data);
                                }
                            }
                        }
                        else if (value instanceof Map) {
                            console.log("Record keyName: " + keyName);

                            for (let mapKey in value) {
                                console.log(mapKey + " : " + value.get(mapKey));
                            }
                        }
                        else {
                            console.log("Record keyName: " + keyName + " - Value - " + value);
                        }
                    }
                }

                //Get the obtained Info instance
                let info: ZOHOCRMSDK.Records.Info = responseWrapper.getInfo();

                if (info != null) {
                    if (info.getCount() != null) {
                        //Get the Count of the Info
                        console.log("Record Info Count: " + info.getCount().toString());
                    }

                    if (info.getMoreRecords() != null) {
                        //Get the MoreRecords of the Info
                        console.log("Record Info MoreRecords: " + info.getMoreRecords().toString());
                    }
                }
            }
            //Check if the request returned an exception
            else if (responseHandler instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                //Get the Status
                console.log("Status: " + responseHandler.getStatus().getValue());

                //Get the Code
                console.log("Code: " + responseHandler.getCode().getValue());

                console.log("Details");

                //Get the details map
                let details: Map<string, any> = responseHandler.getDetails();

                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }

                //Get the Message
                console.log("Message: " + responseHandler.getMessage().getValue());
            }
        }
    }

    public static async addContactRoleToDeal(contactId: bigint, dealId: bigint) {
        //Get instance of ContactRolesOperations Class
        let contactRolesOperations: ZOHOCRMSDK.ContactRoles.ContactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let bodyWrapper = new ZOHOCRMSDK.ContactRoles.RecordBodyWrapper();

        //Get instance of ContactRole Class
        let contactRole = new ZOHOCRMSDK.ContactRoles.ContactRoleWrapper();

        //Set name of the Contact Role
        contactRole.setContactRole("contactRole1");

        //Set the list to contactRoles in BodyWrapper instance
        bodyWrapper.setData([contactRole]);

        //Call createContactRoles method that takes BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ContactRoles.RecordActionHandler.MasterModel> = await contactRolesOperations.addContactRoleToDeal(contactId, dealId, bodyWrapper);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.ContactRoles.RecordActionHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.ContactRoles.RecordActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.ContactRoles.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details !== null) {
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
                else if (responseObject instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details !== null) {
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

    public static async removeContactRoleFromDeal(contactId: bigint, dealId: bigint) {
        //Get instance of ContactRolesOperations Class
        let contactRolesOperations: ZOHOCRMSDK.ContactRoles.ContactRolesOperations = new ZOHOCRMSDK.ContactRoles.ContactRolesOperations();

        //Call removeContactRoleFromDeal method that takes BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.ContactRoles.RecordActionHandler.MasterModel> = await contactRolesOperations.removeContactRoleFromDeal(contactId, dealId);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.ContactRoles.RecordActionHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.ContactRoles.RecordActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.ContactRoles.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            if (details !== null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details !== null) {
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
                else if (responseObject instanceof ZOHOCRMSDK.ContactRoles.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    //Get the details map
                    let details = responseObject.getDetails();

                    if (details !== null) {
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