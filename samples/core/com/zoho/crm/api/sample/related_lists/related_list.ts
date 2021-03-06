import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class RelatedLists {
	/**
	 * <h3> Get RelatedLists </h3>
	 * This method is used to get the related list data of a particular module and print the response.
	 * @param moduleAPIName The API Name of the module to get related lists
	 */
	public static async getRelatedLists(moduleAPIName: string) {
		//example
		//let moduleAPIName = "Leads";

		//Get instance of ZOHOCRMSDK.RelatedLists.RelatedListsOperations Class that takes moduleAPIName as parameter
		let relatedListsOperations: ZOHOCRMSDK.RelatedLists.RelatedListsOperations = new ZOHOCRMSDK.RelatedLists.RelatedListsOperations(moduleAPIName);

		//Call getRelatedLists method
		let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedLists.ResponseHandler.MasterModel> = await relatedListsOperations.getRelatedLists();

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

				return;
			}

			//Get object from response
			let responseObject: ZOHOCRMSDK.RelatedLists.ResponseHandler.MasterModel = response.getObject();

			if (responseObject != null) {
				//Check if expected ZOHOCRMSDK.RelatedLists.ResponseWrapper instance is received
				if (responseObject instanceof ZOHOCRMSDK.RelatedLists.ResponseWrapper) {

					//Get the array of obtained RelatedList instances
					let relatedLists: ZOHOCRMSDK.RelatedLists.RelatedList[] = responseObject.getRelatedLists();

					relatedLists.forEach(relatedList => {
						//Get the SequenceNumber of each RelatedList
						console.log("RelatedList SequenceNumber: " + relatedList.getSequenceNumber());

						//Get the DisplayLabel of each RelatedList
						console.log("RelatedList DisplayLabel: " + relatedList.getDisplayLabel());

						//Get the APIName of each RelatedList
						console.log("RelatedList APIName: " + relatedList.getAPIName());

						//Get the Module of each RelatedList
						console.log("RelatedList Module: " + relatedList.getModule());

						//Get the Name of each RelatedList
						console.log("RelatedList Name: " + relatedList.getName());

						//Get the Action of each RelatedList
						console.log("RelatedList Action: " + relatedList.getAction());

						//Get the ID of each RelatedList
						console.log("RelatedList ID: " + relatedList.getId());

						//Get the Href of each RelatedList
						console.log("RelatedList Href: " + relatedList.getHref());

						//Get the Type of each RelatedList
						console.log("RelatedList Type: " + relatedList.getType());

						//Get the Connected Module of each RelatedList
						console.log("RelatedList Connectedmodule: " + relatedList.getConnectedmodule());

						//Get the Linking Module of each RelatedList
						console.log("RelatedList Linkingmodule: " + relatedList.getLinkingmodule());
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof ZOHOCRMSDK.RelatedLists.APIException) {
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
	 * <h3> Get RelatedList </h3>
	 * This method is used to get the single related list data of a particular module with relatedListId and print the response.
	 * @param moduleAPIName The API Name of the module to get related list
	 * @param relatedListId The ID of the relatedList to be obtained
	 */
	static async getRelatedList(moduleAPIName: string, relatedListId: bigint) {
		//example
		//let moduleAPIName = "Contacts";
		// let relatedListId = 340964362003n;

		//Get instance of ZOHOCRMSDK.RelatedLists.RelatedListsOperations Class that takes moduleAPIName as parameter
		let relatedListsOperations: ZOHOCRMSDK.RelatedLists.RelatedListsOperations = new ZOHOCRMSDK.RelatedLists.RelatedListsOperations(moduleAPIName);

		//Call getRelatedList method which takes relatedListId as parameter
		let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.RelatedLists.ResponseHandler.MasterModel> = await relatedListsOperations.getRelatedList(relatedListId);

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

				return;
			}

			//Get object from response
			let responseObject: ZOHOCRMSDK.RelatedLists.ResponseHandler.MasterModel = response.getObject();

			if (responseObject != null) {
				//Check if expected ZOHOCRMSDK.RelatedLists.ResponseWrapper instance is received
				if (responseObject instanceof ZOHOCRMSDK.RelatedLists.ResponseWrapper) {
					let relatedLists: ZOHOCRMSDK.RelatedLists.RelatedList[] = responseObject.getRelatedLists();

					relatedLists.forEach(relatedList => {
						//Get the SequenceNumber of each RelatedList
						console.log("RelatedList SequenceNumber: " + relatedList.getSequenceNumber());

						//Get the DisplayLabel of each RelatedList
						console.log("RelatedList DisplayLabel: " + relatedList.getDisplayLabel());

						//Get the APIName of each RelatedList
						console.log("RelatedList APIName: " + relatedList.getAPIName());

						//Get the Module of each RelatedList
						console.log("RelatedList Module: " + relatedList.getModule());

						//Get the Name of each RelatedList
						console.log("RelatedList Name: " + relatedList.getName());

						//Get the Action of each RelatedList
						console.log("RelatedList Action: " + relatedList.getAction());

						//Get the ID of each RelatedList
						console.log("RelatedList ID: " + relatedList.getId());

						//Get the Href of each RelatedList
						console.log("RelatedList Href: " + relatedList.getHref());

						//Get the Type of each RelatedList
						console.log("RelatedList Type: " + relatedList.getType());

						//Get the Connected Module of each RelatedList
						console.log("RelatedList Connectedmodule: " + relatedList.getConnectedmodule());

						//Get the Linking Module of each RelatedList
						console.log("RelatedList Linkingmodule: " + relatedList.getLinkingmodule());
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof ZOHOCRMSDK.RelatedLists.APIException) {
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
}