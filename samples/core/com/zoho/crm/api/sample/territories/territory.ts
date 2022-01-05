import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class Territories {
	/**
	 * <h3> Get Territories </h3>
	 * This method is used to get the list of territories enabled for your organization and print the response.
	 */
	public static async getTerritories() {
		//Get instance of ZOHOCRMSDK.Territories.TerritoriesOperations Class
		let territoriesOperations: ZOHOCRMSDK.Territories.TerritoriesOperations = new ZOHOCRMSDK.Territories.TerritoriesOperations();

		//Call getTerritories method
		let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Territories.ResponseHandler.MasterModel> = await territoriesOperations.getTerritories();

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

				return;
			}

			//Get object from response
			let responseObject: ZOHOCRMSDK.Territories.ResponseHandler.MasterModel = response.getObject();

			if (responseObject != null) {
				//Check if expected ZOHOCRMSDK.Territories.ResponseWrapper instance is received 
				if (responseObject instanceof ZOHOCRMSDK.Territories.ResponseWrapper) {
					//Get the array of obtained Territory instances
					let territories: ZOHOCRMSDK.Territories.Territory[] = responseObject.getTerritories();

					territories.forEach(territory => {
						//Get the CreatedTime of each Territory
						console.log("Territory CreatedTime: " + territory.getCreatedTime());

						//Get the ModifiedTime of each Territory
						console.log("Territory ModifiedTime: " + territory.getModifiedTime());

						//Get the manager User instance of each Territory
						let manager: ZOHOCRMSDK.Users.User = territory.getManager();

						//Check if manager is not null
						if (manager != null) {
							//Get the Name of the Manager
							console.log("Territory Manager User-Name: " + manager.getName());

							//Get the ID of the Manager
							console.log("Territory Manager User-ID: " + manager.getId());
						}

						// Get the Criteria instance of each Territory
						let criteria: ZOHOCRMSDK.CustomViews.Criteria = territory.getAccountRuleCriteria();

						//Check if criteria is not null
						if (criteria != null) {
							this.printCriteria(criteria);
						}

						//Get the Name of each Territory
						console.log("Territory Name: " + territory.getName());

						//Get the modifiedBy User instance of each Territory
						let modifiedBy: ZOHOCRMSDK.Users.User = territory.getModifiedBy();

						//Check if modifiedBy is not null
						if (modifiedBy != null) {
							//Get the Name of the modifiedBy User
							console.log("Territory Modified By User-Name: " + modifiedBy.getName());

							//Get the ID of the modifiedBy User
							console.log("Territory Modified By User-ID: " + modifiedBy.getId());
						}

						//Get the Description of each Territory
						console.log("Territory Description: " + territory.getDescription());

						//Get the ID of each Territory
						console.log("Territory ID: " + territory.getId());

						//Get the createdBy User instance of each Territory
						let createdBy: ZOHOCRMSDK.Users.User = territory.getCreatedBy();

						//Check if createdBy is not null
						if (createdBy != null) {
							//Get the Name of the createdBy User
							console.log("Territory Created By User-Name: " + createdBy.getName());

							//Get the ID of the createdBy User
							console.log("Territory Created By User-ID: " + createdBy.getId());
						}
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof ZOHOCRMSDK.Territories.APIException) {
					//Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					//Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

					console.log("Details");

					//Get the details map
					let details: Map<string, any> = responseObject.getDetails();

					if (details != null) {
						Array.from(details.keys()).forEach(key => {
							console.log(key + ": " + details.get(key));
						});
					}

					//Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
			}
		}
	}

	/**
	 * <h3> Get Territory </h3>
	 * This method is used to get the single territory and print the response.
	 * @param territoryId The ID of the Territory to be obtainted
	 */
	public static async getTerritory(territoryId: bigint) {
		//example
		//let territoryId = 3409643505351n;

		//Get instance of ZOHOCRMSDK.Territories.TerritoriesOperations Class
		let territoriesOperations: ZOHOCRMSDK.Territories.TerritoriesOperations = new ZOHOCRMSDK.Territories.TerritoriesOperations();

		//Call getTerritory method that takes territoryId as parameter
		let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Territories.ResponseHandler.MasterModel> = await territoriesOperations.getTerritory(territoryId);

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

				return;
			}

			//Get object from response
			let responseObject: ZOHOCRMSDK.Territories.ResponseHandler.MasterModel = response.getObject();

			if (responseObject != null) {
				//Check if expected ZOHOCRMSDK.Territories.ResponseWrapper instance is received 
				if (responseObject instanceof ZOHOCRMSDK.Territories.ResponseWrapper) {
					//Get the array of obtained Territory instances
					let territories: ZOHOCRMSDK.Territories.Territory[] = responseObject.getTerritories();

					territories.forEach(territory => {
						//Get the CreatedTime of each Territory
						console.log("Territory CreatedTime: " + territory.getCreatedTime());

						//Get the ModifiedTime of each Territory
						console.log("Territory ModifiedTime: " + territory.getModifiedTime());

						//Get the manager User instance of each Territory
						let manager: ZOHOCRMSDK.Users.User = territory.getManager();

						//Check if manager is not null
						if (manager != null) {
							//Get the Name of the Manager
							console.log("Territory Manager User-Name: " + manager.getName());

							//Get the ID of the Manager
							console.log("Territory Manager User-ID: " + manager.getId());
						}

						// Get the Criteria instance of each Territory
						let criteria: ZOHOCRMSDK.CustomViews.Criteria = territory.getAccountRuleCriteria();

						//Check if criteria is not null
						if (criteria != null) {
							this.printCriteria(criteria);
						}

						//Get the Name of each Territory
						console.log("Territory Name: " + territory.getName());

						//Get the modifiedBy User instance of each Territory
						let modifiedBy: ZOHOCRMSDK.Users.User = territory.getModifiedBy();

						//Check if modifiedBy is not null
						if (modifiedBy != null) {
							//Get the Name of the modifiedBy User
							console.log("Territory Modified By User-Name: " + modifiedBy.getName());

							//Get the ID of the modifiedBy User
							console.log("Territory Modified By User-ID: " + modifiedBy.getId());
						}

						//Get the Description of each Territory
						console.log("Territory Description: " + territory.getDescription());

						//Get the ID of each Territory
						console.log("Territory ID: " + territory.getId());

						//Get the createdBy User instance of each Territory
						let createdBy: ZOHOCRMSDK.Users.User = territory.getCreatedBy();

						//Check if createdBy is not null
						if (createdBy != null) {
							//Get the Name of the createdBy User
							console.log("Territory Created By User-Name: " + createdBy.getName());

							//Get the ID of the createdBy User
							console.log("Territory Created By User-ID: " + createdBy.getId());
						}
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof ZOHOCRMSDK.Territories.APIException) {
					//Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					//Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

					console.log("Details");

					//Get the details map
					let details: Map<string, any> = responseObject.getDetails();

					if (details != null) {
						Array.from(details.keys()).forEach(key => {
							console.log(key + ": " + details.get(key));
						});
					}

					//Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
			}
		}
	}

	private static async printCriteria(criteria: ZOHOCRMSDK.CustomViews.Criteria) {
		if (criteria.getComparator() != null) {
			console.log("Territory Criteria Comparator: " + criteria.getComparator().getValue());
		}

		if (criteria.getField() != null) {
			console.log("Territory Criteria Field: " + criteria.getField());
		}

		if (criteria.getValue() != null) {
			console.log("Territory Criteria Value: " + criteria.getValue().toString());
		}

		let criteriaGroup: ZOHOCRMSDK.CustomViews.Criteria[] = criteria.getGroup();

		if (criteriaGroup != null) {
			criteriaGroup.forEach(eachCriteria => {
				this.printCriteria(eachCriteria);
			});
		}

		if (criteria.getGroupOperator() != null) {
			console.log("Territory Criteria Group Operator: " + criteria.getGroupOperator().getValue());
		}
	}
}