import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class Taxes {
    /**
     * <h3> Get Taxes </h3>
     * This method is used to get all the Organization Taxes and print the response.
     */
    public static async getTaxes() {
        //Get instance of ZOHOCRMSDK.Taxes.TaxesOperations Class
        let taxesOperations: ZOHOCRMSDK.Taxes.TaxesOperations = new ZOHOCRMSDK.Taxes.TaxesOperations();

        //Call getTaxes method
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Taxes.ResponseHandler.MasterModel> = await taxesOperations.getTaxes();

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Taxes.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Taxes.ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Taxes.ResponseWrapper) {
                    //Get the array of obtained Tax instances
                    let taxes: Array<ZOHOCRMSDK.Taxes.Tax> = responseObject.getTaxes();

                    taxes.forEach(tax => {
                        //Get the DisplayLabel of each Tax
                        console.log("Tax DisplayLabel: " + tax.getDisplayLabel());

                        //Get the Name of each Tax
                        console.log("Tax Name: " + tax.getName());

                        //Get the ID of each Tax
                        console.log("Tax ID: " + tax.getId());

                        //Get the Value of each Tax
                        console.log("Tax Value: " + tax.getValue().toString());
                    });

                    let preference: ZOHOCRMSDK.Taxes.Preference = responseObject.getPreference();

                    if (preference != null) {
                        //Get the AutoPopulateTax of each Preference
                        console.log("Preference AutoPopulateTax: " + preference.getAutoPopulateTax().toString());

                        //Get the ModifyTaxRates of each Preference
                        console.log("Preference ModifyTaxRates: " + preference.getModifyTaxRates().toString());

                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Taxes.APIException) {
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
     * <h3> Get Tax </h3>
     * This method is used to get the Organization Tax with ID and print the response.
     * @param taxId The ID of the tax to be obtained
     */
    public static async getTax(taxId: bigint) {
        //example
        //let taxId = 34096432317003n;

        //Get instance of ZOHOCRMSDK.Taxes.TaxesOperations Class
        let taxesOperations: ZOHOCRMSDK.Taxes.TaxesOperations = new ZOHOCRMSDK.Taxes.TaxesOperations();

        //Call getTax method that takes taxId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Taxes.ResponseHandler.MasterModel> = await taxesOperations.getTax(taxId);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Taxes.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Taxes.ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Taxes.ResponseWrapper) {
                    //Get the array of obtained Tax instances
                    let taxes: ZOHOCRMSDK.Taxes.Tax[] = responseObject.getTaxes();

                    taxes.forEach(tax => {
                        //Get the DisplayLabel of each Tax
                        console.log("Tax DisplayLabel: " + tax.getDisplayLabel());

                        //Get the Name of each Tax
                        console.log("Tax Name: " + tax.getName());

                        //Get the ID of each Tax
                        console.log("Tax ID: " + tax.getId());

                        //Get the Value of each Tax
                        console.log("Tax Value: " + tax.getValue().toString());
                    });

                    let preference: ZOHOCRMSDK.Taxes.Preference = responseObject.getPreference();

                    if (preference != null) {
                        //Get the AutoPopulateTax of each Preference
                        console.log("Preference AutoPopulateTax: " + preference.getAutoPopulateTax().toString());

                        //Get the ModifyTaxRates of each Preference
                        console.log("Preference ModifyTaxRates: " + preference.getModifyTaxRates().toString());

                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Taxes.APIException) {
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
     * <h3> Create Taxes </h3>
     * This method is used to create Organization Taxes and print the response.
     */
    public static async createTaxes() {
        //Get instance of ZOHOCRMSDK.Taxes.TaxesOperations Class
        let taxesOperations: ZOHOCRMSDK.Taxes.TaxesOperations = new ZOHOCRMSDK.Taxes.TaxesOperations();

        //Get instance of ZOHOCRMSDK.Taxes.BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Taxes.BodyWrapper = new ZOHOCRMSDK.Taxes.BodyWrapper();

        //Array to hold Tax instances
        let taxArray: ZOHOCRMSDK.Taxes.Tax[] = [];

        //Get instance of Tax Class
        let tax: ZOHOCRMSDK.Taxes.Tax = new ZOHOCRMSDK.Taxes.Tax();

        //Set name
        tax.setName("ash211");

        //Set sequence number
        tax.setSequenceNumber(2);

        //Set value
        tax.setValue(10.0);

        //Add the instance to array
        taxArray.push(tax);

        tax = new ZOHOCRMSDK.Taxes.Tax();

        //Set name
        tax.setName("a231h2");

        //Set sequence number
        tax.setValue(12.0);

        //Add the instance to array
        taxArray.push(tax);

        //Set the array to taxes in ZOHOCRMSDK.Taxes.BodyWrapper instance
        request.setTaxes(taxArray);

        //Call createTaxes method that takes ZOHOCRMSDK.Taxes.BodyWrapper class instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Taxes.ActionHandler.MasterModel> = await taxesOperations.createTaxes(request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Taxes.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Taxes.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Taxes.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.Taxes.ActionResponse.MasterModel instances
                    let actionResponses: ZOHOCRMSDK.Taxes.ActionResponse.MasterModel[] = responseObject.getTaxes();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Taxes.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Taxes.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Taxes.APIException) {
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
     * <h3> Update Taxes </h3>
     * This method is used to update Organization Taxes and print the response.
     */
    public static async updateTaxes() {
        //Get instance of ZOHOCRMSDK.Taxes.TaxesOperations Class
        let taxesOperations: ZOHOCRMSDK.Taxes.TaxesOperations = new ZOHOCRMSDK.Taxes.TaxesOperations();

        //Get instance of ZOHOCRMSDK.Taxes.BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Taxes.BodyWrapper = new ZOHOCRMSDK.Taxes.BodyWrapper();

        //Array to hold Tax instances
        let taxArray: ZOHOCRMSDK.Taxes.Tax[] = [];

        //Get instance of Tax Class
        let tax: ZOHOCRMSDK.Taxes.Tax = new ZOHOCRMSDK.Taxes.Tax();

        //Set ID
        tax.setId(BigInt("347706113318009"));

        //Set Name
        tax.setName("Modifiedtax11");

        //Add the instance to the array
        taxArray.push(tax);

        tax = new ZOHOCRMSDK.Taxes.Tax();

        //Set ID
        tax.setId(BigInt("347706113318010"));

        //Set Name
        tax.setName("Modifiedtax21");

        //Add the instance to the array
        taxArray.push(tax);

        //Set the array to taxes in ZOHOCRMSDK.Taxes.BodyWrapper instance
        request.setTaxes(taxArray);

        //Call updateTaxes method that takes ZOHOCRMSDK.Taxes.BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Taxes.ActionHandler.MasterModel> = await taxesOperations.updateTaxes(request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Taxes.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Taxes.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Taxes.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.Taxes.ActionResponse.MasterModel instances
                    let actionResponses: ZOHOCRMSDK.Taxes.ActionResponse.MasterModel[] = responseObject.getTaxes();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Taxes.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Taxes.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Taxes.APIException) {
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
     * <h3> Delete Taxes </h3>
     * This method is used to delete Organization Taxes and print the response.
     * @param taxIds The Array of the tax IDs to be deleted
     */
    public static async deleteTaxes(taxIds: bigint[]) {
        //example
        //let taxIds = [34096432407046n, 34096432407047n];

        //Get instance of ZOHOCRMSDK.Taxes.TaxesOperations Class
        let taxesOperations: ZOHOCRMSDK.Taxes.TaxesOperations = new ZOHOCRMSDK.Taxes.TaxesOperations();

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters for Delete Taxes operation */
        for (let taxId of taxIds) {
            await paramInstance.add(ZOHOCRMSDK.Taxes.DeleteTaxesParam.IDS, taxId);
        }

        //Call deleteTaxes method that takes ZOHOCRMSDK.ParameterMap instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Taxes.ActionHandler.MasterModel> = await taxesOperations.deleteTaxes(paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Taxes.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Taxes.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Taxes.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.Taxes.ActionResponse.MasterModel instances
                    let actionResponses: ZOHOCRMSDK.Taxes.ActionResponse.MasterModel[] = responseObject.getTaxes();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Taxes.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Taxes.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Taxes.APIException) {
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
     * <h3> Delete Tax </h3>
     * This method is used to delete Organization Tax and print the response.
     * @param taxId The ID of the tax to be deleted
     */
    public static async deleteTax(taxId: bigint) {
        //example
        //let taxId = 34096432407046n;

        //Get instance of ZOHOCRMSDK.Taxes.TaxesOperations Class
        let taxesOperations: ZOHOCRMSDK.Taxes.TaxesOperations = new ZOHOCRMSDK.Taxes.TaxesOperations();

        //Call deleteTaxes method that takes taxId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Taxes.ActionHandler.MasterModel> = await taxesOperations.deleteTax(taxId);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Taxes.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.Taxes.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Taxes.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.Taxes.ActionResponse.MasterModel instances
                    let actionResponses: ZOHOCRMSDK.Taxes.ActionResponse.MasterModel[] = responseObject.getTaxes();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Taxes.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Taxes.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Taxes.APIException) {
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


