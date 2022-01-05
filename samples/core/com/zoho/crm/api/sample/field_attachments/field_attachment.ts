import * as fs from "fs";
import * as path from "path";

import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class FieldAttachment {
    static async getFieldAttachments(moduleAPIName: string, recordId: bigint, fieldsAttachmentId: bigint, destinationFolder: string) {
        //Get instance of FieldAttachmentsOperations Class
        let fieldAttachmentsOperations: ZOHOCRMSDK.FieldAttachments.FieldAttachmentsOperations = new ZOHOCRMSDK.FieldAttachments.FieldAttachmentsOperations(moduleAPIName, recordId, fieldsAttachmentId);

        //Call getFieldAttachments method
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.FieldAttachments.ResponseHandler.MasterModel> = await fieldAttachmentsOperations.getFieldAttachments();

        if (response != null) {
            //Get the status code from response
            console.log("Status code " + response.getStatusCode());

            if (response.getStatusCode() == 204) {
                console.log("No Content\n");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.FieldAttachments.ResponseHandler.MasterModel = response.getObject();

            //Check if expected FileBodyWrapper instance is received.
            if (responseObject instanceof ZOHOCRMSDK.FieldAttachments.FileBodyWrapper) {
                //Get StreamWrapper instance from the returned FileBodyWrapper instance
                let streamWrapper: ZOHOCRMSDK.StreamWrapper = responseObject.getFile();

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
            else if (responseObject instanceof ZOHOCRMSDK.FieldAttachments.APIException) {
                //Get the Status
                console.log("Status: " + responseObject.getStatus().getValue());

                //Get the Code
                console.log("Code: " + responseObject.getCode().getValue());

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