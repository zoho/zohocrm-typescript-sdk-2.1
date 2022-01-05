import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class Currencies {
    /**
     * <h3> Get Currencies </h3>
     * This method is used to get all the available currencies in your organization.
     */
    public static async getCurrencies() {
        //Get instance of ZOHOCRMSDK.Currencies.CurrenciesOperations Class
        let currenciesOperations: ZOHOCRMSDK.Currencies.CurrenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();

        //Call getCurrencies method
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Currencies.ResponseHandler.MasterModel> = await currenciesOperations.getCurrencies();

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Currencies.ResponseHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected ZOHOCRMSDK.Currencies.ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Currencies.ResponseWrapper) {

                    //Get the array of obtained ZOHOCRMSDK.Currencies.Currency instances
                    let currencies: ZOHOCRMSDK.Currencies.Currency[] = responseObject.getCurrencies();

                    currencies.forEach(currency => {
                        //Get the Id of each currency
                        console.log("Currency Id: " + currency.getId());

                        //Get the IsoCode of each currency
                        console.log("Currency IsoCode: " + currency.getIsoCode());

                        //Get the Symbol of each currency
                        console.log("Currency Symbol: " + currency.getSymbol());

                        //Get the CreatedTime of each currency
                        console.log("Currency CreatedTime: " + currency.getCreatedTime());

                        //Get if the currency is active
                        console.log("Currency IsActive: " + currency.getIsActive().toString());

                        //Get the ExchangeRate of each currency
                        console.log("Currency ExchangeRate: " + currency.getExchangeRate());

                        //Get the format instance of each currency
                        let format: ZOHOCRMSDK.Currencies.Format = currency.getFormat();

                        if (format !== null) {
                            //Get the DecimalSeparator of the ZOHOCRMSDK.Currencies.Format
                            console.log("Currency ZOHOCRMSDK.Currencies.Format DecimalSeparator: " + format.getDecimalSeparator().getValue());

                            //Get the ThousandSeparator of the ZOHOCRMSDK.Currencies.Format
                            console.log("Currency ZOHOCRMSDK.Currencies.Format ThousandSeparator: " + format.getThousandSeparator().getValue());

                            //Get the DecimalPlaces of the ZOHOCRMSDK.Currencies.Format
                            console.log("Currency ZOHOCRMSDK.Currencies.Format DecimalPlaces: " + format.getDecimalPlaces().getValue());
                        }

                        //Get the createdBy User instance of each currency
                        let createdBy: ZOHOCRMSDK.Users.User = currency.getCreatedBy();

                        //Check if createdBy is not null
                        if (createdBy !== null) {
                            //Get the Name of the createdBy User
                            console.log("Currency CreatedBy User-Name: " + createdBy.getName());

                            //Get the ID of the createdBy User
                            console.log("Currency CreatedBy User-ID: " + createdBy.getId());
                        }

                        //Get the PrefixSymbol of each currency
                        console.log("Currency PrefixSymbol: " + currency.getPrefixSymbol().toString());

                        //Get the IsBase of each currency
                        console.log("Currency IsBase: " + currency.getIsBase().toString());

                        //Get the ModifiedTime of each currency
                        console.log("Currency ModifiedTime: " + currency.getModifiedTime());

                        //Get the Name of each currency
                        console.log("Currency Name: " + currency.getName());

                        //Get the modifiedBy User instance of each currency
                        let modifiedBy: ZOHOCRMSDK.Users.User = currency.getModifiedBy();

                        //Check if modifiedBy is not null
                        if (modifiedBy !== null) {
                            //Get the Name of the modifiedBy User
                            console.log("Currency ModifiedBy User-Name: " + modifiedBy.getName());

                            //Get the ID of the modifiedBy User
                            console.log("Currency ModifiedBy User-ID: " + modifiedBy.getId());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Currencies.APIException) {
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
     * <h3> Add Currencies </h3>
     * This method is used to add new currencies to your organization.
     */
    public static async addCurrencies() {
        //Get instance of ZOHOCRMSDK.Currencies.CurrenciesOperations Class
        let currenciesOperations: ZOHOCRMSDK.Currencies.CurrenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Currencies.BodyWrapper = new ZOHOCRMSDK.Currencies.BodyWrapper();

        //Array to hold ZOHOCRMSDK.Currencies.Currency instances
        let currencies: ZOHOCRMSDK.Currencies.Currency[] = [];

        //Get instance of ZOHOCRMSDK.Currencies.Currency Class
        let currency: ZOHOCRMSDK.Currencies.Currency = new ZOHOCRMSDK.Currencies.Currency();

        //To set the position of the ISO code in the currency.
        //true: Display ISO code before the currency value.
        //false: Display ISO code after the currency value.
        currency.setPrefixSymbol(true);

        //To set the name of the currency.
        currency.setName("Angolan Kwanza - AOA");

        //To set the ISO code of the currency.
        currency.setIsoCode("AOA");

        //To set the symbol of the currency.
        currency.setSymbol("Kz");

        //To set the rate at which the currency has to be exchanged for home currency.
        currency.setExchangeRate("20.");

        //To set the status of the currency.
        //true: The currency is active.
        //false: The currency is inactive.
        currency.setIsActive(true);

        let format: ZOHOCRMSDK.Currencies.Format = new ZOHOCRMSDK.Currencies.Format();

        //It can be a Period or Comma, depending on the currency.
        format.setDecimalSeparator(new ZOHOCRMSDK.Choice("Period"));

        //It can be a Period, Comma, or Space, depending on the currency.
        format.setThousandSeparator(new ZOHOCRMSDK.Choice("Comma"));

        //To set the number of decimal places allowed for the currency. It can be 0, 2, or 3.
        format.setDecimalPlaces(new ZOHOCRMSDK.Choice("2"));

        //To set the format of the currency
        currency.setFormat(format);

        currencies.push(currency);

        //Set the array to ZOHOCRMSDK.Currencies.Currency in BodyWrapper instance
        request.setCurrencies(currencies);

        //Call addCurrencies method that takes BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Currencies.ActionHandler.MasterModel> = await currenciesOperations.addCurrencies(request);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Currencies.ActionHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Currencies.ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Currencies.ActionResponse.MasterModel[] = responseObject.getCurrencies();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Currencies.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Currencies.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Currencies.APIException) {
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
     * <h3> Update Currencies </h3>
     * This method is used to update currency details.
     */
    public static async updateCurrencies() {
        //Get instance of ZOHOCRMSDK.Currencies.CurrenciesOperations Class
        let currenciesOperations: ZOHOCRMSDK.Currencies.CurrenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Currencies.BodyWrapper = new ZOHOCRMSDK.Currencies.BodyWrapper();

        //Array to hold ZOHOCRMSDK.Currencies.Currency instances
        let currencies: ZOHOCRMSDK.Currencies.Currency[] = [];

        //Get instance of ZOHOCRMSDK.Currencies.Currency Class
        let currency: ZOHOCRMSDK.Currencies.Currency = new ZOHOCRMSDK.Currencies.Currency();

        //To set currency Id
        currency.setId(BigInt("34770616040001"));

        //To set the position of the ISO code in the currency.
        //true: Display ISO code before the currency value.
        //false: Display ISO code after the currency value.
        currency.setPrefixSymbol(true);

        //To set the rate at which the currency has to be exchanged for home currency.
        currency.setExchangeRate("10.");

        //To set the status of the currency.
        //true: The currency is active.
        //false: The currency is inactive.
        currency.setIsActive(true);

        let format: ZOHOCRMSDK.Currencies.Format = new ZOHOCRMSDK.Currencies.Format();

        //It can be a Period or Comma, depending on the currency.
        // format.setDecimalSeparator(new Choice("Period"));

        // //It can be a Period, Comma, or Space, depending on the currency.
        // format.setThousandSeparator(new Choice("Space"));

        //To set the number of decimal places allowed for the currency. It can be 0, 2, or 3.
        format.setDecimalPlaces(new ZOHOCRMSDK.Choice("2"));

        //To set the format of the currency
        currency.setFormat(format);

        //Add ZOHOCRMSDK.Currencies.Currency instance to the array
        currencies.push(currency);

        //Set the array to ZOHOCRMSDK.Currencies.Currency in BodyWrapper instance
        request.setCurrencies(currencies);

        //Call updateCurrencies method that takes BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Currencies.ActionHandler.MasterModel> = await currenciesOperations.updateCurrencies(request);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Currencies.ActionHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Currencies.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Currencies.ActionResponse.MasterModel[] = responseObject.getCurrencies();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Currencies.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Currencies.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Currencies.APIException) {
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
     * <h3> Enable Multiple Currencies </h3>
     * This method is used to enable multiple currencies for your organization.
     */
    public static async enableMultipleCurrencies() {
        //Get instance of ZOHOCRMSDK.Currencies.CurrenciesOperations Class
        let currenciesOperations: ZOHOCRMSDK.Currencies.CurrenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();

        //Get instance of BaseCurrencyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Currencies.BaseCurrencyWrapper = new ZOHOCRMSDK.Currencies.BaseCurrencyWrapper();

        //Get instance of ZOHOCRMSDK.Currencies.Currency Class
        let currency: ZOHOCRMSDK.Currencies.Currency = new ZOHOCRMSDK.Currencies.Currency();

        //To set the position of the ISO code in the base currency.
        //true: Display ISO code before the currency value.
        //false: Display ISO code after the currency value.
        currency.setPrefixSymbol(true);

        //To set the name of the base currency.
        currency.setName("Algerian Dinar-ADN");

        //To set the ISO code of the base currency.
        currency.setIsoCode("DZD");

        //To set the symbol of the base currency.
        currency.setSymbol("Af");

        //To set the rate at which the currency has to be exchanged for home base currency.
        currency.setExchangeRate("1.00");

        //To set the status of the base currency.
        //true: The currency is active.
        //false: The currency is inactive.
        currency.setIsActive(true);

        let format: ZOHOCRMSDK.Currencies.Format = new ZOHOCRMSDK.Currencies.Format();

        //It can be a Period or Comma, depending on the base currency.
        format.setDecimalSeparator(new ZOHOCRMSDK.Choice("Period"));

        //It can be a Period, Comma, or Space, depending on the base currency.
        format.setThousandSeparator(new ZOHOCRMSDK.Choice("Comma"));

        //To set the number of decimal places allowed for the base currency. It can be 0, 2, or 3.
        format.setDecimalPlaces(new ZOHOCRMSDK.Choice("2"));

        //To set the format of the base currency
        currency.setFormat(format);

        //Set the ZOHOCRMSDK.Currencies.Currency in BodyWrapper instance
        request.setBaseCurrency(currency);

        //Call enableMultipleCurrencies method that takes BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Currencies.BaseCurrencyActionHandler.MasterModel> = await currenciesOperations.enableMultipleCurrencies(request);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Currencies.BaseCurrencyActionHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected BaseCurrencyActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Currencies.BaseCurrencyActionWrapper) {
                    //Get the received obtained ActionResponse instances
                    let actionResponse: ZOHOCRMSDK.Currencies.ActionResponse.MasterModel = responseObject.getBaseCurrency();

                    //Check if the request is successful
                    if (actionResponse instanceof ZOHOCRMSDK.Currencies.SuccessResponse) {
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
                    else if (actionResponse instanceof ZOHOCRMSDK.Currencies.APIException) {
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
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Currencies.APIException) {
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
     * <h3> Update ZOHOCRMSDK.Currencies.Currency </h3>
     * This method is used to update base currency details.
     */
    public static async updateBaseCurrency() {
        //Get instance of ZOHOCRMSDK.Currencies.CurrenciesOperations Class
        let currenciesOperations: ZOHOCRMSDK.Currencies.CurrenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();

        //Get instance of BaseCurrencyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Currencies.BaseCurrencyWrapper = new ZOHOCRMSDK.Currencies.BaseCurrencyWrapper();

        //Get instance of ZOHOCRMSDK.Currencies.Currency Class
        let currency: ZOHOCRMSDK.Currencies.Currency = new ZOHOCRMSDK.Currencies.Currency();

        //To set the position of the ISO code in the base currency.
        //true: Display ISO code before the currency value.
        //false: Display ISO code after the currency value.
        currency.setPrefixSymbol(true);

        //To set the symbol of the base currency.
        currency.setSymbol("Af");

        //To set the rate at which the currency has to be exchanged for home base currency.
        currency.setExchangeRate("1.00");

        //To set currency Id
        currency.setId(BigInt("34770616008002"));

        let format: ZOHOCRMSDK.Currencies.Format = new ZOHOCRMSDK.Currencies.Format();

        //It can be a Period or Comma, depending on the base currency.
        format.setDecimalSeparator(new ZOHOCRMSDK.Choice("Period"));

        //It can be a Period, Comma, or Space, depending on the base currency.
        format.setThousandSeparator(new ZOHOCRMSDK.Choice("Comma"));

        //To set the number of decimal places allowed for the base currency. It can be 0, 2, or 3.
        format.setDecimalPlaces(new ZOHOCRMSDK.Choice("2"));

        //To set the format of the base currency
        currency.setFormat(format);

        //Set the ZOHOCRMSDK.Currencies.Currency in BodyWrapper instance
        request.setBaseCurrency(currency);

        //Call updateBaseCurrency method that takes BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Currencies.BaseCurrencyActionHandler.MasterModel> = await currenciesOperations.updateBaseCurrency(request);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Currencies.BaseCurrencyActionHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected BaseCurrencyActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Currencies.BaseCurrencyActionWrapper) {
                    //Get the received obtained ActionResponse instances
                    let actionResponse: ZOHOCRMSDK.Currencies.ActionResponse.MasterModel = responseObject.getBaseCurrency();

                    //Check if the request is successful
                    if (actionResponse instanceof ZOHOCRMSDK.Currencies.SuccessResponse) {
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
                    else if (actionResponse instanceof ZOHOCRMSDK.Currencies.APIException) {
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
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Currencies.APIException) {
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
     * <h3> Get ZOHOCRMSDK.Currencies.Currency </h3>
     * This method is used to get the details of a specific currency.
     * @param currencyId Specify the unique ID of the currency.
     */
    public static async getCurrency(currencyId: bigint) {
        //example
        //let currencyId = 34770616011001n;

        //Get instance of ZOHOCRMSDK.Currencies.CurrenciesOperations Class
        let currenciesOperations: ZOHOCRMSDK.Currencies.CurrenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();

        //Call getCurrency method that takes currencyId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Currencies.ResponseHandler.MasterModel> = await currenciesOperations.getCurrency(currencyId);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Currencies.ResponseHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected ZOHOCRMSDK.Currencies.ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Currencies.ResponseWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.Currencies.Currency instances
                    let currencies: ZOHOCRMSDK.Currencies.Currency[] = responseObject.getCurrencies();

                    currencies.forEach(currency => {
                        //Get the Id of each currency
                        console.log("Currency Id: " + currency.getId());

                        //Get the IsoCode of each currency
                        console.log("Currency IsoCode: " + currency.getIsoCode());

                        //Get the Symbol of each currency
                        console.log("Currency Symbol: " + currency.getSymbol());

                        //Get the CreatedTime of each currency
                        console.log("Currency CreatedTime: " + currency.getCreatedTime());

                        //Get if the currency is active
                        console.log("Currency IsActive: " + currency.getIsActive().toString());

                        //Get the ExchangeRate of each currency
                        console.log("Currency ExchangeRate: " + currency.getExchangeRate());

                        //Get the format instance of each currency
                        let format: ZOHOCRMSDK.Currencies.Format = currency.getFormat();

                        if (format !== null) {
                            //Get the DecimalSeparator of the ZOHOCRMSDK.Currencies.Format
                            console.log("Currency ZOHOCRMSDK.Currencies.Format DecimalSeparator: " + format.getDecimalSeparator().getValue());

                            //Get the ThousandSeparator of the ZOHOCRMSDK.Currencies.Format
                            console.log("Currency ZOHOCRMSDK.Currencies.Format ThousandSeparator: " + format.getThousandSeparator().getValue());

                            //Get the DecimalPlaces of the ZOHOCRMSDK.Currencies.Format
                            console.log("Currency ZOHOCRMSDK.Currencies.Format DecimalPlaces: " + format.getDecimalPlaces().getValue());
                        }

                        //Get the createdBy User instance of each currency
                        let createdBy: ZOHOCRMSDK.Users.User = currency.getCreatedBy();

                        //Check if createdBy is not null
                        if (createdBy !== null) {
                            //Get the Name of the createdBy User
                            console.log("Currency CreatedBy User-Name: " + createdBy.getName());

                            //Get the ID of the createdBy User
                            console.log("Currency CreatedBy User-ID: " + createdBy.getId());
                        }

                        //Get the PrefixSymbol of each currency
                        console.log("Currency PrefixSymbol: " + currency.getPrefixSymbol().toString());

                        //Get the IsBase of each currency
                        console.log("Currency IsBase: " + currency.getIsBase().toString());

                        //Get the ModifiedTime of each currency
                        console.log("Currency ModifiedTime: " + currency.getModifiedTime());

                        //Get the Name of each currency
                        console.log("Currency Name: " + currency.getName());

                        //Get the modifiedBy User instance of each currency
                        let modifiedBy: ZOHOCRMSDK.Users.User = currency.getModifiedBy();

                        //Check if modifiedBy is not null
                        if (modifiedBy !== null) {
                            //Get the Name of the modifiedBy User
                            console.log("Currency ModifiedBy User-Name: " + modifiedBy.getName());

                            //Get the ID of the modifiedBy User
                            console.log("Currency ModifiedBy User-ID: " + modifiedBy.getId());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Currencies.APIException) {
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
     * <h3> Update ZOHOCRMSDK.Currencies.Currency </h3>
     * This method is used to update currency details.
     * @param currencyId Specify the unique ID of the currency.
     */
    public static async updateCurrency(currencyId: bigint) {
        //example
        //let currencyId = 34770616011001n;

        //Get instance of ZOHOCRMSDK.Currencies.CurrenciesOperations Class
        let currenciesOperations: ZOHOCRMSDK.Currencies.CurrenciesOperations = new ZOHOCRMSDK.Currencies.CurrenciesOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Currencies.BodyWrapper = new ZOHOCRMSDK.Currencies.BodyWrapper();

        //Array to hold ZOHOCRMSDK.Currencies.Currency instances
        let currencies: ZOHOCRMSDK.Currencies.Currency[] = [];

        //Get instance of ZOHOCRMSDK.Currencies.Currency Class
        let currency: ZOHOCRMSDK.Currencies.Currency = new ZOHOCRMSDK.Currencies.Currency();

        //To set the position of the ISO code in the currency.
        //true: Display ISO code before the currency value.
        //false: Display ISO code after the currency value.
        currency.setPrefixSymbol(true);

        //To set the rate at which the currency has to be exchanged for home currency.
        currency.setExchangeRate("5.00");

        //To set the status of the currency.
        //true: The currency is active.
        //false: The currency is inactive.
        currency.setIsActive(true);

        let format: ZOHOCRMSDK.Currencies.Format = new ZOHOCRMSDK.Currencies.Format();

        //It can be a Period or Comma, depending on the currency.
        format.setDecimalSeparator(new ZOHOCRMSDK.Choice("Period"));

        //It can be a Period, Comma, or Space, depending on the currency.
        format.setThousandSeparator(new ZOHOCRMSDK.Choice("Comma"));

        //To set the number of decimal places allowed for the currency. It can be 0, 2, or 3.
        format.setDecimalPlaces(new ZOHOCRMSDK.Choice("2"));

        //To set the format of the currency
        currency.setFormat(format);

        //Add the ZOHOCRMSDK.Currencies.Currency instance to the array
        currencies.push(currency);

        //Set the array to ZOHOCRMSDK.Currencies.Currency in BodyWrapper instance
        request.setCurrencies(currencies);

        //Call updateCurrency method that takes BodyWrapper instance and currencyId as parameters
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Currencies.ActionHandler.MasterModel> = await currenciesOperations.updateCurrency(currencyId, request);

        if (response !== null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Currencies.ActionHandler.MasterModel = response.getObject();

            if (responseObject !== null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Currencies.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Currencies.ActionResponse.MasterModel[] = responseObject.getCurrencies();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Currencies.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Currencies.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Currencies.APIException) {
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
}