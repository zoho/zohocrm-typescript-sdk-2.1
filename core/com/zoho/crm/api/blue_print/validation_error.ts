import {Model} from "../../../../../../utils/util/model";

class ValidationError implements Model {

	private apiName: string;
	private infoMessage: string;
	private message: string;
	private index: number;
	private parentAPIName: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the apiName
	 * @returns A string representing the apiName
	 */
	public getAPIName(): string	{
		return this.apiName;

	}

	/**
	 * The method to set the value to apiName
	 * @param apiName A string representing the apiName
	 */
	public setAPIName(apiName: string): void	{
		this.apiName = apiName;
		this.keyModified.set("api_name", 1);

	}

	/**
	 * The method to get the infoMessage
	 * @returns A string representing the infoMessage
	 */
	public getInfoMessage(): string	{
		return this.infoMessage;

	}

	/**
	 * The method to set the value to infoMessage
	 * @param infoMessage A string representing the infoMessage
	 */
	public setInfoMessage(infoMessage: string): void	{
		this.infoMessage = infoMessage;
		this.keyModified.set("info_message", 1);

	}

	/**
	 * The method to get the message
	 * @returns A string representing the message
	 */
	public getMessage(): string	{
		return this.message;

	}

	/**
	 * The method to set the value to message
	 * @param message A string representing the message
	 */
	public setMessage(message: string): void	{
		this.message = message;
		this.keyModified.set("message", 1);

	}

	/**
	 * The method to get the index
	 * @returns A number representing the index
	 */
	public getIndex(): number	{
		return this.index;

	}

	/**
	 * The method to set the value to index
	 * @param index A number representing the index
	 */
	public setIndex(index: number): void	{
		this.index = index;
		this.keyModified.set("index", 1);

	}

	/**
	 * The method to get the parentapiName
	 * @returns A string representing the parentAPIName
	 */
	public getParentAPIName(): string	{
		return this.parentAPIName;

	}

	/**
	 * The method to set the value to parentapiName
	 * @param parentAPIName A string representing the parentAPIName
	 */
	public setParentAPIName(parentAPIName: string): void	{
		this.parentAPIName = parentAPIName;
		this.keyModified.set("parent_api_name", 1);

	}

	/**
	 * The method to check if the user has modified the given key
	 * @param key A string representing the key
	 * @returns A number representing the modification
	 */
	public isKeyModified(key: string): number | null | undefined	{
		if(this.keyModified.has(key))	{
			return this.keyModified.get(key);
		}
		return null;

	}

	/**
	 * The method to mark the given key as modified
	 * @param key A string representing the key
	 * @param modification A number representing the modification
	 */
	public setKeyModified(key: string, modification: number): void	{
		this.keyModified.set(key, modification);

	}

}
export {
	ValidationError as MasterModel,
	ValidationError as ValidationError
}
