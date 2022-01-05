// core file
import * as AssignmentRules from './core/com/zoho/crm/api/assignment_rules/assignment_rules';
import * as Attachments  from './core/com/zoho/crm/api/attachments/attachments';
import * as BluePrints from './core/com/zoho/crm/api/blue_print/blue_prints';
import * as BulkRead from './core/com/zoho/crm/api/bulk_read/bulk_reads';
import * as BulkWrite from './core/com/zoho/crm/api/bulk_write/bulk_writes';
import * as ContactRoles from './core/com/zoho/crm/api/contact_roles/contact_roles';
import * as Currencies from './core/com/zoho/crm/api/currencies/currencies';
import * as CustomViews from './core/com/zoho/crm/api/custom_views/custom_views';
import * as EmailTemplates from './core/com/zoho/crm/api/email_templates/email_templates';
import * as FieldAttachments from './core/com/zoho/crm/api/field_attachments/field_attachments';
import * as Fields from './core/com/zoho/crm/api/fields/fields';
import * as File from './core/com/zoho/crm/api/file/files';
import * as InventoryTemplates from './core/com/zoho/crm/api/inventory_templates/inventory_templates';
import * as Layouts from './core/com/zoho/crm/api/layouts/layouts';
import * as Modules from './core/com/zoho/crm/api/modules/modules';
import * as Notes from './core/com/zoho/crm/api/notes/notes';
import * as Notifications from './core/com/zoho/crm/api/notification/notifications';
import * as Orgs from './core/com/zoho/crm/api/org/orgs';
import * as Pipelines from './core/com/zoho/crm/api/pipeline/pipelines';
import * as Profiles from './core/com/zoho/crm/api/profiles/profiles';
import * as Query from './core/com/zoho/crm/api/query/querys';
import * as Records from './core/com/zoho/crm/api/record/records';
import * as RelatedLists from './core/com/zoho/crm/api/related_lists/related_lists';
import * as RelatedRecords from './core/com/zoho/crm/api/related_records/related_records';
import * as Roles from './core/com/zoho/crm/api/roles/roles';
import * as SendMail from './core/com/zoho/crm/api/send_mail/send_mails';
import * as ShareRecords from './core/com/zoho/crm/api/share_records/share_records';
import * as Tags from './core/com/zoho/crm/api/tags/tags';
import * as Taxes from './core/com/zoho/crm/api/taxes/taxes';
import * as Territories from './core/com/zoho/crm/api/territories/territories';
import * as Users from './core/com/zoho/crm/api/users/users';
import * as VariableGroups from './core/com/zoho/crm/api/variable_groups/variable_groups';
import * as Variables from './core/com/zoho/crm/api/variables/variables';
import * as Wizards from './core/com/zoho/crm/api/wizards/wizards';

// exception
import { SDKException } from './core/com/zoho/crm/api/exception/sdk_exception';

// token store
import { DBBuilder } from "./models/authenticator/store/db_builder";
import { DBStore } from "./models/authenticator/store/db_store";
import { FileStore } from "./models/authenticator/store/file_store";
import * as TokenStore  from "./models/authenticator/store/token_store";

// authenticator
import { OAuthBuilder } from './models/authenticator/oauth_builder';
import { OAuthToken } from './models/authenticator/oauth_token';
import * as Token  from './models/authenticator/token';

// controllers
import { APIHTTPConnector } from './routes/controllers/api_http_connector';
import { APIResponse } from './routes/controllers/api_response';

//dc
import { AUDataCenter } from './routes/dc/au_data_center';
import { CNDataCenter } from './routes/dc/cn_data_center';
import { DataCenter } from './routes/dc/data_center';
import { Environment } from './routes/dc/environment';
import { EUDataCenter } from './routes/dc/eu_data_center';
import { INDataCenter } from './routes/dc/in_data_center';
import { USDataCenter } from './routes/dc/us_data_center';

// logger
import { LogBuilder } from './routes/logger/log_builder';
import { Logger } from './routes/logger/logger';
import { Levels } from './routes/logger/logger';
import { SDKLogger } from './routes/logger/sdk_logger';

// middlewares
import { CommonAPIHandler } from './routes/middlewares/common_api_handler';

// root files
import { HeaderMap } from './routes/header_map';
import { Header } from './routes/header';
import { InitializeBuilder } from './routes/initialize_builder';
import { Initializer } from './routes/initializer';
import { Param } from './routes/param';
import { ParameterMap } from './routes/parameter_map';
import { ProxyBuilder } from './routes/proxy_builder';
import { RequestProxy } from './routes/request_proxy';
import { SDKConfigBuilder } from './routes/sdk_config_builder';
import { SDKConfig } from './routes/sdk_config';
import { UserSignature } from './routes/user_signature';

//util files
import { Choice } from './utils/util/choice';
import { Constants } from './utils/util/constants';
import { Converter } from './utils/util/converter';
import { DataTypeConverter } from './utils/util/datatype_converter';
import { Downloader } from './utils/util/downloader';
import { FormDataConverter } from './utils/util/form_data_converter';
import { HeaderParamValidator } from './utils/util/header_param_validator';
import { JSONConverter } from './utils/util/json_converter';
import * as Model  from './utils/util/model';
import { ModuleFieldsHandler } from './utils/util/module_fields_handler';
import { StreamWrapper } from './utils/util/stream_wrapper';
import { Utility } from './utils/util/utility';
import { XMLConverter } from './utils/util/xml_converter';

class ZOHOCRMSDK {
    AssignmentRules: any;
    Attachments: any;
    BluePrints: any;
    BulkRead: any;
    BulkWrite: any;
    ContactRoles : any;
    Currencies : any;
    CustomViews : any;
    EmailTemplates : any;
    FieldAttachments : any;
    Fields: any;
    File: any;
    InventoryTemplates: any;
    Layouts: any;
    Modules: any;
    Notes: any;
    Notifications: any;
    Orgs: any;
    Pipelines: any;
    Profiles: any;
    Query: any;
    Records: any;
    RelatedLists: any;
    RelatedRecords: any;
    Roles: any;
    SendMail: any;
    ShareRecords: any;
    Tags: any;
    Taxes: any;
    Territories: any;
    Users: any;
    VariableGroups: any;
    Variables: any;
    Wizards: any;
    
    SDKException: any;
    
    DBBuilder: any;
    DBStore: any;
    FileStore: any;
    TokenStore: any;

    OAuthBuilder: any;
    OAuthToken: any;
    Token: any;

    APIHTTPConnector: any;
    APIResponse: any;

    AUDataCenter: any;
    CNDataCenter: any;
    DataCenter: any;
    Environment: any;
    EUDataCenter: any;
    INDataCenter: any;
    USDataCenter: any;

    LogBuilder: any;
    Logger: any;
    Levels: any;
    SDKLogger: any;

    CommonAPIHandler: any;

    HeaderMap: any;
    Header: any;
    InitializeBuilder: any;
    Initializer: any;
    Param: any;
    ParameterMap: any;
    ProxyBuilder: any;
    RequestProxy: any;
    SDKConfigBuilder: any;
    SDKConfig: any;
    UserSignature: any;

    Choice: any;
    Constants: any;
    Converter: any;
    DataTypeConverter: any;
    Downloader: any;
    FormDataConverter: any;
    HeaderParamValidator: any;
    JSONConverter: any;
    Model: any;
    ModuleFieldsHandler: any;
    StreamWrapper: any;
    Utility: any;
    XMLConverter : any;

    constructor() {
        this.AssignmentRules = AssignmentRules;
        this.Attachments = Attachments;
        this.BluePrints = BluePrints;
        this.BulkRead = BulkRead;
        this.BulkWrite = BulkWrite;
        this.ContactRoles  = ContactRoles;
        this.Currencies  = Currencies;
        this.CustomViews  = CustomViews;
        this.EmailTemplates  = EmailTemplates;
        this.FieldAttachments  = FieldAttachments;
        this.Fields = Fields;
        this.File = File;
        this.InventoryTemplates = InventoryTemplates;
        this.Layouts = Layouts;
        this.Modules = Modules;
        this.Notes = Notes;
        this.Notifications = Notifications;
        this.Orgs = Orgs;
        this.Pipelines = Pipelines;
        this.Profiles = Profiles;
        this.Query = Query;
        this.Records = Records;
        this.RelatedLists = RelatedLists;
        this.RelatedRecords = RelatedRecords;
        this.Roles = Roles;
        this.SendMail = SendMail;
        this.ShareRecords = ShareRecords;
        this.Tags = Tags;
        this.Taxes = Taxes;
        this.Territories = Territories;
        this.Users = Users;
        this.VariableGroups = VariableGroups;
        this.Variables = Variables;
        this.Wizards = Wizards;
    
        this.SDKException = SDKException;
    
        this.DBBuilder = DBBuilder;
        this.DBStore = DBStore;
        this.FileStore = FileStore;
        this.TokenStore = TokenStore;

        this.OAuthBuilder = OAuthBuilder;
        this.OAuthToken = OAuthToken;
        this.Token = Token;

        this.APIHTTPConnector = APIHTTPConnector;
        this.APIResponse = APIResponse;

        this.AUDataCenter = AUDataCenter;
        this.CNDataCenter = CNDataCenter;
        this.DataCenter = DataCenter;
        this.Environment = Environment;
        this.EUDataCenter = EUDataCenter;
        this.INDataCenter = INDataCenter;
        this.USDataCenter = USDataCenter;

        this.LogBuilder = LogBuilder;
        this.Logger = Logger;
        this.Levels = Levels;
        this.SDKLogger = SDKLogger;

        this.CommonAPIHandler = CommonAPIHandler;

        this.HeaderMap = HeaderMap;
        this.Header = Header;
        this.InitializeBuilder = InitializeBuilder;
        this.Initializer = Initializer;
        this.Param = Param;
        this.ParameterMap = ParameterMap;
        this.ProxyBuilder = ProxyBuilder;
        this.RequestProxy = RequestProxy;
        this.SDKConfigBuilder = SDKConfigBuilder;
        this.SDKConfig = SDKConfig;
        this.UserSignature = UserSignature;

        this.Choice = Choice;
        this.Constants = Constants;
        this.Converter = Converter;
        this.DataTypeConverter = DataTypeConverter;
        this.Downloader = Downloader;
        this.FormDataConverter = FormDataConverter;
        this.HeaderParamValidator = HeaderParamValidator;
        this.JSONConverter = JSONConverter;
        this.Model = Model;
        this.ModuleFieldsHandler = ModuleFieldsHandler;
        this.StreamWrapper = StreamWrapper;
        this.Utility = Utility;
        this.XMLConverter  = XMLConverter;
    }
}

export default ZOHOCRMSDK;

export {
    AssignmentRules,
    Attachments,
    BluePrints,
    BulkRead,
    BulkWrite,
    ContactRoles,
    Currencies,
    CustomViews,
    EmailTemplates,
    FieldAttachments,
    Fields,
    File,
    InventoryTemplates,
    Layouts,
    Modules,
    Notes,
    Notifications,
    Orgs,
    Pipelines,
    Profiles,
    Query,
    Records,
    RelatedLists,
    RelatedRecords,
    Roles,
    SendMail,
    ShareRecords,
    Tags,
    Taxes,
    Territories,
    Users,
    VariableGroups,
    Variables,
    Wizards,
    
    SDKException,
    
    DBBuilder,
    DBStore,
    FileStore,
    TokenStore,

    OAuthBuilder,
    OAuthToken,
    Token,

    APIHTTPConnector,
    APIResponse,

    AUDataCenter,
    CNDataCenter,
    DataCenter,
    Environment,
    EUDataCenter,
    INDataCenter,
    USDataCenter,

    LogBuilder,
    Logger,
    Levels,
    SDKLogger,

    CommonAPIHandler,

    HeaderMap,
    Header,
    InitializeBuilder,
    Initializer,
    Param,
    ParameterMap,
    ProxyBuilder,
    RequestProxy,
    SDKConfigBuilder,
    SDKConfig,
    UserSignature,

    Choice,
    Constants,
    Converter,
    DataTypeConverter,
    Downloader,
    FormDataConverter,
    HeaderParamValidator,
    JSONConverter,
    Model,
    ModuleFieldsHandler,
    StreamWrapper,
    Utility,
    XMLConverter ,
};