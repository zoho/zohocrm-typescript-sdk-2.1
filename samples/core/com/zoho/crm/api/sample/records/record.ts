import * as fs from "fs";
import * as path from "path";
import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class Records {
    /**
     * <h3> Get Record</h3>
     * This method is used to get a single record of a module with ID and print the response.
     * @param moduleAPIName The API Name of the record's module.
     * @param recordId The ID of the record to be obtained.
     * @param {String} destinationFolder The absolute path of the destination folder to store the attachment
     */
    public static async getRecord(moduleAPIName: string, recordId: bigint, destinationFolder: string) {
        //example
        //let moduleAPIName = "Contacts";
        //let recordId = 34770616603276n;

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters for Get Record operation*/
        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.APPROVED, "true");

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.CONVERTED, "false");

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.CVID, "3409643087501");

        // let fieldsArray = ["id", "Company"];

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.FIELDS, fieldsArray.toString());

        // /* Month is zero-indexed.
        // 0 -> January ..... 11 -> December
        // */
        // let startDateTime = new Date(2020, 7, 10, 10, 10, 10);

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.STARTDATETIME, startDateTime);

        // let endDateTime = new Date(2020, 7, 10, 12, 12, 12);

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.ENDDATETIME, endDateTime);

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.TERRITORY_ID, "3409643505351");

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.INCLUDE_CHILD, "true");

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.UID, "3409643500741");

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        /* Possible headers for Get Record operation*/
        // await headerInstance.add(ZOHOCRMSDK.Records.GetRecordHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T01:01:01+05:30"));

        await headerInstance.add(ZOHOCRMSDK.Records.GetRecordHeader.X_EXTERNAL, "Leads.External");

        //Call getRecord method that takes paramInstance, headerInstance, moduleAPIName and recordID as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ResponseHandler.MasterModel> = await recordOperations.getRecord(recordId, moduleAPIName, paramInstance, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ResponseWrapper) {
                    //Get the array of obtained Record instances
                    let records: ZOHOCRMSDK.Records.Record[] = responseObject.getData();

                    for (let record of records) {
                        //Get the ID of each Record
                        console.log("Record ID: " + record.getId());

                        //Get the createdBy User instance of each Record
                        let createdBy: ZOHOCRMSDK.Users.User = record.getCreatedBy();

                        //Check if createdBy is not null
                        if (createdBy != null) {
                            //Get the ID of the createdBy User
                            console.log("Record Created By User-ID: " + createdBy.getId());

                            //Get the name of the createdBy User
                            console.log("Record Created By User-Name: " + createdBy.getName());

                            //Get the Email of the createdBy User
                            console.log("Record Created By User-Email: " + createdBy.getEmail());
                        }

                        //Get the CreatedTime of each Record
                        console.log("Record CreatedTime: " + record.getCreatedTime());

                        //Get the modifiedBy User instance of each Record
                        let modifiedBy: ZOHOCRMSDK.Users.User = record.getModifiedBy();

                        //Check if modifiedBy is not null
                        if (modifiedBy != null) {
                            //Get the ID of the modifiedBy User
                            console.log("Record Modified By User-ID: " + modifiedBy.getId());

                            //Get the name of the modifiedBy User
                            console.log("Record Modified By User-Name: " + modifiedBy.getName());

                            //Get the Email of the modifiedBy User
                            console.log("Record Modified By User-Email: " + modifiedBy.getEmail());
                        }

                        //Get the ModifiedTime of each Record
                        console.log("Record ModifiedTime: " + record.getModifiedTime());

                        //Get the list of Tag instance each Record
                        let tags: ZOHOCRMSDK.Tags.Tag[] = record.getTag();

                        //Check if tags is not null
                        if (tags != null) {
                            tags.forEach(tag => {
                                //Get the Name of each Tag
                                console.log("Record Tag Name: " + tag.getName());

                                //Get the Id of each Tag
                                console.log("Record Tag ID: " + tag.getId());

                            });
                        }

                        //To get particular field value
                        console.log("Record Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                        console.log("Record KeyValues: ");

                        let keyValues: Map<string, any> = record.getKeyValues();

                        let keyArray = Array.from(keyValues.keys());

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
                else if (responseObject instanceof ZOHOCRMSDK.Records.FileBodyWrapper) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * <h3> Update Record</h3>
     * This method is used to update a single record of a module with ID and print the response.
     * @param moduleAPIName The API Name of the record's module.
     * @param recordId The ID of the record to be updated
     */
    public static async updateRecord(moduleAPIName: string, recordId: bigint) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Records.BodyWrapper = new ZOHOCRMSDK.Records.BodyWrapper();

        //Array to hold Record instances
        let recordsArray: ZOHOCRMSDK.Records.Record[] = [];

        //Get instance of Record Class
        let record1: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        /*
         * Call addFieldValue method that takes two arguments
         * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.CITY, "City");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.LAST_NAME, "Last Name");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.FIRST_NAME, "First Name");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.LAST_NAME, "Last Name");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.COMPANY, "KKRNP");

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("Custom_field", "Value");

        record1.addKeyValue("Custom_field_2", "value");

        record1.addKeyValue("Date_1", new Date(2017, 1, 13));

        let fileDetails: ZOHOCRMSDK.Records.FileDetails[] = [];

        let fileDetail: ZOHOCRMSDK.Records.FileDetails = new ZOHOCRMSDK.Records.FileDetails();

        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c32537b7c2400dadca8ff55f620c65357da");

        fileDetails.push(fileDetail);

        fileDetail = new ZOHOCRMSDK.Records.FileDetails();

        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c32e0063e7321b5b4ca878a934519e6cdb2");

        fileDetails.push(fileDetail);

        fileDetail = new ZOHOCRMSDK.Records.FileDetails();

        fileDetail.setFileId("ae9c7c5c323daf4780bfe0058133556f155795981f");

        fileDetails.push(fileDetail);

        record1.addKeyValue("File_Upload_1", fileDetails);

        let recordOwner: ZOHOCRMSDK.Users.User = new ZOHOCRMSDK.Users.User();

        recordOwner.setEmail("abc@zoho.com");

        record1.addKeyValue("Owner", recordOwner);

        //Used when GDPR is enabled
        let dataConsent: ZOHOCRMSDK.Records.Consent = new ZOHOCRMSDK.Records.Consent();

        dataConsent.setConsentRemarks("Approved.");

        dataConsent.setConsentThrough("Email");

        dataConsent.setContactThroughEmail(true);

        dataConsent.setContactThroughSocial(false);

        record1.addKeyValue("Data_Processing_Basis_Details", dataConsent);

        /** Following methods are being used only by Inventory modules */

        let dealName: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        dealName.addFieldValue(ZOHOCRMSDK.Records.Field.Deals.ID, BigInt("347706112416012"));

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Sales_Orders.DEAL_NAME, dealName);

        let contactName: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        contactName.addFieldValue(ZOHOCRMSDK.Records.Field.Contacts.ID, BigInt("347706112263005"));

        contactName.addFieldValue(ZOHOCRMSDK.Records.Field.Sales_Orders.CONTACT_NAME, contactName);

        let accountName: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        // accountName.addFieldValue(ZOHOCRMSDK.Records.Field.Accounts.ID, BigInt("34770619326021"));

        accountName.addKeyValue("name", "automatedAccount");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Sales_Orders.ACCOUNT_NAME, accountName);

        record1.addKeyValue("Discount", 10.5);

        let inventoryLineItemArray = [];

        let inventoryLineItem: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        let lineItemProduct: ZOHOCRMSDK.Records.LineItemProduct = new ZOHOCRMSDK.Records.LineItemProduct();

        lineItemProduct.setId(BigInt("347706112402032"));

        // lineItemProduct.addKeyValue("Products_External", "ProductExternal");

        inventoryLineItem.addKeyValue("Product_Name", lineItemProduct);

        inventoryLineItem.addKeyValue("Quantity", 3);

        inventoryLineItem.addKeyValue("Description", "productDescription");

        inventoryLineItem.addKeyValue("ListPrice", 10.0);

        inventoryLineItem.addKeyValue("Discount", "5.%");

        let productLineTaxes: ZOHOCRMSDK.Records.LineTax[] = [];

        let productLineTax: ZOHOCRMSDK.Records.LineTax = new ZOHOCRMSDK.Records.LineTax();

        productLineTax.setName("MyTax1134");

        productLineTax.setPercentage(20.0);

        productLineTaxes.push(productLineTax);

        inventoryLineItem.addKeyValue("Line_Tax", productLineTaxes);

        inventoryLineItemArray.push(inventoryLineItem);

        record1.addKeyValue("Quoted_Items", inventoryLineItemArray);

        let lineTaxes: ZOHOCRMSDK.Records.LineTax[] = [];

        let lineTax: ZOHOCRMSDK.Records.LineTax = new ZOHOCRMSDK.Records.LineTax();

        lineTax.setName("MyTax1134");

        lineTax.setPercentage(20.0);

        lineTaxes.push(lineTax);

        record1.addKeyValue("$line_tax", lineTaxes);

        /** End Inventory **/

        //Add Record instance to the array
        recordsArray.push(record1);

        //Set the array to Records in BodyWrapper instance
        request.setData(recordsArray);

        let trigger: string[] = [];

        trigger.push("approval");

        trigger.push("workflow");

        trigger.push("blueprint");

        request.setTrigger(trigger);

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        // await headerInstance.add(ZOHOCRMSDK.Records.UpdateRecordHeader.X_EXTERNAL, "Leads.External");

        //Call updateRecord method that takes BodyWrapper instance, ModuleAPIName and recordId as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ActionHandler.MasterModel> = await recordOperations.updateRecord(recordId, moduleAPIName, request, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Records.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Records.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Records.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * <h3> Delete Record</h3>
     * This method is used to delete a single record of a module with ID and print the response.
     * @param moduleAPIName The API Name of the record's module.
     * @param recordId The ID of the record to be deleted
     */
    public static async deleteRecord(moduleAPIName: string, recordId: bigint) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        //Possible parameters for Delete Record operation
        await paramInstance.add(ZOHOCRMSDK.Records.DeleteRecordParam.WF_TRIGGER, true);

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        await headerInstance.add(ZOHOCRMSDK.Records.DeleteRecordHeader.X_EXTERNAL, "Leads.External");

        //Call deleteRecord method that takes paramInstance, ModuleAPIName and recordId as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ActionHandler.MasterModel> = await recordOperations.deleteRecord(recordId, moduleAPIName, paramInstance, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Records.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Records.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Records.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
    * <h3> Get Record Using External Id</h3>
    * This method is used to get a single record of a module with ID and print the response.
    * @param moduleAPIName The API Name of the record's module.
    * @param {String} externalFieldValue 
    * @param {String} destinationFolder The absolute path of the destination folder to store the attachment
    */
    public static async getRecordUsingExternalId(moduleAPIName: string, externalFieldValue: string, destinationFolder: string) {
        //example
        //let moduleAPIName = "Contacts";
        //let recordId = 34770616603276n;

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters for Get Record operation*/
        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.APPROVED, "true");

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.CONVERTED, "false");

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.CVID, "3409643087501");

        // let fieldsArray = ["id", "Company"];

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.FIELDS, fieldsArray.toString());

        // /* Month is zero-indexed.
        // 0 -> January ..... 11 -> December
        // */
        // let startDateTime = new Date(2020, 7, 10, 10, 10, 10);

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.STARTDATETIME, startDateTime);

        // let endDateTime = new Date(2020, 7, 10, 12, 12, 12);

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.ENDDATETIME, endDateTime);

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.TERRITORY_ID, "3409643505351");

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.INCLUDE_CHILD, "true");

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordParam.UID, "3409643500741");

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        /* Possible headers for Get Record operation*/
        // await headerInstance.add(GetRecordHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T01:01:01+05:30"));

        await headerInstance.add(ZOHOCRMSDK.Records.GetRecordHeader.X_EXTERNAL, "Leads.External");

        //Call getRecordUsingExternalId method that takes externalFieldValue, moduleAPIName, paramInstance, headerInstance and moduleAPIName as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ResponseHandler.MasterModel> = await recordOperations.getRecordUsingExternalId(externalFieldValue, moduleAPIName, paramInstance, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ResponseWrapper) {
                    //Get the array of obtained Record instances
                    let records: ZOHOCRMSDK.Records.Record[] = responseObject.getData();

                    for (let record of records) {
                        //Get the ID of each Record
                        console.log("Record ID: " + record.getId());

                        //Get the createdBy User instance of each Record
                        let createdBy: ZOHOCRMSDK.Users.User = record.getCreatedBy();

                        //Check if createdBy is not null
                        if (createdBy != null) {
                            //Get the ID of the createdBy User
                            console.log("Record Created By User-ID: " + createdBy.getId());

                            //Get the name of the createdBy User
                            console.log("Record Created By User-Name: " + createdBy.getName());

                            //Get the Email of the createdBy User
                            console.log("Record Created By User-Email: " + createdBy.getEmail());
                        }

                        //Get the CreatedTime of each Record
                        console.log("Record CreatedTime: " + record.getCreatedTime());

                        //Get the modifiedBy User instance of each Record
                        let modifiedBy: ZOHOCRMSDK.Users.User = record.getModifiedBy();

                        //Check if modifiedBy is not null
                        if (modifiedBy != null) {
                            //Get the ID of the modifiedBy User
                            console.log("Record Modified By User-ID: " + modifiedBy.getId());

                            //Get the name of the modifiedBy User
                            console.log("Record Modified By User-Name: " + modifiedBy.getName());

                            //Get the Email of the modifiedBy User
                            console.log("Record Modified By User-Email: " + modifiedBy.getEmail());
                        }

                        //Get the ModifiedTime of each Record
                        console.log("Record ModifiedTime: " + record.getModifiedTime());

                        //Get the list of Tag instance each Record
                        let tags: ZOHOCRMSDK.Tags.Tag[] = record.getTag();

                        //Check if tags is not null
                        if (tags != null) {
                            tags.forEach(tag => {
                                //Get the Name of each Tag
                                console.log("Record Tag Name: " + tag.getName());

                                //Get the Id of each Tag
                                console.log("Record Tag ID: " + tag.getId());

                            });
                        }

                        //To get particular field value
                        console.log("Record Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                        console.log("Record KeyValues: ");

                        let keyValues: Map<string, any> = record.getKeyValues();

                        let keyArray = Array.from(keyValues.keys());

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
                else if (responseObject instanceof ZOHOCRMSDK.Records.FileBodyWrapper) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * <h3>Update Record Using External Id</h3>
     * This method is used to update a single record of a module with ID and print the response.
     * @param {String} moduleAPIName The API Name of the record's module.
     * @param {String} externalFieldValue
     */
    public static async updateRecordUsingExternalId(moduleAPIName: string, externalFieldValue: string) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Records.BodyWrapper = new ZOHOCRMSDK.Records.BodyWrapper();

        //Array to hold Record instances
        let recordsArray: ZOHOCRMSDK.Records.Record[] = [];

        //Get instance of Record Class
        let record1: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        /*
         * Call addFieldValue method that takes two arguments
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.CITY, "City");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.LAST_NAME, "Last Name");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.FIRST_NAME, "First Name");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.LAST_NAME, "Last Name");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.COMPANY, "KKRNP");

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("Custom_field", "Value");

        record1.addKeyValue("Custom_field_2", "value");

        record1.addKeyValue("Date_1", new Date(2017, 1, 13));

        let fileDetails: ZOHOCRMSDK.Records.FileDetails[] = [];

        let fileDetail: ZOHOCRMSDK.Records.FileDetails = new ZOHOCRMSDK.Records.FileDetails();

        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c32537b7c2400dadca8ff55f620c65357da");

        fileDetails.push(fileDetail);

        fileDetail = new ZOHOCRMSDK.Records.FileDetails();

        fileDetail.setFileId("ae9c7cefa418aec1d6a5cc2d9ab35c32e0063e7321b5b4ca878a934519e6cdb2");

        fileDetails.push(fileDetail);

        fileDetail = new ZOHOCRMSDK.Records.FileDetails();

        fileDetail.setFileId("ae9c7cefa418556f155795981f");

        fileDetails.push(fileDetail);

        record1.addKeyValue("File_Upload_1", fileDetails);

        let recordOwner: ZOHOCRMSDK.Users.User = new ZOHOCRMSDK.Users.User();

        recordOwner.setEmail("abc@zoho.com");

        record1.addKeyValue("Owner", recordOwner);

        //Used when GDPR is enabled
        let dataConsent: ZOHOCRMSDK.Records.Consent = new ZOHOCRMSDK.Records.Consent();

        dataConsent.setConsentRemarks("Approved.");

        dataConsent.setConsentThrough("Email");

        dataConsent.setContactThroughEmail(true);

        dataConsent.setContactThroughSocial(false);

        record1.addKeyValue("Data_Processing_Basis_Details", dataConsent);

        /** Following methods are being used only by Inventory modules */

        let dealName: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        dealName.addFieldValue(ZOHOCRMSDK.Records.Field.Deals.ID, BigInt("347706112416012"));

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Sales_Orders.DEAL_NAME, dealName);

        let contactName: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        contactName.addFieldValue(ZOHOCRMSDK.Records.Field.Contacts.ID, BigInt("347706112263005"));

        contactName.addFieldValue(ZOHOCRMSDK.Records.Field.Sales_Orders.CONTACT_NAME, contactName);

        let accountName: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        // accountName.addFieldValue(ZOHOCRMSDK.Records.Field.Accounts.ID, BigInt("34770619326021"));

        accountName.addKeyValue("name", "automatedAccount");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Sales_Orders.ACCOUNT_NAME, accountName);

        record1.addKeyValue("Discount", 10.5);

        let inventoryLineItemArray = [];

        let inventoryLineItem: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        let lineItemProduct: ZOHOCRMSDK.Records.LineItemProduct = new ZOHOCRMSDK.Records.LineItemProduct();

        lineItemProduct.setId(BigInt("347706112402032"));

        // lineItemProduct.addKeyValue("Products_External", "ProductExternal");

        inventoryLineItem.addKeyValue("Product_Name", lineItemProduct);

        inventoryLineItem.addKeyValue("Quantity", 3);

        inventoryLineItem.addKeyValue("Description", "productDescription");

        inventoryLineItem.addKeyValue("ListPrice", 10.0);

        inventoryLineItem.addKeyValue("Discount", "5.%");

        let productLineTaxes: ZOHOCRMSDK.Records.LineTax[] = [];

        let productLineTax: ZOHOCRMSDK.Records.LineTax = new ZOHOCRMSDK.Records.LineTax();

        productLineTax.setName("MyTax1134");

        productLineTax.setPercentage(20.0);

        productLineTaxes.push(productLineTax);

        inventoryLineItem.addKeyValue("Line_Tax", productLineTaxes);

        inventoryLineItemArray.push(inventoryLineItem);

        record1.addKeyValue("Quoted_Items", inventoryLineItemArray);

        let lineTaxes: ZOHOCRMSDK.Records.LineTax[] = [];

        let lineTax: ZOHOCRMSDK.Records.LineTax = new ZOHOCRMSDK.Records.LineTax();

        lineTax.setName("MyTax1134");

        lineTax.setPercentage(20.0);

        lineTaxes.push(lineTax);

        record1.addKeyValue("$line_tax", lineTaxes);

        /** End Inventory **/

        //Add Record instance to the array
        recordsArray.push(record1);

        //Set the array to Records in BodyWrapper instance
        request.setData(recordsArray);

        let trigger: string[] = [];

        trigger.push("approval");

        trigger.push("workflow");

        trigger.push("blueprint");

        request.setTrigger(trigger);

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        await headerInstance.add(ZOHOCRMSDK.Records.UpdateRecordHeader.X_EXTERNAL, "Leads.External");

        // headerInstance.add(ZOHOCRMSDK.Records.UpdateRecordHeader.X_EXTERNAL, "Quotes.Quoted_Items.Product_Name.Products_External");

        //Call updateRecordUsingExternalId method that takes externalFieldValue, moduleAPIName, BodyWrapper instance and headerInstance as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ActionHandler.MasterModel> = await recordOperations.updateRecordUsingExternalId(externalFieldValue, moduleAPIName, request, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Records.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Records.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Records.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * <h3> Delete Record</h3>
     * This method is used to delete a single record of a module with ID and print the response.
     * @param {String} moduleAPIName The API Name of the record's module.
     * @param {String} externalFieldValue
     */
    public static async deleteRecordUsingExternalId(moduleAPIName: string, externalFieldValue: string) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        //Possible parameters for Delete Record operation
        await paramInstance.add(ZOHOCRMSDK.Records.DeleteRecordParam.WF_TRIGGER, true);

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        await headerInstance.add(ZOHOCRMSDK.Records.DeleteRecordHeader.X_EXTERNAL, "Leads.External");

        //Call deleteRecordUsingExternalId method that takes externalFieldValue, moduleAPIName, paramInstance and headerInstance as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ActionHandler.MasterModel> = await recordOperations.deleteRecordUsingExternalId(externalFieldValue, moduleAPIName, paramInstance, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Records.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Records.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Records.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * <h3> Get Records</h3>
     * This method is used to get all the records of a module and print the response.
     * @param moduleAPIName The API Name of the module to fetch records
     */
    public static async getRecords(moduleAPIName: string) {
        //example
        //let moduleAPIName = "Leads";

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters for Get Records operation*/
        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.APPROVED, "both");

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.CONVERTED, "both");

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.CVID, "3477061087501");

        // let ids = ["213456782", "LeadsExternal", "External123"];

        // for (let id of ids) {
        //     await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.IDS, id);
        // }

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.UID, "34770615181008");

        // let fieldNames = ["Company", "Email"];

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.FIELDS, fieldNames.toString());

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.SORT_BY, "Email");

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.SORT_ORDER, "desc");

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.PAGE, 1);

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.PER_PAGE, 200);

        // let startDateTime = new Date(2020, 1, 10, 10, 10, 10);

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.STARTDATETIME, startDateTime);

        // let endDateTime = new Date(2020, 7, 10, 12, 12, 12);

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.ENDDATETIME, endDateTime);

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.TERRITORY_ID, "3409643505351");

        // await paramInstance.add(ZOHOCRMSDK.Records.GetRecordsParam.INCLUDE_CHILD, "true");

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        /* Possible headers for Get Record operation*/
        // await headerInstance.add(ZOHOCRMSDK.Records.GetRecordsHeader.IF_MODIFIED_SINCE, new Date("2020-01-01T00:00:00+05:30"));

        // await headerInstance.add(ZOHOCRMSDK.Records.GetRecordsHeader.X_EXTERNAL, "Leads.External");

        //Call getRecords method that takes moduleAPIName, paramInstance and headerInstance as parameters
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ResponseHandler.MasterModel> = await recordOperations.getRecords(moduleAPIName, paramInstance, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get the object from response
            let responseObject: ZOHOCRMSDK.Records.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ResponseWrapper) {
                    //Get the array of obtained Record instances
                    let records: ZOHOCRMSDK.Records.Record[] = responseObject.getData();

                    records.forEach(record => {
                        //Get the ID of each Record
                        console.log("Record ID: " + record.getId());

                        //Get the createdBy User instance of each Record
                        let createdBy: ZOHOCRMSDK.Users.User = record.getCreatedBy();

                        //Check if createdBy is not null
                        if (createdBy != null) {
                            //Get the ID of the createdBy User
                            console.log("Record Created By User-ID: " + createdBy.getId());

                            //Get the name of the createdBy User
                            console.log("Record Created By User-Name: " + createdBy.getName());

                            //Get the Email of the createdBy User
                            console.log("Record Created By User-Email: " + createdBy.getEmail());
                        }

                        //Get the CreatedTime of each Record
                        console.log("Record CreatedTime: " + record.getCreatedTime());

                        //Get the modifiedBy User instance of each Record
                        let modifiedBy: ZOHOCRMSDK.Users.User = record.getModifiedBy();

                        //Check if modifiedBy is not null
                        if (modifiedBy != null) {
                            //Get the ID of the modifiedBy User
                            console.log("Record Modified By User-ID: " + modifiedBy.getId());

                            //Get the name of the modifiedBy User
                            console.log("Record Modified By User-Name: " + modifiedBy.getName());

                            //Get the Email of the modifiedBy User
                            console.log("Record Modified By User-Email: " + modifiedBy.getEmail());
                        }

                        //Get the ModifiedTime of each Record
                        console.log("Record ModifiedTime: " + record.getModifiedTime());

                        //Get the list of Tag instance each Record
                        let tags: ZOHOCRMSDK.Tags.Tag[] = record.getTag();

                        //Check if tags is not null
                        if (tags != null) {
                            tags.forEach(tag => {
                                //Get the Name of each Tag
                                console.log("Record Tag Name: " + tag.getName());

                                //Get the Id of each Tag
                                console.log("Record Tag ID: " + tag.getId());

                            });
                        }

                        //To get particular field value
                        console.log("Record Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                        console.log("Record KeyValues: ");

                        let keyValues: Map<string, any> = record.getKeyValues();

                        let keyArray: string[] = Array.from(keyValues.keys());

                        for (let keyName of keyArray) {
                            let value: any = keyValues.get(keyName);

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
                                            console.log("Record LineTax Percentage: " + lineTax.getPercentage().toString());

                                            console.log("Record LineTax Name: " + lineTax.getName());

                                            console.log("Record LineTax Id: " + lineTax.getId());

                                            console.log("Record LineTax Value: " + lineTax.getValue().toString());
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
                                        console.log(keyName);

                                        for (let arrayIndex = 0; arrayIndex < value.length; arrayIndex++) {
                                            const arrayValue = value[arrayIndex];

                                            console.log(arrayValue);
                                        }
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
                    });

                    //Get the obtained Info instance
                    let info: ZOHOCRMSDK.Records.Info = responseObject.getInfo();

                    if (info != null) {

                        if (info.getPerPage() != null) {
                            //Get the PerPage of the Info
                            console.log("Record Info PerPage: " + info.getPerPage().toString());
                        }

                        if (info.getCount() != null) {
                            //Get the Count of the Info
                            console.log("Record Info Count: " + info.getCount().toString());
                        }

                        if (info.getPage() != null) {
                            //Get the Page of the Info
                            console.log("Record Info Page: " + info.getPage().toString());
                        }

                        if (info.getMoreRecords() != null) {
                            //Get the MoreRecords of the Info
                            console.log("Record Info MoreRecords: " + info.getMoreRecords().toString());
                        }
                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * <h3> Create Records</h3>
     * This method is used to create records of a module and print the response.
     * @param moduleAPIName The API Name of the module to create records.
     */
    public static async createRecords(moduleAPIName: string) {
        //example
        //let moduleAPIName = "Leads";

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Records.BodyWrapper = new ZOHOCRMSDK.Records.BodyWrapper();

        //Array to hold Record instances
        let recordsArray: ZOHOCRMSDK.Records.Record[] = [];

        //Get instance of Record Class
        let record: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        /* Value to Record's fields can be provided in any of the following ways */

        /*
         * Call addFieldValue method that takes two arguments
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.LAST_NAME, "Node JS SDK");

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.FIRST_NAME, "Node");

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.COMPANY, "ZCRM");

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.CITY, "City");

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record.addKeyValue("Custom_field", "Value");

        record.addKeyValue("External", "LeadsExternal1");

        record.addKeyValue("Long_Integer_1", BigInt("3477061929401"));

        // record.addKeyValue("Date_1", new Date(2020,10,20));

        record.addKeyValue("Subject", "AutomatedSDK");

        let tax: ZOHOCRMSDK.Records.Tax = new ZOHOCRMSDK.Records.Tax();

        tax.setValue("MyTax1134 - 15.0 %");

        record.addKeyValue("Tax", [tax]);

        record.addKeyValue("Product_Name", "AutomatedSDK");

        record.addKeyValue("Products_External", "AutomatedSDK");

        let imageUpload: ZOHOCRMSDK.Records.ImageUpload = new ZOHOCRMSDK.Records.ImageUpload();

        imageUpload.setEncryptedId("ae9c7cefa4c9d0f48d66595aa8546");

        record.addKeyValue("Image_Upload", [imageUpload]);

        let fileDetails: ZOHOCRMSDK.Records.FileDetails[] = [];

        let fileDetail: ZOHOCRMSDK.Records.FileDetails = new ZOHOCRMSDK.Records.FileDetails();

        fileDetail.setFileId("ae9c7ced58a147079f7621ec0dde024");

        fileDetails.push(fileDetail);

        fileDetail = new ZOHOCRMSDK.Records.FileDetails();

        fileDetail.setFileId("ae9c7cefa63506b673cfee659e");

        fileDetails.push(fileDetail);

        fileDetail = new ZOHOCRMSDK.Records.FileDetails();

        fileDetail.setFileId("ae9c7cefa418556f155795981f");

        fileDetails.push(fileDetail);

        record.addKeyValue("File_Upload", fileDetails);

        let recordOwner: ZOHOCRMSDK.Users.User = new ZOHOCRMSDK.Users.User();

        recordOwner.setEmail("abc@zoho.com");

        record.addKeyValue("Owner", recordOwner);

        //Used when GDPR is enabled
        let dataConsent = new ZOHOCRMSDK.Records.Consent();

        dataConsent.setConsentRemarks("Approved.");

        dataConsent.setConsentThrough("Email");

        dataConsent.setContactThroughEmail(true);

        dataConsent.setContactThroughSocial(false);

        record.addKeyValue("Data_Processing_Basis_Details", dataConsent);

        /** Following methods are being used only by Inventory modules */

        let dealName: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        dealName.addFieldValue(ZOHOCRMSDK.Records.Field.Deals.ID, BigInt("347706112416012"));

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Sales_Orders.DEAL_NAME, dealName);

        let contactName: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        contactName.addFieldValue(ZOHOCRMSDK.Records.Field.Contacts.ID, BigInt("347706112263005"));

        contactName.addFieldValue(ZOHOCRMSDK.Records.Field.Sales_Orders.CONTACT_NAME, contactName);

        let accountName: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        // accountName.addFieldValue(ZOHOCRMSDK.Records.Field.Accounts.ID, BigInt("34770619326021"));

        accountName.addKeyValue("name", "automatedAccount");

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Sales_Orders.ACCOUNT_NAME, accountName);

        record.addKeyValue("Discount", 10.5);

        let inventoryLineItemArray = [];

        let inventoryLineItem: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        let lineItemProduct: ZOHOCRMSDK.Records.LineItemProduct = new ZOHOCRMSDK.Records.LineItemProduct();

        lineItemProduct.setId(BigInt("347706112402032"));

        // lineItemProduct.addKeyValue("Products_External", "ProductExternal");

        inventoryLineItem.addKeyValue("Product_Name", lineItemProduct);

        inventoryLineItem.addKeyValue("Quantity", 3);

        inventoryLineItem.addKeyValue("Description", "productDescription");

        inventoryLineItem.addKeyValue("ListPrice", 10.0);

        inventoryLineItem.addKeyValue("Discount", "5.%");

        let productLineTaxes: ZOHOCRMSDK.Records.LineTax[] = [];

        let productLineTax: ZOHOCRMSDK.Records.LineTax = new ZOHOCRMSDK.Records.LineTax();

        productLineTax.setName("MyTax1134");

        productLineTax.setPercentage(20.0);

        productLineTaxes.push(productLineTax);

        inventoryLineItem.addKeyValue("Line_Tax", productLineTaxes);

        inventoryLineItemArray.push(inventoryLineItem);

        record.addKeyValue("Quoted_Items", inventoryLineItemArray);

        let lineTaxes: ZOHOCRMSDK.Records.LineTax[] = [];

        let lineTax: ZOHOCRMSDK.Records.LineTax = new ZOHOCRMSDK.Records.LineTax();

        lineTax.setName("MyTax1134");

        lineTax.setPercentage(20.0);

        lineTaxes.push(lineTax);

        record.addKeyValue("$line_tax", lineTaxes);

        /** End Inventory **/

        /** Following methods are being used only by Activity modules */

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Tasks.DESCRIPTION, "New Task");

        record.addKeyValue("Currency", new ZOHOCRMSDK.Choice("INR"));

        let remindAt: ZOHOCRMSDK.Records.RemindAt = new ZOHOCRMSDK.Records.RemindAt();

        remindAt.setAlarm("FREQ=NONE;ACTION=EMAILANDPOPUP;TRIGGER=DATE-TIME:2020-07-03T12:30:00+05:30");

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Tasks.REMIND_AT, remindAt);

        let whoId: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        whoId.setId(BigInt("347706110721012"));

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Tasks.WHO_ID, whoId);

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Tasks.STATUS, new ZOHOCRMSDK.Choice("Waiting for input"));

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Tasks.DUE_DATE, new Date(2020, 10, 10));

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Tasks.PRIORITY, new ZOHOCRMSDK.Choice("High"));

        let whatId: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        whatId.setId(BigInt("347706110721008"));

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Tasks.WHAT_ID, whatId);

        record.addKeyValue("$se_module", "Accounts");

        /** Recurring Activity can be provided in any activity module*/

        let recurringActivity: ZOHOCRMSDK.Records.RecurringActivity = new ZOHOCRMSDK.Records.RecurringActivity();

        recurringActivity.setRrule("FREQ=DAILY;INTERVAL=10;UNTIL=2020-08-14;DTSTART=2020-07-03");

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Events.RECURRING_ACTIVITY, recurringActivity);

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Events.DESCRIPTION, "My Event");

        let startDateTime: Date = new Date('October 15, 2020 05:35:32');

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Events.START_DATETIME, startDateTime);

        let participantsArray: ZOHOCRMSDK.Records.Participants[] = [];

        let participant = new ZOHOCRMSDK.Records.Participants();

        participant.setParticipant("zoho@gmail.com");

        participant.setType("email");

        participantsArray.push(participant);

        participant = new ZOHOCRMSDK.Records.Participants();

        participant.setParticipant("347706110721012");

        participant.setType("contact");

        participantsArray.push(participant);

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Events.PARTICIPANTS, participantsArray);

        record.addKeyValue("$send_notification", true);

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Events.EVENT_TITLE, "New Automated Event");

        let endDateTime: Date = new Date('November 15, 2020 05:35:32');

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Events.END_DATETIME, endDateTime);

        let remindAt1: Date = new Date('October 15, 2020 04:35:32');

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Events.REMIND_AT, remindAt1);

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Events.CHECK_IN_STATUS, "PLANNED");

        whatId = new ZOHOCRMSDK.Records.Record();

        whatId.setId(BigInt("347706113241001"));

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Tasks.WHAT_ID, whatId);

        record.addKeyValue("$se_module", "Leads");

        /** End Activity **/

        /** Following methods are being used only by Price_Books module */

        let pricingDetailsArray: ZOHOCRMSDK.Records.PricingDetails[] = [];

        let pricingDetail: ZOHOCRMSDK.Records.PricingDetails = new ZOHOCRMSDK.Records.PricingDetails();

        pricingDetail.setFromRange(1.0);

        pricingDetail.setToRange(5.0);

        pricingDetail.setDiscount(2.0);

        pricingDetailsArray.push(pricingDetail);

        pricingDetail = new ZOHOCRMSDK.Records.PricingDetails();

        pricingDetail.addKeyValue("from_range", 6.0);

        pricingDetail.addKeyValue("to_range", 11.0);

        pricingDetail.addKeyValue("discount", 3.0);

        pricingDetailsArray.push(pricingDetail);

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Price_Books.PRICING_DETAILS, pricingDetailsArray);

        record.addKeyValue("Email", "abc@zoho.com");

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Price_Books.DESCRIPTION, "TEST");

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Price_Books.PRICE_BOOK_NAME, "book_name");

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Price_Books.PRICING_MODEL, new ZOHOCRMSDK.Choice("Flat"));

        /** End of Price_Books */

        let tagsArray: ZOHOCRMSDK.Tags.Tag[] = [];

        let tag: ZOHOCRMSDK.Tags.Tag = new ZOHOCRMSDK.Tags.Tag();

        tag.setName("Testtask");

        tagsArray.push(tag);

        //Add Record instance to the array
        recordsArray.push(record);

        //Set the array to data in BodyWrapper instance
        request.setData(recordsArray);

        let trigger: string[] = [];

        trigger.push("approval");

        trigger.push("workflow");

        trigger.push("blueprint");

        //Set the array containing the trigger operations to be run
        request.setTrigger(trigger);

        let larId: string = "34096432157065";

        //Set the larId
        request.setLarId(larId);

        let process: string[] = ["review_process"];

        //Set the array containing the process to be run
        request.setProcess(process);

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        // await headerInstance.add(ZOHOCRMSDK.Records.CreateRecordsHeader.X_EXTERNAL, "Quotes.Quoted_Items.Product_Name.Products_External");

        //Call createRecords method that takes moduleAPIName and BodyWrapper instance as parameters
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ActionHandler.MasterModel> = await recordOperations.createRecords(moduleAPIName, request, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Records.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Records.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Records.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * <h3> Update Records</h3>
     * This method is used to update the records of a module with ID and print the response.
     * @param moduleAPIName The API Name of the module to update records.
     */
    public static async updateRecords(moduleAPIName: string) {
        //example
        //let moduleAPIName = "Leads";

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Records.BodyWrapper = new ZOHOCRMSDK.Records.BodyWrapper();

        //Array to hold Record instances
        let recordsArray: ZOHOCRMSDK.Records.Record[] = [];

        let record1: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        //ID of the record to be updated
        record1.setId(BigInt("347706112984009"));

        record1.addKeyValue("External", "LeadsExternal123456");
        /*
         * Call addFieldValue method that takes two arguments
         * Import the "zcrmsdk/core/com/zoho/crm/api/record/field" file
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.CITY, "City");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.LAST_NAME, "Last Name");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.FIRST_NAME, "First Name");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.COMPANY, "KKRNP");

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("Custom_field", "Custom val");

        record1.addKeyValue("Custom_field_2", 10);

        //Used when GDPR is enabled
        let dataConsent: ZOHOCRMSDK.Records.Consent = new ZOHOCRMSDK.Records.Consent();

        dataConsent.setConsentRemarks("Approved.");

        dataConsent.setConsentThrough("Email");

        dataConsent.setContactThroughEmail(true);

        dataConsent.setContactThroughSocial(false);

        // record1.addKeyValue("Data_Processing_Basis_Details", dataConsent);

        recordsArray.push(record1);

        let record2: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        //ID of the record to be updated
        record2.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.ID, BigInt("34096431881002"));

        // record2.addKeyValue("External", "LeadsExternal1");

        /*
         * Call addFieldValue method that takes two arguments
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record2.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.CITY, "City");

        record2.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.LAST_NAME, "Last Name");

        record2.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.FIRST_NAME, "First Name");

        record2.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.COMPANY, "KKRNP");

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record2.addKeyValue("Custom_field", "Value");

        record2.addKeyValue("Custom_field_2", "value");

        //Add Record instance to the array
        recordsArray.push(record2);

        //Set the array to data in BodyWrapper instance
        request.setData(recordsArray);

        let trigger: string[] = [];

        trigger.push("approval");

        trigger.push("workflow");

        trigger.push("blueprint");

        //Set the array containing the trigger operations to be run
        request.setTrigger(trigger);

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        // await headerInstance.add(ZOHOCRMSDK.Records.UpdateRecordsHeader.X_EXTERNAL, "Leads.External");

        //Call updateRecords method that takes moduleAPIName, BodyWrapper instance and headerInstance as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ActionHandler.MasterModel> = await recordOperations.updateRecords(moduleAPIName, request, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ActionWrapper) {

                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Records.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Records.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Records.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * <h3> Delete Records</h3>
     * This method is used to delete records of a module and print the response.
     * @param moduleAPIName The API Name of the module to delete records.
     * @param recordIds The array of record IDs to be deleted
     */
    public static async deleteRecords(moduleAPIName: string, recordIds: string[]) {
        //example
        //let moduleAPIName = "Contacts";
        // let recordIds = [3409643756050n, 3409643729017n, 3409643729009n];

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters for Delete Records operation */
        for (let recordId of recordIds) {
            await paramInstance.add(ZOHOCRMSDK.Records.DeleteRecordsParam.IDS, recordId);
        }

        await paramInstance.add(ZOHOCRMSDK.Records.DeleteRecordsParam.WF_TRIGGER, true);

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        await headerInstance.add(ZOHOCRMSDK.Records.DeleteRecordsHeader.X_EXTERNAL, "Leads.External");

        //Call deleteRecords method that takes moduleAPIName, paramInstance and headerInstance as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ActionHandler.MasterModel> = await recordOperations.deleteRecords(moduleAPIName, paramInstance, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Records.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Records.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Records.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * <h3> Upsert Records</h3>
     * This method is used to Upsert records of a module and print the response.
     * @param moduleAPIName The API Name of the module to upsert records.
     */
    public static async upsertRecords(moduleAPIName: string) {
        //example
        //let moduleAPIName = "Leads";

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class that takes moduleAPIName as parameter
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Records.BodyWrapper = new ZOHOCRMSDK.Records.BodyWrapper();

        //Array to hold Record instances
        let recordsArray: ZOHOCRMSDK.Records.Record[] = [];

        //Get instance of Record Class
        let record1: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        /*
         * Call addFieldValue method that takes two arguments
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.CITY, "City");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.LAST_NAME, "Last Name");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.FIRST_NAME, "First Name");

        record1.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.COMPANY, "KKRNP");

        record1.addKeyValue("External", "LeadsExternal1");

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record1.addKeyValue("Custom_field", "Custom val");

        record1.addKeyValue("Custom_field_2", 10);

        //Add the record to array
        recordsArray.push(record1);

        let record2: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        /*
         * Call addFieldValue method that takes two arguments
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        record2.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.CITY, "City");

        record2.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.LAST_NAME, "Last Name");

        record2.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.FIRST_NAME, "First Name");

        record2.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.COMPANY, "KKRNP");

        record2.addKeyValue("External", "TestExternal12345676543");

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        record2.addKeyValue("Custom_field", "Value");

        record2.addKeyValue("Custom_field_2", "value");

        //Add the record to array
        recordsArray.push(record2);

        //Set the array to data in BodyWrapper instance
        request.setData(recordsArray);

        let duplicateCheckFields: string[] = ["City", "Last_Name", "First_Name"];

        //Set the array containing duplicate check fiels to BodyWrapper instance
        request.setDuplicateCheckFields(duplicateCheckFields);

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        // await headerInstance.add(ZOHOCRMSDK.Records.UpsertRecordsHeader.X_EXTERNAL, "Leads.External");

        //Call upsertRecords method that takes moduleAPIName, BodyWrapper instance and headerInstance as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ActionHandler.MasterModel> = await recordOperations.upsertRecords(moduleAPIName, request, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Records.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Records.SuccessResponse) {
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
                        else if (actionResponse instanceof ZOHOCRMSDK.Records.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * <h3> Get Deleted Records</h3>
     * This method is used to get the deleted records of a module and print the response.
     * @param moduleAPIName The API Name of the module to get the deleted records.
     */
    public static async getDeletedRecords(moduleAPIName: string) {
        //example
        //let moduleAPIName = "Deals";

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters for Get Deleted Records operation */

        //can be all/recycle/permanent
        await paramInstance.add(ZOHOCRMSDK.Records.GetDeletedRecordsParam.TYPE, "permanent");

        await paramInstance.add(ZOHOCRMSDK.Records.GetDeletedRecordsParam.PAGE, 1);

        await paramInstance.add(ZOHOCRMSDK.Records.GetDeletedRecordsParam.PER_PAGE, 200);

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        /* Possible headers for Get Deleted Records operation */
        await headerInstance.add(ZOHOCRMSDK.Records.GetDeletedRecordsHeader.IF_MODIFIED_SINCE, new Date('January 15, 2020 10:35:32'));

        //Call getDeletedRecords method that takes paramInstance, headerInstance and moduleAPIName as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.DeletedRecordsHandler.MasterModel> = await recordOperations.getDeletedRecords(moduleAPIName, paramInstance, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get the object from response
            let responseObject: ZOHOCRMSDK.Records.DeletedRecordsHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected DeletedRecordsWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.DeletedRecordsWrapper) {
                    //Get the array of obtained DeletedRecord instances
                    let deletedRecords: ZOHOCRMSDK.Records.DeletedRecord[] = responseObject.getData();

                    deletedRecords.forEach(deletedRecord => {
                        //Get the deletedBy User instance of each DeletedRecord
                        let deletedBy: ZOHOCRMSDK.Users.User = deletedRecord.getDeletedBy();

                        //Check if deletedBy is not null
                        if (deletedBy != null) {
                            //Get the name of the deletedBy User
                            console.log("DeletedRecord Deleted By User-Name: " + deletedBy.getName());

                            //Get the ID of the deletedBy User
                            console.log("DeletedRecord Deleted By User-ID: " + deletedBy.getId());
                        }

                        //Get the ID of each DeletedRecord
                        console.log("DeletedRecord ID: " + deletedRecord.getId());

                        //Get the DisplayName of each DeletedRecord
                        console.log("DeletedRecord DisplayName: " + deletedRecord.getDisplayName());

                        //Get the Type of each DeletedRecord
                        console.log("DeletedRecord Type: " + deletedRecord.getType());

                        //Get the createdBy User instance of each DeletedRecord
                        let createdBy: ZOHOCRMSDK.Users.User = deletedRecord.getCreatedBy();

                        //Check if createdBy is not null
                        if (createdBy != null) {
                            //Get the name of the createdBy User
                            console.log("DeletedRecord Created By User-Name: " + createdBy.getName());

                            //Get the ID of the createdBy User
                            console.log("DeletedRecord Created By User-ID: " + createdBy.getId());
                        }

                        //Get the DeletedTime of each DeletedRecord
                        console.log("DeletedRecord DeletedTime: " + deletedRecord.getDeletedTime());
                    });

                    //Get the obtained Info object
                    let info: ZOHOCRMSDK.Records.Info = responseObject.getInfo();

                    if (info != null) {
                        if (info.getPerPage() != null) {
                            //Get the PerPage of the Info
                            console.log("Record Info PerPage: " + info.getPerPage().toString());
                        }

                        if (info.getCount() != null) {
                            //Get the Count of the Info
                            console.log("Record Info Count: " + info.getCount().toString());
                        }

                        if (info.getPage() != null) {
                            //Get the Page of the Info
                            console.log("Record Info Page: " + info.getPage().toString());
                        }

                        if (info.getMoreRecords() != null) {
                            //Get the MoreRecords of the Info
                            console.log("Record Info MoreRecords: " + info.getMoreRecords().toString());
                        }
                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * <h3> Search Records</h3>
     * This method is used to search records of a module and print the response.
     * @param moduleAPIName The API Name of the module to search records.
     */
    public static async searchRecords(moduleAPIName: string) {
        //example
        //let moduleAPIName = "Price_Books";

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters for Search Records operation */
        await paramInstance.add(ZOHOCRMSDK.Records.SearchRecordsParam.EMAIL, "abc@zoho.com");

        await paramInstance.add(ZOHOCRMSDK.Records.SearchRecordsParam.PHONE, "234567890");

        await paramInstance.add(ZOHOCRMSDK.Records.SearchRecordsParam.WORD, "First Name Last Name");

        await paramInstance.add(ZOHOCRMSDK.Records.SearchRecordsParam.CONVERTED, "both");

        await paramInstance.add(ZOHOCRMSDK.Records.SearchRecordsParam.APPROVED, "both");

        await paramInstance.add(ZOHOCRMSDK.Records.SearchRecordsParam.PAGE, 1);

        await paramInstance.add(ZOHOCRMSDK.Records.SearchRecordsParam.PER_PAGE, 2);

        //Encoding must be done for parentheses or comma
        await paramInstance.add(ZOHOCRMSDK.Records.SearchRecordsParam.CRITERIA, "((Last_Name:starts_with:Last Name) or (Company:starts_with:fasf\\(123\\) K))");

        // await paramInstance.add(ZOHOCRMSDK.Records.SearchRecordsParam.CRITERIA, "(External:equals:LeadsExternal1)");

        //Get instance of ZOHOCRMSDK.HeaderMap Class
        let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

        // headerInstance.add(ZOHOCRMSDK.Records.SearchRecordsHeader.X_EXTERNAL, "Leads.External");

        //Call searchRecords method that takes ZOHOCRMSDK.ParameterMap Instance and moduleAPIName as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ResponseHandler.MasterModel> = await recordOperations.searchRecords(moduleAPIName, paramInstance, headerInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get the object from response
            let responseObject: ZOHOCRMSDK.Records.ResponseHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ResponseWrapper) {
                    //Get the array of obtained Record instances
                    let records: ZOHOCRMSDK.Records.Record[] = responseObject.getData();

                    records.forEach(record => {
                        //Get the ID of each Record
                        console.log("Record ID: " + record.getId());

                        //Get the createdBy User instance of each Record
                        let createdBy: ZOHOCRMSDK.Users.User = record.getCreatedBy();

                        //Check if createdBy is not null
                        if (createdBy != null) {
                            //Get the ID of the createdBy User
                            console.log("Record Created By User-ID: " + createdBy.getId());

                            //Get the name of the createdBy User
                            console.log("Record Created By User-Name: " + createdBy.getName());

                            //Get the Email of the createdBy User
                            console.log("Record Created By User-Email: " + createdBy.getEmail());
                        }

                        //Get the CreatedTime of each Record
                        console.log("Record CreatedTime: " + record.getCreatedTime());

                        //Get the modifiedBy User instance of each Record
                        let modifiedBy: ZOHOCRMSDK.Users.User = record.getModifiedBy();

                        //Check if modifiedBy is not null
                        if (modifiedBy != null) {
                            //Get the ID of the modifiedBy User
                            console.log("Record Modified By User-ID: " + modifiedBy.getId());

                            //Get the name of the modifiedBy User
                            console.log("Record Modified By User-Name: " + modifiedBy.getName());

                            //Get the Email of the modifiedBy User
                            console.log("Record Modified By User-Email: " + modifiedBy.getEmail());
                        }

                        //Get the ModifiedTime of each Record
                        console.log("Record ModifiedTime: " + record.getModifiedTime());

                        //Get the list of Tag instance each Record
                        let tags: ZOHOCRMSDK.Tags.Tag[] = record.getTag();

                        //Check if tags is not null
                        if (tags != null) {
                            tags.forEach(tag => {
                                //Get the Name of each Tag
                                console.log("Record Tag Name: " + tag.getName());

                                //Get the Id of each Tag
                                console.log("Record Tag ID: " + tag.getId());

                            });
                        }

                        //To get particular field value
                        console.log("Record Field Value: " + record.getKeyValue("Last_Name"));// FieldApiName

                        console.log("Record KeyValues: ");

                        let keyValues: Map<string, any> = record.getKeyValues();

                        let keyArray: string[] = Array.from(keyValues.keys());

                        for (let keyName of keyArray) {
                            let value: any = keyValues.get(keyName);

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
                                            console.log("Record LineTax Percentage: " + lineTax.getPercentage().toString());

                                            console.log("Record LineTax Name: " + lineTax.getName());

                                            console.log("Record LineTax Id: " + lineTax.getId());

                                            console.log("Record LineTax Value: " + lineTax.getValue().toString());
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
                                        console.log(keyName);

                                        for (let arrayIndex = 0; arrayIndex < value.length; arrayIndex++) {
                                            const arrayValue = value[arrayIndex];

                                            console.log(arrayValue);
                                        }
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
                    });

                    //Get the obtained Info instance
                    let info: ZOHOCRMSDK.Records.Info = responseObject.getInfo();

                    if (info != null) {

                        if (info.getPerPage() != null) {
                            //Get the PerPage of the Info
                            console.log("Record Info PerPage: " + info.getPerPage().toString());
                        }

                        if (info.getCount() != null) {
                            //Get the Count of the Info
                            console.log("Record Info Count: " + info.getCount().toString());
                        }

                        if (info.getPage() != null) {
                            //Get the Page of the Info
                            console.log("Record Info Page: " + info.getPage().toString());
                        }

                        if (info.getMoreRecords() != null) {
                            //Get the MoreRecords of the Info
                            console.log("Record Info MoreRecords: " + info.getMoreRecords().toString());
                        }
                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * <h3> Convert Lead</h3>
     * This method is used to Convert a Lead record and print the response.
     * @param leadId The ID of the Lead to be converted.
     */
    public static async convertLead(leadId: bigint) {
        //example
        //let leadId = 34096432034003n;

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of ConvertBodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Records.ConvertBodyWrapper = new ZOHOCRMSDK.Records.ConvertBodyWrapper();

        //Array to hold LeadConverter instances
        let data: ZOHOCRMSDK.Records.LeadConverter[] = [];

        //Get instance of LeadConverter Class
        let record: ZOHOCRMSDK.Records.LeadConverter = new ZOHOCRMSDK.Records.LeadConverter();

        record.setOverwrite(true);

        record.setNotifyLeadOwner(true);

        record.setNotifyNewEntityOwner(true);

        record.setAccounts("34770615848125");

        record.setContacts("3477061358009");

        record.setAssignTo("3477061173021");

        let deals: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        /*
         * Call addFieldValue method that takes two arguments
         * 1 -> Call Field "." and choose the module from the displayed list and press "." and choose the field name from the displayed list.
         * 2 -> Value
         */
        deals.addFieldValue(ZOHOCRMSDK.Records.Field.Deals.DEAL_NAME, "deal_name");

        deals.addFieldValue(ZOHOCRMSDK.Records.Field.Deals.DESCRIPTION, "deals description");

        deals.addFieldValue(ZOHOCRMSDK.Records.Field.Deals.CLOSING_DATE, new Date(2021, 2, 13));

        deals.addFieldValue(ZOHOCRMSDK.Records.Field.Deals.STAGE, new ZOHOCRMSDK.Choice("Closed Won"));

        deals.addFieldValue(ZOHOCRMSDK.Records.Field.Deals.AMOUNT, 50.7);

        deals.addKeyValue("Pipeline", new ZOHOCRMSDK.Choice("Qualification"));

        /*
         * Call addKeyValue method that takes two arguments
         * 1 -> A string that is the Field's API Name
         * 2 -> Value
         */
        deals.addKeyValue("Custom_field", "Value");

        deals.addKeyValue("Custom_field_2", "value");

        //Set the Deal record to deals in LeadConverter instance
        record.setDeals(deals);

        let carryOverTags: ZOHOCRMSDK.Records.CarryOverTags = new ZOHOCRMSDK.Records.CarryOverTags();

        carryOverTags.setAccounts(["Converted"]);

        carryOverTags.setContacts(["Converted"]);

        carryOverTags.setDeals(["Converted"]);

        record.setCarryOverTags(carryOverTags);

        //Add the instance to array
        data.push(record);

        //Set the array to data ConvertBodyWrapper instance
        request.setData(data);

        //Call convertLead method that takes ConvertBodyWrapper instance and leadId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ConvertActionHandler.MasterModel> = await recordOperations.convertLead(leadId, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.ConvertActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ConvertActionWrapper) {
                    //Get the array of ConvertActionResponses from object
                    let convertActionResponses: ZOHOCRMSDK.Records.ConvertActionResponse.MasterModel[] = responseObject.getData();

                    convertActionResponses.forEach(convertActionResponse => {
                        //Check if the request is successful
                        if (convertActionResponse instanceof ZOHOCRMSDK.Records.SuccessfulConvert) {
                            //Get the Accounts ID of  Record
                            console.log("LeadConvert Accounts ID: " + convertActionResponse.getAccounts());

                            //Get the Contacts ID of  Record
                            console.log("LeadConvert Contacts ID: " + convertActionResponse.getContacts());

                            //Get the Deals ID of  Record
                            console.log("LeadConvert Deals ID: " + convertActionResponse.getDeals());
                        }
                        //Check if the request returned an exception
                        else if (convertActionResponse instanceof ZOHOCRMSDK.Records.APIException) {
                            //Get the Status
                            console.log("Status: " + convertActionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + convertActionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = convertActionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + convertActionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * This method is used to download a photo associated with a module.
     * @param moduleAPIName The API Name of the record's module
     * @param recordId The ID of the record
     * @param destinationFolder The absolute path of the destination folder to store the photo.
     */
    public static async getPhoto(moduleAPIName: string, recordId: bigint, destinationFolder: string) {
        //example
        // let moduleAPIName = "Contacts";
        // let recordId = 34096432034003n;
        // let destinationFolder = "/Users/user-name/Documents";

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Call getPhoto method that takes moduleAPIName and recordId as parameters
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.DownloadHandler.MasterModel> = await recordOperations.getPhoto(recordId, moduleAPIName);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.DownloadHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected FileBodyWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.FileBodyWrapper) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());

                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());

                    console.log("Details");

                    let details: Map<string, any> = responseObject.getDetails();

                    //Get the details map
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
     * This method is used to attach a photo to a record. You must include the file in the request
     * @param moduleAPIName The API Name of the record's module
     * @param recordId The ID of the record
     * @param absoluteFilePath The absolute file path of the file to be uploaded
     */
    public static async uploadPhoto(moduleAPIName: string, recordId: bigint, absoluteFilePath: string) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;
        //let absoluteFilePath = "/Users/user_name/Desktop/image.png";

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of FileBodyWrapper class that will contain the request file
        let request: ZOHOCRMSDK.Records.FileBodyWrapper = new ZOHOCRMSDK.Records.FileBodyWrapper();

        /** StreamWrapper can be initialized in any of the following ways */

        /**
         * param 1 -> fileName
         * param 2 -> Read Stream.
         */
        let streamWrapper: ZOHOCRMSDK.StreamWrapper = new ZOHOCRMSDK.StreamWrapper(undefined, fs.createReadStream(absoluteFilePath));

        /**
         * param 1 -> fileName
         * param 2 -> Read Stream
         * param 3 -> Absolute File Path of the file to be attached
         */
        // let streamWrapper = new ZOHOCRMSDK.StreamWrapper(null, null, absoluteFilePath);

        //Set file to the FileBodyWrapper instance
        request.setFile(streamWrapper);

        //Call uploadPhoto method that takes FileBodyWrapper instance, moduleAPIName and recordId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.FileHandler.MasterModel> = await recordOperations.uploadPhoto(recordId, moduleAPIName, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.FileHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if the request is successful
                if (responseObject instanceof ZOHOCRMSDK.Records.SuccessResponse) {
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

                    console.log("Message: " + responseObject.getMessage().getValue());
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * This method is used to delete a photo from a record in a module.
     * @param moduleAPIName The API Name of the record's module
     * @param recordId The ID of the record to delete photo
     */
    public static async deletePhoto(moduleAPIName: string, recordId: bigint) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002n;

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Call deletePhoto method that takes moduleAPIName and recordId as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.FileHandler.MasterModel> = await recordOperations.deletePhoto(recordId, moduleAPIName);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.FileHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if the request is successful
                if (responseObject instanceof ZOHOCRMSDK.Records.SuccessResponse) {
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

                    console.log("Message: " + responseObject.getMessage().getValue());
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * This method is used to update the values of specific fields for multiple records and print the response.
     * @param moduleAPIName The API Name of the module to mass update records.
     */
    public static async massUpdateRecords(moduleAPIName: string) {
        //example
        //let moduleAPIName = "Leads";

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of MassUpdateBodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Records.MassUpdateBodyWrapper = new ZOHOCRMSDK.Records.MassUpdateBodyWrapper();

        //Array to hold Record instances
        let recordsArray: ZOHOCRMSDK.Records.Record[] = [];

        //Get instance of Record Class
        let record: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        record.addFieldValue(ZOHOCRMSDK.Records.Field.Leads.CITY, "Chennai");

        //Add the record instance to array
        recordsArray.push(record);

        //Set the array to data in MassUpdateBodyWrapper instance
        request.setData(recordsArray);

        //Set the cvid to MassUpdateBodyWrapper instance
        // request.setCvid("3409643087501");

        let ids: string[] = ["347706112107001"];

        //Set the array of IDs to MassUpdateBodyWrapper instance
        request.setIds(ids);

        //Set the value to over write
        request.setOverWrite(true);

        //Get instance of Territory Class
        let territory: ZOHOCRMSDK.Records.Territory = new ZOHOCRMSDK.Records.Territory();

        //Set ID to Territory
        territory.setId(BigInt("3409643505351"));

        // request.setTerritory(territory);

        //Call massUpdateRecords method that takes MassUpdateBodyWrapper instance, ModuleAPIName as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.MassUpdateActionHandler.MasterModel> = await recordOperations.massUpdateRecords(moduleAPIName, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.MassUpdateActionResponse.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected MassUpdateActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.MassUpdateActionWrapper) {
                    //Get the array of MassUpdate ActionResponses
                    let massUpdateActionResponses: ZOHOCRMSDK.Records.MassUpdateActionResponse.MasterModel[] = responseObject.getData();

                    massUpdateActionResponses.forEach(massUpdateActionResponse => {
                        //Check if the request is successful
                        if (massUpdateActionResponse instanceof ZOHOCRMSDK.Records.MassUpdateSuccessResponse) {
                            //Get the Status
                            console.log("Status: " + massUpdateActionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + massUpdateActionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = massUpdateActionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + massUpdateActionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (massUpdateActionResponse instanceof ZOHOCRMSDK.Records.APIException) {
                            //Get the Status
                            console.log("Status: " + massUpdateActionResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + massUpdateActionResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = massUpdateActionResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + massUpdateActionResponse.getMessage().getValue());
                        }
                    });
                }

                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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
     * This method is used to get the status of the mass update job scheduled previously and print the response.
     * @param moduleAPIName  The API Name of the module to obtain status of Mass Update.
     * @param jobId The ID of the job obtained from the response of Mass Update Records.
     */
    public static async getMassUpdateStatus(moduleAPIName: string, jobId: string) {
        //example
        //let moduleAPIName = "Leads";
        //let jobId = "34770615177002";

        //Get instance of ZOHOCRMSDK.Records.RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of ZOHOCRMSDK.ParameterMap Class
        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        /* Possible parameters for Get MassUpdate Status operation */
        await paramInstance.add(ZOHOCRMSDK.Records.GetMassUpdateStatusParam.JOB_ID, jobId);

        //Call getMassUpdateStatus method that takes ZOHOCRMSDK.ParameterMap instance and moduleAPIName as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.MassUpdateResponseHandler.MasterModel> = await recordOperations.getMassUpdateStatus(moduleAPIName, paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.MassUpdateActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected MassUpdateResponseWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.MassUpdateResponseWrapper) {
                    //Get the array of MassUpdate ActionResponse data
                    let massUpdateResponses: ZOHOCRMSDK.Records.MassUpdateResponse.MasterModel[] = responseObject.getData();

                    massUpdateResponses.forEach(massUpdateResponse => {
                        //Check if the request is successful
                        if (massUpdateResponse instanceof ZOHOCRMSDK.Records.MassUpdate) {
                            //Get the Status of each MassUpdate
                            console.log("MassUpdate Status: " + massUpdateResponse.getStatus().getValue());

                            //Get the FailedCount of each MassUpdate
                            console.log("MassUpdate FailedCount: " + massUpdateResponse.getFailedCount().toString());

                            //Get the UpdatedCount of each MassUpdate
                            console.log("MassUpdate UpdatedCount: " + massUpdateResponse.getUpdatedCount().toString());

                            //Get the NotUpdatedCount of each MassUpdate
                            console.log("MassUpdate NotUpdatedCount: " + massUpdateResponse.getNotUpdatedCount());

                            //Get the TotalCount of each MassUpdate
                            console.log("MassUpdate TotalCount: " + massUpdateResponse.getTotalCount().toString());
                        }
                        //Check if the request returned an exception
                        else if (massUpdateResponse instanceof ZOHOCRMSDK.Records.APIException) {
                            //Get the Status
                            console.log("Status: " + massUpdateResponse.getStatus().getValue());

                            //Get the Code
                            console.log("Code: " + massUpdateResponse.getCode().getValue());

                            console.log("Details");

                            //Get the details map
                            let details: Map<string, any> = massUpdateResponse.getDetails();

                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }

                            //Get the Message
                            console.log("Message: " + massUpdateResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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

    public static async getRecordCount() {
        //Get instance of RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        let moduleAPIName = "Leads";

        let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

        await paramInstance.add(ZOHOCRMSDK.Records.RecordCountParam.PHONE, "(990) 000-");

        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.CountHandler.MasterModel> = await recordOperations.recordCount(moduleAPIName, paramInstance);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

                return;
            }
            //Get object from response
            let countWrapper: ZOHOCRMSDK.Records.CountHandler.MasterModel = response.getObject();

            if (countWrapper instanceof ZOHOCRMSDK.Records.CountWrapper) {
                //Get the Count of Tag
                console.log("Record Count: " + countWrapper.getCount());
            }
            //Check if the request returned an exception
            else if (countWrapper instanceof ZOHOCRMSDK.Records.APIException) {
                //Get the Status
                console.log("Status: " + countWrapper.getStatus().getValue());

                //Get the Code
                console.log("Code: " + countWrapper.getCode().getValue());

                console.log("Details: ");

                //Get the details map
                let details = countWrapper.getDetails();

                if (details != null) {
                    Array.from(details.keys()).forEach(key => {
                        console.log(key + ": " + details.get(key));
                    });
                }

                //Get the Message
                console.log("Message: " + countWrapper.getMessage().getValue());
            }
        }
    }

    public static async assignTerritoriesToMultipleRecords(moduleAPIName: string) {
        //API Name of the module to assignTerritoriesToMultipleRecords
        //let moduleAPIName = "Leads";

        //Get instance of RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Records.BodyWrapper = new ZOHOCRMSDK.Records.BodyWrapper();

        //List of Record instances
        let records: ZOHOCRMSDK.Records.Record[] = [];

        //Get instance of Record Class
        let record1: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        record1.setId(BigInt("347706112107002"));

        /*
         * Call addKeyValue method that takes two arguments
         * 1 . A string that is the Field's API Name
         * 2 . Value
         */

        let territory: ZOHOCRMSDK.Records.Territory = new ZOHOCRMSDK.Records.Territory();

        territory.setId(BigInt("34770613051397"));

        record1.addKeyValue("Territories", [territory]);

        //Add Record instance to the list
        records.push(record1);

        //Set the list to Records in BodyWrapper instance
        request.setData(records);

        //Call assignTerritoriesToMultipleRecords method that takes ModuleAPIName and  BodyWrapper instance as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ActionHandler.MasterModel> = await recordOperations.assignTerritoriesToMultipleRecords(moduleAPIName, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                if (responseObject instanceof ZOHOCRMSDK.Records.ActionWrapper) {
                    //Get the list of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Records.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Records.SuccessResponse) {
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

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.Records.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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

    public static async assignTerritoryToRecord(moduleAPIName: string, id: bigint) {
        //API Name of the module to assignTerritoryToRecord
        //let moduleAPIName = "Leads";

        //Get instance of RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Records.BodyWrapper = new ZOHOCRMSDK.Records.BodyWrapper();

        //List of Record instances
        let records: ZOHOCRMSDK.Records.Record[] = [];

        //Get instance of Record Class
        let record1: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        /*
         * Call addKeyValue method that takes two arguments
         * 1 . A string that is the Field's API Name
         * 2 . Value
         */

        let territory: ZOHOCRMSDK.Records.Territory = new ZOHOCRMSDK.Records.Territory();

        territory.setId(BigInt("34770613051397"));

        record1.addKeyValue("Territories", [territory]);

        //Add Record instance to the list
        records.push(record1);

        //Set the list to Records in BodyWrapper instance
        request.setData(records);

        //Call assignTerritoryToRecord method that takes ModuleAPIName, id and  BodyWrapper instance as parameter.
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ActionHandler.MasterModel> = await recordOperations.assignTerritoryToRecord(moduleAPIName, id, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Records.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Records.SuccessResponse) {
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

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.Records.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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

    public static async removeTerritoriesFromMultipleRecords(moduleAPIName: string) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002L;

        //Get instance of RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Records.BodyWrapper = new ZOHOCRMSDK.Records.BodyWrapper();

        //List of Record instances
        let records: ZOHOCRMSDK.Records.Record[] = [];

        //Get instance of Record Class
        let record1: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        record1.setId(BigInt("347706112107002"));

        /*
         * Call addKeyValue method that takes two arguments
         * 1 . A string that is the Field's API Name
         * 2 . Value
         */

        let territory: ZOHOCRMSDK.Records.Territory = new ZOHOCRMSDK.Records.Territory();

        territory.setId(BigInt("34770613051397"));

        record1.addKeyValue("Territories", [territory]);

        //Add Record instance to the list
        records.push(record1);

        //Set the list to Records in BodyWrapper instance
        request.setData(records);

        //Call removeTerritoriesFromMultipleRecords method that takes moduleAPIName and BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ActionHandler.MasterModel> = await recordOperations.removeTerritoriesFromMultipleRecords(moduleAPIName, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Records.ActionResponse.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Records.SuccessResponse) {
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

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.Records.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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

    public static async removeTerritoriesFromRecord(moduleAPIName: string, id: bigint) {
        //example
        //let moduleAPIName = "Leads";
        //let recordId = 34770615177002L;

        //Get instance of RecordOperations Class
        let recordOperations: ZOHOCRMSDK.Records.RecordOperations = new ZOHOCRMSDK.Records.RecordOperations();

        //Get instance of BodyWrapper Class that will contain the request body
        let request: ZOHOCRMSDK.Records.BodyWrapper = new ZOHOCRMSDK.Records.BodyWrapper();

        //List of Record instances
        let records: ZOHOCRMSDK.Records.Record[] = [];

        //Get instance of Record Class
        let record1: ZOHOCRMSDK.Records.Record = new ZOHOCRMSDK.Records.Record();

        /*
         * Call addKeyValue method that takes two arguments
         * 1 . A string that is the Field's API Name
         * 2 . Value
         */

        let territory: ZOHOCRMSDK.Records.Territory = new ZOHOCRMSDK.Records.Territory();

        territory.setId(BigInt("34770613051397"));

        record1.addKeyValue("Territories", [territory]);

        //Add Record instance to the list
        records.push(record1);

        //Set the list to Records in BodyWrapper instance
        request.setData(records);

        //Call removeTerritoriesFromRecord method that takes moduleAPIName, recordId and BodyWrapper instance as parameter
        let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Records.ActionHandler.MasterModel> = await recordOperations.removeTerritoriesFromRecord(moduleAPIName, id, request);

        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());

            //Get object from response
            let responseObject: ZOHOCRMSDK.Records.ActionHandler.MasterModel = response.getObject();

            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof ZOHOCRMSDK.Records.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses: ZOHOCRMSDK.Records.ActionHandler.MasterModel[] = responseObject.getData();

                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof ZOHOCRMSDK.Records.SuccessResponse) {
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

                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof ZOHOCRMSDK.Records.APIException) {
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
                else if (responseObject instanceof ZOHOCRMSDK.Records.APIException) {
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