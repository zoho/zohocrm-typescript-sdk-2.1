import {TransferPipeLine} from "./transfer_pipe_line";
import {Model} from "../../../../../../utils/util/model";

class TransferAndDeleteWrapper implements Model {

	private transferPipeline: Array<TransferPipeLine>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the transferPipeline
	 * @returns An Array representing the transferPipeline
	 */
	public getTransferPipeline(): Array<TransferPipeLine>	{
		return this.transferPipeline;

	}

	/**
	 * The method to set the value to transferPipeline
	 * @param transferPipeline An Array representing the transferPipeline
	 */
	public setTransferPipeline(transferPipeline: Array<TransferPipeLine>): void	{
		this.transferPipeline = transferPipeline;
		this.keyModified.set("transfer_pipeline", 1);

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
	TransferAndDeleteWrapper as MasterModel,
	TransferAndDeleteWrapper as TransferAndDeleteWrapper
}
