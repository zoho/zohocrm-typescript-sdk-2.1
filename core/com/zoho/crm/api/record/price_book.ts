import {Record} from "./record";
import {Model} from "../../../../../../utils/util/model";

class PriceBook extends Record implements Model {

	/**
	 * The method to get the name
	 * @returns A string representing the name
	 */
	public getName(): string	{
		return this.getKeyValue("name");

	}

	/**
	 * The method to set the value to name
	 * @param name A string representing the name
	 */
	public setName(name: string): void	{
		this.addKeyValue("name", name);

	}

}
export {
	PriceBook as MasterModel,
	PriceBook as PriceBook
}
