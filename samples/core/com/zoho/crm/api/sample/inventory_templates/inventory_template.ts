import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class InventoryTemplate {
    static async getInventoryTemplates() {
        let moduleAPIName = "Quotes";

        let sortBy = "modified_time";

        let sortOrder = "desc";

        let category = "created_by_me";

        //Get instance of InventoryTemplatesOperations Class
        let inventoryTemplatesOperations: ZOHOCRMSDK.InventoryTemplates.InventoryTemplatesOperations = new ZOHOCRMSDK.InventoryTemplates.InventoryTemplatesOperations(sortBy, sortOrder, category);

        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        paramInstance.add(ZOHOCRMSDK.InventoryTemplates.GetInventoryTemplatesParam.MODULE, moduleAPIName);

        //Call getInventoryTemplates method that takes paramInstance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.InventoryTemplates.ResponseHandler.MasterModel> = await inventoryTemplatesOperations.getInventoryTemplates(paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseWrapper: ZOHOCRMSDK.InventoryTemplates.ResponseHandler.MasterModel = response.getObject();

            if (responseWrapper instanceof ZOHOCRMSDK.InventoryTemplates.ResponseWrapper) {
                //Get the list of obtained InventoryTemplate instances
                let inventoryTemplates: ZOHOCRMSDK.InventoryTemplates.InventoryTemplate[] = responseWrapper.getInventoryTemplates();

                inventoryTemplates.forEach(inventoryTemplate => {
                    //Get the CreatedTime of each InventoryTemplate
                    console.log("InventoryTemplate CreatedTime: " + inventoryTemplate.getCreatedTime());

                    let module: ZOHOCRMSDK.Modules.Module = inventoryTemplate.getModule();

                    if (module != null) {
                        //Get the Module Name of the InventoryTemplate
                        console.log("InventoryTemplate Module API Name : " + module.getAPIName());

                        //Get the Module Id of the InventoryTemplate
                        console.log("InventoryTemplate Module ID : " + module.getId());
                    }

                    //Get the Type of each InventoryTemplate
                    console.log("InventoryTemplate Type: " + inventoryTemplate.getType());

                    //Get the CreatedBy User instance of each InventoryTemplate
                    let createdBy: ZOHOCRMSDK.Users.User = inventoryTemplate.getCreatedBy();

                    //Check if createdBy is not null
                    if (createdBy != null) {
                        //Get the Id of the CreatedBy User
                        console.log("InventoryTemplate Created By User-ID: " + createdBy.getId());

                        //Get the Name of the CreatedBy User
                        console.log("InventoryTemplate Created By User-Name: " + createdBy.getName());
                    }

                    //Get the ModifiedTime of each InventoryTemplate
                    console.log("InventoryTemplate ModifiedTime: " + inventoryTemplate.getModifiedTime());

                    //Get the Folder instance of each InventoryTemplate
                    let folder: ZOHOCRMSDK.InventoryTemplates.InventoryTemplate = inventoryTemplate.getFolder();

                    //Check if folder is not null
                    if (folder != null) {
                        //Get the Id of the Folder
                        console.log("InventoryTemplate Folder Id: " + folder.getId());

                        //Get the Name of the Folder
                        console.log("InventoryTemplate Folder Name: " + folder.getName());
                    }

                    //Get the LastUsageTime of each InventoryTemplate
                    console.log("InventoryTemplate LastUsageTime: " + inventoryTemplate.getLastUsageTime());

                    // Get the Associated of each InventoryTemplate
                    console.log("InventoryTemplate Associated: " + inventoryTemplate.getAssociated());

                    //Get the name of each InventoryTemplate
                    console.log("InventoryTemplate Name: " + inventoryTemplate.getName());

                    //Get the modifiedBy User instance of each InventoryTemplate
                    let modifiedBy: ZOHOCRMSDK.Users.User = inventoryTemplate.getModifiedBy();

                    //Check if modifiedBy is not null
                    if (modifiedBy != null) {
                        //Get the ID of the ModifiedBy User
                        console.log("InventoryTemplate Modified By User-ID: " + modifiedBy.getId());

                        //Get the Name of the CreatedBy User
                        console.log("InventoryTemplate Modified By User-Name: " + modifiedBy.getName());
                    }

                    //Get the ID of each InventoryTemplate
                    console.log("InventoryTemplate ID: " + inventoryTemplate.getId());

                    //Get the EditorMode each InventoryTemplate
                    console.log("InventoryTemplate EditorMode: " + inventoryTemplate.getEditorMode());

                    console.log("InventoryTemplate Content: " + inventoryTemplate.getContent());

                    // Get the Description of each InventoryTemplate
                    console.log("InventoryTemplate Description: " + inventoryTemplate.getDescription());

                    //Get the Favorite of each InventoryTemplate
                    console.log("InventoryTemplate Favorite: " + inventoryTemplate.getFavorite());

                    // Get the Subject of each InventoryTemplate
                    console.log("InventoryTemplate Subject: " + inventoryTemplate.getSubject());
                });

                let info: ZOHOCRMSDK.Records.Info = responseWrapper.getInfo();

                console.log("InventoryTemplate Info PerPage : " + info.getPerPage());

                console.log("InventoryTemplate Info Count : " + info.getCount());

                console.log("InventoryTemplate Info Page : " + info.getPage());

                console.log("InventoryTemplate Info MoreRecords : " + info.getMoreRecords());
            }
            //Check if the request returned an exception
            else if (responseWrapper instanceof ZOHOCRMSDK.InventoryTemplates.APIException) {
                //Get the Status
                console.log("Status: " + responseWrapper.getStatus().getValue());

                //Get the Code
                console.log("Code: " + responseWrapper.getCode().getValue());

                console.log("Details");

                //Get the details map
                let details = responseWrapper.getDetails();

                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }

                //Get the Message
                console.log("Message: " + responseWrapper.getMessage().getValue());
            }
        }
    }

    static async getInventoryTemplateById(Id: bigint) {
        let sortBy: string = "modified_time";

        let sortOrder: string = "desc";

        let category: string = "created_by_me";

        //Get instance of InventoryTemplatesOperations Class
        let inventoryTemplatesOperations: ZOHOCRMSDK.InventoryTemplates.InventoryTemplatesOperations = new ZOHOCRMSDK.InventoryTemplates.InventoryTemplatesOperations(sortBy, sortOrder, category);

        //Call getInventoryTemplateById method that takes Id as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.InventoryTemplates.ResponseHandler.MasterModel> = await inventoryTemplatesOperations.getInventoryTemplateById(Id);

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseWrapper: ZOHOCRMSDK.InventoryTemplates.ResponseHandler.MasterModel = response.getObject();

            if (responseWrapper instanceof ZOHOCRMSDK.InventoryTemplates.ResponseWrapper) {
                //Get the list of obtained InventoryTemplate instances
                let inventoryTemplates: ZOHOCRMSDK.InventoryTemplates.InventoryTemplate[] = responseWrapper.getInventoryTemplates();

                inventoryTemplates.forEach(inventoryTemplate => {
                    //Get the CreatedTime of each InventoryTemplate
                    console.log("InventoryTemplate CreatedTime: " + inventoryTemplate.getCreatedTime());

                    let module: ZOHOCRMSDK.Modules.Module = inventoryTemplate.getModule();

                    if (module != null) {
                        //Get the Module Name of the InventoryTemplate
                        console.log("InventoryTemplate Module API Name : " + module.getAPIName());

                        //Get the Module Id of the InventoryTemplate
                        console.log("InventoryTemplate Module ID : " + module.getId());
                    }

                    //Get the Type of each InventoryTemplate
                    console.log("InventoryTemplate Type: " + inventoryTemplate.getType());

                    //Get the CreatedBy User instance of each InventoryTemplate
                    let createdBy: ZOHOCRMSDK.Users.User = inventoryTemplate.getCreatedBy();

                    //Check if createdBy is not null
                    if (createdBy != null) {
                        //Get the Id of the CreatedBy User
                        console.log("InventoryTemplate Created By User-ID: " + createdBy.getId());

                        //Get the Name of the CreatedBy User
                        console.log("InventoryTemplate Created By User-Name: " + createdBy.getName());
                    }

                    //Get the ModifiedTime of each InventoryTemplate
                    console.log("InventoryTemplate ModifiedTime: " + inventoryTemplate.getModifiedTime());

                    //Get the Folder instance of each InventoryTemplate
                    let folder: ZOHOCRMSDK.InventoryTemplates.InventoryTemplate = inventoryTemplate.getFolder();

                    //Check if folder is not null
                    if (folder != null) {
                        //Get the Id of the Folder
                        console.log("InventoryTemplate Folder Id: " + folder.getId());

                        //Get the Name of the Folder
                        console.log("InventoryTemplate Folder Name: " + folder.getName());
                    }

                    //Get the LastUsageTime of each InventoryTemplate
                    console.log("InventoryTemplate LastUsageTime: " + inventoryTemplate.getLastUsageTime());

                    // Get the Associated of each InventoryTemplate
                    console.log("InventoryTemplate Associated: " + inventoryTemplate.getAssociated());

                    //Get the name of each InventoryTemplate
                    console.log("InventoryTemplate Name: " + inventoryTemplate.getName());

                    //Get the modifiedBy User instance of each InventoryTemplate
                    let modifiedBy: ZOHOCRMSDK.Users.User = inventoryTemplate.getModifiedBy();

                    //Check if modifiedBy is not null
                    if (modifiedBy != null) {
                        //Get the ID of the ModifiedBy User
                        console.log("InventoryTemplate Modified By User-ID: " + modifiedBy.getId());

                        //Get the Name of the CreatedBy User
                        console.log("InventoryTemplate Modified By User-Name: " + modifiedBy.getName());
                    }

                    //Get the ID of each InventoryTemplate
                    console.log("InventoryTemplate ID: " + inventoryTemplate.getId());

                    //Get the EditorMode each InventoryTemplate
                    console.log("InventoryTemplate EditorMode: " + inventoryTemplate.getEditorMode());

                    console.log("InventoryTemplate Content: " + inventoryTemplate.getContent());

                    // Get the Description of each InventoryTemplate
                    console.log("InventoryTemplate Description: " + inventoryTemplate.getDescription());

                    //Get the Favorite of each InventoryTemplate
                    console.log("InventoryTemplate Favorite: " + inventoryTemplate.getFavorite());

                    // Get the Subject of each InventoryTemplate
                    console.log("InventoryTemplate Subject: " + inventoryTemplate.getSubject());
                });
            }
            //Check if the request returned an exception
            else if (responseWrapper instanceof ZOHOCRMSDK.InventoryTemplates.APIException) {
                //Get the Status
                console.log("Status: " + responseWrapper.getStatus().getValue());

                //Get the Code
                console.log("Code: " + responseWrapper.getCode().getValue());

                console.log("Details");

                //Get the details map
                let details = responseWrapper.getDetails();

                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }

                //Get the Message
                console.log("Message: " + responseWrapper.getMessage().getValue());
            }
        }
    }
}