import * as fs from "fs";
import * as path from "path";

import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class BulkRead {
    /**
     * <h3> Create BulkRead Job </h3>
     * This method is used to create a bulk read job to export records.
     * @param moduleAPIName  The API Name of the record's module
     */
    public static async createBulkReadJob(moduleAPIName: string) {
        //example
        //let moduleAPIName = "Leads";

        //Get instance of BulkReadOperations Class
        let bulkReadOperations: ZOHOCRMSDK.BulkRead.BulkReadOperations = new ZOHOCRMSDK.BulkRead.BulkReadOperations();

        //Get instance of RequestWrapper Class that will contain the request body
        let requestWrapper: ZOHOCRMSDK.BulkRead.RequestWrapper = new ZOHOCRMSDK.BulkRead.RequestWrapper();

        //Get instance of CallBack Class
        let callBack: ZOHOCRMSDK.BulkRead.CallBack = new ZOHOCRMSDK.BulkRead.CallBack();

        //Set valid callback URL.
        callBack.setUrl("https://www.example.com/callback");

        //Set the HTTP method of the callback URL. The allowed value is post.
        callBack.setMethod(new ZOHOCRMSDK.Choice("post"));

        //The Bulk Read Job's details is posted to this URL on successful completion / failure of the job.
        requestWrapper.setCallback(callBack);

        //Get instance of Query Class
        let query: ZOHOCRMSDK.BulkRead.Query = new ZOHOCRMSDK.BulkRead.Query();

        //Specifies the API Name of the module to be read.
        let module: ZOHOCRMSDK.Modules.Module = new ZOHOCRMSDK.Modules.Module();

        module.setAPIName(moduleAPIName);

        //Specifies the API Name of the module to be read.
        query.setModule(module);

        //Specifies the unique ID of the custom view, whose records you want to export.
        // query.setCvid("3477061087501");

        //Array of field names
        let fieldAPINames: string[] = [];

        fieldAPINames.push("Last_Name");

        //Specifies the API Name of the fields to be fetched.
        // query.setFields(fieldAPINames);

        //To set page value, By default value is 1.
        query.setPage(1);

        //Get instance of Criteria Class
        let criteria: ZOHOCRMSDK.BulkRead.Criteria = new ZOHOCRMSDK.BulkRead.Criteria();

        criteria.setGroupOperator(new ZOHOCRMSDK.Choice("or"));

        let criteriaArray: ZOHOCRMSDK.BulkRead.Criteria[] = [];

        let group11: ZOHOCRMSDK.BulkRead.Criteria = new ZOHOCRMSDK.BulkRead.Criteria();

        group11.setGroupOperator(new ZOHOCRMSDK.Choice("and"));

        let groupArray11: ZOHOCRMSDK.BulkRead.Criteria[] = [];

        let group111: ZOHOCRMSDK.BulkRead.Criteria = new ZOHOCRMSDK.BulkRead.Criteria();

        let field1: ZOHOCRMSDK.Fields.Field = new ZOHOCRMSDK.Fields.Field();

        field1.setAPIName("Company");

        group111.setField(field1);

        group111.setComparator(new ZOHOCRMSDK.Choice("equal"));

        group111.setValue("Zoho");

        groupArray11.push(group111);

        let group112: ZOHOCRMSDK.BulkRead.Criteria = new ZOHOCRMSDK.BulkRead.Criteria();

        let field2: ZOHOCRMSDK.Fields.Field = new ZOHOCRMSDK.Fields.Field();

        field2.setAPIName("Owner");

        group112.setField(field2);

        group112.setComparator(new ZOHOCRMSDK.Choice("in"));

        group112.setValue(["3477061173021"]);

        groupArray11.push(group112);

        group11.setGroup(groupArray11);

        criteriaArray.push(group11);

        let group12 = new ZOHOCRMSDK.BulkRead.Criteria();

        group12.setGroupOperator(new ZOHOCRMSDK.Choice("or"));

        let groupArray12: ZOHOCRMSDK.BulkRead.Criteria[] = [];

        let group121 = new ZOHOCRMSDK.BulkRead.Criteria();

        let field3: ZOHOCRMSDK.Fields.Field = new ZOHOCRMSDK.Fields.Field();

        field3.setAPIName("Paid");

        group121.setField(field3);

        group121.setComparator(new ZOHOCRMSDK.Choice("equal"));

        group121.setValue(true);

        groupArray12.push(group121);

        let group122 = new ZOHOCRMSDK.BulkRead.Criteria();

        let field4: ZOHOCRMSDK.Fields.Field = new ZOHOCRMSDK.Fields.Field();

        // To set API name of a field.
        field4.setAPIName("Created_Time");

        group122.setField(field4);

        // To set comparator(eg: equal, greater_than.).
        group122.setComparator(new ZOHOCRMSDK.Choice("between"));

        let time = ["2020-06-03T17:31:48+05:30", "2020-06-03T17:31:48+05:30"];

        // To set the value to be compared
        group122.setValue(time);

        groupArray12.push(group122);

        group12.setGroup(groupArray12);

        criteriaArray.push(group12);

        criteria.setGroup(criteriaArray);

        //To filter the records to be exported.
        query.setCriteria(criteria);

        //Set the query object
        requestWrapper.setQuery(query);

        //Specify the value for this key as "ics" to export all records in the Events module as an ICS file.
        // requestWrapper.setFileType(new ZOHOCRMSDK.Choice("ics"));

        //Call createBulkReadJob method that takes RequestWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.BulkRead.ActionHandler.MasterModel> = await bulkReadOperations.createBulkReadJob(requestWrapper);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {

                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.BulkRead.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.BulkRead.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.BulkRead.SuccessResponse) {

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
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.BulkRead.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.BulkRead.APIException) {
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
     * <h3> Get BulkRead Job Details</h3>
     * This method is used to get the details of a bulk read job performed previously.
     * @param jobId The unique ID of the bulk read job.
     */
    public static async getBulkReadJobDetails(jobId: bigint) {
        //example
        // let jobId = 34096432461001n;

        //Get instance of BulkReadOperations Class
        let bulkReadOperations: ZOHOCRMSDK.BulkRead.BulkReadOperations = new ZOHOCRMSDK.BulkRead.BulkReadOperations();

        //Call getBulkReadJobDetails method that takes jobId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.BulkRead.ResponseHandler.MasterModel> = await bulkReadOperations.getBulkReadJobDetails(jobId);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.BulkRead.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received.
                if (responseObject instanceof ZOHOCRMSDK.BulkRead.ResponseWrapper) {
                    //Get the array of obtained jobDetail instances
                    let jobDetails: ZOHOCRMSDK.BulkRead.JobDetail[] = responseObject.getData();

                    jobDetails.forEach(jobDetail => {
                        //Get the Job ID of each jobDetail
                        console.log("Bulk read Job ID: " + jobDetail.getId());

                        //Get the Operation of each jobDetail
                        console.log("Bulk read Operation: " + jobDetail.getOperation());

                        //Get the State of each jobDetail
                        console.log("Bulk read State: " + jobDetail.getState().getValue());

                        //Get the Result instance of each jobDetail
                        let result: ZOHOCRMSDK.BulkRead.Result = jobDetail.getResult();

                        //Check if Result is not null
                        if (result != null) {
                            //Get the Page of the Result
                            console.log("Bulkread Result Page: " + result.getPage().toString());

                            //Get the Count of the Result
                            console.log("Bulkread Result Count: " + result.getCount().toString());

                            //Get the Download URL of the Result
                            console.log("Bulkread Result Download URL: " + result.getDownloadUrl());

                            //Get the Per_Page of the Result
                            console.log("Bulkread Result Per_Page: " + result.getPerPage().toString());

                            //Get the MoreRecords of the Result
                            console.log("Bulkread Result MoreRecords: " + result.getMoreRecords().toString());
                        }

                        // Get the Query instance of each jobDetail
                        let query: ZOHOCRMSDK.BulkRead.Query = jobDetail.getQuery();

                        if (query != null) {
                            //Get the Module Name of the Query
                            console.log("Bulk read Query Module: " + query.getModule());

                            //Get the Page of the Query
                            console.log("Bulk read Query Page: " + query.getPage().toString());

                            //Get the cvid of the Query
                            console.log("Bulk read Query cvid: " + query.getCvid());

                            //Get the fields List of each Query
                            let fields: string[] = query.getFields();

                            //Check if fields is not null
                            if (fields != null) {
                                fields.forEach(fieldName => {
                                    //Get the Field Name of the Query
                                    console.log("Bulk read Query Fields: " + fieldName);
                                });
                            }

                            // Get the Criteria instance of each Query
                            let criteria: ZOHOCRMSDK.BulkRead.Criteria = query.getCriteria();

                            //Check if criteria is not null
                            if (criteria != null) {
                                this.printCriteria(criteria);
                            }
                        }

                        //Get the CreatedBy User instance of each jobDetail
                        let createdBy: ZOHOCRMSDK.Users.User = jobDetail.getCreatedBy();

                        //Check if createdBy is not null
                        if (createdBy != null) {
                            //Get the ID of the CreatedBy User
                            console.log("Bulkread Created By User-ID: " + createdBy.getId());

                            //Get the Name of the CreatedBy User
                            console.log("Bulkread Created By user-Name: " + createdBy.getName());
                        }

                        //Get the CreatedTime of each jobDetail
                        console.log("Bulkread CreatedTime: " + jobDetail.getCreatedTime());

                        //Get the FileType of each jobDetail
                        console.log("Bulkread File Type: " + jobDetail.getFileType());
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.BulkRead.APIException) {

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

    private static async printCriteria(criteria: ZOHOCRMSDK.BulkRead.Criteria) {
        if (criteria.getAPIName() != null) {
            //Get the APIName of the Criteria
            console.log("BulkRead Criteria API Name: " + criteria.getAPIName());
        }
        if (criteria.getComparator() != null) {
            //Get the Comparator of the Criteria
            console.log("BulkRead Criteria Comparator: " + criteria.getComparator().getValue());
        }

        if (criteria.getValue() != null) {
            //Get the Value of the Criteria
            console.log("BulkRead Criteria Value: " + criteria.getValue().toString());
        }

        //Get the array of Criteria instance of each Criteria
        let criteriaGroup: ZOHOCRMSDK.BulkRead.Criteria[] = criteria.getGroup();

        if (criteriaGroup != null) {
            criteriaGroup.forEach(eachCriteria => {
                this.printCriteria(eachCriteria);
            });
        }

        if (criteria.getGroupOperator() != null) {
            //Get the Group Operator of the Criteria
            console.log("BulkRead Criteria Group Operator: " + criteria.getGroupOperator().getValue());
        }
    }

    /**
     * <h3> Download Result</h3>
     * This method is used to download the result of Bulk Read operation
     * @param jobId The unique ID of the bulk read job.
     * @param destinationFolder The absolute path where downloaded file has to be stored.
     */
    public static async downloadResult(jobId: bigint, destinationFolder: string) {
        //example
        //String jobId = 34096432461001n;
        //String destinationFolder = "/Users/user_name/Documents";

        //Get instance of BulkReadOperations Class
        let bulkReadOperations: ZOHOCRMSDK.BulkRead.BulkReadOperations = new ZOHOCRMSDK.BulkRead.BulkReadOperations();

        //Call downloadResult method that takes jobId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.BulkRead.ResponseHandler.MasterModel> = await bulkReadOperations.downloadResult(jobId);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.BulkRead.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected FileBodyWrapper instance is received.
                if (responseObject instanceof ZOHOCRMSDK.BulkRead.FileBodyWrapper) {
                    //Get StreamWrapper instance from the returned FileBodyWrapper instance
                    let streamWrapper = responseObject.getFile();

                    let name: string | undefined = streamWrapper.getName();

                    if (name !== undefined) {
                        //Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
                        let fileName = path.join(destinationFolder, name);

                        //Get the stream from StreamWrapper instance
                        let readStream: Buffer | fs.ReadStream | undefined = streamWrapper.getStream();

                        if (readStream !== undefined && readStream instanceof Buffer) {
                            //Write the stream to the destination file.
                            fs.writeFileSync(fileName, readStream);
                        }

                    }

                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.BulkRead.APIException) {

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
