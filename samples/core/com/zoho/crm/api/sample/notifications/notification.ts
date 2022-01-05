import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class Notifications {
    /**
     * <h3> Enable Notifications </h3>
     * This method is used to Enable Notifications and print the response.
     */
    public static async enableNotifications() {
        //Get instance of NotificationOperations Class
        let notificationOperations: ZOHOCRMSDK.Notifications.NotificationOperations = new ZOHOCRMSDK.Notifications.NotificationOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let bodyWrapper: ZOHOCRMSDK.Notifications.BodyWrapper = new ZOHOCRMSDK.Notifications.BodyWrapper();

        //Array of Notification instances
        let notificationsArray: ZOHOCRMSDK.Notifications.Notification[] = [];

        //Get instance of Notification Class
        let notification1: ZOHOCRMSDK.Notifications.Notification = new ZOHOCRMSDK.Notifications.Notification();

        //Set channel Id of the Notification
        notification1.setChannelId(BigInt("1006800211"));

        let events: string[] = ["Deals.all"];

        //To subscribe based on particular operations on given modules.
        notification1.setEvents(events);

        //To set the expiry time for instant notifications.
        notification1.setChannelExpiry(new Date(2020, 10, 10, 10, 20, 0));

        //To ensure that the notification is sent from Zoho CRM, by sending back the given value in notification URL body.
        //By using this value, user can validate the notifications.
        notification1.setToken("TOKEN_FOR_VERIFICATION_OF_10068002");

        //URL to be notified (POST request)
        notification1.setNotifyUrl("https://www.zohoapis.com");

        //Add Notification instance to the array
        notificationsArray.push(notification1);

        //Get instance of Notification Class
        let notification2: ZOHOCRMSDK.Notifications.Notification = new ZOHOCRMSDK.Notifications.Notification();

        //Set channel Id of the Notification
        notification2.setChannelId(BigInt("1006800211"));

        let events2: string[] = ["Accounts.all"];

        //To subscribe based on particular operations on given modules.
        notification2.setEvents(events2);

        //To set the expiry time for instant notifications.
        notification2.setChannelExpiry(new Date(2020, 11, 10, 10, 0, 0));

        //To ensure that the notification is sent from Zoho CRM, by sending back the given value in notification URL body.
        //By using this value, user can validate the notifications.
        notification2.setToken("TOKEN_FOR_VERIFICATION_OF_1006800211");

        //URL to be notified (POST request)
        notification2.setNotifyUrl("https://www.zohoapis.com");

        //Add Notification instance to the array
        notificationsArray.push(notification2);

        //Set the array to notifications in BodyWrapper instance
        bodyWrapper.setWatch(notificationsArray);

        //Call enableNotifications method that takes BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Notifications.ActionHandler.MasterModel> = await notificationOperations.enableNotifications(bodyWrapper);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Notifications.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Notifications.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Notifications.ActionResponse.MasterModel[] = responseObject.getWatch();

                    for (let actionResponse of actionResponses) {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Notifications.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            for (let key of Array.from(details.keys())) {

                                if (Array.isArray(details.get(key))) {
                                    let dataList = details.get(key);

                                    if (dataList.length > 0 && dataList[0] instanceof ZOHOCRMSDK.Notifications.Notification) {
                                        for (let event of dataList) {
                                            //Get the ChannelExpiry of each Notification
                                            console.log("Notification ChannelExpiry: " + event.getChannelExpiry());

                                            //Get the ResourceUri each Notification
                                            console.log("Notification ResourceUri: " + event.getResourceUri());

                                            //Get the ResourceId each Notification
                                            console.log("Notification ResourceId: " + event.getResourceId());

                                            //Get the ResourceName each Notification
                                            console.log("Notification ResourceName: " + event.getResourceName());

                                            //Get the ChannelId each Notification
                                            console.log("Notification ChannelId: " + event.getChannelId());
                                        }
                                    }
                                }
                                else {
                                    console.log(key + " : " + details.get(key));
                                }
                            }

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.Notifications.APIException) {
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
                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Notifications.APIException) {
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
     * <h3> Get Notification Details </h3>
     * This method is used to get all the Notification and print the response.
     */
    public static async getNotificationDetails() {
        //Get instance of NotificationOperations Class
        let notificationOperations: ZOHOCRMSDK.Notifications.NotificationOperations = new ZOHOCRMSDK.Notifications.NotificationOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        await paramInstance.add(ZOHOCRMSDK.Notifications.GetNotificationDetailsParam.CHANNEL_ID, BigInt("1006800211"));

        await paramInstance.add(ZOHOCRMSDK.Notifications.GetNotificationDetailsParam.MODULE, "Accounts");

        await paramInstance.add(ZOHOCRMSDK.Notifications.GetNotificationDetailsParam.PAGE, 1);

        await paramInstance.add(ZOHOCRMSDK.Notifications.GetNotificationDetailsParam.PER_PAGE, 200);

        //Call getNotificationDetails method
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Notifications.ResponseHandler.MasterModel> = await notificationOperations.getNotificationDetails(paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Notifications.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Notifications.ResponseWrapper) {
                    //Get the array of obtained Notification instances
                    let notificationsArray: ZOHOCRMSDK.Notifications.Notification[] = responseObject.getWatch();

                    notificationsArray.forEach(notification => {
                        //Get the NotifyOnRelatedAction of each Notification
                        console.log("Notification NotifyOnRelatedAction: " + notification.getNotifyOnRelatedAction());

                        //Get the ChannelExpiry of each Notification
                        console.log("Notification ChannelExpiry: " + notification.getChannelExpiry());

                        //Get the ResourceUri each Notification
                        console.log("Notification ResourceUri: " + notification.getResourceUri());

                        //Get the ResourceId each Notification
                        console.log("Notification ResourceId: " + notification.getResourceId());

                        //Get the NotifyUrl each Notification
                        console.log("Notification NotifyUrl: " + notification.getNotifyUrl());

                        //Get the ResourceName each Notification
                        console.log("Notification ResourceName: " + notification.getResourceName());

                        //Get the ChannelId each Notification
                        console.log("Notification ChannelId: " + notification.getChannelId());

                        //Get the events List of each Notification
                        let fields: string[] = notification.getEvents();

                        if (fields != null) {
                            for (let field of fields) {
                                //Get the Events
                                console.log("Notification Events: " + field);
                            }
                        }

                        //Get the Token each Notification
                        console.log("Notification Token: " + notification.getToken());
                    });

                    //Get the Object obtained Info instance
                    let info: ZOHOCRMSDK.Notifications.Info = responseObject.getInfo();

                    //Check if info is not null
                    if (info != null) {
                        if (info.getPerPage() != null) {
                            //Get the PerPage of the Info
                            console.log("Notification Info PerPage: " + info.getPerPage().toString());
                        }

                        if (info.getCount() != null) {
                            //Get the Count of the Info
                            console.log("Notification Info Count: " + info.getCount().toString());
                        }

                        if (info.getPage() != null) {
                            //Get the Page of the Info
                            console.log("Notification Info Page: " + info.getPage().toString());
                        }

                        if (info.getMoreRecords() != null) {
                            //Get the MoreRecords of the Info
                            console.log("Notification Info MoreRecords: " + info.getMoreRecords().toString());
                        }
                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Notifications.APIException) {
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
     * <h3> Update Notifications </h3>
     * This method is used to update Notifications and print the response.
     */
    public static async updateNotifications() {
        //Get instance of NotificationOperations Class
        let notificationOperations: ZOHOCRMSDK.Notifications.NotificationOperations = new ZOHOCRMSDK.Notifications.NotificationOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let bodyWrapper: ZOHOCRMSDK.Notifications.BodyWrapper = new ZOHOCRMSDK.Notifications.BodyWrapper();

        //Array of Notification instances
        let notificationsArray: ZOHOCRMSDK.Notifications.Notification[] = [];

        //Get instance of Notification Class
        let notification1: ZOHOCRMSDK.Notifications.Notification = new ZOHOCRMSDK.Notifications.Notification();

        //Set channel Id of the Notification
        notification1.setChannelId(BigInt("1006800211"));

        let events: string[] = ["Accounts.all"];

        //To subscribe based on particular operations on given modules.
        notification1.setEvents(events);

        //To set the expiry time for instant notifications.
        notification1.setChannelExpiry(new Date());

        //To ensure that the notification is sent from Zoho CRM, by sending back the given value in notification URL body.
        //By using this value, user can validate the notifications.
        notification1.setToken("TOKEN_FOR_VERIFICATION_OF_10068002");

        //URL to be notified (POST request)
        notification1.setNotifyUrl("https://www.zohoapis.com");

        //Add Notification instance to the array
        notificationsArray.push(notification1);

        //Set the array to notifications in BodyWrapper instance
        bodyWrapper.setWatch(notificationsArray);

        //Call updateNotifications method that takes BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Notifications.ActionHandler.MasterModel> = await notificationOperations.updateNotifications(bodyWrapper);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Notifications.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Notifications.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Notifications.ActionResponse.MasterModel[] = responseObject.getWatch();

                    for (let actionResponse of actionResponses) {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Notifications.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            details.forEach((value: any, key: string) => {
                                if (Array.isArray(value)) {
                                    if (value.length > 0 && value[0] instanceof ZOHOCRMSDK.Notifications.Notification) {
                                        for (let event of value) {
                                            //Get the ChannelExpiry of each Notification
                                            console.log("Notification ChannelExpiry: " + event.getChannelExpiry());

                                            //Get the ResourceUri each Notification
                                            console.log("Notification ResourceUri: " + event.getResourceUri());

                                            //Get the ResourceId each Notification
                                            console.log("Notification ResourceId: " + event.getResourceId());

                                            //Get the ResourceName each Notification
                                            console.log("Notification ResourceName: " + event.getResourceName());

                                            //Get the ChannelId each Notification
                                            console.log("Notification ChannelId: " + event.getChannelId());
                                        }
                                    }
                                }
                                else {
                                    console.log(key + " : " + value);
                                }
                            });

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.Notifications.APIException) {
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
                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Notifications.APIException) {
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
     * <h3> Update Specific Information of a Notification </h3>
     * This method is used to update single Notification and print the response.
     */
    public static async updateNotification() {
        //Get instance of NotificationOperations Class
        let notificationOperations: ZOHOCRMSDK.Notifications.NotificationOperations = new ZOHOCRMSDK.Notifications.NotificationOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let bodyWrapper: ZOHOCRMSDK.Notifications.BodyWrapper = new ZOHOCRMSDK.Notifications.BodyWrapper();

        //Array of Notification instances
        let notificationsArray: ZOHOCRMSDK.Notifications.Notification[] = [];

        //Get instance of Notification Class
        let notification1: ZOHOCRMSDK.Notifications.Notification = new ZOHOCRMSDK.Notifications.Notification();

        //Set channel Id of the Notification
        notification1.setChannelId(BigInt("1006800211"));

        let events: string[] = ["Price_Books.delete"];

        //To subscribe based on particular operations on given modules.
        notification1.setEvents(events);

        //To set the expiry time for instant notifications.
        notification1.setChannelExpiry(new Date());

        //To ensure that the notification is sent from Zoho CRM, by sending back the given value in notification URL body.
        //By using this value, user can validate the notifications.
        notification1.setToken("TOKEN_FOR_VERIFICATION_OF_10068002");

        //URL to be notified (POST request)
        notification1.setNotifyUrl("https://www.zohoapis.com");

        //Add Notification instance to the array
        notificationsArray.push(notification1);

        //Set the array to notifications in BodyWrapper instance
        bodyWrapper.setWatch(notificationsArray);

        //Call updateNotification method that takes BodyWrapper instance as parameters
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Notifications.ActionHandler.MasterModel> = await notificationOperations.updateNotification(bodyWrapper);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Notifications.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Notifications.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Notifications.ActionResponse.MasterModel[] = responseObject.getWatch();

                    for (let actionResponse of actionResponses) {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Notifications.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = actionResponse.getDetails();

                            details.forEach((value: any, key: string) => {
                                if (Array.isArray(value)) {
                                    if (value.length > 0 && value[0] instanceof ZOHOCRMSDK.Notifications.Notification) {
                                        for (let event of value) {
                                            //Get the ChannelExpiry of each Notification
                                            console.log("Notification ChannelExpiry: " + event.getChannelExpiry());

                                            //Get the ResourceUri each Notification
                                            console.log("Notification ResourceUri: " + event.getResourceUri());

                                            //Get the ResourceId each Notification
                                            console.log("Notification ResourceId: " + event.getResourceId());

                                            //Get the ResourceName each Notification
                                            console.log("Notification ResourceName: " + event.getResourceName());

                                            //Get the ChannelId each Notification
                                            console.log("Notification ChannelId: " + event.getChannelId());
                                        }
                                    }
                                }
                                else {
                                    console.log(key + " : " + value);
                                }
                            });

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.Notifications.APIException) {
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
                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Notifications.APIException) {
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
     * <h3> Disable Notifications </h3>
     * To stop all the instant notifications enabled by the user for a channel.
     * @param channelIds Specify the unique IDs of the notification channels to be disabled.
     */
    public static async disableNotifications(channelIds: bigint[]) {
        //example
        //channelIds = [10068002n, 10068020n, 10068101n]

        //Get instance of NotificationOperations Class
        let notificationOperations: ZOHOCRMSDK.Notifications.NotificationOperations = new ZOHOCRMSDK.Notifications.NotificationOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        //Possible parameters for disable Notifications operation
        for (let channelId of channelIds) {
            await paramInstance.add(ZOHOCRMSDK.Notifications.DisableNotificationsParam.CHANNEL_IDS, channelId);
        }

        //Call disableNotifications method that takes paramInstance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Notifications.ActionHandler.MasterModel> = await notificationOperations.disableNotifications(paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Notifications.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Notifications.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Notifications.ActionResponse.MasterModel[] = responseObject.getWatch();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Notifications.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Notifications.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Notifications.APIException) {
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
     * <h3> Disable Specific Notifications </h3>
     * This method is used to disable notifications for the specified events in a channel.
     */
    public static async disableNotification() {
        //Get instance of NotificationOperations Class
        let notificationOperations: ZOHOCRMSDK.Notifications.NotificationOperations = new ZOHOCRMSDK.Notifications.NotificationOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let bodyWrapper: ZOHOCRMSDK.Notifications.BodyWrapper = new ZOHOCRMSDK.Notifications.BodyWrapper();

        //Array of Notification instances
        let notificationsArray: ZOHOCRMSDK.Notifications.Notification[] = [];

        //Get instance of Notification Class
        let notification: ZOHOCRMSDK.Notifications.Notification = new ZOHOCRMSDK.Notifications.Notification();

        //Set channel Id of the Notification
        notification.setChannelId(BigInt("10068002"));

        let events: string[] = ["Accounts.edit"];

        //To subscribe based on particular operations on given modules.
        notification.setEvents(events);

        notification.setDeleteevents(true);

        //Add Notification instance to the array
        notificationsArray.push(notification);

        //Set the array to notifications in BodyWrapper instance
        bodyWrapper.setWatch(notificationsArray);

        //Call disableNotification which takes BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Notifications.ActionHandler.MasterModel> = await notificationOperations.disableNotification(bodyWrapper);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Notifications.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Notifications.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Notifications.ActionResponse.MasterModel[] = responseObject.getWatch();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Notifications.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Notifications.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Notifications.APIException) {
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