import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class Variables {
    /**
     * <h3> Get Variables </h3>
     * This method is used to retrieve all the available variables through an API request and print the response.
     */
    public static async getVariables() {
        //Get instance of ZOHOCRMSDK.Variables.VariablesOperations Class
        let variablesOperations: ZOHOCRMSDK.Variables.VariablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters of Get Variables operation */
        // await paramInstance.add(ZOHOCRMSDK.Variables.GetVariablesParam.GROUP, "General");

        //Call getVariables method that takes ZOHOCRMSDK.ParameterMap instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Variables.ResponseHandler.MasterModel> = await variablesOperations.getVariables(paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Variables.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Variables.ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Variables.ResponseWrapper) {
                    //Get the array of obtained Variable instances
                    let variables: ZOHOCRMSDK.Variables.Variable[] = responseObject.getVariables();

                    variables.forEach(variable => {
                        //Get the ID of each Variable
                        console.log("Variable ID: " + variable.getId());

                        //Get the APIName of each Variable
                        console.log("Variable APIName: " + variable.getAPIName());

                        //Get the Name of each Variable
                        console.log("Variable Name: " + variable.getName());

                        //Get the Description of each Variable
                        console.log("Variable Description: " + variable.getDescription());

                        //Get the Type of each Variable
                        console.log("Variable Type: " + variable.getType());

                        //Get the VariableGroup instance of each Variable
                        let variableGroup: ZOHOCRMSDK.VariableGroups.VariableGroup = variable.getVariableGroup();

                        //Check if variableGroup is not null
                        if (variableGroup != null) {
                            //Get the APIName of the VariableGroup
                            console.log("Variable VariableGroup APIName: " + variableGroup.getAPIName());

                            //Get the ID of the VariableGroup
                            console.log("Variable VariableGroup ID: " + variableGroup.getId());
                        }

                        //Get the Value of each Variable
                        console.log("Variable Value: " + variable.getValue());
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Variables.APIException) {
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
     * <h3> Create Variables </h3>
     * This method is used to create variables and print the response.
     */
    public static async createVariables() {
        //Get instance of ZOHOCRMSDK.Variables.VariablesOperations Class
        let variablesOperations: ZOHOCRMSDK.Variables.VariablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();

        //Get instance of ZOHOCRMSDK.Variables.BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Variables.BodyWrapper = new ZOHOCRMSDK.Variables.BodyWrapper();

        //Array to hold Variable instances
        let variableArray: ZOHOCRMSDK.Variables.Variable[] = [];

        //Get instance of Variable Class
        let variable1: ZOHOCRMSDK.Variables.Variable = new ZOHOCRMSDK.Variables.Variable();

        //Set the name to variable
        variable1.setName("Variable551ash");

        //Set the API name to variable
        variable1.setAPIName("Variable551ash");

        //Get instance of VariableGroup Class
        let variableGroup: ZOHOCRMSDK.VariableGroups.VariableGroup = new ZOHOCRMSDK.VariableGroups.VariableGroup();

        //Set the ID to VariableGroup instance
        variableGroup.setName("Create me");

        //Set the VariableGroup to Variable instance
        variable1.setVariableGroup(variableGroup);

        //Set the type to Variable
        variable1.setType("integer");

        //Set the value to Variable
        variable1.setValue("55");

        variable1.setDescription("This denotes variable 5 description");

        //Add the variable instance to the array
        variableArray.push(variable1);

        variable1 = new ZOHOCRMSDK.Variables.Variable();

        variable1.setName("Variable661ash");

        variable1.setAPIName("Variable661ash");

        variableGroup = new ZOHOCRMSDK.VariableGroups.VariableGroup();

        variableGroup.setName("General");

        variable1.setVariableGroup(variableGroup);

        variable1.setType("text");

        variable1.setValue("Hello");

        variable1.setDescription("This denotes variable 6 description");

        //Add the variable instance to the array
        variableArray.push(variable1);

        //Set the array to variables in ZOHOCRMSDK.Variables.BodyWrapper instance
        request.setVariables(variableArray);

        //Call createVariables method that takes ZOHOCRMSDK.Variables.BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Variables.ActionHandler.MasterModel> = await variablesOperations.createVariables(request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Variables.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Variables.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Variables.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.Variables.ActionResponse.MasterModel instances
                    let actionResponses: ZOHOCRMSDK.Variables.ActionResponse.MasterModel[] = responseObject.getVariables();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Variables.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Variables.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Variables.APIException) {
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
     * <h3> Update Variables </h3>
     * This method is used to update details of variables in CRM and print the response.
     */
    public static async updateVariables() {
        //Get instance of ZOHOCRMSDK.Variables.VariablesOperations Class
        let variablesOperations: ZOHOCRMSDK.Variables.VariablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();

        //Get instance of ZOHOCRMSDK.Variables.BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Variables.BodyWrapper = new ZOHOCRMSDK.Variables.BodyWrapper();

        //Array to hold Variable instances
        let variableArray: ZOHOCRMSDK.Variables.Variable[] = [];

        //Get instance of Variable Class
        let variable1: ZOHOCRMSDK.Variables.Variable = new ZOHOCRMSDK.Variables.Variable();

        variable1.setId(BigInt("347706113321004"));

        variable1.setValue("4763");

        variableArray.push(variable1);

        variable1 = new ZOHOCRMSDK.Variables.Variable();

        variable1.setId(BigInt("34096432275035"));

        variable1.setDescription("This is a new description");

        variableArray.push(variable1);

        variable1 = new ZOHOCRMSDK.Variables.Variable();

        variable1.setId(BigInt("34096432275035"));

        variable1.setAPIName("NewAPI");

        variableArray.push(variable1);

        //Set the array to variables in ZOHOCRMSDK.Variables.BodyWrapper instance
        request.setVariables(variableArray);

        //Call updateVariables method that takes ZOHOCRMSDK.Variables.BodyWrapper class instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Variables.ActionHandler.MasterModel> = await variablesOperations.updateVariables(request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Variables.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Variables.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Variables.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.Variables.ActionResponse.MasterModel instances
                    let actionResponses: ZOHOCRMSDK.Variables.ActionResponse.MasterModel[] = responseObject.getVariables();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Variables.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Variables.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Variables.APIException) {
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
     *  <h3> Delete Variables </h3>
     * This method is used to delete details of multiple variables in CRM simultaneously and print the response.
     * @param variableIds The array of Variable IDs to be deleted
     */
    public static async deleteVariables(variableIds: bigint[]) {
        //example
        //let variableIds = [34096432275025n, 34096432275035n];

        //Get instance of ZOHOCRMSDK.Variables.VariablesOperations Class
        let variablesOperations: ZOHOCRMSDK.Variables.VariablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters of Delete Variables operation */
        for (let variableId of variableIds) {
            await paramInstance.add(ZOHOCRMSDK.Variables.DeleteVariablesParam.IDS, variableId);
        }

        //Call deleteVariables method that takes ZOHOCRMSDK.ParameterMap instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Variables.ActionHandler.MasterModel> = await variablesOperations.deleteVariables(paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Variables.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Variables.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Variables.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.Variables.ActionResponse.MasterModel instances
                    let actionResponses: ZOHOCRMSDK.Variables.ActionResponse.MasterModel[] = responseObject.getVariables();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Variables.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Variables.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Variables.APIException) {
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
     * <h3> Get Variable By Id </h3>
     * This method is used to get the details of any specific variable.
     * Specify the unique ID of the variable in your API request to get the data for that particular variable group.
     * @param variableId The ID of the Variable to be obtained
     */
    public static async getVariableById(variableId: bigint) {
        //Get instance of ZOHOCRMSDK.Variables.VariablesOperations Class
        let variablesOperations: ZOHOCRMSDK.Variables.VariablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters of Get Variable By ID operation */
        // await paramInstance.add(GetVariableByIDParam.GROUP, "34770613089001");

        //Call getVariableByGroupId method that takes paramInstance and variableId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Variables.ResponseHandler.MasterModel> = await variablesOperations.getVariableById(variableId, paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Variables.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Variables.ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Variables.ResponseWrapper) {
                    //Get the array of obtained Variable instances
                    let variables: ZOHOCRMSDK.Variables.Variable[] = responseObject.getVariables();

                    variables.forEach(variable => {
                        //Get the ID of each Variable
                        console.log("Variable ID: " + variable.getId());

                        //Get the APIName of each Variable
                        console.log("Variable APIName: " + variable.getAPIName());

                        //Get the Name of each Variable
                        console.log("Variable Name: " + variable.getName());

                        //Get the Description of each Variable
                        console.log("Variable Description: " + variable.getDescription());

                        //Get the Type of each Variable
                        console.log("Variable Type: " + variable.getType());

                        //Get the VariableGroup instance of each Variable
                        let variableGroup: ZOHOCRMSDK.VariableGroups.VariableGroup = variable.getVariableGroup();

                        //Check if variableGroup is not null
                        if (variableGroup != null) {
                            //Get the APIName of the VariableGroup
                            console.log("Variable VariableGroup APIName: " + variableGroup.getAPIName());

                            //Get the ID of the VariableGroup
                            console.log("Variable VariableGroup ID: " + variableGroup.getId());
                        }

                        //Get the Value of each Variable
                        console.log("Variable Value: " + variable.getValue());
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Variables.APIException) {
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
     * <h3> Update Variable By Id </h3>
     * This method is used to update details of a specific variable in CRM and print the response.
     * @param variableId The ID of the Variable to be updated
     */
    public static async updateVariableById(variableId: bigint) {
        //example
        //let variableId = 34096432275025n;

        //Get instance of ZOHOCRMSDK.Variables.VariablesOperations Class
        let variablesOperations: ZOHOCRMSDK.Variables.VariablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();

        //Get instance of ZOHOCRMSDK.Variables.BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Variables.BodyWrapper = new ZOHOCRMSDK.Variables.BodyWrapper();

        //Array to hold Variable instances
        let variableArray: ZOHOCRMSDK.Variables.Variable[] = [];

        //Get instance of Variable Class
        let variable1: ZOHOCRMSDK.Variables.Variable = new ZOHOCRMSDK.Variables.Variable();

        variable1.setAPIName("TestAPIName");

        //Add the instance to the array
        variableArray.push(variable1);

        //Set the array to variables in ZOHOCRMSDK.Variables.BodyWrapper instance
        request.setVariables(variableArray);

        //Call updateVariableById method that takes ZOHOCRMSDK.Variables.BodyWrapper instance and variableId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Variables.ActionHandler.MasterModel> = await variablesOperations.updateVariableById(variableId, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Variables.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Variables.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Variables.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.Variables.ActionResponse.MasterModel instances
                    let actionResponses: ZOHOCRMSDK.Variables.ActionResponse.MasterModel[] = responseObject.getVariables();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Variables.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Variables.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Variables.APIException) {
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
     * <h3> Delete Variable </h3>
     * This method is used to delete details of a specific variable in CRM and print the response.
     * @param variableId The ID of the Variable to be deleted
     */
    public static async deleteVariable(variableId: bigint) {
        //example
        //let variableId = 34096432275025n;

        //Get instance of ZOHOCRMSDK.Variables.VariablesOperations Class
        let variablesOperations: ZOHOCRMSDK.Variables.VariablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();

        //Call deleteVariable method that takes variableId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Variables.ActionHandler.MasterModel> = await variablesOperations.deleteVariable(variableId);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Variables.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Variables.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Variables.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.Variables.ActionResponse.MasterModel instances
                    let actionResponses: ZOHOCRMSDK.Variables.ActionResponse.MasterModel[] = responseObject.getVariables();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Variables.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Variables.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Variables.APIException) {
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
     * <h3> Get Variable for API Name </h3>
     * This method is used to get the details of any specific variable.
     * Specify the unique name of the variable in your API request to get the data for that particular variable group.
     * @param variableName The API name of the Variable to be obtained
     */
    public static async getVariableForAPIName(variableName: string) {
        //example
        //let variableName = "Variable55";

        //Get instance of ZOHOCRMSDK.Variables.VariablesOperations Class
        let variablesOperations: ZOHOCRMSDK.Variables.VariablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters for Get Variable for API Name operation */
        // await paramInstance.add(GetVariableForAPINameParam.GROUP, "General");

        //Call getVariableForGroupAPIName method that takes ZOHOCRMSDK.ParameterMap instance and variableName as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Variables.ResponseHandler.MasterModel> = await variablesOperations.getVariableForAPIName(variableName, paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Variables.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Variables.ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Variables.ResponseWrapper) {
                    //Get the array of obtained Variable instances
                    let variables: ZOHOCRMSDK.Variables.Variable[] = responseObject.getVariables();

                    variables.forEach(variable => {
                        //Get the ID of each Variable
                        console.log("Variable ID: " + variable.getId());

                        //Get the APIName of each Variable
                        console.log("Variable APIName: " + variable.getAPIName());

                        //Get the Name of each Variable
                        console.log("Variable Name: " + variable.getName());

                        //Get the Description of each Variable
                        console.log("Variable Description: " + variable.getDescription());

                        //Get the Type of each Variable
                        console.log("Variable Type: " + variable.getType());

                        //Get the VariableGroup instance of each Variable
                        let variableGroup: ZOHOCRMSDK.VariableGroups.VariableGroup = variable.getVariableGroup();

                        //Check if variableGroup is not null
                        if (variableGroup != null) {
                            //Get the APIName of the VariableGroup
                            console.log("Variable VariableGroup APIName: " + variableGroup.getAPIName());

                            //Get the ID of the VariableGroup
                            console.log("Variable VariableGroup ID: " + variableGroup.getId());
                        }

                        //Get the Value of each Variable
                        console.log("Variable Value: " + variable.getValue());
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Variables.APIException) {
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
     * <h3> Update Variable by API Name </h3>
     * This method is used to update details of a specific variable in CRM and print the response.
     * @param variableName The name of the Variable to be updated
     */
    public static async updateVariableByAPIName(variableName: string) {
        //example
        //let variableName = "Variable55";

        //Get instance of ZOHOCRMSDK.Variables.VariablesOperations Class
        let variablesOperations: ZOHOCRMSDK.Variables.VariablesOperations = new ZOHOCRMSDK.Variables.VariablesOperations();

        //Get instance of ZOHOCRMSDK.Variables.BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Variables.BodyWrapper = new ZOHOCRMSDK.Variables.BodyWrapper();

        //Array to hold Variable instances
        let variableArray: ZOHOCRMSDK.Variables.Variable[] = [];

        //Get instance of Variable Class
        let variable1: ZOHOCRMSDK.Variables.Variable = new ZOHOCRMSDK.Variables.Variable();

        variable1.setDescription("Test update Variable By APIName");

        //Add the instance to array
        variableArray.push(variable1);

        //Set the array to variables in ZOHOCRMSDK.Variables.BodyWrapper instance
        request.setVariables(variableArray);

        //Call updateVariableByAPIName method that takes ZOHOCRMSDK.Variables.BodyWrapper instance and variableName as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Variables.ActionHandler.MasterModel> = await variablesOperations.updateVariableByAPIName(variableName, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Variables.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Variables.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Variables.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.Variables.ActionResponse.MasterModel instances
                    let actionResponses: ZOHOCRMSDK.Variables.ActionResponse.MasterModel[] = responseObject.getVariables();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Variables.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Variables.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Variables.APIException) {
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