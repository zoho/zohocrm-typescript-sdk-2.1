import {Module} from "../modules/module";
import {Template} from "../send_mail/template";
import {User} from "../users/user";
import {Model} from "../../../../../../utils/util/model";

class InventoryTemplate implements Template, Model {

	private content: string;
	private createdTime: Date;
	private subject: string;
	private module: Module;
	private type: string;
	private createdBy: User;
	private modifiedTime: Date;
	private lastUsageTime: Date;
	private associated: boolean;
	private name: string;
	private modifiedBy: User;
	private description: string;
	private id: bigint;
	private editorMode: string;
	private favorite: boolean;
	private folder: InventoryTemplate;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the content
	 * @returns A string representing the content
	 */
	public getContent(): string	{
		return this.content;

	}

	/**
	 * The method to set the value to content
	 * @param content A string representing the content
	 */
	public setContent(content: string): void	{
		this.content = content;
		this.keyModified.set("content", 1);

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
	 * The method to get the subject
	 * @returns A string representing the subject
	 */
	public getSubject(): string	{
		return this.subject;

	}

	/**
	 * The method to set the value to subject
	 * @param subject A string representing the subject
	 */
	public setSubject(subject: string): void	{
		this.subject = subject;
		this.keyModified.set("subject", 1);

	}

	/**
	 * The method to get the module
	 * @returns An instance of Module
	 */
	public getModule(): Module	{
		return this.module;

	}

	/**
	 * The method to set the value to module
	 * @param module An instance of Module
	 */
	public setModule(module: Module): void	{
		this.module = module;
		this.keyModified.set("module", 1);

	}

	/**
	 * The method to get the type
	 * @returns A string representing the type
	 */
	public getType(): string	{
		return this.type;

	}

	/**
	 * The method to set the value to type
	 * @param type A string representing the type
	 */
	public setType(type: string): void	{
		this.type = type;
		this.keyModified.set("type", 1);

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
	 * The method to get the lastUsageTime
	 * @returns An instance of Date
	 */
	public getLastUsageTime(): Date	{
		return this.lastUsageTime;

	}

	/**
	 * The method to set the value to lastUsageTime
	 * @param lastUsageTime An instance of Date
	 */
	public setLastUsageTime(lastUsageTime: Date): void	{
		this.lastUsageTime = lastUsageTime;
		this.keyModified.set("last_usage_time", 1);

	}

	/**
	 * The method to get the associated
	 * @returns A boolean representing the associated
	 */
	public getAssociated(): boolean	{
		return this.associated;

	}

	/**
	 * The method to set the value to associated
	 * @param associated A boolean representing the associated
	 */
	public setAssociated(associated: boolean): void	{
		this.associated = associated;
		this.keyModified.set("associated", 1);

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
	 * The method to get the description
	 * @returns A string representing the description
	 */
	public getDescription(): string	{
		return this.description;

	}

	/**
	 * The method to set the value to description
	 * @param description A string representing the description
	 */
	public setDescription(description: string): void	{
		this.description = description;
		this.keyModified.set("description", 1);

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
	 * The method to get the editorMode
	 * @returns A string representing the editorMode
	 */
	public getEditorMode(): string	{
		return this.editorMode;

	}

	/**
	 * The method to set the value to editorMode
	 * @param editorMode A string representing the editorMode
	 */
	public setEditorMode(editorMode: string): void	{
		this.editorMode = editorMode;
		this.keyModified.set("editor_mode", 1);

	}

	/**
	 * The method to get the favorite
	 * @returns A boolean representing the favorite
	 */
	public getFavorite(): boolean	{
		return this.favorite;

	}

	/**
	 * The method to set the value to favorite
	 * @param favorite A boolean representing the favorite
	 */
	public setFavorite(favorite: boolean): void	{
		this.favorite = favorite;
		this.keyModified.set("favorite", 1);

	}

	/**
	 * The method to get the folder
	 * @returns An instance of InventoryTemplate
	 */
	public getFolder(): InventoryTemplate	{
		return this.folder;

	}

	/**
	 * The method to set the value to folder
	 * @param folder An instance of InventoryTemplate
	 */
	public setFolder(folder: InventoryTemplate): void	{
		this.folder = folder;
		this.keyModified.set("folder", 1);

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
	InventoryTemplate as MasterModel,
	InventoryTemplate as InventoryTemplate
}
