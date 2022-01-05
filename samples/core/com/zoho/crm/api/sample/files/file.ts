import * as fs from "fs";
import * as path from "path";

import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class Files {
    /**
     * <h3> Upload File</h3>
     * This method is used to upload a file and print the response.
     */
    public static async uploadFiles(absoluteFilePath: string) {
        //Get instance of FileOperations Class
        let fileOperations: ZOHOCRMSDK.File.FileOperations = new ZOHOCRMSDK.File.FileOperations();

        //Get instance of FileBodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.File.BodyWrapper = new ZOHOCRMSDK.File.BodyWrapper();

        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        await paramInstance.add(ZOHOCRMSDK.File.UploadFilesParam.TYPE, "inline");

        /** StreamWrapper can be initialized in any of the following ways */

        /**
         * param 1 -> fileName
         * param 2 -> Read Stream.
         */
        // let streamWrapper1 = new ZOHOCRMSDK.StreamWrapper(null, fs.createReadStream("/Users/user_name/Desktop/file1.txt"));

        // let streamWrapper3 = new ZOHOCRMSDK.StreamWrapper(null, fs.createReadStream("/Users/user_name/Desktop/file2.txt"));

        /**
         * param 1 -> fileName
         * param 2 -> Read Stream
         * param 3 -> Absolute File Path of the file to be attached
         */
        let streamWrapper2 = new ZOHOCRMSDK.StreamWrapper(undefined, undefined, absoluteFilePath);

        let files: ZOHOCRMSDK.StreamWrapper[] = [];

        files.push(streamWrapper2);

        //Set files to the FileBodyWrapper instance
        request.setFile(files);

        //Call uploadFile method that takes BodyWrapper instance and ParameterMap instance as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.File.ActionHandler.MasterModel> = await fileOperations.uploadFiles(request, paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.File.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received.
                if (responseObject instanceof ZOHOCRMSDK.File.ActionWrapper) {

                    //Get the array of obtained action responses
                    let actionResponses: ZOHOCRMSDK.File.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {

                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.File.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.File.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.File.APIException) {
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
     * <h3> Get File</h3>
     * This method is used to download the file with ID and write in the destinationFolder
     * @param id The ID of the uploaded File.
     * @param destinationFolder The absolute path of the destination folder to store the File
     */
    public static async getFile(id: string, destinationFolder: string) {
        //example
        //let id = "ae9c7cefa418aec1d6a5cc2d9ab35c3231aae3bfeef7d5e00a54b7563c0dd42b";
        //let destinationFolder = "/Users/user_name/Desktop"

        //Get instance of FileOperations Class
        let fileOperations: ZOHOCRMSDK.File.FileOperations = new ZOHOCRMSDK.File.FileOperations();

        //Get instance of ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        //Add the id to ParameterMap instance
        await paramInstance.add(ZOHOCRMSDK.File.GetFileParam.ID, id);

        //Call getFile method that takes ParameterMap instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.File.ResponseHandler.MasterModel> = await fileOperations.getFile(paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.File.ResponseHandler.MasterModel = response.getObject();

            if (responseObject !== null) {

                //Check if expected FileBodyWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.File.FileBodyWrapper) {

                    //Get StreamWrapper instance from the returned FileBodyWrapper instance
                    let streamWrapper: ZOHOCRMSDK.StreamWrapper = responseObject.getFile();

                    let name: string | undefined = streamWrapper.getName();

                    if (name !== undefined) {
                        //Construct the file name by joining the destinationFolder and the name from StreamWrapper instance
                        let fileName = path.join(destinationFolder, name);

                        //Get the stream from StreamWrapper instance
                        let readStream = streamWrapper.getStream();

                        if (readStream !== undefined && readStream instanceof Buffer) {
                            //Write the stream to the destination file.
                            fs.writeFileSync(fileName, readStream);
                        }
                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.File.APIException) {
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