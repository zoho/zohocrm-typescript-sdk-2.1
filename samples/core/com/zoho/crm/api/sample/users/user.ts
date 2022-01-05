import * as ZOHOCRMSDK  from "@zohocrm/typescript-sdk-2.1";

export class Users {
	/**
	 * <h3> Get Users </h3>
	 * This method is used to retrieve the users data specified in the API request.
	 */
	public static async getUsers() {
		//Get instance of ZOHOCRMSDK.Users.UsersOperations Class
		let usersOperations: ZOHOCRMSDK.Users.UsersOperations = new ZOHOCRMSDK.Users.UsersOperations();

		//Get instance of ZOHOCRMSDK.ParameterMap Class
		let paramInstance: ZOHOCRMSDK.ParameterMap = new ZOHOCRMSDK.ParameterMap();

		/* Possible parameters for Get Users operation */
		await paramInstance.add(ZOHOCRMSDK.Users.GetUsersParam.TYPE, "ActiveUsers");

		await paramInstance.add(ZOHOCRMSDK.Users.GetUsersParam.PAGE, 1);

		await paramInstance.add(ZOHOCRMSDK.Users.GetUsersParam.PER_PAGE, 200);

		//Get instance of ZOHOCRMSDK.HeaderMap Class
		let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

		/* Possible headers for Get Users operation */
		await headerInstance.add(ZOHOCRMSDK.Users.GetUsersHeader.IF_MODIFIED_SINCE, new Date("2019-07-07T10:00:00+05:30"));

		//Call getUsers method that takes ZOHOCRMSDK.ParameterMap instance and ZOHOCRMSDK.HeaderMap instance as parameters
		let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Users.ResponseHandler.MasterModel> = await usersOperations.getUsers(paramInstance, headerInstance);

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

				return;
			}

			//Get object from response
			let responseObject: ZOHOCRMSDK.Users.ResponseHandler.MasterModel = response.getObject();

			if (responseObject != null) {
				//Check if expected ZOHOCRMSDK.Users.ResponseWrapper instance is received
				if (responseObject instanceof ZOHOCRMSDK.Users.ResponseWrapper) {
					//Get the array of obtained User instances
					let users: ZOHOCRMSDK.Users.User[] = responseObject.getUsers();

					users.forEach(user => {
						//Get the Country of each User
						console.log("User Country: " + user.getCountry());

						// Get the CustomizeInfo instance of each User
						let customizeInfo: ZOHOCRMSDK.Users.CustomizeInfo = user.getCustomizeInfo();

						//Check if customizeInfo is not null
						if (customizeInfo != null) {
							if (customizeInfo.getNotesDesc() != null) {
								//Get the NotesDesc of each User
								console.log("User CustomizeInfo NotesDesc: " + customizeInfo.getNotesDesc().toString());
							}

							if (customizeInfo.getShowRightPanel() != null) {
								//Get the ShowRightPanel of each User
								console.log("User CustomizeInfo ShowRightPanel: " + customizeInfo.getShowRightPanel().toString());
							}

							if (customizeInfo.getBcView() != null) {
								//Get the BcView of each User
								console.log("User CustomizeInfo BcView: " + customizeInfo.getBcView().toString());
							}

							if (customizeInfo.getShowHome() != null) {
								//Get the ShowHome of each User
								console.log("User CustomizeInfo ShowHome: " + customizeInfo.getShowHome().toString());
							}

							if (customizeInfo.getShowDetailView() != null) {
								//Get the ShowDetailView of each User
								console.log("User CustomizeInfo ShowDetailView: " + customizeInfo.getShowDetailView().toString());
							}

							if (customizeInfo.getUnpinRecentItem() != null) {
								//Get the UnpinRecentItem of each User
								console.log("User CustomizeInfo UnpinRecentItem: " + customizeInfo.getUnpinRecentItem().toString());
							}
						}

						// Get the Role instance of each User
						let role: ZOHOCRMSDK.Roles.Role = user.getRole();

						//Check if role is not null
						if (role != null) {
							//Get the Name of each Role
							console.log("User Role Name: " + role.getName());

							//Get the ID of each Role
							console.log("User Role ID: " + role.getId());
						}

						//Get the Signature of each User
						console.log("User Signature: " + user.getSignature());

						//Get the City of each User
						console.log("User City: " + user.getCity());

						//Get the NameFormat of each User
						console.log("User NameFormat: " + user.getNameFormat());

						//Get the Language of each User
						console.log("User Language: " + user.getLanguage());

						//Get the Locale of each User
						console.log("User Locale: " + user.getLocale());

						//Get the Microsoft of each User
						console.log("User Microsoft: " + user.getMicrosoft().toString());

						if (user.getPersonalAccount() != null) {
							//Get the PersonalAccount of each User
							console.log("User PersonalAccount: " + user.getPersonalAccount().toString());
						}

						//Get the DefaultTabGroup of each User
						console.log("User DefaultTabGroup: " + user.getDefaultTabGroup());

						//Get the Isonline of each User
						console.log("User Isonline: " + user.getIsonline().toString());

						//Get the modifiedBy User instance of each User
						let modifiedBy: ZOHOCRMSDK.Users.User = user.getModifiedBy();

						//Check if modifiedBy is not null
						if (modifiedBy != null) {
							//Get the Name of the modifiedBy User
							console.log("User Modified By User-Name: " + modifiedBy.getName());

							//Get the ID of the modifiedBy User
							console.log("User Modified By User-ID: " + modifiedBy.getId());
						}

						//Get the Street of each User
						console.log("User Street: " + user.getStreet());

						//Get the Currency of each User
						console.log("User Currency: " + user.getCurrency());

						//Get the Alias of each User
						console.log("User Alias: " + user.getAlias());

						// Get the Theme instance of each User
						let theme: ZOHOCRMSDK.Users.Theme = user.getTheme();

						//Check if theme is not null
						if (theme != null) {
							// Get the TabTheme instance of Theme
							let normalTab: ZOHOCRMSDK.Users.TabTheme = theme.getNormalTab();

							//Check if normalTab is not null
							if (normalTab != null) {
								//Get the FontColor of NormalTab
								console.log("User Theme NormalTab FontColor: " + normalTab.getFontColor());

								//Get the Background of NormalTab
								console.log("User Theme NormalTab Name: " + normalTab.getBackground());
							}

							// Get the TabTheme instance of Theme
							let selectedTab: ZOHOCRMSDK.Users.TabTheme = theme.getSelectedTab();

							//Check if selectedTab is not null
							if (selectedTab != null) {
								//Get the FontColor of SelectedTab
								console.log("User Theme SelectedTab FontColor: " + selectedTab.getFontColor());

								//Get the Name of SelectedTab
								console.log("User Theme SelectedTab Name: " + selectedTab.getBackground());
							}

							//Get the NewBackground of each Theme
							console.log("User Theme NewBackground: " + theme.getNewBackground());

							//Get the Background of each Theme
							console.log("User Theme Background: " + theme.getBackground());

							//Get the Screen of each Theme
							console.log("User Theme Screen: " + theme.getScreen());

							//Get the Type of each Theme
							console.log("User Theme Type: " + theme.getType());
						}

						//Get the ID of each User
						console.log("User ID: " + user.getId());

						//Get the State of each User
						console.log("User State: " + user.getState());

						//Get the Fax of each User
						console.log("User Fax: " + user.getFax());

						//Get the CountryLocale of each User
						console.log("User CountryLocale: " + user.getCountryLocale());

						//Get the FirstName of each User
						console.log("User FirstName: " + user.getFirstName());

						//Get the Email of each User
						console.log("User Email: " + user.getEmail());

						//Get the reportingTo User instance of each User
						let reportingTo: ZOHOCRMSDK.Users.User = user.getReportingTo();

						//Check if reportingTo is not null
						if (reportingTo != null) {
							//Get the Name of the reportingTo User
							console.log("User ReportingTo Name: " + reportingTo.getName());

							//Get the ID of the reportingTo User
							console.log("User ReportingTo ID: " + reportingTo.getId());
						}

						//Get the DecimalSeparator of each User
						console.log("User DecimalSeparator: " + user.getDecimalSeparator());

						//Get the Zip of each User
						console.log("User Zip: " + user.getZip());

						//Get the CreatedTime of each User
						console.log("User CreatedTime: " + user.getCreatedTime());

						//Get the Website of each User
						console.log("User Website: " + user.getWebsite());

						//Get the ModifiedTime of each User
						console.log("User ModifiedTime: " + user.getModifiedTime());

						//Get the TimeFormat of each User
						console.log("User TimeFormat: " + user.getTimeFormat());

						//Get the Offset of each User
						console.log("User Offset: " + user.getOffset().toString());

						//Get the Profile instance of each User
						let profile: ZOHOCRMSDK.Profiles.Profile = user.getProfile();

						//Check if profile is not null
						if (profile != null) {
							//Get the Name of each Profile
							console.log("User Profile Name: " + profile.getName());

							//Get the ID of each Profile
							console.log("User Profile ID: " + profile.getId());
						}

						//Get the Mobile of each User
						console.log("User Mobile: " + user.getMobile());

						//Get the LastName of each User
						console.log("User LastName: " + user.getLastName());

						//Get the TimeZone of each User
						console.log("User TimeZone: " + user.getTimeZone());

						//Get the Custom Fields, if any
						console.log("Custom Field: " + user.getKeyValue("Custom_Field"));

						//Get the createdBy User instance of each User
						let createdBy: ZOHOCRMSDK.Users.User = user.getCreatedBy();

						//Check if createdBy is not null
						if (createdBy != null) {
							//Get the Name of the createdBy User
							console.log("User Created By User-Name: " + createdBy.getName());

							//Get the ID of the createdBy User
							console.log("User Created By User-ID: " + createdBy.getId());
						}

						//Get the Zuid of each User
						console.log("User Zuid: " + user.getZuid());

						//Get the Confirm of each User
						console.log("User Confirm: " + user.getConfirm().toString());

						//Get the FullName of each User
						console.log("User FullName: " + user.getFullName());

						//Get the list of obtained Territory instances
						let territories: ZOHOCRMSDK.Users.Territory[] = user.getTerritories();

						//Check if territories is not null
						if (territories != null) {
							territories.forEach(territory => {
								//Get the Manager of the Territory
								console.log("User Territory Manager: " + territory.getManager().toString());

								//Get the Name of the Territory
								console.log("User Territory Name: " + territory.getName());

								//Get the ID of the Territory
								console.log("User Territory ID: " + territory.getId());
							});
						}

						//Get the Phone of each User
						console.log("User Phone: " + user.getPhone());

						//Get the DOB of each User
						console.log("User DOB: " + user.getDob());

						//Get the DateFormat of each User
						console.log("User DateFormat: " + user.getDateFormat());

						//Get the Status of each User
						console.log("User Status: " + user.getStatus());
					});

					//Get the obtained Info object
					let info: ZOHOCRMSDK.Users.Info = responseObject.getInfo();

					if (info != null) {
						if (info.getPerPage() != null) {
							//Get the PerPage of the Info
							console.log("User Info PerPage: " + info.getPerPage().toString());
						}

						if (info.getCount() != null) {
							//Get the Count of the Info
							console.log("User Info Count: " + info.getCount().toString());
						}

						if (info.getPage() != null) {
							//Get the Page of the Info
							console.log("User Info Page: " + info.getPage().toString());
						}

						if (info.getMoreRecords() != null) {
							//Get the MoreRecords of the Info
							console.log("User Info MoreRecords: " + info.getMoreRecords().toString());
						}
					}
				}
				//Check if the request returned an exception
				else if (responseObject instanceof ZOHOCRMSDK.Users.APIException) {
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
	 * <h3> Get User </h3>
	 * This method is used to get the details of any specific user.
	 * Specify the unique id of the user in your API request to get the data for that particular user.
	 * @param userId The ID of the User to be obtained
	 */
	public static async getuser(userId: bigint) {
		//example
		//let userId = 3409643302031n;

		//Get instance of ZOHOCRMSDK.Users.UsersOperations Class
		let usersOperations: ZOHOCRMSDK.Users.UsersOperations = new ZOHOCRMSDK.Users.UsersOperations();

		//Get instance of ZOHOCRMSDK.HeaderMap Class
		let headerInstance: ZOHOCRMSDK.HeaderMap = new ZOHOCRMSDK.HeaderMap();

		/* Possible parameters for Get User operation */
		await headerInstance.add(ZOHOCRMSDK.Users.GetUserHeader.IF_MODIFIED_SINCE, new Date("2019-12-12T12:12:12+05:30"));

		//Call getUser method that takes headerInstance and userId as parameters
		let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Users.ResponseHandler.MasterModel> = await usersOperations.getUser(userId, headerInstance);

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			if ([204, 304].includes(response.getStatusCode())) {
				console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");

				return;
			}

			//Get object from response
			let responseObject: ZOHOCRMSDK.Users.ResponseHandler.MasterModel = response.getObject();

			if (responseObject != null) {
				//Check if expected ZOHOCRMSDK.Users.ResponseWrapper instance is received
				if (responseObject instanceof ZOHOCRMSDK.Users.ResponseWrapper) {
					//Get the array of obtained User instances
					let users: ZOHOCRMSDK.Users.User[] = responseObject.getUsers();

					users.forEach(user => {
						//Get the Country of each User
						console.log("User Country: " + user.getCountry());

						// Get the CustomizeInfo instance of each User
						let customizeInfo: ZOHOCRMSDK.Users.CustomizeInfo = user.getCustomizeInfo();

						//Check if customizeInfo is not null
						if (customizeInfo != null) {
							if (customizeInfo.getNotesDesc() != null) {
								//Get the NotesDesc of each User
								console.log("User CustomizeInfo NotesDesc: " + customizeInfo.getNotesDesc().toString());
							}

							if (customizeInfo.getShowRightPanel() != null) {
								//Get the ShowRightPanel of each User
								console.log("User CustomizeInfo ShowRightPanel: " + customizeInfo.getShowRightPanel().toString());
							}

							if (customizeInfo.getBcView() != null) {
								//Get the BcView of each User
								console.log("User CustomizeInfo BcView: " + customizeInfo.getBcView().toString());
							}

							if (customizeInfo.getShowHome() != null) {
								//Get the ShowHome of each User
								console.log("User CustomizeInfo ShowHome: " + customizeInfo.getShowHome().toString());
							}

							if (customizeInfo.getShowDetailView() != null) {
								//Get the ShowDetailView of each User
								console.log("User CustomizeInfo ShowDetailView: " + customizeInfo.getShowDetailView().toString());
							}

							if (customizeInfo.getUnpinRecentItem() != null) {
								//Get the UnpinRecentItem of each User
								console.log("User CustomizeInfo UnpinRecentItem: " + customizeInfo.getUnpinRecentItem().toString());
							}
						}

						// Get the Role instance of each User
						let role: ZOHOCRMSDK.Roles.Role = user.getRole();

						//Check if role is not null
						if (role != null) {
							//Get the Name of each Role
							console.log("User Role Name: " + role.getName());

							//Get the ID of each Role
							console.log("User Role ID: " + role.getId());
						}

						//Get the Signature of each User
						console.log("User Signature: " + user.getSignature());

						//Get the City of each User
						console.log("User City: " + user.getCity());

						//Get the NameFormat of each User
						console.log("User NameFormat: " + user.getNameFormat());

						//Get the Language of each User
						console.log("User Language: " + user.getLanguage());

						//Get the Locale of each User
						console.log("User Locale: " + user.getLocale());

						//Get the Microsoft of each User
						console.log("User Microsoft: " + user.getMicrosoft().toString());

						if (user.getPersonalAccount() != null) {
							//Get the PersonalAccount of each User
							console.log("User PersonalAccount: " + user.getPersonalAccount().toString());
						}

						//Get the DefaultTabGroup of each User
						console.log("User DefaultTabGroup: " + user.getDefaultTabGroup());

						//Get the Isonline of each User
						console.log("User Isonline: " + user.getIsonline().toString());

						//Get the modifiedBy User instance of each User
						let modifiedBy: ZOHOCRMSDK.Users.User = user.getModifiedBy();

						//Check if modifiedBy is not null
						if (modifiedBy != null) {
							//Get the Name of the modifiedBy User
							console.log("User Modified By User-Name: " + modifiedBy.getName());

							//Get the ID of the modifiedBy User
							console.log("User Modified By User-ID: " + modifiedBy.getId());
						}

						//Get the Street of each User
						console.log("User Street: " + user.getStreet());

						//Get the Currency of each User
						console.log("User Currency: " + user.getCurrency());

						//Get the Alias of each User
						console.log("User Alias: " + user.getAlias());

						// Get the Theme instance of each User
						let theme: ZOHOCRMSDK.Users.Theme = user.getTheme();

						//Check if theme is not null
						if (theme != null) {
							// Get the TabTheme instance of Theme
							let normalTab: ZOHOCRMSDK.Users.TabTheme = theme.getNormalTab();

							//Check if normalTab is not null
							if (normalTab != null) {
								//Get the FontColor of NormalTab
								console.log("User Theme NormalTab FontColor: " + normalTab.getFontColor());

								//Get the Name of NormalTab
								console.log("User Theme NormalTab Name: " + normalTab.getBackground());
							}

							// Get the TabTheme instance of Theme
							let selectedTab: ZOHOCRMSDK.Users.TabTheme = theme.getSelectedTab();

							//Check if selectedTab is not null
							if (selectedTab != null) {
								//Get the FontColor of SelectedTab
								console.log("User Theme SelectedTab FontColor: " + selectedTab.getFontColor());

								//Get the Name of SelectedTab
								console.log("User Theme SelectedTab Name: " + selectedTab.getBackground());
							}

							//Get the NewBackground of each Theme
							console.log("User Theme NewBackground: " + theme.getNewBackground());

							//Get the Background of each Theme
							console.log("User Theme Background: " + theme.getBackground());

							//Get the Screen of each Theme
							console.log("User Theme Screen: " + theme.getScreen());

							//Get the Type of each Theme
							console.log("User Theme Type: " + theme.getType());
						}

						//Get the ID of each User
						console.log("User ID: " + user.getId());

						//Get the State of each User
						console.log("User State: " + user.getState());

						//Get the Fax of each User
						console.log("User Fax: " + user.getFax());

						//Get the CountryLocale of each User
						console.log("User CountryLocale: " + user.getCountryLocale());

						//Get the FirstName of each User
						console.log("User FirstName: " + user.getFirstName());

						//Get the Email of each User
						console.log("User Email: " + user.getEmail());

						//Get the reportingTo User instance of each User
						let reportingTo: ZOHOCRMSDK.Users.User = user.getReportingTo();

						//Check if reportingTo is not null
						if (reportingTo != null) {
							//Get the Name of the reportingTo User
							console.log("User ReportingTo Name: " + reportingTo.getName());

							//Get the ID of the reportingTo User
							console.log("User ReportingTo ID: " + reportingTo.getId());
						}

						//Get the DecimalSeparator of each User
						console.log("User DecimalSeparator: " + user.getDecimalSeparator());

						//Get the Zip of each User
						console.log("User Zip: " + user.getZip());

						//Get the CreatedTime of each User
						console.log("User CreatedTime: " + user.getCreatedTime());

						//Get the Website of each User
						console.log("User Website: " + user.getWebsite());

						//Get the ModifiedTime of each User
						console.log("User ModifiedTime: " + user.getModifiedTime());

						//Get the TimeFormat of each User
						console.log("User TimeFormat: " + user.getTimeFormat());

						//Get the Offset of each User
						console.log("User Offset: " + user.getOffset().toString());

						//Get the Profile instance of each User
						let profile: ZOHOCRMSDK.Profiles.Profile = user.getProfile();

						//Check if profile is not null
						if (profile != null) {
							//Get the Name of each Profile
							console.log("User Profile Name: " + profile.getName());

							//Get the ID of each Profile
							console.log("User Profile ID: " + profile.getId());
						}

						//Get the Mobile of each User
						console.log("User Mobile: " + user.getMobile());

						//Get the LastName of each User
						console.log("User LastName: " + user.getLastName());

						//Get the TimeZone of each User
						console.log("User TimeZone: " + user.getTimeZone());

						//Get the Custom Fields, if any
						console.log("Custom Field: " + user.getKeyValue("Custom_Field"));

						//Get the createdBy User instance of each User
						let createdBy: ZOHOCRMSDK.Users.User = user.getCreatedBy();

						//Check if createdBy is not null
						if (createdBy != null) {
							//Get the Name of the createdBy User
							console.log("User Created By User-Name: " + createdBy.getName());

							//Get the ID of the createdBy User
							console.log("User Created By User-ID: " + createdBy.getId());
						}

						//Get the Zuid of each User
						console.log("User Zuid: " + user.getZuid());

						//Get the Confirm of each User
						console.log("User Confirm: " + user.getConfirm().toString());

						//Get the FullName of each User
						console.log("User FullName: " + user.getFullName());

						//Get the list of obtained Territory instances
						let territories: ZOHOCRMSDK.Users.Territory[] = user.getTerritories();

						//Check if territories is not null
						if (territories != null) {
							territories.forEach(territory => {
								//Get the Manager of the Territory
								console.log("User Territory Manager: " + territory.getManager().toString());

								//Get the Name of the Territory
								console.log("User Territory Name: " + territory.getName());

								//Get the ID of the Territory
								console.log("User Territory ID: " + territory.getId());
							});
						}

						//Get the Phone of each User
						console.log("User Phone: " + user.getPhone());

						//Get the DOB of each User
						console.log("User DOB: " + user.getDob());

						//Get the DateFormat of each User
						console.log("User DateFormat: " + user.getDateFormat());

						//Get the Status of each User
						console.log("User Status: " + user.getStatus());
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof ZOHOCRMSDK.Users.APIException) {
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
	 * <h3> Update Users </h3>
	 * This method is used to update the details of multiple users of your organization and print the response.
	 */
	public static async updateUsers() {
		//Get instance of ZOHOCRMSDK.Users.UsersOperations Class
		let usersOperations: ZOHOCRMSDK.Users.UsersOperations = new ZOHOCRMSDK.Users.UsersOperations();

		//Get instance of ZOHOCRMSDK.Users.BodyWrapper Class that will contain the request body
		let request: ZOHOCRMSDK.Users.BodyWrapper = new ZOHOCRMSDK.Users.BodyWrapper();

		//Array to hold User instances
		let userArray: ZOHOCRMSDK.Users.User[] = [];

		//Get instance of User Class
		let user: ZOHOCRMSDK.Users.User = new ZOHOCRMSDK.Users.User();

		//Set ID to User instance
		user.setId(BigInt("34770615791024"));

		//Get instance of Role Class
		let role: ZOHOCRMSDK.Roles.Role = new ZOHOCRMSDK.Roles.Role();

		//Set ID to Role instance
		role.setId(BigInt("3477061026008"));

		//Set role instance to role in User
		user.setRole(role);

		user.setCountryLocale("en_US");

		//Add User instance to array
		userArray.push(user);

		//Get instance of User Class
		user = new ZOHOCRMSDK.Users.User();

		//Set ID to Role instance
		user.setId(BigInt("3409643302042"));

		role = new ZOHOCRMSDK.Roles.Role();

		//Set ID to Role instance
		role.setId(BigInt("3409643026008"));

		//Set role instance to role in User
		user.setRole(role);

		//Add User instance to array
		userArray.push(user);

		//Set the array to users in ZOHOCRMSDK.Users.BodyWrapper
		request.setUsers(userArray);

		//Call updateUsers method that takes ZOHOCRMSDK.Users.BodyWrapper instance as parameter
		let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Users.ActionHandler.MasterModel> = await usersOperations.updateUsers(request);

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			//Get object from response
			let responseObject: ZOHOCRMSDK.Users.ActionHandler.MasterModel = response.getObject();

			if (responseObject != null) {
				//Check if expected ZOHOCRMSDK.Users.ActionWrapper instance is received
				if (responseObject instanceof ZOHOCRMSDK.Users.ActionWrapper) {
					//Get the array of obtained ZOHOCRMSDK.Users.ActionResponse.MasterModel instances
					let actionResponses: ZOHOCRMSDK.Users.ActionResponse.MasterModel[] = responseObject.getUsers();

					actionResponses.forEach(actionResponse => {
						//Check if the request is successful
						if (actionResponse instanceof ZOHOCRMSDK.Users.SuccessResponse) {
							//Get the Status
							console.log("Status: " + actionResponse.getStatus().getValue());

							//Get the Code
							console.log("Code: " + actionResponse.getCode().getValue());

							console.log("Details");

							//Get the details map
							let details: Map<string, any> = actionResponse.getDetails();

							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}

							console.log("Message: " + actionResponse.getMessage().getValue());
						}
						//Check if the request returned an exception
						else if (actionResponse instanceof ZOHOCRMSDK.Users.APIException) {
							//Get the Status
							console.log("Status: " + actionResponse.getStatus().getValue());

							//Get the Code
							console.log("Code: " + actionResponse.getCode().getValue());

							console.log("Details");

							//Get the details map
							let details: Map<string, any> = actionResponse.getDetails();

							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}

							//Get the Message
							console.log("Message: " + actionResponse.getMessage().getValue());
						}
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof ZOHOCRMSDK.Users.APIException) {
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
	 * <h3> Get User </h3>
	 * This method is used to update the details of any specific user.
	 * @param userId The ID of the User to be updated
	 */
	public static async updateUser(userId: bigint) {
		//example
		//let userId = 3409643302031n;

		//Get instance of ZOHOCRMSDK.Users.UsersOperations Class
		let usersOperations: ZOHOCRMSDK.Users.UsersOperations = new ZOHOCRMSDK.Users.UsersOperations();

		//Get instance of ZOHOCRMSDK.Users.BodyWrapper Class that will contain the request body
		let request: ZOHOCRMSDK.Users.BodyWrapper = new ZOHOCRMSDK.Users.BodyWrapper();

		//Array to hold User instances
		let userArray: ZOHOCRMSDK.Users.User[] = [];

		//Get instance of User Class
		let user: ZOHOCRMSDK.Users.User = new ZOHOCRMSDK.Users.User();

		//Get instance of Role Class
		let role: ZOHOCRMSDK.Roles.Role = new ZOHOCRMSDK.Roles.Role();

		//Set ID to role
		role.setId(BigInt("3477061026008"));

		//Set role instance to role in User instance
		user.setRole(role);

		//Set the country locale
		user.setCountryLocale("en_US");

		//Add the User instance to the array
		userArray.push(user);

		//Set the array to users in ZOHOCRMSDK.Users.BodyWrapper instance
		request.setUsers(userArray);

		//Call updateUser method that takes ZOHOCRMSDK.Users.BodyWrapper instance and userId as parameters
		let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Users.ActionHandler.MasterModel> = await usersOperations.updateUser(userId, request);

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			//Get object from response
			let responseObject = response.getObject();

			if (responseObject != null) {
				//Check if expected ZOHOCRMSDK.Users.ActionWrapper instance is received
				if (responseObject instanceof ZOHOCRMSDK.Users.ActionWrapper) {
					//Get the array of obtained ZOHOCRMSDK.Users.ActionResponse.MasterModel instances
					let actionResponses: ZOHOCRMSDK.Users.ActionResponse.MasterModel[] = responseObject.getUsers();

					actionResponses.forEach(actionResponse => {
						//Check if the request is successful
						if (actionResponse instanceof ZOHOCRMSDK.Users.SuccessResponse) {
							//Get the Status
							console.log("Status: " + actionResponse.getStatus().getValue());

							//Get the Code
							console.log("Code: " + actionResponse.getCode().getValue());

							console.log("Details");

							//Get the details map
							let details: Map<string, any> = actionResponse.getDetails();

							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}

							console.log("Message: " + actionResponse.getMessage().getValue());
						}
						//Check if the request returned an exception
						else if (actionResponse instanceof ZOHOCRMSDK.Users.APIException) {
							//Get the Status
							console.log("Status: " + actionResponse.getStatus().getValue());

							//Get the Code
							console.log("Code: " + actionResponse.getCode().getValue());

							console.log("Details");

							//Get the details map
							let details: Map<string, any> = actionResponse.getDetails();

							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}

							//Get the Message
							console.log("Message: " + actionResponse.getMessage().getValue());
						}
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof ZOHOCRMSDK.Users.APIException) {
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
	 * <h3> Delete User </h3>
	 * This method is used to delete a user from your organization and print the response.
	 * @param userId The ID of the User to be deleted
	 */
	public static async deleteUser(userId: bigint) {
		//example
		//let userId = 3409643302031n;

		//Get instance of ZOHOCRMSDK.Users.UsersOperations Class
		let usersOperations: ZOHOCRMSDK.Users.UsersOperations = new ZOHOCRMSDK.Users.UsersOperations();

		//Call deleteUser method that takes userId as parameter
		let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Users.ActionHandler.MasterModel> = await usersOperations.deleteUser(userId);

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			//Get object from response
			let responseObject: ZOHOCRMSDK.Users.ActionHandler.MasterModel = response.getObject();

			if (responseObject != null) {
				//Check if expected ZOHOCRMSDK.Users.ActionWrapper instance is received
				if (responseObject instanceof ZOHOCRMSDK.Users.ActionWrapper) {
					//Get the array of obtained ZOHOCRMSDK.Users.ActionResponse.MasterModel instances
					let actionResponses: ZOHOCRMSDK.Users.ActionResponse.MasterModel[] = responseObject.getUsers();

					actionResponses.forEach(actionResponse => {
						//Check if the request is successful
						if (actionResponse instanceof ZOHOCRMSDK.Users.SuccessResponse) {
							//Get the Status
							console.log("Status: " + actionResponse.getStatus().getValue());

							//Get the Code
							console.log("Code: " + actionResponse.getCode().getValue());

							console.log("Details");

							//Get the details map
							let details: Map<string, any> = actionResponse.getDetails();

							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}

							console.log("Message: " + actionResponse.getMessage().getValue());
						}
						//Check if the request returned an exception
						else if (actionResponse instanceof ZOHOCRMSDK.Users.APIException) {
							//Get the Status
							console.log("Status: " + actionResponse.getStatus().getValue());

							//Get the Code
							console.log("Code: " + actionResponse.getCode().getValue());

							console.log("Details");

							//Get the details map
							let details: Map<string, any> = actionResponse.getDetails();

							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}

							//Get the Message
							console.log("Message: " + actionResponse.getMessage().getValue());
						}
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof ZOHOCRMSDK.Users.APIException) {
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
	 * <h3> Create Users </h3>
	 * This method is used to add a user to your organization and print the response.
	 */
	public static async createUser() {
		//Get instance of ZOHOCRMSDK.Users.UsersOperations Class
		let usersOperations: ZOHOCRMSDK.Users.UsersOperations = new ZOHOCRMSDK.Users.UsersOperations();

		//Get instance of ZOHOCRMSDK.Users.RequestWrapper Class that will contain the request body
		let request: ZOHOCRMSDK.Users.RequestWrapper = new ZOHOCRMSDK.Users.RequestWrapper();

		//Array to hold User instances
		let userArray: ZOHOCRMSDK.Users.User[] = [];

		//Get instance of User Class
		let user: ZOHOCRMSDK.Users.User = new ZOHOCRMSDK.Users.User();

		//Get instance of Role Class
		let role: ZOHOCRMSDK.Roles.Role = new ZOHOCRMSDK.Roles.Role();

		//Set ID to Role instance
		role.setId(BigInt("3477061026008"));

		//Set Role instance to role in User
		user.setRole(role);

		user.setCountryLocale("en_US");

		user.setFirstName("Test");

		user.setLastName("User");

		user.setEmail("testuser12345@zoho.com");

		//Get instance of Profile Class
		let profile: ZOHOCRMSDK.Profiles.Profile = new ZOHOCRMSDK.Profiles.Profile();

		profile.setId(BigInt("3477061026014"));

		//Set profile instance to profile in User instance
		user.setProfile(profile);

		//Add the User instance to array
		userArray.push(user);

		//Set the array to users in ZOHOCRMSDK.Users.RequestWrapper instance
		request.setUsers(userArray);

		//Call createUser method that takes ZOHOCRMSDK.Users.RequestWrapper class instance as parameter
		let response: ZOHOCRMSDK.APIResponse<ZOHOCRMSDK.Users.ActionHandler.MasterModel> = await usersOperations.createUser(request);

		if (response != null) {
			//Get the status code from response
			console.log("Status Code: " + response.getStatusCode());

			//Get object from response
			let responseObject: ZOHOCRMSDK.Users.ActionHandler.MasterModel = response.getObject();

			if (responseObject != null) {
				//Check if expected ZOHOCRMSDK.Users.ActionWrapper instance is received
				if (responseObject instanceof ZOHOCRMSDK.Users.ActionWrapper) {
					//Get the array of obtained ZOHOCRMSDK.Users.ActionResponse.MasterModel instances
					let actionResponses: ZOHOCRMSDK.Users.ActionResponse.MasterModel[] = responseObject.getUsers();

					actionResponses.forEach(actionResponse => {
						//Check if the request is successful
						if (actionResponse instanceof ZOHOCRMSDK.Users.SuccessResponse) {
							//Get the Status
							console.log("Status: " + actionResponse.getStatus().getValue());

							//Get the Code
							console.log("Code: " + actionResponse.getCode().getValue());

							console.log("Details");

							//Get the details map
							let details: Map<string, any> = actionResponse.getDetails();

							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}

							console.log("Message: " + actionResponse.getMessage().getValue());
						}
						//Check if the request returned an exception
						else if (actionResponse instanceof ZOHOCRMSDK.Users.APIException) {
							//Get the Status
							console.log("Status: " + actionResponse.getStatus().getValue());

							//Get the Code
							console.log("Code: " + actionResponse.getCode().getValue());

							console.log("Details");

							//Get the details map
							let details: Map<string, any> = actionResponse.getDetails();

							if (details != null) {
								Array.from(details.keys()).forEach(key => {
									console.log(key + ": " + details.get(key));
								});
							}

							//Get the Message
							console.log("Message: " + actionResponse.getMessage().getValue());
						}
					});
				}
				//Check if the request returned an exception
				else if (responseObject instanceof ZOHOCRMSDK.Users.APIException) {
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