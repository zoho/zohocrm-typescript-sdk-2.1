import {InventoryTemplate} from "../inventory_templates/inventory_template";
import {Model} from "../../../../../../utils/util/model";

class InventoryDetails implements Model {

	private inventoryTemplate: InventoryTemplate;
	private paperType: string;
	private viewType: string;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the inventoryTemplate
	 * @returns An instance of InventoryTemplate
	 */
	public getInventoryTemplate(): InventoryTemplate	{
		return this.inventoryTemplate;

	}

	/**
	 * The method to set the value to inventoryTemplate
	 * @param inventoryTemplate An instance of InventoryTemplate
	 */
	public setInventoryTemplate(inventoryTemplate: InventoryTemplate): void	{
		this.inventoryTemplate = inventoryTemplate;
		this.keyModified.set("inventory_template", 1);

	}

	/**
	 * The method to get the paperType
	 * @returns A string representing the paperType
	 */
	public getPaperType(): string	{
		return this.paperType;

	}

	/**
	 * The method to set the value to paperType
	 * @param paperType A string representing the paperType
	 */
	public setPaperType(paperType: string): void	{
		this.paperType = paperType;
		this.keyModified.set("paper_type", 1);

	}

	/**
	 * The method to get the viewType
	 * @returns A string representing the viewType
	 */
	public getViewType(): string	{
		return this.viewType;

	}

	/**
	 * The method to set the value to viewType
	 * @param viewType A string representing the viewType
	 */
	public setViewType(viewType: string): void	{
		this.viewType = viewType;
		this.keyModified.set("view_type", 1);

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
	InventoryDetails as MasterModel,
	InventoryDetails as InventoryDetails
}
