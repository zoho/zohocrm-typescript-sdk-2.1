import {Pipeline} from "./pipeline";
import {Stage} from "./stage";
import {Model} from "../../../../../../utils/util/model";

class TransferPipeLine implements Model {

	private pipeline: Pipeline;
	private stages: Array<Stage>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the pipeline
	 * @returns An instance of Pipeline
	 */
	public getPipeline(): Pipeline	{
		return this.pipeline;

	}

	/**
	 * The method to set the value to pipeline
	 * @param pipeline An instance of Pipeline
	 */
	public setPipeline(pipeline: Pipeline): void	{
		this.pipeline = pipeline;
		this.keyModified.set("pipeline", 1);

	}

	/**
	 * The method to get the stages
	 * @returns An Array representing the stages
	 */
	public getStages(): Array<Stage>	{
		return this.stages;

	}

	/**
	 * The method to set the value to stages
	 * @param stages An Array representing the stages
	 */
	public setStages(stages: Array<Stage>): void	{
		this.stages = stages;
		this.keyModified.set("stages", 1);

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
	TransferPipeLine as MasterModel,
	TransferPipeLine as TransferPipeLine
}
