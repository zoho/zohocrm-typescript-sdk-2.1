import {ResponseHandler} from "./response_handler";
import {Param} from "../../../../../../routes/param";
import {ParameterMap} from "../../../../../../routes/parameter_map";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class InventoryTemplatesOperations {

	private sortBy?: string;
	private sortOrder?: string;
	private category?: string;
	/**
	 * Creates an instance of InventoryTemplatesOperations with the given parameters
	 * @param sortBy A string representing the sortBy
	 * @param sortOrder A string representing the sortOrder
	 * @param category A string representing the category
	 */
	constructor(sortBy?: string, sortOrder?: string, category?: string){
		this.sortBy = sortBy;
		this.sortOrder = sortOrder;
		this.category = category;

	}

	/**
	 * The method to get inventory templates
	 * @param paramInstance An instance of ParameterMap
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getInventoryTemplates(paramInstance?: ParameterMap): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2.1/settings/inventory_templates");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<string>("sort_by", "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatesParam"), this.sortBy);
		await handlerInstance.addParam(new Param<string>("sort_order", "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatesParam"), this.sortOrder);
		await handlerInstance.addParam(new Param<string>("category", "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatesParam"), this.category);
		handlerInstance.setParam(paramInstance);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to get inventory template by id
	 * @param id A bigint representing the id
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getInventoryTemplateById(id: bigint): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2.1/settings/inventory_templates/");
		apiPath = apiPath.concat(id.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<string>("sort_by", "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatebyIDParam"), this.sortBy);
		await handlerInstance.addParam(new Param<string>("sort_order", "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatebyIDParam"), this.sortOrder);
		await handlerInstance.addParam(new Param<string>("category", "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatebyIDParam"), this.category);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

}
class GetInventoryTemplatesParam {

	public static MODULE: Param<string> = new Param<string>("module", "com.zoho.crm.api.InventoryTemplates.GetInventoryTemplatesParam");
}

class GetInventoryTemplatebyIDParam {

}

export {
	GetInventoryTemplatebyIDParam as GetInventoryTemplatebyIDParam,
	InventoryTemplatesOperations as MasterModel,
	InventoryTemplatesOperations as InventoryTemplatesOperations,
	GetInventoryTemplatesParam as GetInventoryTemplatesParam
}
