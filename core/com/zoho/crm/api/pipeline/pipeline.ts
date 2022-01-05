import {PickListValue} from "./pick_list_value";
import {Model} from "../../../../../../utils/util/model";

class Pipeline implements Model {

	private from: bigint;
	private to: bigint;
	private parent: Pipeline;
	private childAvailable: boolean;
	private displayValue: string;
	private default1: boolean;
	private maps: Array<PickListValue>;
	private actualValue: string;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the from
	 * @returns A bigint representing the from
	 */
	public getFrom(): bigint	{
		return this.from;

	}

	/**
	 * The method to set the value to from
	 * @param from A bigint representing the from
	 */
	public setFrom(from: bigint): void	{
		this.from = from;
		this.keyModified.set("from", 1);

	}

	/**
	 * The method to get the to
	 * @returns A bigint representing the to
	 */
	public getTo(): bigint	{
		return this.to;

	}

	/**
	 * The method to set the value to to
	 * @param to A bigint representing the to
	 */
	public setTo(to: bigint): void	{
		this.to = to;
		this.keyModified.set("to", 1);

	}

	/**
	 * The method to get the parent
	 * @returns An instance of Pipeline
	 */
	public getParent(): Pipeline	{
		return this.parent;

	}

	/**
	 * The method to set the value to parent
	 * @param parent An instance of Pipeline
	 */
	public setParent(parent: Pipeline): void	{
		this.parent = parent;
		this.keyModified.set("parent", 1);

	}

	/**
	 * The method to get the childAvailable
	 * @returns A boolean representing the childAvailable
	 */
	public getChildAvailable(): boolean	{
		return this.childAvailable;

	}

	/**
	 * The method to set the value to childAvailable
	 * @param childAvailable A boolean representing the childAvailable
	 */
	public setChildAvailable(childAvailable: boolean): void	{
		this.childAvailable = childAvailable;
		this.keyModified.set("child_available", 1);

	}

	/**
	 * The method to get the displayValue
	 * @returns A string representing the displayValue
	 */
	public getDisplayValue(): string	{
		return this.displayValue;

	}

	/**
	 * The method to set the value to displayValue
	 * @param displayValue A string representing the displayValue
	 */
	public setDisplayValue(displayValue: string): void	{
		this.displayValue = displayValue;
		this.keyModified.set("display_value", 1);

	}

	/**
	 * The method to get the default
	 * @returns A boolean representing the default1
	 */
	public getDefault(): boolean	{
		return this.default1;

	}

	/**
	 * The method to set the value to default
	 * @param default1 A boolean representing the default1
	 */
	public setDefault(default1: boolean): void	{
		this.default1 = default1;
		this.keyModified.set("default", 1);

	}

	/**
	 * The method to get the maps
	 * @returns An Array representing the maps
	 */
	public getMaps(): Array<PickListValue>	{
		return this.maps;

	}

	/**
	 * The method to set the value to maps
	 * @param maps An Array representing the maps
	 */
	public setMaps(maps: Array<PickListValue>): void	{
		this.maps = maps;
		this.keyModified.set("maps", 1);

	}

	/**
	 * The method to get the actualValue
	 * @returns A string representing the actualValue
	 */
	public getActualValue(): string	{
		return this.actualValue;

	}

	/**
	 * The method to set the value to actualValue
	 * @param actualValue A string representing the actualValue
	 */
	public setActualValue(actualValue: string): void	{
		this.actualValue = actualValue;
		this.keyModified.set("actual_value", 1);

	}

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
	Pipeline as MasterModel,
	Pipeline as Pipeline
}
