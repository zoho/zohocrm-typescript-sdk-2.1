import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class PipeLine {
    /**
     * <h3> to Transfer And Delete</h3>
     * This method is used to Transfer And Delete
     * @param {BigInt} layoutId The id of the Layout
     */
    public static async transferAndDelete(layoutId: bigint) {
        //Get instance of PipelineOperations Class
        let pipelineOperations: ZOHOCRMSDK.Pipelines.PipelineOperations = new ZOHOCRMSDK.Pipelines.PipelineOperations(layoutId);

        let transferAndDeleteWrapper: ZOHOCRMSDK.Pipelines.TransferAndDeleteWrapper = new ZOHOCRMSDK.Pipelines.TransferAndDeleteWrapper();

        let transferPipeLine: ZOHOCRMSDK.Pipelines.TransferPipeLine = new ZOHOCRMSDK.Pipelines.TransferPipeLine();

        let pipeline: ZOHOCRMSDK.Pipelines.Pipeline = new ZOHOCRMSDK.Pipelines.Pipeline();

        pipeline.setFrom(BigInt("36523973712004"));

        pipeline.setTo(BigInt("36523973712004"));

        transferPipeLine.setPipeline(pipeline);

        let stage: ZOHOCRMSDK.Pipelines.Stage = new ZOHOCRMSDK.Pipelines.Stage();

        stage.setFrom(BigInt("36523976817"));

        stage.setTo(BigInt("36523976819"));

        transferPipeLine.setStages([stage]);

        transferAndDeleteWrapper.setTransferPipeline([transferPipeLine]);

        //Call transferAndDelete method
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Pipelines.TransferActionHandler.MasterModel> = await pipelineOperations.transferAndDelete(transferAndDeleteWrapper);

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            //Get object from response
            let actionWrapper: ZOHOCRMSDK.Pipelines.TransferActionHandler.MasterModel = response.getObject();

            if (actionWrapper instanceof ZOHOCRMSDK.Pipelines.TransferActionWrapper) {
                //Get the list of obtained action responses
                let actionResponses: ZOHOCRMSDK.Pipelines.ActionResponse.MasterModel[] = actionWrapper.getTransferPipeline();

                actionResponses.forEach(actionResponse => {
                    //Check if the request is successful
                    if (actionResponse instanceof ZOHOCRMSDK.Pipelines.SuccessResponse) {
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
                    else if (actionResponse instanceof ZOHOCRMSDK.Pipelines.APIException) {
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
            else if (actionWrapper instanceof ZOHOCRMSDK.Pipelines.APIException) {
                //Get the Status
                console.log("Status: " + actionWrapper.getStatus().getValue());

                //Get the Code
                console.log("Code: " + actionWrapper.getCode().getValue());

                console.log("Details");

                //Get the details map
                let details = actionWrapper.getDetails();

                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }

                //Get the Message
                console.log("Message: " + actionWrapper.getMessage().getValue());
            }
        }
    }

    /**
     * <h3> Get Pipelines</h3>
     * This method is used to get Pipelines
     * @param {BigInt} layoutId The id of the Layout
     * @returns 
     */
    static async getPipelines(layoutId: bigint) {
        //Get instance of PipelineOperations Class
        let pipelineOperations: ZOHOCRMSDK.Pipelines.PipelineOperations = new ZOHOCRMSDK.Pipelines.PipelineOperations(layoutId);

        //Call getPipelines method
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Pipelines.ResponseHandler.MasterModel> = await pipelineOperations.getPipelines();

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseWrapper: ZOHOCRMSDK.Pipelines.ResponseHandler.MasterModel = response.getObject();

            if (responseWrapper instanceof ZOHOCRMSDK.Pipelines.ResponseWrapper) {
                //Get the list of obtained Pipeline instances
                let pipelines: ZOHOCRMSDK.Pipelines.Pipeline[] = responseWrapper.getPipeline();

                pipelines.forEach(pipeline => {
                    //Get the Id of each Pipeline
                    console.log("Pipeline ID: " + pipeline.getId());

                    //Get the Default of each Pipeline
                    console.log("Pipeline Default: " + pipeline.getDefault());

                    //Get the DisplayValue of each Pipeline
                    console.log("Pipeline DisplayValue: " + pipeline.getDisplayValue());

                    //Get the ActualValue of each Pipeline
                    console.log("Pipeline ActualValue: " + pipeline.getActualValue());

                    //Get the child available of each Pipeline
                    console.log("Pipeline ChildAvailable  : " + pipeline.getChildAvailable());

                    let parent: ZOHOCRMSDK.Pipelines.Pipeline = pipeline.getParent();

                    if (parent != null) {
                        //Get the ID of  parent
                        console.log("Pipeline parent ID: " + parent.getId());
                    }

                    let maps: ZOHOCRMSDK.Pipelines.PickListValue[] = pipeline.getMaps();

                    if (maps != null) {
                        maps.forEach(map => {
                            //Get the Maps DisplayValue of each Pipeline
                            console.log("Pipeline Maps DisplayValue: " + map.getDisplayValue());

                            //Get the Maps SequenceNumber of each Pipeline
                            console.log("Pipeline Maps SequenceNumber: " + map.getSequenceNumber());

                            let forecastCategory: ZOHOCRMSDK.Pipelines.ForecastCategory = map.getForecastCategory();

                            if (forecastCategory != null) {
                                //Get the Maps ForecastCategory Name of each Pipeline
                                console.log("Pipeline Maps ForecastCategory Name: " + forecastCategory.getName());

                                //Get the Maps ForecastCategory Id of each Pipeline
                                console.log("Pipeline Maps ForecastCategory Id: " + forecastCategory.getId());
                            }

                            //Get the Maps ActualValue of each Pipeline
                            console.log("Pipeline Maps ActualValue: " + map.getActualValue());

                            //Get the Maps Id of each Pipeline
                            console.log("Pipeline Maps Id: " + map.getId());

                            //Get the Maps ForecastType of each Pipeline
                            console.log("Pipeline Maps ForecastType: " + map.getForecastType());

                            //Get PickListValue delete
                            console.log("PickListValue Delete" + map.getDelete());
                        });
                    }
                });
            }
            //Check if the request returned an exception
            else if (responseWrapper instanceof ZOHOCRMSDK.Pipelines.APIException) {
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

    /**
     * <h3> create Pipelines</h3>
     * This method is used to create Pipelines
     * @param {BigInt} layoutId The id of the Layout
     */
    static async createPipelines(layoutId: bigint) {
        //Get instance of PipelineOperations Class
        let pipelineOperations: ZOHOCRMSDK.Pipelines.PipelineOperations = new ZOHOCRMSDK.Pipelines.PipelineOperations(layoutId);

        let pipeline: ZOHOCRMSDK.Pipelines.Pipeline = new ZOHOCRMSDK.Pipelines.Pipeline();

        pipeline.setDisplayValue("Adfasfs23d3ew122wqw");

        let pickList: ZOHOCRMSDK.Pipelines.PickListValue = new ZOHOCRMSDK.Pipelines.PickListValue();

        pickList.setSequenceNumber(1);

        pickList.setId(BigInt("3477061006813"));

        pickList.setDisplayValue("Closed Won");

        pipeline.setMaps([pickList]);

        let body: ZOHOCRMSDK.Pipelines.BodyWrapper = new ZOHOCRMSDK.Pipelines.BodyWrapper();

        body.setPipeline([pipeline]);

        //Call createPipelines method that takes BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Pipelines.ActionHandler.MasterModel> = await pipelineOperations.createPipelines(body);

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            //Get object from response
            let actionWrapper: ZOHOCRMSDK.Pipelines.ActionHandler.MasterModel = response.getObject();

            if (actionWrapper instanceof ZOHOCRMSDK.Pipelines.ActionWrapper) {
                //Get the list of obtained action responses
                let actionResponses: ZOHOCRMSDK.Pipelines.ActionResponse.MasterModel[] = actionWrapper.getPipeline();

                actionResponses.forEach(actionResponse => {
                    //Check if the request is successful
                    if (actionResponse instanceof ZOHOCRMSDK.Pipelines.SuccessResponse) {
                        //Get the Status
                        console.log("Status: " + actionResponse.getStatus().getValue());

                        //Get the Code
                        console.log("Code: " + actionResponse.getCode().getValue());

                        console.log("Details: ");

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
                    else if (actionResponse instanceof ZOHOCRMSDK.Pipelines.APIException) {
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
            else if (actionWrapper instanceof ZOHOCRMSDK.Pipelines.APIException) {
                //Get the Status
                console.log("Status: " + actionWrapper.getStatus().getValue());

                //Get the Code
                console.log("Code: " + actionWrapper.getCode().getValue());

                console.log("Details");

                //Get the details map
                let details = actionWrapper.getDetails();

                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }

                //Get the Message
                console.log("Message: " + actionWrapper.getMessage().getValue());
            }
        }
    }

    /**
     * <h3> Update Pipelines</h3>
     * This method is used to update Pipelines
     * @param {BigInt} layoutId The id of the Layout
     */
    static async updatePipelines(layoutId: bigint) {
        //Get instance of PipelineOperations Class
        let pipelineOperations: ZOHOCRMSDK.Pipelines.PipelineOperations = new ZOHOCRMSDK.Pipelines.PipelineOperations(layoutId);

        let pipeline: ZOHOCRMSDK.Pipelines.Pipeline = new ZOHOCRMSDK.Pipelines.Pipeline();

        pipeline.setId(BigInt("347706113192001"));

        let pickList: ZOHOCRMSDK.Pipelines.PickListValue = new ZOHOCRMSDK.Pipelines.PickListValue();

        pickList.setId(BigInt("3477061006813"));

        pickList.setSequenceNumber(1);

        pipeline.setMaps([pickList]);

        let body: ZOHOCRMSDK.Pipelines.BodyWrapper = new ZOHOCRMSDK.Pipelines.BodyWrapper();

        body.setPipeline([pipeline]);

        //Call updatePipelines method that takes BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Pipelines.ActionHandler.MasterModel> = await pipelineOperations.updatePipelines(body);

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            //Get object from response
            let actionWrapper: ZOHOCRMSDK.Pipelines.ActionHandler.MasterModel = response.getObject();

            if (actionWrapper instanceof ZOHOCRMSDK.Pipelines.ActionWrapper) {
                //Get the list of obtained action responses
                let actionResponses = actionWrapper.getPipeline();

                actionResponses.forEach(actionResponse => {
                    //Check if the request is successful
                    if (actionResponse instanceof ZOHOCRMSDK.Pipelines.SuccessResponse) {
                        //Get the Status
                        console.log("Status: " + actionResponse.getStatus().getValue());

                        //Get the Code
                        console.log("Code: " + actionResponse.getCode().getValue());

                        console.log("Details: ");

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
                    else if (actionResponse instanceof ZOHOCRMSDK.Pipelines.APIException) {
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
            else if (actionWrapper instanceof ZOHOCRMSDK.Pipelines.APIException) {
                //Get the Status
                console.log("Status: " + actionWrapper.getStatus().getValue());

                //Get the Code
                console.log("Code: " + actionWrapper.getCode().getValue());

                console.log("Details");

                //Get the details map
                let details = actionWrapper.getDetails();

                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }

                //Get the Message
                console.log("Message: " + actionWrapper.getMessage().getValue());
            }
        }
    }

    /**
     * <h3> Get Pipeline</h3>
     * This method is used to get single Pipeline
     * @param {BigInt} layoutId The id of the Layout
     * @param {BigInt} pipelineId The id of the pipeline
     * @returns 
     */
    static async getPipeline(layoutId: bigint, pipelineId: bigint) {
        //Get instance of PipelineOperations Class
        let pipelineOperations: ZOHOCRMSDK.Pipelines.PipelineOperations = new ZOHOCRMSDK.Pipelines.PipelineOperations(layoutId);

        //Call getPipeline method
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Pipelines.ResponseHandler.MasterModel> = await pipelineOperations.getPipeline(pipelineId);

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseWrapper: ZOHOCRMSDK.Pipelines.ResponseHandler.MasterModel = response.getObject();

            if (responseWrapper instanceof ZOHOCRMSDK.Pipelines.ResponseWrapper) {
                //Get the list of obtained Pipeline instances
                let pipelines: ZOHOCRMSDK.Pipelines.Pipeline[] = responseWrapper.getPipeline();

                pipelines.forEach(pipeline => {
                    //Get the Id of each Pipeline
                    console.log("Pipeline Id: " + pipeline.getId());

                    //Get the DisplayValue of each Pipeline
                    console.log("Pipeline DisplayValue: " + pipeline.getDisplayValue());

                    //Get the ActualValue of each Pipeline
                    console.log("Pipeline Maps ActualValue: " + pipeline.getActualValue());

                    //Get the Default of each Pipeline
                    console.log("Pipeline Default: " + pipeline.getDefault());

                    //Get the child available of each Pipeline
                    console.log("Pipeline ChildAvailable  : " + pipeline.getChildAvailable());

                    let parent: ZOHOCRMSDK.Pipelines.Pipeline = pipeline.getParent();

                    if (parent != null) {
                        //Get the ID of  parent
                        console.log("Pipeline parent ID: " + parent.getId());
                    }

                    let maps: ZOHOCRMSDK.Pipelines.PickListValue[] = pipeline.getMaps();

                    if (maps != null) {
                        maps.forEach(map => {
                            //Get the Maps ActualValue of each Pipeline
                            console.log("Pipeline Maps ActualValue: " + map.getActualValue());

                            //Get PickListValue delete
                            console.log("PickListValue Delete" + map.getDelete());

                            //Get the Maps DisplayValue of each Pipeline
                            console.log("Pipeline Maps DisplayValue: " + map.getDisplayValue());

                            let forecastCategory: ZOHOCRMSDK.Pipelines.ForecastCategory = map.getForecastCategory();

                            if (forecastCategory != null) {
                                //Get the Maps ForecastCategory Name of each Pipeline
                                console.log("Pipeline Maps ForecastCategory Name: " + forecastCategory.getName());

                                //Get the Maps ForecastCategory Id of each Pipeline
                                console.log("Pipeline Maps ForecastCategory Id: " + forecastCategory.getId());
                            }

                            //Get the Maps ForecastType of each Pipeline
                            console.log("Pipeline Maps ForecastType: " + map.getForecastType());

                            //Get the Maps Id of each Pipeline
                            console.log("Pipeline Maps Id: " + map.getId());

                            //Get the Maps SequenceNumber of each Pipeline
                            console.log("Pipeline Maps SequenceNumber: " + map.getSequenceNumber());
                        });
                    }
                });
            }
            //Check if the request returned an exception
            else if (responseWrapper instanceof ZOHOCRMSDK.Pipelines.APIException) {
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

    /**
     * <h3> Update Pipeline</h3>
     * This method is used to update Pipeline
     * @param {BigInt} layoutId The id of the Layout
     * @param {BigInt} pipelineId The id of the pipeline
     */
    static async updatePipeline(layoutId: bigint, pipelineId: bigint) {
        //Get instance of PipelineOperations Class
        let pipelineOperations: ZOHOCRMSDK.Pipelines.PipelineOperations = new ZOHOCRMSDK.Pipelines.PipelineOperations(layoutId);

        let pipeline: ZOHOCRMSDK.Pipelines.Pipeline = new ZOHOCRMSDK.Pipelines.Pipeline();

        pipeline.setDisplayValue("Qualification");

        let pickList = new ZOHOCRMSDK.Pipelines.PickListValue();

        pickList.setId(BigInt(34770616801));

        pickList.setSequenceNumber(1);

        pipeline.setMaps([pickList]);

        let body = new ZOHOCRMSDK.Pipelines.BodyWrapper();

        body.setPipeline([pipeline]);

        //Call updatePipeline method that takes BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Pipelines.ActionHandler.MasterModel> = await pipelineOperations.updatePipeline(pipelineId, body);

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            //Get object from response
            let actionWrapper: ZOHOCRMSDK.Pipelines.ActionHandler.MasterModel = response.getObject();

            if (actionWrapper instanceof ZOHOCRMSDK.Pipelines.ActionWrapper) {
                //Get the list of obtained action responses
                let actionResponses: ZOHOCRMSDK.Pipelines.ActionResponse.MasterModel[] = actionWrapper.getPipeline();

                actionResponses.forEach(actionResponse => {
                    //Check if the request is successful
                    if (actionResponse instanceof ZOHOCRMSDK.Pipelines.SuccessResponse) {
                        //Get the Status
                        console.log("Status: " + actionResponse.getStatus().getValue());

                        //Get the Code
                        console.log("Code: " + actionResponse.getCode().getValue());

                        console.log("Details: ");

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
                    else if (actionResponse instanceof ZOHOCRMSDK.Pipelines.APIException) {
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
            else if (actionWrapper instanceof ZOHOCRMSDK.Pipelines.APIException) {
                //Get the Status
                console.log("Status: " + actionWrapper.getStatus().getValue());

                //Get the Code
                console.log("Code: " + actionWrapper.getCode().getValue());

                console.log("Details");

                //Get the details map
                let details = actionWrapper.getDetails();

                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }

                //Get the Message
                console.log("Message: " + actionWrapper.getMessage().getValue());
            }
        }
    }
}