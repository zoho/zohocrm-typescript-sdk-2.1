import * as path from "path";
import * as fs from "fs";

import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class RelatedRecord {
    /**
     * <h3> Get Related Records </h3>
     * This method is used to get the related list records and print the response.
     * @param moduleAPIName The API Name of the module to get related records.
     * @param recordId The ID of the record to be obtained.
     * @param relatedListAPIName The API name of the related list
     */
    public static async getRelatedRecords(moduleAPIName: string, recordId: bigint, relatedListAPIName: string) {
        //example
        //let moduleAPIName = "Products";
        // let recordId = 3409643798007n;
        // let relatedListAPIName = "Price_Books";

        //Get instance of ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations Class that takes moduleAPIName, recordId and relatedListAPIName as parameter
        let relatedRecordsOperations: ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters for Get Related Records operation */
        await paramInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordsParam.PAGE, 1);

        await paramInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordsParam.PER_PAGE, 200);

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        /* Possible headers for Get Related Records operation */
        await headerInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordsHeader.IF_MODIFIED_SINCE, new Date('October 15, 2019 05:35:32'));

        //Call getRelatedRecords method that takes recordId, ZOHOCRMSDK.ParameterMap instance and ZOHOCRMSDK.HeaderMap instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedRecords.ResponseHandler.MasterModel> = await relatedRecordsOperations.getRelatedRecords(recordId, paramInstance, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.RelatedRecords.ResponseHandler.MasterModel = response.getObject();

            //Check if expected ZOHOCRMSDK.RelatedRecords.ResponseHandler instance is received
            if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ResponseWrapper) {
                //Get the array of obtained
                let records: ZOHOCRMSDK.Records.Record[] = responseObject.getData();

                for (let record of records) {
                    //Get the ID of each Record
                    console.log("RelatedRecord ID: " + record.getId());

                    //Get the createdBy User instance of each Record
                    let createdBy: ZOHOCRMSDK.Users.User = record.getCreatedBy();

                    //Check if createdBy is not null
                    if (createdBy != null) {
                        //Get the ID of the createdBy User
                        console.log("RelatedRecord Created By User-ID: " + createdBy.getId());

                        //Get the name of the createdBy User
                        console.log("RelatedRecord Created By User-Name: " + createdBy.getName());

                        //Get the Email of the createdBy User
                        console.log("RelatedRecord Created By User-Email: " + createdBy.getEmail());
                    }

                    //Get the CreatedTime of each Record
                    console.log("RelatedRecord CreatedTime: " + record.getCreatedTime());

                    //Get the modifiedBy User instance of each Record
                    let modifiedBy: ZOHOCRMSDK.Users.User = record.getModifiedBy();

                    //Check if modifiedBy is not null
                    if (modifiedBy != null) {
                        //Get the ID of the modifiedBy User
                        console.log("RelatedRecord Modified By User-ID: " + modifiedBy.getId());

                        //Get the name of the modifiedBy User
                        console.log("RelatedRecord Modified By User-Name: " + modifiedBy.getName());

                        //Get the Email of the modifiedBy User
                        console.log("RelatedRecord Modified By User-Email: " + modifiedBy.getEmail());
                    }

                    //Get the ModifiedTime of each Record
                    console.log("RelatedRecord ModifiedTime: " + record.getModifiedTime());

                    //Get the list of Tag instance each Record
                    let tags: ZOHOCRMSDK.Tags.Tag[] = record.getTag();

                    //Check if tags is not null
                    if (tags != null) {
                        tags.forEach(tag => {
                            //Get the Name of each Tag
                            console.log("RelatedRecord Tag Name: " + tag.getName());

                            //Get the Id of each Tag
                            console.log("RelatedRecord Tag ID: " + tag.getId());
                        });
                    }

                    //To get particular field value
                    console.log("RelatedRecord Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                    console.log("RelatedRecord KeyValues: ");

                    let keyValues: Map<string, any> = record.getKeyValues();

                    let keyArray: string[] = Array.from(keyValues.keys());

                    for (let keyName of keyArray) {
                        let value = keyValues.get(keyName);

                        if (Array.isArray(value)) {
                            if (value.length > 0) {
                                if (value[0] instanceof ZOHOCRMSDK.Records.FileDetails) {
                                    let fileDetails: ZOHOCRMSDK.Records.FileDetails[] = value;

                                    fileDetails.forEach(fileDetail => {
                                        //Get the Extn of each FileDetails
                                        console.log("Record FileDetails Extn: " + fileDetail.getExtn());

                                        //Get the IsPreviewAvailable of each FileDetails
                                        console.log("Record FileDetails IsPreviewAvailable: " + fileDetail.getIsPreviewAvailable());

                                        //Get the DownloadUrl of each FileDetails
                                        console.log("Record FileDetails DownloadUrl: " + fileDetail.getDownloadUrl());

                                        //Get the DeleteUrl of each FileDetails
                                        console.log("Record FileDetails DeleteUrl: " + fileDetail.getDeleteUrl());

                                        //Get the EntityId of each FileDetails
                                        console.log("Record FileDetails EntityId: " + fileDetail.getEntityId());

                                        //Get the Mode of each FileDetails
                                        console.log("Record FileDetails Mode: " + fileDetail.getMode());

                                        //Get the OriginalSizeByte of each FileDetails
                                        console.log("Record FileDetails OriginalSizeByte: " + fileDetail.getOriginalSizeByte());

                                        //Get the PreviewUrl of each FileDetails
                                        console.log("Record FileDetails PreviewUrl: " + fileDetail.getPreviewUrl());

                                        //Get the FileName of each FileDetails
                                        console.log("Record FileDetails FileName: " + fileDetail.getFileName());

                                        //Get the FileId of each FileDetails
                                        console.log("Record FileDetails FileId: " + fileDetail.getFileId());

                                        //Get the AttachmentId of each FileDetails
                                        console.log("Record FileDetails AttachmentId: " + fileDetail.getAttachmentId());

                                        //Get the FileSize of each FileDetails
                                        console.log("Record FileDetails FileSize: " + fileDetail.getFileSize());

                                        //Get the CreatorId of each FileDetails
                                        console.log("Record FileDetails CreatorId: " + fileDetail.getCreatorId());

                                        //Get the LinkDocs of each FileDetails
                                        console.log("Record FileDetails LinkDocs: " + fileDetail.getLinkDocs());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Choice) {
                                    let choiceArray: ZOHOCRMSDK.Choice<any>[] = value;

                                    console.log(keyName);

                                    console.log("Values");

                                    choiceArray.forEach(eachChoice => {
                                        console.log(eachChoice.getValue());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Tags.Tag) {
                                    let tags: ZOHOCRMSDK.Tags.Tag[] = value;

                                    tags.forEach(tag => {
                                        //Get the Name of each Tag
                                        console.log("Record Tag Name: " + tag.getName());

                                        //Get the Id of each Tag
                                        console.log("Record Tag ID: " + tag.getId());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.PricingDetails) {
                                    let pricingDetails: ZOHOCRMSDK.Records.PricingDetails[] = value;

                                    pricingDetails.forEach(pricingDetail => {
                                        console.log("Record PricingDetails ToRange: " + pricingDetail.getToRange().toString());

                                        console.log("Record PricingDetails Discount: " + pricingDetail.getDiscount().toString());

                                        console.log("Record PricingDetails ID: " + pricingDetail.getId());

                                        console.log("Record PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Participants) {
                                    let participants: ZOHOCRMSDK.Records.Participants[] = value;

                                    participants.forEach(participant => {
                                        console.log("Record Participants Name: " + participant.getName());

                                        console.log("Record Participants Invited: " + participant.getInvited().toString());

                                        console.log("Record Participants ID: " + participant.getId());

                                        console.log("Record Participants Type: " + participant.getType());

                                        console.log("Record Participants Participant: " + participant.getParticipant());

                                        console.log("Record Participants Status: " + participant.getStatus());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Record) {
                                    let recordArray: ZOHOCRMSDK.Records.Record[] = value;

                                    recordArray.forEach(record => {
                                        Array.from(record.getKeyValues().keys()).forEach(key => {
                                            console.log(key + ": " + record.getKeyValues().get(key));
                                        });
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.LineTax) {
                                    let lineTaxes: ZOHOCRMSDK.Records.LineTax[] = value;

                                    lineTaxes.forEach(lineTax => {
                                        console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());

                                        console.log("Record ProductDetails LineTax Name: " + lineTax.getName());

                                        console.log("Record ProductDetails LineTax Id: " + lineTax.getId());

                                        console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Comment) {
                                    let comments: ZOHOCRMSDK.Records.Comment[] = value;

                                    comments.forEach(comment => {
                                        console.log("Record Comment CommentedBy: " + comment.getCommentedBy());

                                        console.log("Record Comment CommentedTime: " + comment.getCommentedTime().toString());

                                        console.log("Record Comment CommentContent: " + comment.getCommentContent());

                                        console.log("Record Comment Id: " + comment.getId());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Attachments.Attachment) {
                                    let attachments: ZOHOCRMSDK.Attachments.Attachment[] = value;

                                    attachments.forEach(attachment => {
                                        //Get the ID of each attachment
                                        console.log("Record Attachment ID: " + attachment.getId());

                                        //Get the owner User instance of each attachment
                                        let owner: ZOHOCRMSDK.Users.User = attachment.getOwner();

                                        //Check if owner is not null
                                        if (owner != null) {
                                            //Get the Name of the Owner
                                            console.log("Record Attachment Owner - Name: " + owner.getName());

                                            //Get the ID of the Owner
                                            console.log("Record Attachment Owner ID: " + owner.getId());

                                            //Get the Email of the Owner
                                            console.log("Record Attachment Owner Email: " + owner.getEmail());
                                        }

                                        //Get the modified time of each attachment
                                        console.log("Record Attachment Modified Time: " + attachment.getModifiedTime().toString());

                                        //Get the name of the File
                                        console.log("Record Attachment File Name: " + attachment.getFileName());

                                        //Get the created time of each attachment
                                        console.log("Record Attachment Created Time: " + attachment.getCreatedTime());

                                        //Get the Attachment file size
                                        console.log("Record Attachment File Size: " + attachment.getSize());

                                        //Get the parentId Record instance of each attachment
                                        let parentId: ZOHOCRMSDK.Records.Record = attachment.getParentId();

                                        //Check if parentId is not null
                                        if (parentId != null) {
                                            //Get the parent record Name of each attachment
                                            console.log("Record Attachment parent record Name: " + parentId.getKeyValue("name"));

                                            //Get the parent record ID of each attachment
                                            console.log("Record Attachment parent record ID: " + parentId.getId());
                                        }

                                        //Check if the attachment is Editable
                                        console.log("Record Attachment is Editable: " + attachment.getEditable().toString());

                                        //Get the file ID of each attachment
                                        console.log("Record Attachment File ID: " + attachment.getFileId());

                                        //Get the type of each attachment
                                        console.log("Record Attachment File Type: " + attachment.getType());

                                        //Get the seModule of each attachment
                                        console.log("Record Attachment seModule: " + attachment.getSeModule());

                                        //Get the modifiedBy User instance of each attachment
                                        let modifiedBy: ZOHOCRMSDK.Users.User = attachment.getModifiedBy();

                                        //Check if modifiedBy is not null
                                        if (modifiedBy != null) {
                                            //Get the Name of the modifiedBy User
                                            console.log("Record Attachment Modified By User-Name: " + modifiedBy.getName());

                                            //Get the ID of the modifiedBy User
                                            console.log("Record Attachment Modified By User-ID: " + modifiedBy.getId());

                                            //Get the Email of the modifiedBy User
                                            console.log("Record Attachment Modified By User-Email: " + modifiedBy.getEmail());
                                        }

                                        //Get the state of each attachment
                                        console.log("Record Attachment State: " + attachment.getState());

                                        //Get the createdBy User instance of each attachment
                                        let createdBy: ZOHOCRMSDK.Users.User = attachment.getCreatedBy();

                                        //Check if createdBy is not null
                                        if (createdBy != null) {
                                            //Get the name of the createdBy User
                                            console.log("Record Attachment Created By User-Name: " + createdBy.getName());

                                            //Get the ID of the createdBy User
                                            console.log("Record Attachment Created By User-ID: " + createdBy.getId());

                                            //Get the Email of the createdBy User
                                            console.log("Record Attachment Created By User-Email: " + createdBy.getEmail());
                                        }

                                        //Get the linkUrl of each attachment
                                        console.log("Record Attachment LinkUrl: " + attachment.getLinkUrl());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.ImageUpload) {
                                    let imageUploads: ZOHOCRMSDK.Records.ImageUpload[] = value;

                                    imageUploads.forEach(imageUpload => {
                                        console.log("Record " + keyName + " Description: " + imageUpload.getDescription());

                                        console.log("Record " + keyName + " PreviewId: " + imageUpload.getPreviewId());

                                        console.log("Record " + keyName + " File_Name: " + imageUpload.getFileName());

                                        console.log("Record " + keyName + " State: " + imageUpload.getState());

                                        console.log("Record " + keyName + " Size: " + imageUpload.getSize());

                                        console.log("Record " + keyName + " SequenceNumber: " + imageUpload.getSequenceNumber());

                                        console.log("Record " + keyName + " Id: " + imageUpload.getId());

                                        console.log("Record " + keyName + " FileId: " + imageUpload.getFileId());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Reminder) {
                                    let reminders: ZOHOCRMSDK.Records.Reminder[] = value;

                                    reminders.forEach(reminder => {
                                        console.log("Reminder Period: " + reminder.getPeriod());

                                        console.log("Reminder Unit: " + reminder.getUnit());
                                    });
                                }
                                else {
                                    console.log(keyName + ": " + value);
                                }
                            }
                        }
                        else if (value instanceof ZOHOCRMSDK.Users.User) {
                            console.log("Record " + keyName + " User-ID: " + value.getId());

                            console.log("Record " + keyName + " User-Name: " + value.getName());

                            console.log("Record " + keyName + " User-Email: " + value.getEmail());

                        }
                        else if (value instanceof ZOHOCRMSDK.Layouts.Layout) {
                            console.log(keyName + " ID: " + value.getId());

                            console.log(keyName + " Name: " + value.getName());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.Record) {
                            console.log(keyName + " Record ID: " + value.getId());

                            console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                        }
                        else if (value instanceof ZOHOCRMSDK.Choice) {
                            console.log(keyName + ": " + value.getValue());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.RemindAt) {
                            console.log(keyName + ": " + value.getAlarm());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.RecurringActivity) {
                            console.log(keyName);

                            console.log("RRULE: " + value.getRrule());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.Consent) {
                            console.log("Record Consent ID: " + value.getId());

                            //Get the Owner User instance of each attachment
                            let owner: ZOHOCRMSDK.Users.User = value.getOwner();

                            //Check if owner is not null
                            if (owner != null) {
                                //Get the name of the owner User
                                console.log("Record Consent Owner Name: " + owner.getName());

                                //Get the ID of the owner User
                                console.log("Record Consent Owner ID: " + owner.getId());

                                //Get the Email of the owner User
                                console.log("Record Consent Owner Email: " + owner.getEmail());
                            }

                            let consentCreatedBy: ZOHOCRMSDK.Users.User = value.getCreatedBy();

                            //Check if createdBy is not null
                            if (consentCreatedBy != null) {
                                //Get the name of the CreatedBy User
                                console.log("Record Consent CreatedBy Name: " + consentCreatedBy.getName());

                                //Get the ID of the CreatedBy User
                                console.log("Record Consent CreatedBy ID: " + consentCreatedBy.getId());

                                //Get the Email of the CreatedBy User
                                console.log("Record Consent CreatedBy Email: " + consentCreatedBy.getEmail());
                            }

                            let consentModifiedBy: ZOHOCRMSDK.Users.User = value.getModifiedBy();

                            //Check if createdBy is not null
                            if (consentModifiedBy != null) {
                                //Get the name of the ModifiedBy User
                                console.log("Record Consent ModifiedBy Name: " + consentModifiedBy.getName());

                                //Get the ID of the ModifiedBy User
                                console.log("Record Consent ModifiedBy ID: " + consentModifiedBy.getId());

                                //Get the Email of the ModifiedBy User
                                console.log("Record Consent ModifiedBy Email: " + consentModifiedBy.getEmail());
                            }

                            console.log("Record Consent CreatedTime: " + value.getCreatedTime());

                            console.log("Record Consent ModifiedTime: " + value.getModifiedTime());

                            console.log("Record Consent ContactThroughEmail: " + value.getContactThroughEmail());

                            console.log("Record Consent ContactThroughSocial: " + value.getContactThroughSocial());

                            console.log("Record Consent ContactThroughSurvey: " + value.getContactThroughSurvey());

                            console.log("Record Consent ContactThroughPhone: " + value.getContactThroughPhone());

                            console.log("Record Consent MailSentTime: " + value.getMailSentTime().toString());

                            console.log("Record Consent ConsentDate: " + value.getConsentDate().toString());

                            console.log("Record Consent ConsentRemarks: " + value.getConsentRemarks());

                            console.log("Record Consent ConsentThrough: " + value.getConsentThrough());

                            console.log("Record Consent DataProcessingBasis: " + value.getDataProcessingBasis());

                            //To get custom values
                            console.log("Record Consent Lawful Reason: " + value.getKeyValue("Lawful_Reason"));
                        }
                        else if (value instanceof Map) {
                            console.log(keyName);

                            Array.from(value.keys()).forEach(key => {
                                console.log(key + ": " + value.get(key));
                            });
                        }
                        else {
                            console.log(keyName + ": " + value);
                        }
                    }
                }

                //Get the obtained Info Object
                let info: ZOHOCRMSDK.Records.Info = responseObject.getInfo();

                if (info != null) {
                    if (info.getPerPage() != null) {
                        //Get the PerPage of the Info
                        console.log("RelatedRecord Info PerPage: " + info.getPerPage().toString());
                    }

                    if (info.getCount() != null) {
                        //Get the Count of the Info
                        console.log("RelatedRecord Info Count: " + info.getCount().toString());
                    }

                    if (info.getPage() != null) {
                        //Get the Page of the Info
                        console.log("RelatedRecord Info Page: " + info.getPage().toString());
                    }

                    if (info.getMoreRecords() != null) {
                        //Get the MoreRecords of the Info
                        console.log("RelatedRecord Info MoreRecords: " + info.getMoreRecords().toString());
                    }
                }
            }
            //Check if the request returned an exception
            else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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

    /**
     * <h3> Update Related Record </h3>
     * This method is used to update the relation between the records and print the response.
     * @param moduleAPIName The API Name of the module to update related record.
     * @param recordId The ID of the record to be update Related List.
     * @param relatedListAPIName The API name of the related list.
     */
    public static async updateRelatedRecords(moduleAPIName: string, recordId: bigint, relatedListAPIName: string) {
        //example
        //let moduleAPIName = "Products";
        // let recordId = 3409643798007n;
        // let relatedModuleAPIName = "Price_Books";

        //Get instance of ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations Class that takes moduleAPIName, recordId and relatedListAPIName as parameter
        let relatedRecordsOperations: ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);

        //Get instance of ZOHOCRMSDK.RelatedRecords.BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.RelatedRecords.BodyWrapper = new ZOHOCRMSDK.RelatedRecords.BodyWrapper();

        //Array to hold Record instances
        let recordsArray: ZOHOCRMSDK.Records.Record[] = [];

        //Get instance of Record Class
        let record1: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.setId(BigInt("347706113245001"));

        record1.addKeyValue("list_price", 50.59);

        //Add Record instance to the array
        recordsArray.push(record1);

        let record2: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record2.addKeyValue("id", BigInt("347706113236002"));

        record2.addKeyValue("list_price", 100.56);

        //Add Record instance to the array
        recordsArray.push(record2);

        //Set the array to Records in ZOHOCRMSDK.RelatedRecords.BodyWrapper instance
        request.setData(recordsArray);

        //Call updateRelatedRecords method that takes ZOHOCRMSDK.RelatedRecords.BodyWrapper instance
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel> = await relatedRecordsOperations.updateRelatedRecords(recordId, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.RelatedRecords.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.RelatedRecords.ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.RelatedRecords.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
     * <h3> Delink Records </h3>
     * This method is used to delete the association between modules and print the response.
     * @param moduleAPIName The API Name of the module to delink related records.
     * @param recordId The ID of the record
     * @param relatedListAPIName The API name of the related list
     * @param relatedListIds The array of related record IDs.
     */
    public static async deLinkRecords(moduleAPIName: string, recordId: bigint, relatedListAPIName: string, relatedListIds: string[]) {
        //example
        // let moduleAPIName = "Products";
        // let recordId = 3409643798007n;
        // let relatedModuleAPIName = "Price_Books";
        // let relatedIds = [34096432414001n, 34096432414002n, 34096432414020n];

        //Get instance of ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations Class that takes moduleAPIName, recordId and relatedListAPIName as parameter
        let relatedRecordsOperations: ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters of Delink Records operation */
        for (let relatedListId of relatedListIds) {
            await paramInstance.add(ZOHOCRMSDK.RelatedRecords.DelinkRecordsParam.IDS, relatedListId);
        }

        //Call delinkRecords method that takes ZOHOCRMSDK.ParameterMap instance as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel> = await relatedRecordsOperations.delinkRecords(recordId, paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.RelatedRecords.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.RelatedRecords.ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.RelatedRecords.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.SuccessResponse) {

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
                        else if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
    * <h3> Get Related Records Using External Id </h3>
    * This method is used to get the related list records and print the response.
    * @param moduleAPIName The API Name of the module to get related records.
    * @param externalValue
    * @param relatedListAPIName The API name of the related list
    */
    public static async getRelatedRecordsUsingExternalId(moduleAPIName: string, externalValue: string, relatedListAPIName: string) {
        //example
        //let moduleAPIName = "Products";
        // let recordId = 3409643798007n;
        // let relatedListAPIName = "Price_Books";
        let xExternal = "Leads.External";

        //Get instance of ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations Class that takes relatedListAPIName, moduleAPIName and xExternal as parameter
        let relatedRecordsOperations: ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName, xExternal);

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters for Get Related Records operation */
        await paramInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordsParam.PAGE, 1);

        await paramInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordsParam.PER_PAGE, 200);

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        /* Possible headers for Get Related Records operation */
        // await headerInstance.add(GetRelatedRecordsHeader.IF_MODIFIED_SINCE, new Date('October 15, 2019 05:35:32'));

        //Call getRelatedRecordsUsingExternalId method that takes externalValue, ZOHOCRMSDK.ParameterMap instance and ZOHOCRMSDK.HeaderMap instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedRecords.ResponseHandler.MasterModel> = await relatedRecordsOperations.getRelatedRecordsUsingExternalId(externalValue, paramInstance, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.RelatedRecords.ResponseHandler.MasterModel = response.getObject();

            //Check if expected ZOHOCRMSDK.RelatedRecords.ResponseHandler instance is received
            if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ResponseWrapper) {
                //Get the array of obtained
                let records: ZOHOCRMSDK.Records.Record[] = responseObject.getData();

                for (let record of records) {
                    //Get the ID of each Record
                    console.log("RelatedRecord ID: " + record.getId());

                    //Get the createdBy User instance of each Record
                    let createdBy: ZOHOCRMSDK.Users.User = record.getCreatedBy();

                    //Check if createdBy is not null
                    if (createdBy != null) {
                        //Get the ID of the createdBy User
                        console.log("RelatedRecord Created By User-ID: " + createdBy.getId());

                        //Get the name of the createdBy User
                        console.log("RelatedRecord Created By User-Name: " + createdBy.getName());

                        //Get the Email of the createdBy User
                        console.log("RelatedRecord Created By User-Email: " + createdBy.getEmail());
                    }

                    //Get the CreatedTime of each Record
                    console.log("RelatedRecord CreatedTime: " + record.getCreatedTime());

                    //Get the modifiedBy User instance of each Record
                    let modifiedBy: ZOHOCRMSDK.Users.User = record.getModifiedBy();

                    //Check if modifiedBy is not null
                    if (modifiedBy != null) {
                        //Get the ID of the modifiedBy User
                        console.log("RelatedRecord Modified By User-ID: " + modifiedBy.getId());

                        //Get the name of the modifiedBy User
                        console.log("RelatedRecord Modified By User-Name: " + modifiedBy.getName());

                        //Get the Email of the modifiedBy User
                        console.log("RelatedRecord Modified By User-Email: " + modifiedBy.getEmail());
                    }

                    //Get the ModifiedTime of each Record
                    console.log("RelatedRecord ModifiedTime: " + record.getModifiedTime());

                    //Get the list of Tag instance each Record
                    let tags: ZOHOCRMSDK.Tags.Tag[] = record.getTag();

                    //Check if tags is not null
                    if (tags != null) {
                        tags.forEach(tag => {
                            //Get the Name of each Tag
                            console.log("RelatedRecord Tag Name: " + tag.getName());

                            //Get the Id of each Tag
                            console.log("RelatedRecord Tag ID: " + tag.getId());

                        });
                    }

                    //To get particular field value
                    console.log("RelatedRecord Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                    console.log("RelatedRecord KeyValues: ");

                    let keyValues: Map<string, any> = record.getKeyValues();

                    let keyArray: string[] = Array.from(keyValues.keys());

                    for (let keyName of keyArray) {
                        let value = keyValues.get(keyName);

                        if (Array.isArray(value)) {
                            if (value.length > 0) {
                                if (value[0] instanceof ZOHOCRMSDK.Records.FileDetails) {
                                    let fileDetails: ZOHOCRMSDK.Records.FileDetails[] = value;

                                    fileDetails.forEach(fileDetail => {
                                        //Get the Extn of each FileDetails
                                        console.log("Record FileDetails Extn: " + fileDetail.getExtn());

                                        //Get the IsPreviewAvailable of each FileDetails
                                        console.log("Record FileDetails IsPreviewAvailable: " + fileDetail.getIsPreviewAvailable());

                                        //Get the DownloadUrl of each FileDetails
                                        console.log("Record FileDetails DownloadUrl: " + fileDetail.getDownloadUrl());

                                        //Get the DeleteUrl of each FileDetails
                                        console.log("Record FileDetails DeleteUrl: " + fileDetail.getDeleteUrl());

                                        //Get the EntityId of each FileDetails
                                        console.log("Record FileDetails EntityId: " + fileDetail.getEntityId());

                                        //Get the Mode of each FileDetails
                                        console.log("Record FileDetails Mode: " + fileDetail.getMode());

                                        //Get the OriginalSizeByte of each FileDetails
                                        console.log("Record FileDetails OriginalSizeByte: " + fileDetail.getOriginalSizeByte());

                                        //Get the PreviewUrl of each FileDetails
                                        console.log("Record FileDetails PreviewUrl: " + fileDetail.getPreviewUrl());

                                        //Get the FileName of each FileDetails
                                        console.log("Record FileDetails FileName: " + fileDetail.getFileName());

                                        //Get the FileId of each FileDetails
                                        console.log("Record FileDetails FileId: " + fileDetail.getFileId());

                                        //Get the AttachmentId of each FileDetails
                                        console.log("Record FileDetails AttachmentId: " + fileDetail.getAttachmentId());

                                        //Get the FileSize of each FileDetails
                                        console.log("Record FileDetails FileSize: " + fileDetail.getFileSize());

                                        //Get the CreatorId of each FileDetails
                                        console.log("Record FileDetails CreatorId: " + fileDetail.getCreatorId());

                                        //Get the LinkDocs of each FileDetails
                                        console.log("Record FileDetails LinkDocs: " + fileDetail.getLinkDocs());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Choice) {
                                    let choiceArray: ZOHOCRMSDK.Choice<any>[] = value;

                                    console.log(keyName);

                                    console.log("Values");

                                    choiceArray.forEach(eachChoice => {
                                        console.log(eachChoice.getValue());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Tags.Tag) {
                                    let tags: ZOHOCRMSDK.Tags.Tag[] = value;

                                    tags.forEach(tag => {
                                        //Get the Name of each Tag
                                        console.log("Record Tag Name: " + tag.getName());

                                        //Get the Id of each Tag
                                        console.log("Record Tag ID: " + tag.getId());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.PricingDetails) {
                                    let pricingDetails: ZOHOCRMSDK.Records.PricingDetails[] = value;

                                    pricingDetails.forEach(pricingDetail => {
                                        console.log("Record PricingDetails ToRange: " + pricingDetail.getToRange().toString());

                                        console.log("Record PricingDetails Discount: " + pricingDetail.getDiscount().toString());

                                        console.log("Record PricingDetails ID: " + pricingDetail.getId());

                                        console.log("Record PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Participants) {
                                    let participants: ZOHOCRMSDK.Records.Participants[] = value;

                                    participants.forEach(participant => {
                                        console.log("Record Participants Name: " + participant.getName());

                                        console.log("Record Participants Invited: " + participant.getInvited().toString());

                                        console.log("Record Participants ID: " + participant.getId());

                                        console.log("Record Participants Type: " + participant.getType());

                                        console.log("Record Participants Participant: " + participant.getParticipant());

                                        console.log("Record Participants Status: " + participant.getStatus());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Record) {
                                    let recordArray: ZOHOCRMSDK.Records.Record[] = value;

                                    recordArray.forEach(record => {
                                        Array.from(record.getKeyValues().keys()).forEach(key => {
                                            console.log(key + ": " + record.getKeyValues().get(key));
                                        });
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.LineTax) {
                                    let lineTaxes: ZOHOCRMSDK.Records.LineTax[] = value;

                                    lineTaxes.forEach(lineTax => {
                                        console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());

                                        console.log("Record ProductDetails LineTax Name: " + lineTax.getName());

                                        console.log("Record ProductDetails LineTax Id: " + lineTax.getId());

                                        console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Comment) {
                                    let comments: ZOHOCRMSDK.Records.Comment[] = value;

                                    comments.forEach(comment => {
                                        console.log("Record Comment CommentedBy: " + comment.getCommentedBy());

                                        console.log("Record Comment CommentedTime: " + comment.getCommentedTime().toString());

                                        console.log("Record Comment CommentContent: " + comment.getCommentContent());

                                        console.log("Record Comment Id: " + comment.getId());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Attachments.Attachment) {
                                    let attachments: ZOHOCRMSDK.Attachments.Attachment[] = value;

                                    attachments.forEach(attachment => {
                                        //Get the ID of each attachment
                                        console.log("Record Attachment ID: " + attachment.getId());

                                        //Get the owner User instance of each attachment
                                        let owner: ZOHOCRMSDK.Users.User = attachment.getOwner();

                                        //Check if owner is not null
                                        if (owner != null) {
                                            //Get the Name of the Owner
                                            console.log("Record Attachment Owner - Name: " + owner.getName());

                                            //Get the ID of the Owner
                                            console.log("Record Attachment Owner ID: " + owner.getId());

                                            //Get the Email of the Owner
                                            console.log("Record Attachment Owner Email: " + owner.getEmail());
                                        }

                                        //Get the modified time of each attachment
                                        console.log("Record Attachment Modified Time: " + attachment.getModifiedTime().toString());

                                        //Get the name of the File
                                        console.log("Record Attachment File Name: " + attachment.getFileName());

                                        //Get the created time of each attachment
                                        console.log("Record Attachment Created Time: " + attachment.getCreatedTime());

                                        //Get the Attachment file size
                                        console.log("Record Attachment File Size: " + attachment.getSize());

                                        //Get the parentId Record instance of each attachment
                                        let parentId: ZOHOCRMSDK.Records.Record = attachment.getParentId();

                                        //Check if parentId is not null
                                        if (parentId != null) {
                                            //Get the parent record Name of each attachment
                                            console.log("Record Attachment parent record Name: " + parentId.getKeyValue("name"));

                                            //Get the parent record ID of each attachment
                                            console.log("Record Attachment parent record ID: " + parentId.getId());
                                        }

                                        //Check if the attachment is Editable
                                        console.log("Record Attachment is Editable: " + attachment.getEditable().toString());

                                        //Get the file ID of each attachment
                                        console.log("Record Attachment File ID: " + attachment.getFileId());

                                        //Get the type of each attachment
                                        console.log("Record Attachment File Type: " + attachment.getType());

                                        //Get the seModule of each attachment
                                        console.log("Record Attachment seModule: " + attachment.getSeModule());

                                        //Get the modifiedBy User instance of each attachment
                                        let modifiedBy: ZOHOCRMSDK.Users.User = attachment.getModifiedBy();

                                        //Check if modifiedBy is not null
                                        if (modifiedBy != null) {
                                            //Get the Name of the modifiedBy User
                                            console.log("Record Attachment Modified By User-Name: " + modifiedBy.getName());

                                            //Get the ID of the modifiedBy User
                                            console.log("Record Attachment Modified By User-ID: " + modifiedBy.getId());

                                            //Get the Email of the modifiedBy User
                                            console.log("Record Attachment Modified By User-Email: " + modifiedBy.getEmail());
                                        }

                                        //Get the state of each attachment
                                        console.log("Record Attachment State: " + attachment.getState());

                                        //Get the createdBy User instance of each attachment
                                        let createdBy: ZOHOCRMSDK.Users.User = attachment.getCreatedBy();

                                        //Check if createdBy is not null
                                        if (createdBy != null) {
                                            //Get the name of the createdBy User
                                            console.log("Record Attachment Created By User-Name: " + createdBy.getName());

                                            //Get the ID of the createdBy User
                                            console.log("Record Attachment Created By User-ID: " + createdBy.getId());

                                            //Get the Email of the createdBy User
                                            console.log("Record Attachment Created By User-Email: " + createdBy.getEmail());
                                        }

                                        //Get the linkUrl of each attachment
                                        console.log("Record Attachment LinkUrl: " + attachment.getLinkUrl());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.ImageUpload) {
                                    let imageUploads: ZOHOCRMSDK.Records.ImageUpload[] = value;

                                    imageUploads.forEach(imageUpload => {
                                        console.log("Record " + keyName + " Description: " + imageUpload.getDescription());

                                        console.log("Record " + keyName + " PreviewId: " + imageUpload.getPreviewId());

                                        console.log("Record " + keyName + " File_Name: " + imageUpload.getFileName());

                                        console.log("Record " + keyName + " State: " + imageUpload.getState());

                                        console.log("Record " + keyName + " Size: " + imageUpload.getSize());

                                        console.log("Record " + keyName + " SequenceNumber: " + imageUpload.getSequenceNumber());

                                        console.log("Record " + keyName + " Id: " + imageUpload.getId());

                                        console.log("Record " + keyName + " FileId: " + imageUpload.getFileId());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Reminder) {
                                    let reminders: ZOHOCRMSDK.Records.Reminder[] = value;

                                    reminders.forEach(reminder => {
                                        console.log("Reminder Period: " + reminder.getPeriod());

                                        console.log("Reminder Unit: " + reminder.getUnit());
                                    });
                                }
                                else {
                                    console.log(keyName + ": " + value);
                                }
                            }
                        }
                        else if (value instanceof ZOHOCRMSDK.Users.User) {
                            console.log("Record " + keyName + " User-ID: " + value.getId());

                            console.log("Record " + keyName + " User-Name: " + value.getName());

                            console.log("Record " + keyName + " User-Email: " + value.getEmail());

                        }
                        else if (value instanceof ZOHOCRMSDK.Layouts.Layout) {
                            console.log(keyName + " ID: " + value.getId());

                            console.log(keyName + " Name: " + value.getName());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.Record) {
                            console.log(keyName + " Record ID: " + value.getId());

                            console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                        }
                        else if (value instanceof ZOHOCRMSDK.Choice) {
                            console.log(keyName + ": " + value.getValue());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.RemindAt) {
                            console.log(keyName + ": " + value.getAlarm());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.RecurringActivity) {
                            console.log(keyName);

                            console.log("RRULE: " + value.getRrule());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.Consent) {
                            console.log("Record Consent ID: " + value.getId());

                            //Get the Owner User instance of each attachment
                            let owner: ZOHOCRMSDK.Users.User = value.getOwner();

                            //Check if owner is not null
                            if (owner != null) {
                                //Get the name of the owner User
                                console.log("Record Consent Owner Name: " + owner.getName());

                                //Get the ID of the owner User
                                console.log("Record Consent Owner ID: " + owner.getId());

                                //Get the Email of the owner User
                                console.log("Record Consent Owner Email: " + owner.getEmail());
                            }

                            let consentCreatedBy: ZOHOCRMSDK.Users.User = value.getCreatedBy();

                            //Check if createdBy is not null
                            if (consentCreatedBy != null) {
                                //Get the name of the CreatedBy User
                                console.log("Record Consent CreatedBy Name: " + consentCreatedBy.getName());

                                //Get the ID of the CreatedBy User
                                console.log("Record Consent CreatedBy ID: " + consentCreatedBy.getId());

                                //Get the Email of the CreatedBy User
                                console.log("Record Consent CreatedBy Email: " + consentCreatedBy.getEmail());
                            }

                            let consentModifiedBy: ZOHOCRMSDK.Users.User = value.getModifiedBy();

                            //Check if createdBy is not null
                            if (consentModifiedBy != null) {
                                //Get the name of the ModifiedBy User
                                console.log("Record Consent ModifiedBy Name: " + consentModifiedBy.getName());

                                //Get the ID of the ModifiedBy User
                                console.log("Record Consent ModifiedBy ID: " + consentModifiedBy.getId());

                                //Get the Email of the ModifiedBy User
                                console.log("Record Consent ModifiedBy Email: " + consentModifiedBy.getEmail());
                            }

                            console.log("Record Consent CreatedTime: " + value.getCreatedTime());

                            console.log("Record Consent ModifiedTime: " + value.getModifiedTime());

                            console.log("Record Consent ContactThroughEmail: " + value.getContactThroughEmail());

                            console.log("Record Consent ContactThroughSocial: " + value.getContactThroughSocial());

                            console.log("Record Consent ContactThroughSurvey: " + value.getContactThroughSurvey());

                            console.log("Record Consent ContactThroughPhone: " + value.getContactThroughPhone());

                            console.log("Record Consent MailSentTime: " + value.getMailSentTime().toString());

                            console.log("Record Consent ConsentDate: " + value.getConsentDate().toString());

                            console.log("Record Consent ConsentRemarks: " + value.getConsentRemarks());

                            console.log("Record Consent ConsentThrough: " + value.getConsentThrough());

                            console.log("Record Consent DataProcessingBasis: " + value.getDataProcessingBasis());

                            //To get custom values
                            console.log("Record Consent Lawful Reason: " + value.getKeyValue("Lawful_Reason"));
                        }
                        else if (value instanceof Map) {
                            console.log(keyName);

                            Array.from(value.keys()).forEach(key => {
                                console.log(key + ": " + value.get(key));
                            });
                        }
                        else {
                            console.log(keyName + ": " + value);
                        }
                    }
                }

                //Get the obtained Info Object
                let info: ZOHOCRMSDK.Records.Info = responseObject.getInfo();

                if (info != null) {
                    if (info.getPerPage() != null) {
                        //Get the PerPage of the Info
                        console.log("RelatedRecord Info PerPage: " + info.getPerPage().toString());
                    }

                    if (info.getCount() != null) {
                        //Get the Count of the Info
                        console.log("RelatedRecord Info Count: " + info.getCount().toString());
                    }

                    if (info.getPage() != null) {
                        //Get the Page of the Info
                        console.log("RelatedRecord Info Page: " + info.getPage().toString());
                    }

                    if (info.getMoreRecords() != null) {
                        //Get the MoreRecords of the Info
                        console.log("RelatedRecord Info MoreRecords: " + info.getMoreRecords().toString());
                    }
                }
            }
            //Check if the request returned an exception
            else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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

    /**
     * <h3>Update Related Records Using External Id</h3>
     * This method is used to update the relation between the records and print the response.
     * @param moduleAPIName The API Name of the module to update related record.
     * @param externalValue
     * @param relatedListAPIName The API name of the related list.
     */
    public static async updateRelatedRecordsUsingExternalId(moduleAPIName: string, externalValue: string, relatedListAPIName: string) {
        //example
        //let moduleAPIName = "Products";
        // let recordId = 3409643798007n;
        // let relatedModuleAPIName = "Price_Books";
        let xExternal = "Leads.External,Products.Products_External";

        //Get instance of ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations Class that takes relatedListAPIName, moduleAPIName and xExternal as parameter
        let relatedRecordsOperations: ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName, xExternal);

        //Get instance of ZOHOCRMSDK.RelatedRecords.BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.RelatedRecords.BodyWrapper = new ZOHOCRMSDK.RelatedRecords.BodyWrapper();

        //Array to hold Record instances
        let recordsArray: ZOHOCRMSDK.Records.Record[] = [];

        //Get instance of Record Class
        let record1: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("Products_External", "AutomatedSDK");

        //Add Record instance to the array
        recordsArray.push(record1);

        let record2: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record2.addKeyValue("Products_External", "Products_External");

        //Add Record instance to the array
        recordsArray.push(record2);

        //Set the array to Records in ZOHOCRMSDK.RelatedRecords.BodyWrapper instance
        request.setData(recordsArray);

        //Call updateRelatedRecordsUsingExternalId method that takes externalValue and ZOHOCRMSDK.RelatedRecords.BodyWrapper instance
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel> = await relatedRecordsOperations.updateRelatedRecordsUsingExternalId(externalValue, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {

                //Check if expected ZOHOCRMSDK.RelatedRecords.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ActionWrapper) {

                    //Get the array of obtained ZOHOCRMSDK.RelatedRecords.ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.RelatedRecords.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {

                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.SuccessResponse) {

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
                        else if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.APIException) {

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
                else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {

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
     * <h3> Delete Related Records Using External Id</h3>
     * This method is used to delete the association between modules and print the response.
     * @param moduleAPIName The API Name of the module to delink related records.
     * @param externalValue
     * @param relatedListAPIName The API name of the related list
     * @param relatedListIds The array of related record IDs.
     */
    public static async deleteRelatedRecordsUsingExternalId(moduleAPIName: string, externalValue: string, relatedListAPIName: string, relatedListIds: string[]) {
        //example
        // let moduleAPIName = "Products";
        // let recordId = 3409643798007n;
        // let relatedModuleAPIName = "Price_Books";
        // let relatedIds = [34096432414001n, 34096432414002n, 34096432414020n];

        let xExternal = "Leads.External,Products.Products_External";

        //Get instance of ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations Class that takes relatedListAPIName, moduleAPIName and xExternal as parameter
        let relatedRecordsOperations: ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName, xExternal);

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters of Delink Records operation */
        for (let relatedListId of relatedListIds) {
            await paramInstance.add(ZOHOCRMSDK.RelatedRecords.DelinkRecordsParam.IDS, relatedListId);
        }

        //Call deleteRelatedRecordsUsingExternalId method that takes ZOHOCRMSDK.ParameterMap instance as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel> = await relatedRecordsOperations.deleteRelatedRecordsUsingExternalId(externalValue, paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.RelatedRecords.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.RelatedRecords.ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.RelatedRecords.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
     * <h3> Get Related Record </h3>
     * This method is used to get the single related list record and print the response.
     * @param moduleAPIName The API Name of the module to get related record.
     * @param recordId The ID of the record to be get Related List.
     * @param relatedistAPIName  The API name of the related list.
     * @param relatedListId The ID of the related record.
     * @param destinationFolder The absolute path of the folder to store the obtained file
     */
    public static async getRelatedRecord(moduleAPIName: string, recordId: bigint, relatedListAPIName: string, relatedListId: bigint, destinationFolder: string) {
        //example
        // let moduleAPIName = "Products";
        // let recordId = 3409643798007n;
        // let relatedModuleAPIName = "Price_Books";
        // let relatedListId = 34096432414001n;
        //let destinationFolder = "/Users/user/Desktop"

        //Get instance of ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations Class that takes moduleAPIName, recordId and relatedListAPIName as parameter
        let relatedRecordsOperations: ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        /* Possible parameters for Get Related Record operation */

        await headerInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordHeader.IF_MODIFIED_SINCE, new Date('June 15, 2020 05:35:32'));

        //Call getRelatedRecord method that takes headerInstance and relatedRecordId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedRecords.ResponseHandler.MasterModel> = await relatedRecordsOperations.getRelatedRecord(relatedListId, recordId, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.RelatedRecords.ResponseHandler.MasterModel = response.getObject();

            //Check if ZOHOCRMSDK.RelatedRecords.ResponseHandler instance is received
            if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ResponseWrapper) {
                //Get the array of obtained Record instances
                let records: ZOHOCRMSDK.Records.Record[] = responseObject.getData();

                for (let record of records) {
                    //Get the ID of each Record
                    console.log("RelatedRecord ID: " + record.getId());

                    //Get the createdBy User instance of each Record
                    let createdBy: ZOHOCRMSDK.Users.User = record.getCreatedBy();

                    //Check if createdBy is not null
                    if (createdBy != null) {
                        //Get the ID of the createdBy User
                        console.log("RelatedRecord Created By User-ID: " + createdBy.getId());

                        //Get the name of the createdBy User
                        console.log("RelatedRecord Created By User-Name: " + createdBy.getName());

                        //Get the Email of the createdBy User
                        console.log("RelatedRecord Created By User-Email: " + createdBy.getEmail());
                    }

                    //Get the CreatedTime of each Record
                    console.log("RelatedRecord CreatedTime: " + record.getCreatedTime());

                    //Get the modifiedBy User instance of each Record
                    let modifiedBy: ZOHOCRMSDK.Users.User = record.getModifiedBy();

                    //Check if modifiedBy is not null
                    if (modifiedBy != null) {
                        //Get the ID of the modifiedBy User
                        console.log("RelatedRecord Modified By User-ID: " + modifiedBy.getId());

                        //Get the name of the modifiedBy User
                        console.log("RelatedRecord Modified By User-Name: " + modifiedBy.getName());

                        //Get the Email of the modifiedBy User
                        console.log("RelatedRecord Modified By User-Email: " + modifiedBy.getEmail());
                    }

                    //Get the ModifiedTime of each Record
                    console.log("RelatedRecord ModifiedTime: " + record.getModifiedTime());

                    //Get the list of Tag instance each Record
                    let tags: ZOHOCRMSDK.Tags.Tag[] = record.getTag();

                    //Check if tags is not null
                    if (tags != null) {
                        tags.forEach(tag => {
                            //Get the Name of each Tag
                            console.log("RelatedRecord Tag Name: " + tag.getName());

                            //Get the Id of each Tag
                            console.log("RelatedRecord Tag ID: " + tag.getId());

                        });
                    }

                    //To get particular field value
                    console.log("RelatedRecord Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                    console.log("RelatedRecord KeyValues: ");

                    let keyValues: Map<string, any> = record.getKeyValues();

                    let keyArray: string[] = Array.from(keyValues.keys());

                    for (let keyName of keyArray) {
                        let value = keyValues.get(keyName);

                        if (Array.isArray(value)) {
                            if (value.length > 0) {
                                if (value[0] instanceof ZOHOCRMSDK.Records.FileDetails) {
                                    let fileDetails: ZOHOCRMSDK.Records.FileDetails[] = value;

                                    fileDetails.forEach(fileDetail => {
                                        //Get the Extn of each FileDetails
                                        console.log("Record FileDetails Extn: " + fileDetail.getExtn());

                                        //Get the IsPreviewAvailable of each FileDetails
                                        console.log("Record FileDetails IsPreviewAvailable: " + fileDetail.getIsPreviewAvailable());

                                        //Get the DownloadUrl of each FileDetails
                                        console.log("Record FileDetails DownloadUrl: " + fileDetail.getDownloadUrl());

                                        //Get the DeleteUrl of each FileDetails
                                        console.log("Record FileDetails DeleteUrl: " + fileDetail.getDeleteUrl());

                                        //Get the EntityId of each FileDetails
                                        console.log("Record FileDetails EntityId: " + fileDetail.getEntityId());

                                        //Get the Mode of each FileDetails
                                        console.log("Record FileDetails Mode: " + fileDetail.getMode());

                                        //Get the OriginalSizeByte of each FileDetails
                                        console.log("Record FileDetails OriginalSizeByte: " + fileDetail.getOriginalSizeByte());

                                        //Get the PreviewUrl of each FileDetails
                                        console.log("Record FileDetails PreviewUrl: " + fileDetail.getPreviewUrl());

                                        //Get the FileName of each FileDetails
                                        console.log("Record FileDetails FileName: " + fileDetail.getFileName());

                                        //Get the FileId of each FileDetails
                                        console.log("Record FileDetails FileId: " + fileDetail.getFileId());

                                        //Get the AttachmentId of each FileDetails
                                        console.log("Record FileDetails AttachmentId: " + fileDetail.getAttachmentId());

                                        //Get the FileSize of each FileDetails
                                        console.log("Record FileDetails FileSize: " + fileDetail.getFileSize());

                                        //Get the CreatorId of each FileDetails
                                        console.log("Record FileDetails CreatorId: " + fileDetail.getCreatorId());

                                        //Get the LinkDocs of each FileDetails
                                        console.log("Record FileDetails LinkDocs: " + fileDetail.getLinkDocs());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Choice) {
                                    let choiceArray: ZOHOCRMSDK.Choice<any>[] = value;

                                    console.log(keyName);

                                    console.log("Values");

                                    choiceArray.forEach(eachChoice => {
                                        console.log(eachChoice.getValue());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Tags.Tag) {
                                    let tags: ZOHOCRMSDK.Tags.Tag[] = value;

                                    tags.forEach(tag => {
                                        //Get the Name of each Tag
                                        console.log("Record Tag Name: " + tag.getName());

                                        //Get the Id of each Tag
                                        console.log("Record Tag ID: " + tag.getId());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.PricingDetails) {
                                    let pricingDetails: ZOHOCRMSDK.Records.PricingDetails[] = value;

                                    pricingDetails.forEach(pricingDetail => {
                                        console.log("Record PricingDetails ToRange: " + pricingDetail.getToRange().toString());

                                        console.log("Record PricingDetails Discount: " + pricingDetail.getDiscount().toString());

                                        console.log("Record PricingDetails ID: " + pricingDetail.getId());

                                        console.log("Record PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Participants) {
                                    let participants: ZOHOCRMSDK.Records.Participants[] = value;

                                    participants.forEach(participant => {
                                        console.log("Record Participants Name: " + participant.getName());

                                        console.log("Record Participants Invited: " + participant.getInvited().toString());

                                        console.log("Record Participants ID: " + participant.getId());

                                        console.log("Record Participants Type: " + participant.getType());

                                        console.log("Record Participants Participant: " + participant.getParticipant());

                                        console.log("Record Participants Status: " + participant.getStatus());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Record) {
                                    let recordArray: ZOHOCRMSDK.Records.Record[] = value;

                                    recordArray.forEach(record => {
                                        Array.from(record.getKeyValues().keys()).forEach(key => {
                                            console.log(key + ": " + record.getKeyValues().get(key));
                                        });
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.LineTax) {
                                    let lineTaxes: ZOHOCRMSDK.Records.LineTax[] = value;

                                    lineTaxes.forEach(lineTax => {
                                        console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());

                                        console.log("Record ProductDetails LineTax Name: " + lineTax.getName());

                                        console.log("Record ProductDetails LineTax Id: " + lineTax.getId());

                                        console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Comment) {
                                    let comments: ZOHOCRMSDK.Records.Comment[] = value;

                                    comments.forEach(comment => {
                                        console.log("Record Comment CommentedBy: " + comment.getCommentedBy());

                                        console.log("Record Comment CommentedTime: " + comment.getCommentedTime().toString());

                                        console.log("Record Comment CommentContent: " + comment.getCommentContent());

                                        console.log("Record Comment Id: " + comment.getId());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Attachments.Attachment) {
                                    let attachments: ZOHOCRMSDK.Attachments.Attachment[] = value;

                                    attachments.forEach(attachment => {
                                        //Get the ID of each attachment
                                        console.log("Record Attachment ID: " + attachment.getId());

                                        //Get the owner User instance of each attachment
                                        let owner: ZOHOCRMSDK.Users.User = attachment.getOwner();

                                        //Check if owner is not null
                                        if (owner != null) {
                                            //Get the Name of the Owner
                                            console.log("Record Attachment Owner - Name: " + owner.getName());

                                            //Get the ID of the Owner
                                            console.log("Record Attachment Owner ID: " + owner.getId());

                                            //Get the Email of the Owner
                                            console.log("Record Attachment Owner Email: " + owner.getEmail());
                                        }

                                        //Get the modified time of each attachment
                                        console.log("Record Attachment Modified Time: " + attachment.getModifiedTime().toString());

                                        //Get the name of the File
                                        console.log("Record Attachment File Name: " + attachment.getFileName());

                                        //Get the created time of each attachment
                                        console.log("Record Attachment Created Time: " + attachment.getCreatedTime());

                                        //Get the Attachment file size
                                        console.log("Record Attachment File Size: " + attachment.getSize());

                                        //Get the parentId Record instance of each attachment
                                        let parentId: ZOHOCRMSDK.Records.Record = attachment.getParentId();

                                        //Check if parentId is not null
                                        if (parentId != null) {
                                            //Get the parent record Name of each attachment
                                            console.log("Record Attachment parent record Name: " + parentId.getKeyValue("name"));

                                            //Get the parent record ID of each attachment
                                            console.log("Record Attachment parent record ID: " + parentId.getId());
                                        }

                                        //Check if the attachment is Editable
                                        console.log("Record Attachment is Editable: " + attachment.getEditable().toString());

                                        //Get the file ID of each attachment
                                        console.log("Record Attachment File ID: " + attachment.getFileId());

                                        //Get the type of each attachment
                                        console.log("Record Attachment File Type: " + attachment.getType());

                                        //Get the seModule of each attachment
                                        console.log("Record Attachment seModule: " + attachment.getSeModule());

                                        //Get the modifiedBy User instance of each attachment
                                        let modifiedBy: ZOHOCRMSDK.Users.User = attachment.getModifiedBy();

                                        //Check if modifiedBy is not null
                                        if (modifiedBy != null) {
                                            //Get the Name of the modifiedBy User
                                            console.log("Record Attachment Modified By User-Name: " + modifiedBy.getName());

                                            //Get the ID of the modifiedBy User
                                            console.log("Record Attachment Modified By User-ID: " + modifiedBy.getId());

                                            //Get the Email of the modifiedBy User
                                            console.log("Record Attachment Modified By User-Email: " + modifiedBy.getEmail());
                                        }

                                        //Get the state of each attachment
                                        console.log("Record Attachment State: " + attachment.getState());

                                        //Get the createdBy User instance of each attachment
                                        let createdBy: ZOHOCRMSDK.Users.User = attachment.getCreatedBy();

                                        //Check if createdBy is not null
                                        if (createdBy != null) {
                                            //Get the name of the createdBy User
                                            console.log("Record Attachment Created By User-Name: " + createdBy.getName());

                                            //Get the ID of the createdBy User
                                            console.log("Record Attachment Created By User-ID: " + createdBy.getId());

                                            //Get the Email of the createdBy User
                                            console.log("Record Attachment Created By User-Email: " + createdBy.getEmail());
                                        }

                                        //Get the linkUrl of each attachment
                                        console.log("Record Attachment LinkUrl: " + attachment.getLinkUrl());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.ImageUpload) {
                                    let imageUploads: ZOHOCRMSDK.Records.ImageUpload[] = value;

                                    imageUploads.forEach(imageUpload => {
                                        console.log("Record " + keyName + " Description: " + imageUpload.getDescription());

                                        console.log("Record " + keyName + " PreviewId: " + imageUpload.getPreviewId());

                                        console.log("Record " + keyName + " File_Name: " + imageUpload.getFileName());

                                        console.log("Record " + keyName + " State: " + imageUpload.getState());

                                        console.log("Record " + keyName + " Size: " + imageUpload.getSize());

                                        console.log("Record " + keyName + " SequenceNumber: " + imageUpload.getSequenceNumber());

                                        console.log("Record " + keyName + " Id: " + imageUpload.getId());

                                        console.log("Record " + keyName + " FileId: " + imageUpload.getFileId());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Reminder) {
                                    let reminders: ZOHOCRMSDK.Records.Reminder[] = value;

                                    reminders.forEach(reminder => {
                                        console.log("Reminder Period: " + reminder.getPeriod());

                                        console.log("Reminder Unit: " + reminder.getUnit());
                                    });
                                }
                                else {
                                    console.log(keyName + ": " + value);
                                }
                            }
                        }
                        else if (value instanceof ZOHOCRMSDK.Users.User) {
                            console.log("Record " + keyName + " User-ID: " + value.getId());

                            console.log("Record " + keyName + " User-Name: " + value.getName());

                            console.log("Record " + keyName + " User-Email: " + value.getEmail());

                        }
                        else if (value instanceof ZOHOCRMSDK.Layouts.Layout) {
                            console.log(keyName + " ID: " + value.getId());

                            console.log(keyName + " Name: " + value.getName());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.Record) {
                            console.log(keyName + " Record ID: " + value.getId());

                            console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                        }
                        else if (value instanceof ZOHOCRMSDK.Choice) {
                            console.log(keyName + ": " + value.getValue());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.RemindAt) {
                            console.log(keyName + ": " + value.getAlarm());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.RecurringActivity) {
                            console.log(keyName);

                            console.log("RRULE: " + value.getRrule());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.Consent) {
                            console.log("Record Consent ID: " + value.getId());

                            //Get the Owner User instance of each attachment
                            let owner: ZOHOCRMSDK.Users.User = value.getOwner();

                            //Check if owner is not null
                            if (owner != null) {
                                //Get the name of the owner User
                                console.log("Record Consent Owner Name: " + owner.getName());

                                //Get the ID of the owner User
                                console.log("Record Consent Owner ID: " + owner.getId());

                                //Get the Email of the owner User
                                console.log("Record Consent Owner Email: " + owner.getEmail());
                            }

                            let consentCreatedBy: ZOHOCRMSDK.Users.User = value.getCreatedBy();

                            //Check if createdBy is not null
                            if (consentCreatedBy != null) {
                                //Get the name of the CreatedBy User
                                console.log("Record Consent CreatedBy Name: " + consentCreatedBy.getName());

                                //Get the ID of the CreatedBy User
                                console.log("Record Consent CreatedBy ID: " + consentCreatedBy.getId());

                                //Get the Email of the CreatedBy User
                                console.log("Record Consent CreatedBy Email: " + consentCreatedBy.getEmail());
                            }

                            let consentModifiedBy: ZOHOCRMSDK.Users.User = value.getModifiedBy();

                            //Check if createdBy is not null
                            if (consentModifiedBy != null) {
                                //Get the name of the ModifiedBy User
                                console.log("Record Consent ModifiedBy Name: " + consentModifiedBy.getName());

                                //Get the ID of the ModifiedBy User
                                console.log("Record Consent ModifiedBy ID: " + consentModifiedBy.getId());

                                //Get the Email of the ModifiedBy User
                                console.log("Record Consent ModifiedBy Email: " + consentModifiedBy.getEmail());
                            }

                            console.log("Record Consent CreatedTime: " + value.getCreatedTime());

                            console.log("Record Consent ModifiedTime: " + value.getModifiedTime());

                            console.log("Record Consent ContactThroughEmail: " + value.getContactThroughEmail());

                            console.log("Record Consent ContactThroughSocial: " + value.getContactThroughSocial());

                            console.log("Record Consent ContactThroughSurvey: " + value.getContactThroughSurvey());

                            console.log("Record Consent ContactThroughPhone: " + value.getContactThroughPhone());

                            console.log("Record Consent MailSentTime: " + value.getMailSentTime().toString());

                            console.log("Record Consent ConsentDate: " + value.getConsentDate().toString());

                            console.log("Record Consent ConsentRemarks: " + value.getConsentRemarks());

                            console.log("Record Consent ConsentThrough: " + value.getConsentThrough());

                            console.log("Record Consent DataProcessingBasis: " + value.getDataProcessingBasis());

                            //To get custom values
                            console.log("Record Consent Lawful Reason: " + value.getKeyValue("Lawful_Reason"));
                        }
                        else if (value instanceof Map) {
                            console.log(keyName);

                            Array.from(value.keys()).forEach(key => {
                                console.log(key + ": " + value.get(key));
                            });
                        }
                        else {
                            console.log(keyName + ": " + value);
                        }
                    }
                }
            }
            //Check if expected FileBodyWrapper instance is received
            else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.FileBodyWrapper) {
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
            else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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

    /**
     * <h3> Update Related Record </h3>
     * This method is used to update the relation between the records and print the response.
     * @param moduleAPIName The API Name of the module to get related record.
     * @param recordId The ID of the record to be get Related List.
     * @param relatedListAPIName  The API name of the related list.
     * @param relatedListId The ID of the related record.
     */
    public static async updateRelatedRecord(moduleAPIName: string, recordId: bigint, relatedListAPIName: string, relatedListId: bigint) {
        //example
        // let moduleAPIName = "Products";
        // let recordId = 3409643798007n;
        // let relatedModuleAPIName = "Price_Books";
        // let relatedId = 34096432414001n;

        //Get instance of ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations Class that takes moduleAPIName, recordId and relatedListAPIName as parameter
        let relatedRecordsOperations: ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);

        //Get instance of ZOHOCRMSDK.RelatedRecords.BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.RelatedRecords.BodyWrapper = new ZOHOCRMSDK.RelatedRecords.BodyWrapper();

        //Array to hold Record instances
        let recordsArray: ZOHOCRMSDK.Records.Record[] = [];

        //Get instance of Record class
        let record1: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("list_price", 50.56);

        //Add the record to array
        recordsArray.push(record1);

        //Set the array to data of ZOHOCRMSDK.RelatedRecords.BodyWrapper instance
        request.setData(recordsArray);

        //Call updateRelatedRecord method that takes ZOHOCRMSDK.RelatedRecords.BodyWrapper instance, relatedRecordId as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel> = await relatedRecordsOperations.updateRelatedRecord(relatedListId, recordId, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.RelatedRecords.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.RelatedRecords.ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.RelatedRecords.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
     * <h3> Delink Record </h3>
     * This method is used to delete the association between modules and print the response.s
     * @param moduleAPIName The API Name of the module to delink related record.
     * @param recordId The ID of the record
     * @param relatedListAPIName  The API name of the related list.
     * @param relatedListId The ID of the related record.
     */
    public static async deLinkRecord(moduleAPIName: string, recordId: bigint, relatedListAPIName: string, relatedListId: bigint) {
        //example
        // let moduleAPIName = "Products";
        // let recordId = 3409643798007n;
        // let relatedModuleAPIName = "Price_Books";
        // let relatedListId = 34096432414001n;

        //Get instance of ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations Class that takes moduleAPIName, recordId and relatedListAPIName as parameter
        let relatedRecordsOperations: ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName);

        //Call delinkRecord method that takes relatedListId as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel> = await relatedRecordsOperations.delinkRecord(relatedListId, recordId);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.RelatedRecords.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.RelatedRecords.ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.RelatedRecords.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
   * <h3> Get Related Record Using External Id </h3>
   * This method is used to get the single related list record and print the response.
   * @param moduleAPIName The API Name of the module to get related record.
   * @param externalValue 
   * @param relatedistAPIName  The API name of the related list.
   * @param externalFieldValue
   * @param destinationFolder The absolute path of the folder to store the obtained file
   */
    public static async getRelatedRecordUsingExternalId(moduleAPIName: string, externalValue: string, relatedListAPIName: string, externalFieldValue: string, destinationFolder: string) {
        //example
        // let moduleAPIName = "Products";
        // let externalValue = 3409643798007n;
        // let relatedModuleAPIName = "Price_Books";
        // let externalFieldValue = 34096432414001n;
        //let destinationFolder = "/Users/user/Desktop";

        let xExternal = "Leads.External,Products.Products_External";

        //Get instance of ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations Class that takes moduleAPIName, recordId and relatedListAPIName as parameter
        let relatedRecordsOperations: ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName, xExternal);

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        /* Possible parameters for Get Related Record operation */

        await headerInstance.add(ZOHOCRMSDK.RelatedRecords.GetRelatedRecordHeader.IF_MODIFIED_SINCE, new Date('June 15, 2020 05:35:32'));

        //Call getRelatedRecordUsingExternalId method that takes externalFieldValue, externalValue and headerInstance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedRecords.ResponseHandler.MasterModel> = await relatedRecordsOperations.getRelatedRecordUsingExternalId(externalFieldValue, externalValue, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.RelatedRecords.ResponseHandler.MasterModel = response.getObject();

            //Check if ZOHOCRMSDK.RelatedRecords.ResponseHandler instance is received
            if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ResponseWrapper) {
                //Get the array of obtained Record instances
                let records: ZOHOCRMSDK.Records.Record[] = responseObject.getData();

                for (let record of records) {
                    //Get the ID of each Record
                    console.log("RelatedRecord ID: " + record.getId());

                    //Get the createdBy User instance of each Record
                    let createdBy: ZOHOCRMSDK.Users.User = record.getCreatedBy();

                    //Check if createdBy is not null
                    if (createdBy != null) {
                        //Get the ID of the createdBy User
                        console.log("RelatedRecord Created By User-ID: " + createdBy.getId());

                        //Get the name of the createdBy User
                        console.log("RelatedRecord Created By User-Name: " + createdBy.getName());

                        //Get the Email of the createdBy User
                        console.log("RelatedRecord Created By User-Email: " + createdBy.getEmail());
                    }

                    //Get the CreatedTime of each Record
                    console.log("RelatedRecord CreatedTime: " + record.getCreatedTime());

                    //Get the modifiedBy User instance of each Record
                    let modifiedBy: ZOHOCRMSDK.Users.User = record.getModifiedBy();

                    //Check if modifiedBy is not null
                    if (modifiedBy != null) {
                        //Get the ID of the modifiedBy User
                        console.log("RelatedRecord Modified By User-ID: " + modifiedBy.getId());

                        //Get the name of the modifiedBy User
                        console.log("RelatedRecord Modified By User-Name: " + modifiedBy.getName());

                        //Get the Email of the modifiedBy User
                        console.log("RelatedRecord Modified By User-Email: " + modifiedBy.getEmail());
                    }

                    //Get the ModifiedTime of each Record
                    console.log("RelatedRecord ModifiedTime: " + record.getModifiedTime());

                    //Get the list of Tag instance each Record
                    let tags: ZOHOCRMSDK.Tags.Tag[] = record.getTag();

                    //Check if tags is not null
                    if (tags != null) {
                        tags.forEach(tag => {
                            //Get the Name of each Tag
                            console.log("RelatedRecord Tag Name: " + tag.getName());

                            //Get the Id of each Tag
                            console.log("RelatedRecord Tag ID: " + tag.getId());
                        });
                    }

                    //To get particular field value
                    console.log("RelatedRecord Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                    console.log("RelatedRecord KeyValues: ");

                    let keyValues: Map<string, any> = record.getKeyValues();

                    let keyArray: string[] = Array.from(keyValues.keys());
                    for (let keyName of keyArray) {
                        let value = keyValues.get(keyName);

                        if (Array.isArray(value)) {
                            if (value.length > 0) {
                                if (value[0] instanceof ZOHOCRMSDK.Records.FileDetails) {
                                    let fileDetails: ZOHOCRMSDK.Records.FileDetails[] = value;

                                    fileDetails.forEach(fileDetail => {
                                        //Get the Extn of each FileDetails
                                        console.log("Record FileDetails Extn: " + fileDetail.getExtn());

                                        //Get the IsPreviewAvailable of each FileDetails
                                        console.log("Record FileDetails IsPreviewAvailable: " + fileDetail.getIsPreviewAvailable());

                                        //Get the DownloadUrl of each FileDetails
                                        console.log("Record FileDetails DownloadUrl: " + fileDetail.getDownloadUrl());

                                        //Get the DeleteUrl of each FileDetails
                                        console.log("Record FileDetails DeleteUrl: " + fileDetail.getDeleteUrl());

                                        //Get the EntityId of each FileDetails
                                        console.log("Record FileDetails EntityId: " + fileDetail.getEntityId());

                                        //Get the Mode of each FileDetails
                                        console.log("Record FileDetails Mode: " + fileDetail.getMode());

                                        //Get the OriginalSizeByte of each FileDetails
                                        console.log("Record FileDetails OriginalSizeByte: " + fileDetail.getOriginalSizeByte());

                                        //Get the PreviewUrl of each FileDetails
                                        console.log("Record FileDetails PreviewUrl: " + fileDetail.getPreviewUrl());

                                        //Get the FileName of each FileDetails
                                        console.log("Record FileDetails FileName: " + fileDetail.getFileName());

                                        //Get the FileId of each FileDetails
                                        console.log("Record FileDetails FileId: " + fileDetail.getFileId());

                                        //Get the AttachmentId of each FileDetails
                                        console.log("Record FileDetails AttachmentId: " + fileDetail.getAttachmentId());

                                        //Get the FileSize of each FileDetails
                                        console.log("Record FileDetails FileSize: " + fileDetail.getFileSize());

                                        //Get the CreatorId of each FileDetails
                                        console.log("Record FileDetails CreatorId: " + fileDetail.getCreatorId());

                                        //Get the LinkDocs of each FileDetails
                                        console.log("Record FileDetails LinkDocs: " + fileDetail.getLinkDocs());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Choice) {
                                    let choiceArray: ZOHOCRMSDK.Choice<any>[] = value;

                                    console.log(keyName);

                                    console.log("Values");

                                    choiceArray.forEach(eachChoice => {
                                        console.log(eachChoice.getValue());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Tags.Tag) {
                                    let tags: ZOHOCRMSDK.Tags.Tag[] = value;

                                    tags.forEach(tag => {
                                        //Get the Name of each Tag
                                        console.log("Record Tag Name: " + tag.getName());

                                        //Get the Id of each Tag
                                        console.log("Record Tag ID: " + tag.getId());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.PricingDetails) {
                                    let pricingDetails: ZOHOCRMSDK.Records.PricingDetails[] = value;

                                    pricingDetails.forEach(pricingDetail => {
                                        console.log("Record PricingDetails ToRange: " + pricingDetail.getToRange().toString());

                                        console.log("Record PricingDetails Discount: " + pricingDetail.getDiscount().toString());

                                        console.log("Record PricingDetails ID: " + pricingDetail.getId());

                                        console.log("Record PricingDetails FromRange: " + pricingDetail.getFromRange().toString());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Participants) {
                                    let participants: ZOHOCRMSDK.Records.Participants[] = value;

                                    participants.forEach(participant => {
                                        console.log("Record Participants Name: " + participant.getName());

                                        console.log("Record Participants Invited: " + participant.getInvited().toString());

                                        console.log("Record Participants ID: " + participant.getId());

                                        console.log("Record Participants Type: " + participant.getType());

                                        console.log("Record Participants Participant: " + participant.getParticipant());

                                        console.log("Record Participants Status: " + participant.getStatus());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Record) {
                                    let recordArray: ZOHOCRMSDK.Records.Record[] = value;

                                    recordArray.forEach(record => {
                                        Array.from(record.getKeyValues().keys()).forEach(key => {
                                            console.log(key + ": " + record.getKeyValues().get(key));
                                        });
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.LineTax) {
                                    let lineTaxes: ZOHOCRMSDK.Records.LineTax[] = value;

                                    lineTaxes.forEach(lineTax => {
                                        console.log("Record ProductDetails LineTax Percentage: " + lineTax.getPercentage().toString());

                                        console.log("Record ProductDetails LineTax Name: " + lineTax.getName());

                                        console.log("Record ProductDetails LineTax Id: " + lineTax.getId());

                                        console.log("Record ProductDetails LineTax Value: " + lineTax.getValue().toString());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Comment) {
                                    let comments: ZOHOCRMSDK.Records.Comment[] = value;

                                    comments.forEach(comment => {
                                        console.log("Record Comment CommentedBy: " + comment.getCommentedBy());

                                        console.log("Record Comment CommentedTime: " + comment.getCommentedTime().toString());

                                        console.log("Record Comment CommentContent: " + comment.getCommentContent());

                                        console.log("Record Comment Id: " + comment.getId());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Attachments.Attachment) {
                                    let attachments: ZOHOCRMSDK.Attachments.Attachment[] = value;

                                    attachments.forEach(attachment => {
                                        //Get the ID of each attachment
                                        console.log("Record Attachment ID: " + attachment.getId());

                                        //Get the owner User instance of each attachment
                                        let owner: ZOHOCRMSDK.Users.User = attachment.getOwner();

                                        //Check if owner is not null
                                        if (owner != null) {
                                            //Get the Name of the Owner
                                            console.log("Record Attachment Owner - Name: " + owner.getName());

                                            //Get the ID of the Owner
                                            console.log("Record Attachment Owner ID: " + owner.getId());

                                            //Get the Email of the Owner
                                            console.log("Record Attachment Owner Email: " + owner.getEmail());
                                        }

                                        //Get the modified time of each attachment
                                        console.log("Record Attachment Modified Time: " + attachment.getModifiedTime().toString());

                                        //Get the name of the File
                                        console.log("Record Attachment File Name: " + attachment.getFileName());

                                        //Get the created time of each attachment
                                        console.log("Record Attachment Created Time: " + attachment.getCreatedTime());

                                        //Get the Attachment file size
                                        console.log("Record Attachment File Size: " + attachment.getSize());

                                        //Get the parentId Record instance of each attachment
                                        let parentId: ZOHOCRMSDK.Records.Record = attachment.getParentId();

                                        //Check if parentId is not null
                                        if (parentId != null) {
                                            //Get the parent record Name of each attachment
                                            console.log("Record Attachment parent record Name: " + parentId.getKeyValue("name"));

                                            //Get the parent record ID of each attachment
                                            console.log("Record Attachment parent record ID: " + parentId.getId());
                                        }

                                        //Check if the attachment is Editable
                                        console.log("Record Attachment is Editable: " + attachment.getEditable().toString());

                                        //Get the file ID of each attachment
                                        console.log("Record Attachment File ID: " + attachment.getFileId());

                                        //Get the type of each attachment
                                        console.log("Record Attachment File Type: " + attachment.getType());

                                        //Get the seModule of each attachment
                                        console.log("Record Attachment seModule: " + attachment.getSeModule());

                                        //Get the modifiedBy User instance of each attachment
                                        let modifiedBy: ZOHOCRMSDK.Users.User = attachment.getModifiedBy();

                                        //Check if modifiedBy is not null
                                        if (modifiedBy != null) {
                                            //Get the Name of the modifiedBy User
                                            console.log("Record Attachment Modified By User-Name: " + modifiedBy.getName());

                                            //Get the ID of the modifiedBy User
                                            console.log("Record Attachment Modified By User-ID: " + modifiedBy.getId());

                                            //Get the Email of the modifiedBy User
                                            console.log("Record Attachment Modified By User-Email: " + modifiedBy.getEmail());
                                        }

                                        //Get the state of each attachment
                                        console.log("Record Attachment State: " + attachment.getState());

                                        //Get the createdBy User instance of each attachment
                                        let createdBy: ZOHOCRMSDK.Users.User = attachment.getCreatedBy();

                                        //Check if createdBy is not null
                                        if (createdBy != null) {
                                            //Get the name of the createdBy User
                                            console.log("Record Attachment Created By User-Name: " + createdBy.getName());

                                            //Get the ID of the createdBy User
                                            console.log("Record Attachment Created By User-ID: " + createdBy.getId());

                                            //Get the Email of the createdBy User
                                            console.log("Record Attachment Created By User-Email: " + createdBy.getEmail());
                                        }

                                        //Get the linkUrl of each attachment
                                        console.log("Record Attachment LinkUrl: " + attachment.getLinkUrl());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.ImageUpload) {
                                    let imageUploads: ZOHOCRMSDK.Records.ImageUpload[] = value;

                                    imageUploads.forEach(imageUpload => {
                                        console.log("Record " + keyName + " Description: " + imageUpload.getDescription());

                                        console.log("Record " + keyName + " PreviewId: " + imageUpload.getPreviewId());

                                        console.log("Record " + keyName + " File_Name: " + imageUpload.getFileName());

                                        console.log("Record " + keyName + " State: " + imageUpload.getState());

                                        console.log("Record " + keyName + " Size: " + imageUpload.getSize());

                                        console.log("Record " + keyName + " SequenceNumber: " + imageUpload.getSequenceNumber());

                                        console.log("Record " + keyName + " Id: " + imageUpload.getId());

                                        console.log("Record " + keyName + " FileId: " + imageUpload.getFileId());
                                    });
                                }
                                else if (value[0] instanceof ZOHOCRMSDK.Records.Reminder) {
                                    let reminders: ZOHOCRMSDK.Records.Reminder[] = value;

                                    reminders.forEach(reminder => {
                                        console.log("Reminder Period: " + reminder.getPeriod());

                                        console.log("Reminder Unit: " + reminder.getUnit());
                                    });
                                }
                                else {
                                    console.log(keyName + ": " + value);
                                }
                            }
                        }
                        else if (value instanceof ZOHOCRMSDK.Users.User) {
                            console.log("Record " + keyName + " User-ID: " + value.getId());

                            console.log("Record " + keyName + " User-Name: " + value.getName());

                            console.log("Record " + keyName + " User-Email: " + value.getEmail());

                        }
                        else if (value instanceof ZOHOCRMSDK.Layouts.Layout) {
                            console.log(keyName + " ID: " + value.getId());

                            console.log(keyName + " Name: " + value.getName());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.Record) {
                            console.log(keyName + " Record ID: " + value.getId());

                            console.log(keyName + " Record Name: " + value.getKeyValue("name"));
                        }
                        else if (value instanceof ZOHOCRMSDK.Choice) {
                            console.log(keyName + ": " + value.getValue());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.RemindAt) {
                            console.log(keyName + ": " + value.getAlarm());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.RecurringActivity) {
                            console.log(keyName);

                            console.log("RRULE: " + value.getRrule());
                        }
                        else if (value instanceof ZOHOCRMSDK.Records.Consent) {
                            console.log("Record Consent ID: " + value.getId());

                            //Get the Owner User instance of each attachment
                            let owner: ZOHOCRMSDK.Users.User = value.getOwner();

                            //Check if owner is not null
                            if (owner != null) {
                                //Get the name of the owner User
                                console.log("Record Consent Owner Name: " + owner.getName());

                                //Get the ID of the owner User
                                console.log("Record Consent Owner ID: " + owner.getId());

                                //Get the Email of the owner User
                                console.log("Record Consent Owner Email: " + owner.getEmail());
                            }

                            let consentCreatedBy: ZOHOCRMSDK.Users.User = value.getCreatedBy();

                            //Check if createdBy is not null
                            if (consentCreatedBy != null) {
                                //Get the name of the CreatedBy User
                                console.log("Record Consent CreatedBy Name: " + consentCreatedBy.getName());

                                //Get the ID of the CreatedBy User
                                console.log("Record Consent CreatedBy ID: " + consentCreatedBy.getId());

                                //Get the Email of the CreatedBy User
                                console.log("Record Consent CreatedBy Email: " + consentCreatedBy.getEmail());
                            }

                            let consentModifiedBy: ZOHOCRMSDK.Users.User = value.getModifiedBy();

                            //Check if createdBy is not null
                            if (consentModifiedBy != null) {
                                //Get the name of the ModifiedBy User
                                console.log("Record Consent ModifiedBy Name: " + consentModifiedBy.getName());

                                //Get the ID of the ModifiedBy User
                                console.log("Record Consent ModifiedBy ID: " + consentModifiedBy.getId());

                                //Get the Email of the ModifiedBy User
                                console.log("Record Consent ModifiedBy Email: " + consentModifiedBy.getEmail());
                            }

                            console.log("Record Consent CreatedTime: " + value.getCreatedTime());

                            console.log("Record Consent ModifiedTime: " + value.getModifiedTime());

                            console.log("Record Consent ContactThroughEmail: " + value.getContactThroughEmail());

                            console.log("Record Consent ContactThroughSocial: " + value.getContactThroughSocial());

                            console.log("Record Consent ContactThroughSurvey: " + value.getContactThroughSurvey());

                            console.log("Record Consent ContactThroughPhone: " + value.getContactThroughPhone());

                            console.log("Record Consent MailSentTime: " + value.getMailSentTime().toString());

                            console.log("Record Consent ConsentDate: " + value.getConsentDate().toString());

                            console.log("Record Consent ConsentRemarks: " + value.getConsentRemarks());

                            console.log("Record Consent ConsentThrough: " + value.getConsentThrough());

                            console.log("Record Consent DataProcessingBasis: " + value.getDataProcessingBasis());

                            //To get custom values
                            console.log("Record Consent Lawful Reason: " + value.getKeyValue("Lawful_Reason"));
                        }
                        else if (value instanceof Map) {
                            console.log(keyName);

                            Array.from(value.keys()).forEach(key => {
                                console.log(key + ": " + value.get(key));
                            });
                        }
                        else {
                            console.log(keyName + ": " + value);
                        }
                    }
                }
            }
            //Check if expected FileBodyWrapper instance is received
            else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.FileBodyWrapper) {
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
            else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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

    /**
     * <h3> Update Related Record Using External Id </h3>
     * This method is used to update the relation between the records and print the response.
     * @param moduleAPIName The API Name of the module to get related record.
     * @param externalValue
     * @param relatedListAPIName  The API name of the related list.
     * @param externalFieldValue
     */
    public static async updateRelatedRecordUsingExternalId(moduleAPIName: string, externalValue: string, relatedListAPIName: string, externalFieldValue: string) {
        //example
        // let moduleAPIName = "Products";
        // let externalValue = 3409643798007n;
        // let relatedModuleAPIName = "Price_Books";
        // let externalFieldValue = 34096432414001n;
        let xExternal = "Leads.External,Products.Products_External";

        //Get instance of ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations Class that takes moduleAPIName, recordId and relatedListAPIName as parameter
        let relatedRecordsOperations: ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName, xExternal);

        //Get instance of ZOHOCRMSDK.RelatedRecords.BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.RelatedRecords.BodyWrapper = new ZOHOCRMSDK.RelatedRecords.BodyWrapper();

        //Array to hold Record instances
        let recordsArray: ZOHOCRMSDK.Records.Record[] = [];

        //Get instance of Record class
        let record1: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("list_price", 50.56);

        //Add the record to array
        recordsArray.push(record1);

        //Set the array to data of ZOHOCRMSDK.RelatedRecords.BodyWrapper instance
        request.setData(recordsArray);

        //Call updateRelatedRecordUsingExternalId method that takes externalFieldValue, externalValue and ZOHOCRMSDK.RelatedRecords.BodyWrapper instance parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel> = await relatedRecordsOperations.updateRelatedRecordUsingExternalId(externalFieldValue, externalValue, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.RelatedRecords.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.RelatedRecords.ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.RelatedRecords.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
     * <h3> Delink Record Using External Id </h3>
     * This method is used to delete the association between modules and print the response.s
     * @param moduleAPIName The API Name of the module to delink related record.
     * @param externalValue
     * @param relatedListAPIName  The API name of the related list.
     * @param externalFieldValue
     */
    public static async deleteRelatedRecordUsingExternalId(moduleAPIName: string, externalValue: string, relatedListAPIName: string, externalFieldValue: string) {
        //example
        // let moduleAPIName = "Products";
        // let recordId = 3409643798007n;
        // let relatedModuleAPIName = "Price_Books";
        // let relatedListId = 34096432414001n;
        let xExternal = "Leads.External,Products.Products_External";

        //Get instance of ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations Class that takes relatedListAPIName, moduleAPIName and xExternal as parameter
        let relatedRecordsOperations: ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations = new ZOHOCRMSDK.RelatedRecords.RelatedRecordsOperations(relatedListAPIName, moduleAPIName, xExternal);

        //Call deleteRelatedRecordUsingExternalId method that takes externalFieldValue and externalValue as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel> = await relatedRecordsOperations.deleteRelatedRecordUsingExternalId(externalFieldValue, externalValue);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.RelatedRecords.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ZOHOCRMSDK.RelatedRecords.ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.ActionWrapper) {
                    //Get the array of obtained ZOHOCRMSDK.RelatedRecords.ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.RelatedRecords.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.RelatedRecords.APIException) {
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