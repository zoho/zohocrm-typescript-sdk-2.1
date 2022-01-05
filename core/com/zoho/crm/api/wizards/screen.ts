import {Segment} from "./segment";
import {Model} from "../../../../../../utils/util/model";

class Screen implements Model {

	private id: bigint;
	private displayLabel: string;
	private segments: Array<Segment>;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the id
	 * @returns A bigint representing the id
	 */
	public getId(): bigint	{
		return this.id;

	}

	/**
	 * The method to set the value to id
	 * @param id A bigint representing the id
	 */
	public setId(id: bigint): void	{
		this.id = id;
		this.keyModified.set("id", 1);

	}

	/**
	 * The method to get the displayLabel
	 * @returns A string representing the displayLabel
	 */
	public getDisplayLabel(): string	{
		return this.displayLabel;

	}

	/**
	 * The method to set the value to displayLabel
	 * @param displayLabel A string representing the displayLabel
	 */
	public setDisplayLabel(displayLabel: string): void	{
		this.displayLabel = displayLabel;
		this.keyModified.set("display_label", 1);

	}

	/**
	 * The method to get the segments
	 * @returns An Array representing the segments
	 */
	public getSegments(): Array<Segment>	{
		return this.segments;

	}

	/**
	 * The method to set the value to segments
	 * @param segments An Array representing the segments
	 */
	public setSegments(segments: Array<Segment>): void	{
		this.segments = segments;
		this.keyModified.set("segments", 1);

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
	Screen as MasterModel,
	Screen as Screen
}
