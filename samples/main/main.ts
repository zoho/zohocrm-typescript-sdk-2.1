import { SDKInitializer } from "../core/com/zoho/crm/api/sample/initializer/initialize"
import { AssignmentRules } from "../core/com/zoho/crm/api/sample/assignment_rules/assignment_rules"
import { Attachments } from "../core/com/zoho/crm/api/sample/attachments/attachment"
import { BluePrint } from "../core/com/zoho/crm/api/sample/blue_print/blue_print"
import { BulkRead } from "../core/com/zoho/crm/api/sample/bulk_read/bulk_read"
import { BulkWrite } from "../core/com/zoho/crm/api/sample/bulk_write/bulk_write"
import { ContactRoles } from "../core/com/zoho/crm/api/sample/contact_roles/contact_role"
import { Currencies } from "../core/com/zoho/crm/api/sample/currencies/currencies"
import { CustomViews } from "../core/com/zoho/crm/api/sample/custom_views/custom_view"
import { EmailTemplate } from "../core/com/zoho/crm/api/sample/email_templates/email_template"
import { FieldAttachment } from "../core/com/zoho/crm/api/sample/field_attachments/field_attachment"
import { Fields } from "../core/com/zoho/crm/api/sample/fields/field"
import { Files } from "../core/com/zoho/crm/api/sample/files/file"
import { InventoryTemplate } from "../core/com/zoho/crm/api/sample/inventory_templates/inventory_template"
import { Layouts } from "../core/com/zoho/crm/api/sample/layouts/layout"
import { Modules } from "../core/com/zoho/crm/api/sample/modules/module"
import { Notes } from "../core/com/zoho/crm/api/sample/notes/note"
import { Notifications } from "../core/com/zoho/crm/api/sample/notifications/notification"
import { Organization } from "../core/com/zoho/crm/api/sample/organization/organization"
import { PipeLine } from "../core/com/zoho/crm/api/sample/pipe_line/pipe_line"
import { Profiles } from "../core/com/zoho/crm/api/sample/profiles/profile"
import { Query } from "../core/com/zoho/crm/api/sample/query/query"
import { Records } from "../core/com/zoho/crm/api/sample/records/record"
import { RelatedLists } from "../core/com/zoho/crm/api/sample/related_lists/related_list"
import { RelatedRecord } from "../core/com/zoho/crm/api/sample/related_records/related_record"
import { Roles } from "../core/com/zoho/crm/api/sample/roles/role"
import { SendMail } from "../core/com/zoho/crm/api/sample/send_mail/send_mail"
import { ShareRecords } from "../core/com/zoho/crm/api/sample/share_records/share_record"
import { Tags } from "../core/com/zoho/crm/api/sample/tags/tag"
import { Taxes } from "../core/com/zoho/crm/api/sample/taxes/tax"
import { Territories } from "../core/com/zoho/crm/api/sample/territories/territory"
import { Users } from "../core/com/zoho/crm/api/sample/users/user"
import { VariableGroups } from "../core/com/zoho/crm/api/sample/variable_groups/variable_group"
import { Variables } from "../core/com/zoho/crm/api/sample/variables/variable"
import { Wizard } from "../core/com/zoho/crm/api/sample/wizards/wizard"
import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

class Test {
    public static async call() {
        await SDKInitializer.initializeSDK();

        this.assignmentRules();

        this.attachment();

        this.bluePrint();

        this.bulkRead();

        this.bulkWrite();

        this.contactRole();

        this.currency();

        this.customView();

        this.emailTemplate();

        this.fieldAttachment();

        this.field();

        this.file();

        this.inventoryTemplate();

        this.layout();

        this.module();

        this.note();

        this.notification();

        this.org();

        this.pipeLine();

        this.profile();

        this.query();

        this.record();

        this.relatedList();

        this.relatedRecord();

        this.role();

        this.sendMail();

        this.shareRecord();

        this.tag();

        this.tax();

        this.territory();

        this.user();

        this.variableGroup();

        this.variable();

        this.wizard();
    }

    private static async assignmentRules() {
        let ruleId = BigInt("34770614353013");

        await AssignmentRules.getAssignmentRules();

        await AssignmentRules.getAssignmentRule(ruleId);
    }

    private static async attachment() {
        let moduleAPIName = "Leads";

        let recordId = BigInt("34770616838056");

        let attachmentId = BigInt("347706113151");

        let destinationFolder = "/Users/Documents";

        let absoluteFilePath = "/Users/Documents/download.png";

        console.log("-----Calling getAttachments()-----");
        await Attachments.getAttachments(moduleAPIName, recordId);

        console.log("-----Calling uploadAttachments()-----");
        await Attachments.uploadAttachments(moduleAPIName, recordId, absoluteFilePath);

        console.log("-----Calling uploadLinkAttachment()-----");
        await Attachments.uploadLinkAttachment(moduleAPIName, recordId, "https://drones2.com");

        console.log("-----Calling deleteAttachments()-----");
        await Attachments.deleteAttachments(moduleAPIName, recordId, [BigInt("347706110903001"), BigInt("347706111006002")])

        console.log("-----Calling downloadAttachment()-----");
        await Attachments.downloadAttachment(moduleAPIName, recordId, attachmentId, destinationFolder)

        console.log("-----Calling deleteAttachment()-----");
        await Attachments.deleteAttachment(moduleAPIName, recordId, attachmentId);
    }

    private static async bluePrint() {
        let moduleAPIName = "Leads";

        let recordId = BigInt("34770614381002");

        let transitionId = BigInt("3477061173093");

        console.log("-----Calling getBlueprint()-----")
        await BluePrint.getBlueprint(moduleAPIName, recordId);

        console.log("-----Calling updateBlueprint()-----")
        await BluePrint.updateBlueprint(moduleAPIName, recordId, transitionId);
    }

    private static async bulkRead() {
        let moduleAPIName = "Leads";

        let jobId = BigInt("347706113157");

        console.log("-----Calling createBulkReadJob()-----")
        await BulkRead.createBulkReadJob(moduleAPIName);

        console.log("-----Calling getBulkReadJobDetails()-----")
        await BulkRead.getBulkReadJobDetails(jobId);

        console.log("-----Calling downloadResult()-----")
        await BulkRead.downloadResult(jobId, "/Users/Documents")
    }

    private static async bulkWrite() {

        let filePath = "/Users/Documents/Leads.zip";

        let orgId = "675";

        let downloadUrl = "https://download-accl.zoho.com/v2/crm/675/bulk-write/347706113154001/347706113154001.zip";

        await BulkWrite.uploadFile(orgId, filePath);

        await BulkWrite.createBulkWriteJob("Leads", "347706113152001");

        await BulkWrite.getBulkWriteJobDetails(BigInt("347706113154001"));

        await BulkWrite.downloadBulkWriteResult(downloadUrl, "/Users/Documents")
    }

    private static async contactRole() {
        let contactRoleId = BigInt("347706112517005");

        let contactRoleIds = ["347706112517013", "347706112517015", "347706112517007"];

        console.log("-----Calling getContactRoles()-----")
        await ContactRoles.getContactRoles();

        await ContactRoles.getContactRole(contactRoleId);

        console.log("-----Calling createContactRoles()-----")
        await ContactRoles.createContactRoles();

        console.log("-----Calling updateContactRoles()-----")
        await ContactRoles.updateContactRoles();

        console.log("-----Calling updateContactRole()-----")
        await ContactRoles.updateContactRole(contactRoleId);

        console.log("-----Calling deleteContactRole()-----")
        await ContactRoles.deleteContactRole(contactRoleId);

        console.log("-----Calling deleteContactRoles()-----")
        await ContactRoles.deleteContactRoles(contactRoleIds);

        await ContactRoles.getAllContactRolesOfDeal(BigInt("347706112966056"));

        await ContactRoles.getContactRoleOfDeal(BigInt("347706112966053"), BigInt("347706112966056"));

        await ContactRoles.addContactRoleToDeal(BigInt("347706112966053"), BigInt("347706112966056"));

        await ContactRoles.removeContactRoleFromDeal(BigInt("347706112966053"), BigInt("347706112966056"));
    }

    private static async currency() {
        let currencyId = BigInt("34770617368016");

        console.log("-----Calling enableMultipleCurrencies()-----")
        await Currencies.enableMultipleCurrencies();

        console.log("-----Calling getCurrencies()-----")
        await Currencies.getCurrencies();

        console.log("-----Calling getCurrency()-----")
        await Currencies.getCurrency(currencyId);

        console.log("-----Calling addCurrencies()-----")
        await Currencies.addCurrencies();

        console.log("-----Calling updateCurrencies()-----")
        await Currencies.updateCurrencies();

        console.log("-----Calling updateCurrency()-----")
        await Currencies.updateCurrency(currencyId);

        console.log("-----Calling updateBaseCurrency()-----")
        await Currencies.updateBaseCurrency();
    }

    private static async customView() {
        let moduleAPIName = "leads"

        let customViewId = BigInt("3409643087563");

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes", 
        "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
         "Purchase_Orders", "Accounts", "Cases", "Notes", "Activities"];

        names.forEach(async name => {
        	await CustomViews.getCustomViews(name);
        });

        console.log("-----Calling getCustomViews()-----")
        await CustomViews.getCustomViews(moduleAPIName);

        console.log("-----Calling getCustomView()-----")
        await CustomViews.getCustomView(moduleAPIName, customViewId);
    }

    private static async emailTemplate() {
        let id = BigInt("347706179");

        await EmailTemplate.getEmailTemplates("Deals");

        await EmailTemplate.getEmailTemplateById(id);
    }

    private static async fieldAttachment() {
        let destinationFolder = "/Users/Documents";

        await FieldAttachment.getFieldAttachments("Leads", BigInt("347706111613002"), BigInt("347706111613032"), destinationFolder);
    }

    private static async field() {
        let moduleAPIName = "leads"

        let fieldId = BigInt("3409643053001");

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes",
            "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
            "Purchase_Orders", "Accounts", "Cases", "Notes", "Activities"];

        names.forEach(async name => {
        	await Fields.getFields(name);
        });

        console.log("-----Calling getFields()-----")
        await Fields.getFields(moduleAPIName);

        console.log("-----Calling getField()-----")
        await Fields.getField(moduleAPIName, fieldId);
    }

    private static async file() {
        let destinationFolder = "/Users/Documents";

        let fileId = "ae9c7cefa418aec1d6a5cc2d9ab35c327cf7f37e140f1f2aec0f3cfa5ceab654";

        let absoluteFilePath = "/Users/Documents/download.png";

        console.log("-----Calling uploadFile()-----");
        await Files.uploadFiles(absoluteFilePath);

        console.log("-----Calling getFile()-----");
        await Files.getFile(fileId, destinationFolder);
    }

    private static async inventoryTemplate() {
        let id = BigInt("3477061174003");

        await InventoryTemplate.getInventoryTemplates();

        await InventoryTemplate.getInventoryTemplateById(id);
    }

    private static async layout() {
        let moduleAPIName = "products";

        let layoutId = BigInt("3409643091009");

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes",
            "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
            "Purchase_Orders", "Accounts", "Cases", "Notes", "Activities"];

        names.forEach(async name => {
        	await Layouts.getLayouts(name);
        });

        console.log("-----Calling getLayouts()-----")
        await Layouts.getLayouts(moduleAPIName);

        console.log("-----Calling getLayout()-----")
        await Layouts.getLayout(moduleAPIName, layoutId);
    }

    private static async module() {
        let moduleAPIName = "apiName2";

        let moduleId = BigInt("3477061485367");

        console.log("-----Calling getModules()-----")
        await Modules.getModules();

        console.log("-----Calling getModule()-----")
        await Modules.getModule(moduleAPIName);

        console.log("-----Calling updateModuleByAPIName()-----")
        await Modules.updateModuleByAPIName(moduleAPIName);

        console.log("-----Calling updateModuleById()-----")
        await Modules.updateModuleById(moduleId);
    }

    private static async note() {
        let noteId = BigInt("3477061208204");

        let noteIds = [BigInt("34770619292012"), BigInt("34770619292008"), BigInt("347706110928003"), BigInt("347706110928004"), BigInt("347706110928005")];

        console.log("-----Calling getNotes()-----")
        await Notes.getNotes();

        console.log("-----Calling getNote()-----")
        await Notes.getNote(noteId);

        console.log("-----Calling createNotes()-----")
        await Notes.createNotes();

        console.log("-----Calling updateNotes()-----")
        await Notes.updateNotes();

        console.log("-----Calling updateNote()-----")
        await Notes.updateNote(noteId);

        console.log("-----Calling deleteNotes()-----")
        await Notes.deleteNotes(noteIds);

        console.log("-----Calling deleteNote()-----")
        await Notes.deleteNote(noteId);
    }

    private static async notification() {
        let channelIds = [BigInt("1006800211"), BigInt("1006800211")];

        console.log("-----Calling enableNotifications()-----")
        await Notifications.enableNotifications();

        console.log("-----Calling getNotificationDetails()-----")
        await Notifications.getNotificationDetails();

        console.log("-----Calling updateNotifications()-----")
        await Notifications.updateNotifications();

        console.log("-----Calling updateNotification()-----")
        await Notifications.updateNotification();

        console.log("-----Calling disableNotifications()-----")
        await Notifications.disableNotifications(channelIds);

        console.log("-----Calling getNotificationDetails()-----")
        await Notifications.disableNotification();
    }

    private static async org() {
        let filePath = "/Users/Documents/download.png";

        console.log("-----Calling getOrganization()-----")
        await Organization.getOrganization();

        console.log("-----Calling uploadOrganizationPhoto()-----")
        await Organization.uploadOrganizationPhoto(filePath);
    }

    private static async pipeLine() {
        let layoutId = BigInt("3477061091023");

        let pipelineID = BigInt("34770619856001");

        PipeLine.createPipelines(layoutId);

        PipeLine.updatePipelines(layoutId);

        PipeLine.getPipelines(layoutId);

        PipeLine.getPipeline(layoutId, pipelineID);

        PipeLine.updatePipeline(layoutId, pipelineID);

        PipeLine.transferAndDelete(layoutId);
    }

    private static async profile() {
        let profileId = BigInt("3477061026014");

        console.log("-----Calling getProfiles()-----")
        await Profiles.getProfiles();

        console.log("-----Calling getProfile()-----")
        await Profiles.getProfile(profileId)
    }

    private static async query() {
        await Query.getRecords();
    }

    private static async record() {
        let moduleAPIName = "leads";

        let recordId = BigInt("347706112109001");

        let externalFieldValue: string = "External1232344323";

        let destinationFolder = "/Users/Documents";

        let filePath = "/Users/Documents/download.png";

        let recordIds = ["External88", "347706110777161", "347706110777145"];

        let jobId = "347706112107001";

        let names = ["products", "tasks", "vendors", "calls", "leads", "deals", "campaigns", "quotes",
            "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
            "Purchase_Orders", "Accounts", "Cases", "Notes", "Activities"];

        names.forEach(async name => {
            await Records.getRecords(name);
        });

        console.log("-----Calling getRecord()-----")
        await Records.getRecord(moduleAPIName, recordId, destinationFolder);

        await Records.updateRecord(moduleAPIName, recordId);

        await Records.deleteRecord(moduleAPIName, recordId);

        await Records.getRecordUsingExternalId(moduleAPIName, externalFieldValue, destinationFolder);

        await Records.updateRecordUsingExternalId(moduleAPIName, externalFieldValue);
        
        await Records.deleteRecordUsingExternalId(moduleAPIName, externalFieldValue);

        console.log("-----Calling getRecords()-----")
        await Records.getRecords(moduleAPIName);

        await Files.uploadFiles(filePath);

        console.log("-----Calling createRecords()-----");
        await Records.createRecords(moduleAPIName);

        await Records.updateRecords(moduleAPIName);

        await Records.deleteRecords(moduleAPIName, recordIds);

        await Records.upsertRecords(moduleAPIName);

        await Records.getDeletedRecords(moduleAPIName);

        await Records.searchRecords(moduleAPIName);

        await Records.convertLead(BigInt("347706110780065"));

        console.log("-----Calling uploadPhoto()-----");
        await Records.uploadPhoto(moduleAPIName, recordId, filePath);

        console.log("-----Calling getPhoto()-----");
        await Records.getPhoto(moduleAPIName, recordId, destinationFolder);

        await Records.deletePhoto(moduleAPIName, recordId);

        await Records.massUpdateRecords(moduleAPIName);

        await Records.getMassUpdateStatus(moduleAPIName, jobId);

        await Records.getRecordCount();
			
        await Records.assignTerritoriesToMultipleRecords(moduleAPIName);
        
        await Records.assignTerritoryToRecord(moduleAPIName, recordId);
        
        await Records.removeTerritoriesFromMultipleRecords(moduleAPIName);
        
        await Records.removeTerritoriesFromRecord(moduleAPIName, recordId);
    }

    private static async relatedList() {
        let moduleAPIName = "quotes";

        let relatedListId = BigInt("3409643003885");

        let names = ["Products", "Tasks", "Vendors", "Calls", "Leads", "Deals", "Campaigns", "Quotes",
            "Invoices", "Attachments", "Price_Books", "Sales_Orders", "Contacts", "Solutions", "Events",
            "Purchase_Orders", "Accounts", "Cases", "Notes", "Activities"];

        names.forEach(async name => {
        	await RelatedLists.getRelatedLists(name);
        });

        console.log("-----Calling getRelatedLists()-----")
        await RelatedLists.getRelatedLists(moduleAPIName);

        console.log("-----Calling getRelatedList()-----")
        await RelatedLists.getRelatedList(moduleAPIName, relatedListId)
    }

    private static async relatedRecord() {
        let moduleAPIName = "leads";

        let recordId = BigInt("347706113241001");

        let relatedModuleAPIName = "products";

        let relatedId = BigInt("347706113245001");

        let relatedIds = ["Products_External", "3477061307010"];

        let destinationFolder = "/Users/Desktop/";

        let externalValue = "LeadsExternal123456";

        let externalFieldValue = "AutomatedSDK";

        console.log("-----Calling getRelatedRecords()-----")
        await RelatedRecord.getRelatedRecords(moduleAPIName, recordId, relatedModuleAPIName);

        console.log("-----Calling updateRelatedRecords()-----")
        await RelatedRecord.updateRelatedRecords(moduleAPIName, recordId, relatedModuleAPIName);

        console.log("-----Calling deLinkRecords()-----")
        await RelatedRecord.deLinkRecords(moduleAPIName, recordId, relatedModuleAPIName, relatedIds);

        await RelatedRecord.getRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName);

        await RelatedRecord.updateRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName);

        await RelatedRecord.deleteRelatedRecordsUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, relatedIds);

        console.log("-----Calling getRelatedRecord()-----")
        await RelatedRecord.getRelatedRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId, destinationFolder);

        console.log("-----Calling updateRelatedRecord()-----")
        await RelatedRecord.updateRelatedRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId);

        console.log("-----Calling deLinkRecord()-----")
        await RelatedRecord.deLinkRecord(moduleAPIName, recordId, relatedModuleAPIName, relatedId);

        await RelatedRecord.getRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue, destinationFolder);

        await RelatedRecord.updateRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue);

        await RelatedRecord.deleteRelatedRecordUsingExternalId(moduleAPIName, externalValue, relatedModuleAPIName, externalFieldValue);
    }

    private static async role() {
        let roleId = BigInt("3477061026005");

        console.log("-----Calling getRoles()-----")
        await Roles.getRoles();

        console.log("-----Calling getRole()-----")
        await Roles.getRole(roleId);
    }

    private static async sendMail() {
        await SendMail.getEmailAddresses();

        await SendMail.sendMail(BigInt("347706112558011"), "Leads");
    }

    private static async shareRecord() {
        let moduleAPIName = "Leads";

        let recordId = BigInt("34770615623115");

        console.log("-----Calling shareRecord()-----")
        await ShareRecords.shareRecord(moduleAPIName, recordId);

        console.log("-----Calling updateSharePermissions()-----")
        await ShareRecords.updateSharePermissions(moduleAPIName, recordId);

        console.log("-----Calling getSharedRecordDetails()-----")
        await ShareRecords.getSharedRecordDetails(moduleAPIName, recordId);

        console.log("-----Calling revokeSharedRecord()-----")
        await ShareRecords.revokeSharedRecord(moduleAPIName, recordId);
    }

    private static async tag() {
        let moduleAPIName = "Leads";

        let tagId = BigInt("347706112448003");

        let recordId = BigInt("347706110783139");

        let tagNames = ["edited-tagname,addtag12"];

        let recordIds = [BigInt("347706110783139"), BigInt("34096432730218"), BigInt("34096432469044")];

        let conflictId = "347706112448003";

        console.log("-----Calling getTags()-----")
        await Tags.getTags(moduleAPIName);

        console.log("-----Calling createTags()-----")
        await Tags.createTags(moduleAPIName);

        console.log("-----Calling updateTags()-----")
        await Tags.updateTags(moduleAPIName);

        console.log("-----Calling updateTag()-----")
        await Tags.updateTag(moduleAPIName, tagId);

        console.log("-----Calling mergeTags()-----")
        await Tags.mergeTags(tagId, conflictId);

        console.log("-----Calling addTagsToRecord()-----")
        await Tags.addTagsToRecord(moduleAPIName, recordId, tagNames);

        console.log("-----Calling removeTagsFromRecord()-----")
        await Tags.removeTagsFromRecord(moduleAPIName, recordId, tagNames);

        console.log("-----Calling addTagsToMultipleRecords()-----")
        await Tags.addTagsToMultipleRecords(moduleAPIName, recordIds, tagNames);

        console.log("-----Calling removeTagsFromMultipleRecords()-----")
        await Tags.removeTagsFromMultipleRecords(moduleAPIName, recordIds, tagNames);

        console.log("-----Calling getRecordCountForTag()-----")
        await Tags.getRecordCountForTag(moduleAPIName, tagId);

        console.log("-----Calling deleteTag()-----")
        await Tags.deleteTag(tagId);
    }

    private static async tax() {
        let taxId = BigInt("347706112712010");

        console.log("-----Calling getTaxes()-----")
        await Taxes.getTaxes();

        console.log("-----Calling getTax()-----")
        await Taxes.getTax(taxId);

        console.log("-----Calling createTaxes()-----")
        await Taxes.createTaxes();

        console.log("-----Calling updateTaxes()-----")
        await Taxes.updateTaxes();

        console.log("-----Calling deleteTaxes()-----")
        await Taxes.deleteTaxes([BigInt("347706112712011"), BigInt("347706113318010")])

        console.log("-----Calling deleteTax()-----")
        await Taxes.deleteTax(taxId)
    }

    private static async territory() {
        let territoryId = BigInt("34770613051357");

        console.log("-----Calling getTerritories()-----")
        await Territories.getTerritories();

        console.log("-----Calling getTerritory()-----")
        await Territories.getTerritory(territoryId);
    }

    private static async user() {
        let userId = BigInt("347706112193009");

        console.log("-----Calling getUsers()-----")
        await Users.getUsers();

        console.log("-----Calling getUser()-----")
        await Users.getuser(userId);

        console.log("-----Calling updateUsers()-----")
        await Users.updateUsers();

        console.log("-----Calling updateUser()-----")
        await Users.updateUser(userId);

        console.log("-----Calling deleteUser()-----")
        await Users.deleteUser(userId);

        console.log("-----Calling createUser()-----")
        await Users.createUser();
    }

    private static async variableGroup() {
        let variableGroupId = BigInt("34770613089001");

        let variableGroupAPIName = "General";

        console.log("-----Calling getVariableGroups()-----")
        await VariableGroups.getVariableGroups();

        console.log("-----Calling getVariableGroupById()-----")
        await VariableGroups.getVariableGroupById(variableGroupId);

        console.log("-----Calling getVariableGroupByAPIName()-----")
        await VariableGroups.getVariableGroupByAPIName(variableGroupAPIName);
    }

    private static async variable() {
        let variableIds = [BigInt("347706113321004"), BigInt("347706113321006")];

        console.log("-----Calling createVariables()-----")
        await Variables.createVariables();

        console.log("-----Calling getVariables()-----")
        await Variables.getVariables();

        console.log("-----Calling getVariableById()-----")
        await Variables.getVariableById(BigInt("347706110178013"));

        console.log("-----Calling getVariableForAPIName()-----")
        await Variables.getVariableForAPIName("Variable551ash");

        console.log("-----Calling updateVariableByAPIName()-----")
        await Variables.updateVariableByAPIName("Variable551ash");

        console.log("-----Calling updateVariableById()-----")
        await Variables.updateVariableById(BigInt("347706110321012"));

        console.log("-----Calling updateVariables()-----")
        await Variables.updateVariables();

        console.log("-----Calling deleteVariables()-----")
        await Variables.deleteVariables(variableIds);

        console.log("-----Calling deleteVariable()-----")
        await Variables.deleteVariable(BigInt("347706112903001"))
    }

    private static async wizard() {
        let wizardId = BigInt("34770619497009");

        await Wizard.getWizards();

        await Wizard.getWizardById(wizardId, "3477061091055");
    }
}

Test.call()