import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class Modules {
    /**
     * <h3> Get Modules </h3>
     * This method is used to get metadata about all the modules and print the response.
     */
    public static async getModules() {
        //Get instance of ModulesOperations Class
        let modulesOperations: ZOHOCRMSDK.Modules.ModulesOperations = new ZOHOCRMSDK.Modules.ModulesOperations();

        //Get the instance of HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        //Add header to HeaderMap instance, if necessary
        // await headerInstance.add(ZOHOCRMSDK.Modules.GetModulesHeader.IF_MODIFIED_SINCE, new Date("2020-07-13T12:12:12+05:30"));

        //Call getModules method that takes headerInstance as parameters
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Modules.ResponseHandler.MasterModel> = await modulesOperations.getModules(headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Modules.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received.
                if (responseObject instanceof ZOHOCRMSDK.Modules.ResponseWrapper) {
                    //Get the array of obtained Module instances
                    let modules: ZOHOCRMSDK.Modules.Module[] = responseObject.getModules();

                    modules.forEach(module => {
                        //Get the Name of each Module
                        console.log("Module Name: " + module.getName());

                        //Get the GlobalSearchSupported of each Module
                        console.log("Module GlobalSearchSupported: " + module.getGlobalSearchSupported());

                        //Get the Deletable of each Module
                        console.log("Module Deletable: " + module.getDeletable().toString());

                        //Get the Description of each Module
                        console.log("Module Description: " + module.getDescription());

                        //Get the Creatable of each Module
                        console.log("Module Creatable: " + module.getCreatable().toString());

                        //Get the InventoryTemplateSupported of each Module
                        console.log("Module InventoryTemplateSupported: " + module.getInventoryTemplateSupported());

                        if (module.getModifiedTime() != null) {
                            //Get the ModifiedTime of each Module
                            console.log("Module ModifiedTime: " + module.getModifiedTime());
                        }

                        //Get the PluralLabel of each Module
                        console.log("Module PluralLabel: " + module.getPluralLabel());

                        //Get the PresenceSubMenu of each Module
                        console.log("Module PresenceSubMenu: " + module.getPresenceSubMenu());

                        //Get the TriggersSupported of each Module
                        console.log("Module TriggersSupported: " + module.getTriggersSupported());

                        //Get the Id of each Module
                        console.log("Module Id: " + module.getId().toString());

                        //Get the Visibility of each Module
                        console.log("Module Visibility: " + module.getVisibility());

                        //Get the Convertable of each Module
                        console.log("Module Convertable: " + module.getConvertable().toString());

                        //Get the Editable of each Module
                        console.log("Module Editable: " + module.getEditable().toString());

                        //Get the EmailtemplateSupport of each Module
                        console.log("Module EmailtemplateSupport: " + module.getEmailtemplateSupport());

                        //Get the list of Profile instance each Module
                        let profiles: ZOHOCRMSDK.Profiles.Profile[] = module.getProfiles();

                        //Check if profiles is not null
                        if (profiles != null) {
                            profiles.forEach(profile => {
                                //Get the Name of each Profile
                                console.log("Module Profile Name: " + profile.getName());

                                //Get the Id of each Profile
                                console.log("Module Profile Id: " + profile.getId().toString());
                            });
                        }

                        //Get the FilterSupported of each Module
                        console.log("Module FilterSupported: " + module.getFilterSupported());

                        //Get the ShowAsTab of each Module
                        console.log("Module ShowAsTab: " + module.getShowAsTab());

                        //Get the WebLink of each Module
                        console.log("Module WebLink: " + module.getWebLink());

                        //Get the SequenceNumber of each Module
                        console.log("Module SequenceNumber: " + module.getSequenceNumber());

                        //Get the SingularLabel of each Module
                        console.log("Module SingularLabel: " + module.getSingularLabel());

                        //Get the Viewable of each Module
                        console.log("Module Viewable: " + module.getViewable());

                        //Get the APISupported of each Module
                        console.log("Module APISupported: " + module.getAPISupported());

                        //Get the APIName of each Module
                        console.log("Module APIName: " + module.getAPIName());

                        //Get the QuickCreate of each Module
                        console.log("Module QuickCreate: " + module.getQuickCreate());

                        //Get the modifiedBy User instance of each Module
                        let modifiedBy: ZOHOCRMSDK.Users.User = module.getModifiedBy();

                        //Check if modifiedBy is not null
                        if (modifiedBy != null) {
                            //Get the name of the modifiedBy User
                            console.log("Module Modified By User-Name: " + modifiedBy.getName());

                            //Get the ID of the modifiedBy User
                            console.log("Module Modified By User-ID: " + modifiedBy.getId());
                        }

                        //Get the GeneratedType of each Module
                        console.log("Module GeneratedType: " + module.getGeneratedType().getValue());

                        //Get the FeedsRequired of each Module
                        console.log("Module FeedsRequired: " + module.getFeedsRequired());

                        //Get the ScoringSupported of each Module
                        console.log("Module ScoringSupported: " + module.getScoringSupported());

                        //Get the WebformSupported of each Module
                        console.log("Module WebformSupported: " + module.getWebformSupported());

                        //Get the list of Argument instance each Module
                        let moduleArguments: ZOHOCRMSDK.Modules.Argument[] = module.getArguments();

                        //Check if arguments is not null
                        if (moduleArguments != null) {
                            moduleArguments.forEach(argument => {
                                //Get the Name of each Argument
                                console.log("Module Argument Name: " + argument.getName());

                                //Get the Value of each Argument
                                console.log("Module Argument Value: " + argument.getValue());

                            });
                        }

                        //Get the ModuleName of each Module
                        console.log("Module ModuleName: " + module.getModuleName());

                        //Get the BusinessCardFieldLimit of each Module
                        console.log("Module BusinessCardFieldLimit: " + module.getBusinessCardFieldLimit());

                        //Get the parentModule Module instance of each Module
                        let parentModule: ZOHOCRMSDK.Modules.Module = module.getParentModule();

                        //Check if arguments is not null
                        if (parentModule != null && parentModule.getAPIName() != null) {
                            //Get the Name of Parent Module
                            console.log("Module Parent Module Name: " + parentModule.getAPIName());

                            //Get the Value of Parent Module
                            console.log("Module Parent Module Id: " + parentModule.getId());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Modules.APIException) {
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
     * <h3> Get Module </h3>
     * This method is used to get metadata about single module with it's API Name and print the response.
     * @param moduleAPIName The API Name of the module to obtain metadata
     */
    public static async getModule(moduleAPIName: string) {
        //example
        //let moduleAPIName = "Leads";

        //Get instance of ModulesOperations Class
        let modulesOperations: ZOHOCRMSDK.Modules.ModulesOperations = new ZOHOCRMSDK.Modules.ModulesOperations();

        //Call getModule method that takes moduleAPIName as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Modules.ResponseHandler.MasterModel> = await modulesOperations.getModule(moduleAPIName);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Modules.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received.
                if (responseObject instanceof ZOHOCRMSDK.Modules.ResponseWrapper) {
                    //Get the array of obtained Module instances
                    let modules: ZOHOCRMSDK.Modules.Module[] = responseObject.getModules();

                    modules.forEach(module => {
                        //Get the GlobalSearchSupported of each Module
                        console.log("Module GlobalSearchSupported: " + module.getGlobalSearchSupported());

                        if (module.getKanbanView() != null) {
                            //Get the KanbanView of each Module
                            console.log("Module KanbanView: " + module.getKanbanView().toString());
                        }

                        //Get the Deletable of each Module
                        console.log("Module Deletable: " + module.getDeletable().toString());

                        //Get the Description of each Module
                        console.log("Module Description: " + module.getDescription());

                        //Get the Creatable of each Module
                        console.log("Module Creatable: " + module.getCreatable().toString());

                        if (module.getFilterStatus() != null) {
                            //Get the FilterStatus of each Module
                            console.log("Module FilterStatus: " + module.getFilterStatus().toString());
                        }

                        //Get the InventoryTemplateSupported of each Module
                        console.log("Module InventoryTemplateSupported: " + module.getInventoryTemplateSupported());

                        if (module.getModifiedTime() != null) {
                            //Get the ModifiedTime of each Module
                            console.log("Module ModifiedTime: " + module.getModifiedTime());
                        }

                        //Get the PluralLabel of each Module
                        console.log("Module PluralLabel: " + module.getPluralLabel());

                        //Get the PresenceSubMenu of each Module
                        console.log("Module PresenceSubMenu: " + module.getPresenceSubMenu());

                        //Get the TriggersSupported of each Module
                        console.log("Module TriggersSupported: " + module.getTriggersSupported());

                        //Get the Id of each Module
                        console.log("Module Id: " + module.getId().toString());

                        //Get the RelatedListProperties instance of each Module
                        let relatedListProperties: ZOHOCRMSDK.Modules.RelatedListProperties = module.getRelatedListProperties();

                        //Check if relatedListProperties is not null
                        if (relatedListProperties != null) {
                            //Get the SortBy of RelatedListProperties
                            console.log("Module RelatedListProperties SortBy: " + relatedListProperties.getSortBy());

                            //Get List of fields APIName
                            let fields: string[] = relatedListProperties.getFields();

                            //Check if fields is not null
                            if (fields != null) {
                                fields.forEach(fieldName => {
                                    //Get the Field Name
                                    console.log("Module RelatedListProperties Fields: " + fieldName);
                                });
                            }

                            //Get the SortOrder of RelatedListProperties
                            console.log("Module RelatedListProperties SortOrder: " + relatedListProperties.getSortOrder());
                        }

                        //Get List of properties field APIName
                        let properties: string[] = module.getProperties();

                        //Check if properties is not null
                        if (properties != null) {
                            properties.forEach(fieldName => {
                                //Get the Field Name
                                console.log("Module Properties Fields: " + fieldName);
                            });
                        }

                        //Get the PerPage of each Module
                        console.log("Module PerPage: " + module.getPerPage());

                        //Get the Visibility of each Module
                        console.log("Module Visibility: " + module.getVisibility());

                        //Get the Convertable of each Module
                        console.log("Module Convertable: " + module.getConvertable().toString());

                        //Get the Editable of each Module
                        console.log("Module Editable: " + module.getEditable().toString());

                        //Get the EmailtemplateSupport of each Module
                        console.log("Module EmailtemplateSupport: " + module.getEmailtemplateSupport());

                        //Get the list of Profile instance each Module
                        let profiles: ZOHOCRMSDK.Profiles.Profile[] = module.getProfiles();

                        //Check if profiles is not null
                        if (profiles != null) {
                            profiles.forEach(profile => {
                                //Get the Name of each Profile
                                console.log("Module Profile Name: " + profile.getName());

                                //Get the Id of each Profile
                                console.log("Module Profile Id: " + profile.getId().toString());
                            });
                        }

                        //Get the FilterSupported of each Module
                        console.log("Module FilterSupported: " + module.getFilterSupported());

                        //Get the DisplayField of each Module
                        console.log("Module DisplayField: " + module.getDisplayField());

                        //Get List of SearchLayoutFields APIName
                        let searchLayoutFields: string[] = module.getSearchLayoutFields();

                        //Check if searchLayoutFields is not null
                        if (searchLayoutFields != null) {
                            searchLayoutFields.forEach(fieldName => {
                                //Get the Field Name
                                console.log("Module SearchLayoutFields Fields: " + fieldName);
                            });
                        }

                        if (module.getKanbanViewSupported() != null) {
                            //Get the KanbanViewSupported of each Module
                            console.log("Module KanbanViewSupported: " + module.getKanbanViewSupported());
                        }

                        //Get the ShowAsTab of each Module
                        console.log("Module ShowAsTab: " + module.getShowAsTab());

                        //Get the WebLink of each Module
                        console.log("Module WebLink: " + module.getWebLink());

                        //Get the SequenceNumber of each Module
                        console.log("Module SequenceNumber: " + module.getSequenceNumber());

                        //Get the SingularLabel of each Module
                        console.log("Module SingularLabel: " + module.getSingularLabel());

                        //Get the Viewable of each Module
                        console.log("Module Viewable: " + module.getViewable());

                        //Get the APISupported of each Module
                        console.log("Module APISupported: " + module.getAPISupported());

                        //Get the APIName of each Module
                        console.log("Module APIName: " + module.getAPIName());

                        //Get the QuickCreate of each Module
                        console.log("Module QuickCreate: " + module.getQuickCreate());

                        //Get the modifiedBy User instance of each Module
                        let modifiedBy: ZOHOCRMSDK.Users.User = module.getModifiedBy();

                        //Check if modifiedBy is not null
                        if (modifiedBy != null) {
                            //Get the name of the modifiedBy User
                            console.log("Module Modified By User-Name: " + modifiedBy.getName());

                            //Get the ID of the modifiedBy User
                            console.log("Module Modified By User-ID: " + modifiedBy.getId());
                        }

                        //Get the GeneratedType of each Module
                        console.log("Module GeneratedType: " + module.getGeneratedType());

                        //Get the FeedsRequired of each Module
                        console.log("Module FeedsRequired: " + module.getFeedsRequired());

                        //Get the ScoringSupported of each Module
                        console.log("Module ScoringSupported: " + module.getScoringSupported());

                        //Get the WebformSupported of each Module
                        console.log("Module WebformSupported: " + module.getWebformSupported());

                        //Get the list of Argument instance each Module
                        let moduleArguments: ZOHOCRMSDK.Modules.Argument[] = module.getArguments();

                        //Check if arguments is not null
                        if (moduleArguments != null) {
                            moduleArguments.forEach(argument => {
                                //Get the Name of each Argument
                                console.log("Module Argument Name: " + argument.getName());

                                //Get the Value of each Argument
                                console.log("Module Argument Value: " + argument.getValue());
                            });
                        }

                        //Get the ModuleName of each Module
                        console.log("Module ModuleName: " + module.getModuleName());

                        //Get the BusinessCardFieldLimit of each Module
                        console.log("Module BusinessCardFieldLimit: " + module.getBusinessCardFieldLimit());

                        //Get the CustomView instance of each Module
                        let customView: ZOHOCRMSDK.CustomViews.CustomView = module.getCustomView();

                        //Check if customView is not null
                        if (customView != null) {
                            this.printCustomView(customView);
                        }

                        //Get the parentModule Module instance of each Module
                        let parentModule: ZOHOCRMSDK.Modules.Module = module.getParentModule();

                        //Check if parentModule is not null
                        if (parentModule != null && parentModule.getAPIName() != null) {
                            //Get the Name of Parent Module
                            console.log("Module Parent Module Name: " + parentModule.getAPIName());

                            //Get the Value of Parent Module
                            console.log("Module Parent Module Id: " + parentModule.getId());
                        }

                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Modules.APIException) {
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
     * <h3> Update Module By APIName </h3>
     * This method is used to update module details using module APIName and print the response.
     * @param moduleAPIName The API Name of the module to update
     */
    public static async updateModuleByAPIName(moduleAPIName: string) {
        //example
        //let moduleAPIName = "Leads";

        //Get instance of ModulesOperations Class
        let modulesOperations: ZOHOCRMSDK.Modules.ModulesOperations = new ZOHOCRMSDK.Modules.ModulesOperations();

        let modulesArray: ZOHOCRMSDK.Modules.Module[] = [];

        let profilesArray: ZOHOCRMSDK.Profiles.Profile[] = [];

        //Get instance of Profile Class
        let profile: ZOHOCRMSDK.Profiles.Profile = new ZOHOCRMSDK.Profiles.Profile();

        //To set the Profile Id
        profile.setId(BigInt("3477061026014"));

        //Add Profile instance to the array
        profilesArray.push(profile);

        //Get instance of Module Class
        let module: ZOHOCRMSDK.Modules.Module = new ZOHOCRMSDK.Modules.Module();

        //Set the array to profiles in Module instance
        module.setProfiles(profilesArray);

        //Add the Module instance to array
        modulesArray.push(module);

        //Get instance of BodyWrapper Class which contains the request body
        let request: ZOHOCRMSDK.Modules.BodyWrapper = new ZOHOCRMSDK.Modules.BodyWrapper();

        //Set the array to modules in BodyWrapper instance
        request.setModules(modulesArray);

        //Call updateModuleByAPIName method that takes BodyWrapper instance and moduleAPIName as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Modules.ActionHandler.MasterModel> = await modulesOperations.updateModuleByAPIName(moduleAPIName, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Modules.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Modules.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Modules.ActionResponse.MasterModel[] = responseObject.getModules();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Modules.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Modules.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Modules.APIException) {
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
     * <h3> Update Module By Id </h3>
     * This method is used to update module details using module Id and print the response.
     * @param moduleId The ID of the module to be updated.
     */
    public static async updateModuleById(moduleId: bigint) {
        //example
        //moduleId = 3409643252001n

        //Get instance of ModulesOperations Class
        let modulesOperations: ZOHOCRMSDK.Modules.ModulesOperations = new ZOHOCRMSDK.Modules.ModulesOperations();

        let modulesArray: ZOHOCRMSDK.Modules.Module[] = [];

        let profilesArray: ZOHOCRMSDK.Profiles.Profile[] = [];

        //Get instance of Profile Class
        let profile: ZOHOCRMSDK.Profiles.Profile = new ZOHOCRMSDK.Profiles.Profile();

        //Get instance of Module Class
        let module: ZOHOCRMSDK.Modules.Module = new ZOHOCRMSDK.Modules.Module();

        //To set the Profile Id
        profile.setId(BigInt("3477061026014"));

        profile.setDelete(true);

        //Add the Profile instance to the array.
        profilesArray.push(profile);

        //Set profiles array to profiles in Module instance
        module.setProfiles(profilesArray);

        //Set the API Name to be modified
        module.setAPIName("Test123");

        //Add the Module instance to the array
        modulesArray.push(module);

        //Get instance of BodyWrapper Class that contains the request body
        let request: ZOHOCRMSDK.Modules.BodyWrapper = new ZOHOCRMSDK.Modules.BodyWrapper();

        //Set the array of module Instance to modules in BodyWrapper instance.
        request.setModules(modulesArray);

        //Call updateModuleById method that takes BodyWrapper instance and moduleAPIName as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Modules.ActionHandler.MasterModel> = await modulesOperations.updateModuleById(moduleId, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Modules.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Modules.ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Modules.ActionResponse.MasterModel[] = responseObject.getModules();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Modules.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Modules.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Modules.APIException) {
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

    private static async printCustomView(customView: ZOHOCRMSDK.CustomViews.CustomView) {
        //Get the ID of the CustomView
        console.log("CustomView ID: " + customView.getId());

        //Get the Name of the CustomView
        console.log("CustomView Name: " + customView.getName());

        //Get the DisplayValue of the CustomView
        console.log("CustomView DisplayValue: " + customView.getDisplayValue());

        //Get the SystemName of the CustomView
        console.log("CustomView SystemName: " + customView.getSystemName());

        //Get the Criteria instance of the CustomView
        let criteria: ZOHOCRMSDK.CustomViews.Criteria = customView.getCriteria();

        if (criteria != null && criteria !== undefined) {
            await this.printCriteria(criteria);
        }

        //Get the SortBy of the the CustomView
        console.log("CustomView SortBy: " + customView.getSortBy());

        //Get the Default of the CustomView
        console.log("CustomView Default: " + customView.getDefault());

        //Get the SystemDefined of the CustomView
        console.log("CustomView SystemDefined: " + customView.getSystemDefined());

        //Get the Category of the CustomView
        console.log("CustomView Category: " + customView.getCategory());

        //Get the list of fields in the CustomView
        let fields: ZOHOCRMSDK.Fields.Field[] = customView.getFields();

        if (fields != null && fields !== undefined) {
            fields.forEach(field => {
                console.log("Fields APIName" + field.getAPIName());

                console.log("Fields Id" + field.getId());
            });
        }

        if (customView.getFavorite() != null) {
            //Get the Favorite of the CustomView
            console.log("CustomView Favorite: " + customView.getFavorite());
        }

        if (customView.getSortOrder() != null) {
            //Get the SortOrder of the CustomView
            console.log("CustomView SortOrder: " + customView.getSortOrder());
        }
    }

    private static async printCriteria(criteria: ZOHOCRMSDK.CustomViews.Criteria) {
        if (criteria.getComparator() != null) {
            //Get the Comparator of the Criteria
            console.log("CustomView Criteria Comparator: " + criteria.getComparator().getValue());
        }

        if (criteria.getField() != null) {
            //Get the Field of the Criteria
            console.log("CustomView Criteria Field: " + criteria.getField());
        }

        if (criteria.getValue() != null) {
            //Get the Value of the Criteria
            console.log("CustomView Criteria Value: " + criteria.getValue().toString());
        }

        // Get the List of Criteria instance of each Criteria
        let criteriaGroup: ZOHOCRMSDK.CustomViews.Criteria[] = criteria.getGroup();

        if (criteriaGroup != null) {
            criteriaGroup.forEach(eachCriteria => {
                this.printCriteria(eachCriteria);
            });
        }

        if (criteria.getGroupOperator() != null) {
            //Get the Group Operator of the Criteria
            console.log("CustomView Criteria Group Operator: " + criteria.getGroupOperator().getValue());
        }
    }
}