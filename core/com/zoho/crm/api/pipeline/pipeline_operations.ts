import {Param} from "../../../../../../routes/param";
import {ActionHandler} from "./action_handler";
import {BodyWrapper} from "./body_wrapper";
import {ResponseHandler} from "./response_handler";
import {TransferActionHandler} from "./transfer_action_handler";
import {TransferAndDeleteWrapper} from "./transfer_and_delete_wrapper";
import {SDKException} from "../exception/sdk_exception";
import {APIResponse} from "../../../../../../routes/controllers/api_response";
import {CommonAPIHandler} from "../../../../../../routes/middlewares/common_api_handler";
import { Constants } from "../../../../../../utils/util/constants";

class PipelineOperations {

	private layoutId?: bigint;
	/**
	 * Creates an instance of PipelineOperations with the given parameters
	 * @param layoutId A bigint representing the layoutId
	 */
	constructor(layoutId?: bigint){
		this.layoutId = layoutId;

	}

	/**
	 * The method to transfer and delete
	 * @param request An instance of TransferAndDeleteWrapper
	 * @returns An instance of APIResponse<TransferActionHandler>
	 * @throws SDKException
	 */
	public async transferAndDelete(request: TransferAndDeleteWrapper): Promise<APIResponse<TransferActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2.1/settings/pipeline/actions/transfer");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.Pipeline.TransferAndDeleteParam"), this.layoutId);
		let TransferActionHandler = require.resolve("./transfer_action_handler");
		return handlerInstance.apiCall<TransferActionHandler>(TransferActionHandler, "application/json");

	}

	/**
	 * The method to get pipelines
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getPipelines(): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2.1/settings/pipeline");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.Pipeline.GetPipelinesParam"), this.layoutId);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to create pipelines
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async createPipelines(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2.1/settings/pipeline");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_POST);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_CREATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.Pipeline.CreatePipelinesParam"), this.layoutId);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to update pipelines
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updatePipelines(request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2.1/settings/pipeline");
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		handlerInstance.setMandatoryChecker(true);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.Pipeline.UpdatePipelinesParam"), this.layoutId);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

	/**
	 * The method to get pipeline
	 * @param pipelineId A bigint representing the pipelineId
	 * @returns An instance of APIResponse<ResponseHandler>
	 * @throws SDKException
	 */
	public async getPipeline(pipelineId: bigint): Promise<APIResponse<ResponseHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2.1/settings/pipeline/");
		apiPath = apiPath.concat(pipelineId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_GET);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_READ);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.Pipeline.GetPipelineParam"), this.layoutId);
		let ResponseHandler = require.resolve("./response_handler");
		return handlerInstance.apiCall<ResponseHandler>(ResponseHandler, "application/json");

	}

	/**
	 * The method to update pipeline
	 * @param pipelineId A bigint representing the pipelineId
	 * @param request An instance of BodyWrapper
	 * @returns An instance of APIResponse<ActionHandler>
	 * @throws SDKException
	 */
	public async updatePipeline(pipelineId: bigint, request: BodyWrapper): Promise<APIResponse<ActionHandler>>	{
		let handlerInstance: CommonAPIHandler = new CommonAPIHandler();
		let apiPath: string = '';
		apiPath = apiPath.concat("/crm/v2.1/settings/pipeline/");
		apiPath = apiPath.concat(pipelineId.toString());
		handlerInstance.setAPIPath(apiPath);
		handlerInstance.setHttpMethod(Constants.REQUEST_METHOD_PUT);
		handlerInstance.setCategoryMethod(Constants.REQUEST_CATEGORY_UPDATE);
		handlerInstance.setContentType("application/json");
		handlerInstance.setRequest(request);
		await handlerInstance.addParam(new Param<bigint>("layout_id", "com.zoho.crm.api.Pipeline.UpdatePipelineParam"), this.layoutId);
		let ActionHandler = require.resolve("./action_handler");
		return handlerInstance.apiCall<ActionHandler>(ActionHandler, "application/json");

	}

}
class TransferAndDeleteParam {

}

class GetPipelinesParam {

}

class CreatePipelinesParam {

}

class UpdatePipelinesParam {

}

class GetPipelineParam {

}

class UpdatePipelineParam {

}

export {
	GetPipelineParam as GetPipelineParam,
	TransferAndDeleteParam as TransferAndDeleteParam,
	GetPipelinesParam as GetPipelinesParam,
	PipelineOperations as MasterModel,
	PipelineOperations as PipelineOperations,
	UpdatePipelinesParam as UpdatePipelinesParam,
	UpdatePipelineParam as UpdatePipelineParam,
	CreatePipelinesParam as CreatePipelinesParam
}
