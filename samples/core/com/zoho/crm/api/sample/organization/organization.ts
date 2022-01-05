import * as fs from "fs";

import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class Organization {
	/**
	 * <h3> Get Organization </h3>
	 * This method is used to get the organization data and print the response.
	 */
	public static async getOrganization() {
		//Get instance of OrgOperations Class
		let orgOperations: ZOHOCRMSDK.Orgs.OrgOperations = new ZOHOCRMSDK.Orgs.OrgOperations();

		//Call getOrganization method
		let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Orgs.ResponseHandler.MasterModel> = await orgOperations.getOrganization();

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

				return;
			}

			//Get object from response
			let responseObject: ZOHOCRMSDK.Orgs.ResponseHandler.MasterModel = response.getObject();

			if (responseObject != null) {
				//Check if expected ResponseWrapper instance is received
				if (responseObject instanceof ZOHOCRMSDK.Orgs.ResponseWrapper) {
					//Get the list of obtained Org instances
					let orgs: ZOHOCRMSDK.Orgs.Org[] = responseObject.getOrg();

					orgs.forEach(org => {
						//Get the Country of each Organization
						console.log("Organization Country: " + org.getCountry());

						//Get the PhotoId of each Organization
						console.log("Organization PhotoId: " + org.getPhotoId());

						//Get the City of each Organization
						console.log("Organization City: " + org.getCity());

						//Get the Description of each Organization
						console.log("Organization Description: " + org.getDescription());

						//Get the McStatus of each Organization
						console.log("Organization McStatus: " + org.getMcStatus());

						//Get the GappsEnabled of each Organization
						console.log("Organization GappsEnabled: " + org.getGappsEnabled());

						//Get the DomainName of each Organization
						console.log("Organization DomainName: " + org.getDomainName());

						//Get the TranslationEnabled of each Organization
						console.log("Organization TranslationEnabled: " + org.getTranslationEnabled());

						//Get the Street of each Organization
						console.log("Organization Street: " + org.getStreet());

						//Get the Alias of each Organization
						console.log("Organization Alias: " + org.getAlias());

						//Get the Currency of each Organization
						console.log("Organization Currency: " + org.getCurrency());

						//Get the Id of each Organization
						console.log("Organization Id: " + org.getId());

						//Get the State of each Organization
						console.log("Organization State: " + org.getState());

						//Get the Fax of each Organization
						console.log("Organization Fax: " + org.getFax());

						//Get the EmployeeCount of each Organization
						console.log("Organization EmployeeCount: " + org.getEmployeeCount());

						//Get the Zip of each Organization
						console.log("Organization Zip: " + org.getZip());

						//Get the Website of each Organization
						console.log("Organization Website: " + org.getWebsite());

						//Get the CurrencySymbol of each Organization
						console.log("Organization CurrencySymbol: " + org.getCurrencySymbol());

						//Get the Mobile of each Organization
						console.log("Organization Mobile: " + org.getMobile());

						//Get the CurrencyLocale of each Organization
						console.log("Organization CurrencyLocale: " + org.getCurrencyLocale());

						//Get the PrimaryZuid of each Organization
						console.log("Organization PrimaryZuid: " + org.getPrimaryZuid());

						//Get the ZiaPortalId of each Organization
						console.log("Organization ZiaPortalId: " + org.getZiaPortalId());

						//Get the TimeZone of each Organization
						console.log("Organization TimeZone: " + org.getTimeZone());

						//Get the Zgid of each Organization
						console.log("Organization Zgid: " + org.getZgid());

						//Get the CountryCode of each Organization
						console.log("Organization CountryCode: " + org.getCountryCode());

						//Get the Object obtained LicenseDetails instance
						let licenseDetails: ZOHOCRMSDK.Orgs.LicenseDetails = org.getLicenseDetails();

						//Check if licenseDetails is not null
						if (licenseDetails != null && licenseDetails != undefined) {
							//Get the PaidExpiry of each LicenseDetails
							console.log("Organization LicenseDetails PaidExpiry: " + licenseDetails.getPaidExpiry());

							//Get the UsersLicensePurchased of each LicenseDetails
							console.log("Organization LicenseDetails UsersLicensePurchased: " + licenseDetails.getUsersLicensePurchased());

							//Get the TrialType of each LicenseDetails
							console.log("Organization LicenseDetails TrialType: " + licenseDetails.getTrialType());

							//Get the TrialExpiry of each LicenseDetails
							console.log("Organization LicenseDetails TrialExpiry: " + licenseDetails.getTrialExpiry());

							//Get the Paid of each LicenseDetails
							console.log("Organization LicenseDetails Paid: " + licenseDetails.getPaid());

							//Get the PaidType of each LicenseDetails
							console.log("Organization LicenseDetails PaidType: " + licenseDetails.getPaidType());
						}

						//Get the Phone of each Organization
						console.log("Organization Phone: " + org.getPhone());

						//Get the CompanyName of each Organization
						console.log("Organization CompanyName: " + org.getCompanyName());

						//Get the PrivacySettings of each Organization
						console.log("Organization PrivacySettings: " + org.getPrivacySettings());

						//Get the PrimaryEmail of each Organization
						console.log("Organization PrimaryEmail: " + org.getPrimaryEmail());

						//Get the IsoCode of each Organization
						console.log("Organization IsoCode: " + org.getIsoCode());
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof ZOHOCRMSDK.Orgs.APIException) {
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
	 * <h3> Upload Organization Photo</h3>
	 * This method is used to upload the brand logo or image of the organization and print the response.
	 * @param absoluteFilePath The absolute file path of the file to be attached
	 */
	public static async uploadOrganizationPhoto(absoluteFilePath: string) {
		//example
		//let absoluteFilePath = "/Users/user_name/Desktop/logo.png";

		//Get instance of OrgOperations Class
		let orgOperations: ZOHOCRMSDK.Orgs.OrgOperations = new ZOHOCRMSDK.Orgs.OrgOperations();

		//Get instance of FileBodyWrapper class that will contain the request file
		let fileBodyWrapper: ZOHOCRMSDK.Orgs.FileBodyWrapper = new ZOHOCRMSDK.Orgs.FileBodyWrapper();

		/** StreamWrapper can be initialized in any of the following ways */

		/**
		 * param 1 -> fileName 
		 * param 2 -> Read Stream.
		 */
		let streamWrapper = new ZOHOCRMSDK.StreamWrapper(undefined, undefined, absoluteFilePath);

		/**
		 * param 1 -> fileName
		 * param 2 -> Read Stream
		 * param 3 -> Absolute File Path of the file to be attached
		 */
		// let streamWrapper = new ZOHOCRMSDK.StreamWrapper(null, null, absoluteFilePath);

		//Set file to the FileBodyWrapper instance
		fileBodyWrapper.setFile(streamWrapper);

		//Call uploadOrganizationPhoto method that takes FileBodyWrapper instance as parameter
		let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Orgs.ActionResponse.MasterModel> = await orgOperations.uploadOrganizationPhoto(fileBodyWrapper);

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			//Get object from response
			let responseObject: ZOHOCRMSDK.Orgs.ActionResponse.MasterModel = response.getObject();

			if (responseObject != null) {
				//Check if the request is successful
				if (responseObject instanceof ZOHOCRMSDK.Orgs.SuccessResponse) {
					//Get the Status
					console.log("Status: " + responseObject.getStatus().getValue());

					//Get the Code
					console.log("Code: " + responseObject.getCode().getValue());

					console.log("Details");

					let details: Map<string, any> = responseObject.getDetails();

					//Get the details map
					if (details != null) {
						Array.from(details.keys()).forEach(key => {
							console.log(key + ": " + details.get(key));
						});
					}

					//Get the Message
					console.log("Message: " + responseObject.getMessage().getValue());
				}
				//Check if the request returned an exception
				else if (responseObject instanceof ZOHOCRMSDK.Orgs.APIException) {
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