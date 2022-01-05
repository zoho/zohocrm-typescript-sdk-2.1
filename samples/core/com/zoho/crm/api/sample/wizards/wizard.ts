import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class Wizard {
    public static async getWizards() {
        //Get instance of ZOHOCRMSDK.Wizards.WizardsOperations Class
        let wizardsOperations: ZOHOCRMSDK.Wizards.WizardsOperations = new ZOHOCRMSDK.Wizards.WizardsOperations();

        //Call getWizards method
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Wizards.ResponseHandler.MasterModel> = await wizardsOperations.getWizards();

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Wizards.ResponseHandler.MasterModel = response.getObject();

            if (responseObject instanceof ZOHOCRMSDK.Wizards.ResponseWrapper) {
                //Get the list of obtained Wizard instances
                let wizards: ZOHOCRMSDK.Wizards.Wizard[] = responseObject.getWizards();

                wizards.forEach(wizard => {
                    //Get the CreatedTime of each Wizard
                    console.log("Wizard CreatedTime: " + wizard.getCreatedTime());

                    //Get the PermissionType of each Wizard
                    console.log("Wizard ModifiedTime: " + wizard.getModifiedTime());

                    //Get the manager User instance of each Wizard
                    let module: ZOHOCRMSDK.Modules.Module = wizard.getModule();

                    //Check if manager is not null
                    if (module != null) {
                        //Get the Name of the Manager
                        console.log("Wizard Module APIName: " + module.getAPIName());

                        //Get the ID of the Manager
                        console.log("Wizard Module Id: " + module.getId());
                    }

                    //Get the Name of each Wizard
                    console.log("Wizard Name: " + wizard.getName());

                    //Get the modifiedBy User instance of each Wizard
                    let modifiedBy: ZOHOCRMSDK.Users.User = wizard.getModifiedBy();

                    //Check if modifiedBy is not null
                    if (modifiedBy != null) {
                        //Get the Name of the modifiedBy User
                        console.log("Wizard Modified By User-Name: " + modifiedBy.getName());

                        //Get the ID of the modifiedBy User
                        console.log("Wizard Modified By User-ID: " + modifiedBy.getId());
                    }

                    //Get the array of Profile instance each Wizard
                    let profiles: ZOHOCRMSDK.Profiles.Profile[] = wizard.getProfiles();

                    //Check if profiles is not null
                    if (profiles != null) {
                        profiles.forEach(profile => {
                            //Get the Name of each Profile
                            console.log("Wizard Profile Name: " + profile.getName());

                            //Get the ID of each Profile
                            console.log("Wizard Profile ID: " + profile.getId());
                        });
                    }

                    //Get the Active of each Wizard
                    console.log("Wizard Active: " + wizard.getActive());

                    //Get the array of Container instance each Wizard
                    let containers: ZOHOCRMSDK.Wizards.Container[] = wizard.getContainers();

                    //Check if containers is not null
                    if (containers != null) {
                        containers.forEach(container => {
                            //Get the array of Layout instance each Wizard
                            let layout: ZOHOCRMSDK.Layouts.Layout = container.getLayout();

                            //Check if layout is not null
                            if (layout != null) {
                                //Get the Name of Layout
                                console.log("Wizard Container Layout Name: " + layout.getName());

                                //Get the ID of Layout
                                console.log("Wizard Container Layout ID: " + layout.getId());
                            }

                            //Get the ID of each Container
                            console.log("Wizard Container ID: " + container.getId());
                        });
                    }

                    //Get the ID of each Wizard
                    console.log("Wizard ID: " + wizard.getId());

                    //Get the createdBy User instance of each Wizard
                    let createdBy: ZOHOCRMSDK.Users.User = wizard.getCreatedBy();

                    //Check if createdBy is not null
                    if (createdBy != null) {
                        //Get the Name of the createdBy Wizard
                        console.log("Wizard Created By User-Name: " + createdBy.getName());

                        //Get the ID of the createdBy Wizard
                        console.log("Wizard Created By User-ID: " + createdBy.getId());
                    }
                });
            }
            //Check if the request returned an exception
            else if (responseObject instanceof ZOHOCRMSDK.Wizards.APIException) {
                //Get the Status
                console.log("Status: "+ responseObject.getStatus().getValue());

                //Get the Code
                console.log("Code: "+ responseObject.getCode().getValue());

                console.log("Details: ");

                //Get the details map
                let details = responseObject.getDetails();

                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }

                //Get the Message
                console.log("Message: "+ responseObject.getMessage().getValue());
            }
        }
    }

    public static async getWizardById(wizardId: bigint, layoutId: string) {
        //Get instance of ZOHOCRMSDK.Wizards.WizardsOperations Class
        let wizardsOperations = new ZOHOCRMSDK.Wizards.WizardsOperations();

        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        await paramInstance.add(ZOHOCRMSDK.Wizards.GetWizardbyIDParam.LAYOUT_ID, layoutId);

        //Call getWizardById method that takes wizardId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Wizards.ResponseHandler.MasterModel> = await wizardsOperations.getWizardById(wizardId, paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Wizards.ResponseHandler.MasterModel = response.getObject();

            if (responseObject instanceof ZOHOCRMSDK.Wizards.ResponseWrapper) {
                //Get the list of obtained Wizard instances
                let wizards: ZOHOCRMSDK.Wizards.Wizard[] = responseObject.getWizards();

                wizards.forEach(wizard => {
                    //Get the CreatedTime of each Wizard
                    console.log("Wizard CreatedTime: " + wizard.getCreatedTime());

                    //Get the PermissionType of each Wizard
                    console.log("Wizard ModifiedTime: " + wizard.getModifiedTime());

                    //Get the manager User instance of each Wizard
                    let module: ZOHOCRMSDK.Modules.Module = wizard.getModule();

                    //Check if manager is not null
                    if (module != null) {
                        //Get the Name of the Manager
                        console.log("Wizard Module APIName: " + module.getAPIName());

                        //Get the ID of the Manager
                        console.log("Wizard Module Id: " + module.getId());
                    }

                    //Get the Name of each Wizard
                    console.log("Wizard Name: " + wizard.getName());

                    //Get the modifiedBy User instance of each Wizard
                    let modifiedBy: ZOHOCRMSDK.Users.User = wizard.getModifiedBy();

                    //Check if modifiedBy is not null
                    if (modifiedBy != null) {
                        //Get the Name of the modifiedBy User
                        console.log("Wizard Modified By User-Name: " + modifiedBy.getName());

                        //Get the ID of the modifiedBy User
                        console.log("Wizard Modified By User-ID: " + modifiedBy.getId());
                    }

                    //Get the array of Profile instance each Wizard
                    let profiles: ZOHOCRMSDK.Profiles.Profile[] = wizard.getProfiles();

                    //Check if profiles is not null
                    if (profiles != null) {
                        profiles.forEach(profile => {
                            //Get the Name of each Profile
                            console.log("Wizard Profile Name: " + profile.getName());

                            //Get the ID of each Profile
                            console.log("Wizard Profile ID: " + profile.getId());
                        });
                    }

                    //Get the Active of each Wizard
                    console.log("Wizard Active: " + wizard.getActive());

                    //Get the array of Container instance each Wizard
                    let containers: ZOHOCRMSDK.Wizards.Container[] = wizard.getContainers();

                    //Check if containers is not null
                    if (containers != null) {
                        containers.forEach(container => {
                            //Get the array of Layout instance each Wizard
                            let layout: ZOHOCRMSDK.Layouts.Layout = container.getLayout();

                            //Check if layout is not null
                            if (layout != null) {
                                //Get the Name of Layout
                                console.log("Wizard Container Layout Name: " + layout.getName());

                                //Get the ID of Layout
                                console.log("Wizard Container Layout ID: " + layout.getId());
                            }

                            let chartData: ZOHOCRMSDK.Wizards.ChartData = container.getChartData();

                            if (chartData != null) {
                                let nodes: ZOHOCRMSDK.Wizards.Node[] = chartData.getNodes();

                                if (nodes != null) {
                                    nodes.forEach(async node => {
                                        console.log("Wizard Container ChartData Node PosY: " + node.getPosY());

                                        console.log("Wizard Container ChartData Node PosX: " + node.getPosX());

                                        console.log("Wizard Container ChartData Node StartNode: " + node.getStartNode());

                                        let screen: ZOHOCRMSDK.Wizards.Screen = await node.getScreen();

                                        if (screen != null) {
                                            console.log("Wizard Container ChartData Node Screen DisplayLabel: " + screen.getDisplayLabel());

                                            console.log("Wizard Container ChartData Node Screen ID: " + screen.getId());
                                        }
                                    });
                                }

                                let connections: ZOHOCRMSDK.Wizards.Connection[] = chartData.getConnections();

                                if (connections != null) {
                                    connections.forEach(async connection => {
                                        let sourceButton: ZOHOCRMSDK.Wizards.Button = connection.getSourceButton();

                                        if (sourceButton != null) {
                                            await this.printButton(sourceButton);
                                        }

                                        let targetScreen: ZOHOCRMSDK.Wizards.Screen = connection.getTargetScreen();

                                        if (targetScreen != null) {
                                            await this.printScreen(targetScreen);
                                        }
                                    });
                                }

                                console.log("Wizard Container ChartData CanvasWidth: " + chartData.getCanvasWidth());

                                console.log("Wizard Container ChartData CanvasHeight: " + chartData.getCanvasHeight());
                            }

                            let screens: ZOHOCRMSDK.Wizards.Screen[] = container.getScreens();

                            if (screens != null) {
                                screens.forEach(async screen => {
                                    await this.printScreen(screen);
                                });
                            }

                            //Get the ID of each Container
                            console.log("Wizard Container ID: " + container.getId());
                        });
                    }

                    //Get the ID of each Wizard
                    console.log("Wizard ID: " + wizard.getId());

                    //Get the createdBy User instance of each Wizard
                    let createdBy: ZOHOCRMSDK.Users.User = wizard.getCreatedBy();

                    //Check if createdBy is not null
                    if (createdBy != null) {
                        //Get the Name of the createdBy Wizard
                        console.log("Wizard Created By User-Name: " + createdBy.getName());

                        //Get the ID of the createdBy Wizard
                        console.log("Wizard Created By User-ID: " + createdBy.getId());
                    }
                });
            }
            //Check if the request returned an exception
            else if (responseObject instanceof ZOHOCRMSDK.Wizards.APIException) {
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

    static async printScreen(screen: ZOHOCRMSDK.Wizards.Screen) {
        console.log("Screen Id: " + screen.getId());

        console.log("Screen DisplayLabel: " + screen.getDisplayLabel());

        let segments: ZOHOCRMSDK.Wizards.Segment[] = screen.getSegments();

        if (segments != null) {
            segments.forEach(async segment => {
                await this.printSegment(segment);
            });
        }
    }

    static async printSegment(segment: ZOHOCRMSDK.Wizards.Segment) {
        console.log("Segment Id: " + segment.getId());

        console.log("Segment SequenceNumber: " + segment.getSequenceNumber());

        console.log("Segment DisplayLabel: " + segment.getDisplayLabel());

        console.log("Segment Type: " + segment.getType());

        console.log("Segment ColumnCount: " + segment.getColumnCount());

        let fields: ZOHOCRMSDK.Fields.Field[] = segment.getFields();

        if (fields != null) {
            fields.forEach(field => {
                console.log("Segment Field SequenceNumber: " + field.getSequenceNumber());

                console.log("Segment Field APIName: " + field.getAPIName());

                console.log("Segment Field Id: " + field.getId());
            });
        }

        let buttons: ZOHOCRMSDK.Wizards.Button[] = segment.getButtons();

        if (buttons != null) {
            buttons.forEach(async button => {
                if (button != null) {
                    await this.printButton(button);
                }
            });
        }
    }

    static async printButton(button: ZOHOCRMSDK.Wizards.Button) {
        console.log("Button Id: " + button.getId());

        console.log("Button SequenceNumber: " + button.getSequenceNumber());

        console.log("Button DisplayLabel: " + button.getDisplayLabel());

        let criteria: ZOHOCRMSDK.CustomViews.Criteria = button.getCriteria();

        //Check if criteria is not null
        if (criteria != null) {
            await this.printCriteria(criteria);
        }

        let targetScreen: ZOHOCRMSDK.Wizards.Screen = button.getTargetScreen();

        if (targetScreen != null) {
            console.log("Button TargetScreen DisplayLabel: " + targetScreen.getDisplayLabel());

            console.log("Button TargetScreen Id: " + targetScreen.getId());
        }

        console.log("Button Type: " + button.getType());

        console.log("Button Color: " + button.getColor());

        console.log("Button Shape: " + button.getShape());

        console.log("Button BackgroundColor: " + button.getBackgroundColor());

        console.log("Button Visibility: " + button.getVisibility());

        let transition: ZOHOCRMSDK.Wizards.Transition = button.getTransition();

        if (transition != null) {
            console.log("Button Transition Name: " + transition.getName());

            console.log("Button Transition Id: " + transition.getId());
        }
    }

    static async printCriteria(criteria: ZOHOCRMSDK.CustomViews.Criteria) {
        if (criteria.getComparator() != null) {
            //Get the Comparator of the Criteria
            console.log("Criteria Comparator: " + criteria.getComparator().getValue());
        }

        //Get the Field of the Criteria
        let field: ZOHOCRMSDK.Fields.Field = criteria.getField();

        if (field != null) {
            console.log("Criteria Field: " + field.getAPIName());

            console.log("Criteria Field: " + field.getId());
        }

        //Get the Value of the Criteria
        console.log("Criteria Value: " + criteria.getValue());

        // Get the List of Criteria instance of each Criteria
        let criteriaGroup: ZOHOCRMSDK.CustomViews.Criteria[] = criteria.getGroup();

        if (criteriaGroup != null) {
            criteriaGroup.forEach(async criteria1 => {
                this.printCriteria(criteria1);
            });
        }

        if (criteria.getGroupOperator() != null) {
            //Get the Group Operator of the Criteria
            console.log("Criteria Group Operator: " + criteria.getGroupOperator().getValue());
        }
    }
}