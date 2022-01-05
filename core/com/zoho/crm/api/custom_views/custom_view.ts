import {Criteria} from "./criteria";
import {SharedTo} from "./shared_to";
import {Field} from "../fields/field";
import {User} from "../users/user";
import {Model} from "../../../../../../utils/util/model";

class CustomView implements Model {

	private id: bigint;
	private name: string;
	private systemName: string;
	private displayValue: string;
	private createdTime: Date;
	private accessType: string;
	private category: string;
	private sortBy: string;
	private sortOrder: string;
	private favorite: number;
	private default1: boolean;
	private systemDefined: boolean;
	private criteria: Criteria;
	private sharedTo: Array<SharedTo>;
	private fields: Array<Field>;
	private modifiedTime: Date;
	private modifiedBy: User;
	private lastAccessedTime: Date;
	private createdBy: User;
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
	 * The method to get the name
	 * @returns A string representing the name
	 */
	public getName(): string	{
		return this.name;

	}

	/**
	 * The method to set the value to name
	 * @param name A string representing the name
	 */
	public setName(name: string): void	{
		this.name = name;
		this.keyModified.set("name", 1);

	}

	/**
	 * The method to get the systemName
	 * @returns A string representing the systemName
	 */
	public getSystemName(): string	{
		return this.systemName;

	}

	/**
	 * The method to set the value to systemName
	 * @param systemName A string representing the systemName
	 */
	public setSystemName(systemName: string): void	{
		this.systemName = systemName;
		this.keyModified.set("system_name", 1);

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
	 * The method to get the createdTime
	 * @returns An instance of Date
	 */
	public getCreatedTime(): Date	{
		return this.createdTime;

	}

	/**
	 * The method to set the value to createdTime
	 * @param createdTime An instance of Date
	 */
	public setCreatedTime(createdTime: Date): void	{
		this.createdTime = createdTime;
		this.keyModified.set("created_time", 1);

	}

	/**
	 * The method to get the accessType
	 * @returns A string representing the accessType
	 */
	public getAccessType(): string	{
		return this.accessType;

	}

	/**
	 * The method to set the value to accessType
	 * @param accessType A string representing the accessType
	 */
	public setAccessType(accessType: string): void	{
		this.accessType = accessType;
		this.keyModified.set("access_type", 1);

	}

	/**
	 * The method to get the category
	 * @returns A string representing the category
	 */
	public getCategory(): string	{
		return this.category;

	}

	/**
	 * The method to set the value to category
	 * @param category A string representing the category
	 */
	public setCategory(category: string): void	{
		this.category = category;
		this.keyModified.set("category", 1);

	}

	/**
	 * The method to get the sortBy
	 * @returns A string representing the sortBy
	 */
	public getSortBy(): string	{
		return this.sortBy;

	}

	/**
	 * The method to set the value to sortBy
	 * @param sortBy A string representing the sortBy
	 */
	public setSortBy(sortBy: string): void	{
		this.sortBy = sortBy;
		this.keyModified.set("sort_by", 1);

	}

	/**
	 * The method to get the sortOrder
	 * @returns A string representing the sortOrder
	 */
	public getSortOrder(): string	{
		return this.sortOrder;

	}

	/**
	 * The method to set the value to sortOrder
	 * @param sortOrder A string representing the sortOrder
	 */
	public setSortOrder(sortOrder: string): void	{
		this.sortOrder = sortOrder;
		this.keyModified.set("sort_order", 1);

	}

	/**
	 * The method to get the favorite
	 * @returns A number representing the favorite
	 */
	public getFavorite(): number	{
		return this.favorite;

	}

	/**
	 * The method to set the value to favorite
	 * @param favorite A number representing the favorite
	 */
	public setFavorite(favorite: number): void	{
		this.favorite = favorite;
		this.keyModified.set("favorite", 1);

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
	 * The method to get the systemDefined
	 * @returns A boolean representing the systemDefined
	 */
	public getSystemDefined(): boolean	{
		return this.systemDefined;

	}

	/**
	 * The method to set the value to systemDefined
	 * @param systemDefined A boolean representing the systemDefined
	 */
	public setSystemDefined(systemDefined: boolean): void	{
		this.systemDefined = systemDefined;
		this.keyModified.set("system_defined", 1);

	}

	/**
	 * The method to get the criteria
	 * @returns An instance of Criteria
	 */
	public getCriteria(): Criteria	{
		return this.criteria;

	}

	/**
	 * The method to set the value to criteria
	 * @param criteria An instance of Criteria
	 */
	public setCriteria(criteria: Criteria): void	{
		this.criteria = criteria;
		this.keyModified.set("criteria", 1);

	}

	/**
	 * The method to get the sharedTo
	 * @returns An Array representing the sharedTo
	 */
	public getSharedTo(): Array<SharedTo>	{
		return this.sharedTo;

	}

	/**
	 * The method to set the value to sharedTo
	 * @param sharedTo An Array representing the sharedTo
	 */
	public setSharedTo(sharedTo: Array<SharedTo>): void	{
		this.sharedTo = sharedTo;
		this.keyModified.set("shared_to", 1);

	}

	/**
	 * The method to get the fields
	 * @returns An Array representing the fields
	 */
	public getFields(): Array<Field>	{
		return this.fields;

	}

	/**
	 * The method to set the value to fields
	 * @param fields An Array representing the fields
	 */
	public setFields(fields: Array<Field>): void	{
		this.fields = fields;
		this.keyModified.set("fields", 1);

	}

	/**
	 * The method to get the modifiedTime
	 * @returns An instance of Date
	 */
	public getModifiedTime(): Date	{
		return this.modifiedTime;

	}

	/**
	 * The method to set the value to modifiedTime
	 * @param modifiedTime An instance of Date
	 */
	public setModifiedTime(modifiedTime: Date): void	{
		this.modifiedTime = modifiedTime;
		this.keyModified.set("modified_time", 1);

	}

	/**
	 * The method to get the modifiedBy
	 * @returns An instance of User
	 */
	public getModifiedBy(): User	{
		return this.modifiedBy;

	}

	/**
	 * The method to set the value to modifiedBy
	 * @param modifiedBy An instance of User
	 */
	public setModifiedBy(modifiedBy: User): void	{
		this.modifiedBy = modifiedBy;
		this.keyModified.set("modified_by", 1);

	}

	/**
	 * The method to get the lastAccessedTime
	 * @returns An instance of Date
	 */
	public getLastAccessedTime(): Date	{
		return this.lastAccessedTime;

	}

	/**
	 * The method to set the value to lastAccessedTime
	 * @param lastAccessedTime An instance of Date
	 */
	public setLastAccessedTime(lastAccessedTime: Date): void	{
		this.lastAccessedTime = lastAccessedTime;
		this.keyModified.set("last_accessed_time", 1);

	}

	/**
	 * The method to get the createdBy
	 * @returns An instance of User
	 */
	public getCreatedBy(): User	{
		return this.createdBy;

	}

	/**
	 * The method to set the value to createdBy
	 * @param createdBy An instance of User
	 */
	public setCreatedBy(createdBy: User): void	{
		this.createdBy = createdBy;
		this.keyModified.set("created_by", 1);

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
	CustomView as MasterModel,
	CustomView as CustomView
}
