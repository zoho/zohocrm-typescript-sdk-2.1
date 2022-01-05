import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class SendMail {
    public static async getEmailAddresses() {
        //Get instance of SendMailOperations Class
        let sendMailOperations: ZOHOCRMSDK.SendMail.SendMailOperations = new ZOHOCRMSDK.SendMail.SendMailOperations();

        //Call getEmailAddresses method that takes ParameterMap instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.SendMail.ResponseHandler.MasterModel> = await sendMailOperations.getEmailAddresses();

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.SendMail.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.SendMail.ResponseWrapper) {
                    let emails: ZOHOCRMSDK.SendMail.UserAddress[] = responseObject.getFromAddresses();

                    for (let email of emails) {
                        console.log("UserName: " + email.getUserName());

                        console.log("Mail Type: " + email.getType());

                        console.log("Mail : " + email.getEmail());

                        console.log("Mail ID: " + email.getId());

                        console.log("Mail Default: " + email.getDefault());
                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.SendMail.APIException) {
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

    public static async sendMail(recordId: bigint, moduleAPIName: string) {
        //Get instance of SendMailOperations Class
        let sendMailOperations: ZOHOCRMSDK.SendMail.SendMailOperations = new ZOHOCRMSDK.SendMail.SendMailOperations();

        let mail: ZOHOCRMSDK.SendMail.Mail = new ZOHOCRMSDK.SendMail.Mail();

        let from: ZOHOCRMSDK.SendMail.UserAddress = new ZOHOCRMSDK.SendMail.UserAddress();

        from.setUserName("user");

        from.setEmail("abc@zoho.com");

        mail.setFrom(from);

        let to: ZOHOCRMSDK.SendMail.UserAddress = new ZOHOCRMSDK.SendMail.UserAddress();

        to.setUserName("user2");

        to.setEmail("abc1@zoho.com");

        mail.setTo([to]);

        mail.setSubject("Mail subject");

        mail.setContent("<br><a href=\"{ConsentForm.en_US}\" id=\"ConsentForm\" class=\"en_US\" target=\"_blank\">Consent form link</a><br><br><br><br><br><h3><span style=\"background-color: rgb(254, 255, 102)\">REGARDS,</span></h3><div><span style=\"background-color: rgb(254, 255, 102)\">AZ</span></div><div><span style=\"background-color: rgb(254, 255, 102)\">ADMIN</span></div> <div></div>");

        mail.setConsentEmail(true);

        mail.setMailFormat("html");

        let template: ZOHOCRMSDK.InventoryTemplates.InventoryTemplate = new ZOHOCRMSDK.InventoryTemplates.InventoryTemplate();

        template.setId(BigInt("34770610174009"));

        mail.setTemplate(template);

        let wrapper: ZOHOCRMSDK.SendMail.BodyWrapper = new ZOHOCRMSDK.SendMail.BodyWrapper();

        wrapper.setData([mail]);

        //Call sendMail method
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.SendMail.ActionHandler.MasterModel> = await sendMailOperations.sendMail(recordId, moduleAPIName, wrapper);

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.SendMail.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.SendMail.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.SendMail.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.SendMail.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.SendMail.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details = actionResponse.getDetails();

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
                else if (responseObject instanceof ZOHOCRMSDK.SendMail.APIException) {
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