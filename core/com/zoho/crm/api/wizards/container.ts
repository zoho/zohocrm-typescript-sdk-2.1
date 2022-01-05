import {Layout} from "../layouts/layout";
import {ChartData} from "./chart_data";
import {Screen} from "./screen";
import {Model} from "../../../../../../utils/util/model";

class Container implements Model {

	private id: bigint;
	private layout: Layout;
	private chartData: ChartData;
	private screens: Array<Screen>;
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
	 * The method to get the layout
	 * @returns An instance of Layout
	 */
	public getLayout(): Layout	{
		return this.layout;

	}

	/**
	 * The method to set the value to layout
	 * @param layout An instance of Layout
	 */
	public setLayout(layout: Layout): void	{
		this.layout = layout;
		this.keyModified.set("layout", 1);

	}

	/**
	 * The method to get the chartData
	 * @returns An instance of ChartData
	 */
	public getChartData(): ChartData	{
		return this.chartData;

	}

	/**
	 * The method to set the value to chartData
	 * @param chartData An instance of ChartData
	 */
	public setChartData(chartData: ChartData): void	{
		this.chartData = chartData;
		this.keyModified.set("chart_data", 1);

	}

	/**
	 * The method to get the screens
	 * @returns An Array representing the screens
	 */
	public getScreens(): Array<Screen>	{
		return this.screens;

	}

	/**
	 * The method to set the value to screens
	 * @param screens An Array representing the screens
	 */
	public setScreens(screens: Array<Screen>): void	{
		this.screens = screens;
		this.keyModified.set("screens", 1);

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
	Container as MasterModel,
	Container as Container
}
