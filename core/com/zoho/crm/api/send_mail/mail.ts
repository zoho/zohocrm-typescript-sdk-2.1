import {Attachment} from "../attachments/attachment";
import {DataSubjectRequest} from "./data_subject_request";
import {InventoryDetails} from "./inventory_details";
import {Template} from "./template";
import {UserAddress} from "./user_address";
import {Model} from "../../../../../../utils/util/model";

class Mail implements Model {

	private from: UserAddress;
	private to: Array<UserAddress>;
	private cc: Array<UserAddress>;
	private bcc: Array<UserAddress>;
	private replyTo: UserAddress;
	private template: Template;
	private email: number;
	private id: bigint;
	private inReplyTo: string;
	private scheduledTime: Date;
	private subject: string;
	private content: string;
	private paperType: string;
	private viewType: string;
	private mailFormat: string;
	private consentEmail: boolean;
	private orgEmail: boolean;
	private attachments: Array<Attachment>;
	private inventoryDetails: InventoryDetails;
	private dataSubjectRequest: DataSubjectRequest;
	private keyModified: Map<string, number> = new Map<string, number>();
	/**
	 * The method to get the from
	 * @returns An instance of UserAddress
	 */
	public getFrom(): UserAddress	{
		return this.from;

	}

	/**
	 * The method to set the value to from
	 * @param from An instance of UserAddress
	 */
	public setFrom(from: UserAddress): void	{
		this.from = from;
		this.keyModified.set("from", 1);

	}

	/**
	 * The method to get the to
	 * @returns An Array representing the to
	 */
	public getTo(): Array<UserAddress>	{
		return this.to;

	}

	/**
	 * The method to set the value to to
	 * @param to An Array representing the to
	 */
	public setTo(to: Array<UserAddress>): void	{
		this.to = to;
		this.keyModified.set("to", 1);

	}

	/**
	 * The method to get the cc
	 * @returns An Array representing the cc
	 */
	public getCc(): Array<UserAddress>	{
		return this.cc;

	}

	/**
	 * The method to set the value to cc
	 * @param cc An Array representing the cc
	 */
	public setCc(cc: Array<UserAddress>): void	{
		this.cc = cc;
		this.keyModified.set("cc", 1);

	}

	/**
	 * The method to get the bcc
	 * @returns An Array representing the bcc
	 */
	public getBcc(): Array<UserAddress>	{
		return this.bcc;

	}

	/**
	 * The method to set the value to bcc
	 * @param bcc An Array representing the bcc
	 */
	public setBcc(bcc: Array<UserAddress>): void	{
		this.bcc = bcc;
		this.keyModified.set("bcc", 1);

	}

	/**
	 * The method to get the replyTo
	 * @returns An instance of UserAddress
	 */
	public getReplyTo(): UserAddress	{
		return this.replyTo;

	}

	/**
	 * The method to set the value to replyTo
	 * @param replyTo An instance of UserAddress
	 */
	public setReplyTo(replyTo: UserAddress): void	{
		this.replyTo = replyTo;
		this.keyModified.set("reply_to", 1);

	}

	/**
	 * The method to get the template
	 * @returns An instance of Template
	 */
	public getTemplate(): Template	{
		return this.template;

	}

	/**
	 * The method to set the value to template
	 * @param template An instance of Template
	 */
	public setTemplate(template: Template): void	{
		this.template = template;
		this.keyModified.set("template", 1);

	}

	/**
	 * The method to get the email
	 * @returns A number representing the email
	 */
	public getEmail(): number	{
		return this.email;

	}

	/**
	 * The method to set the value to email
	 * @param email A number representing the email
	 */
	public setEmail(email: number): void	{
		this.email = email;
		this.keyModified.set("email", 1);

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
	 * The method to get the inReplyTo
	 * @returns A string representing the inReplyTo
	 */
	public getInReplyTo(): string	{
		return this.inReplyTo;

	}

	/**
	 * The method to set the value to inReplyTo
	 * @param inReplyTo A string representing the inReplyTo
	 */
	public setInReplyTo(inReplyTo: string): void	{
		this.inReplyTo = inReplyTo;
		this.keyModified.set("in_reply_to", 1);

	}

	/**
	 * The method to get the scheduledTime
	 * @returns An instance of Date
	 */
	public getScheduledTime(): Date	{
		return this.scheduledTime;

	}

	/**
	 * The method to set the value to scheduledTime
	 * @param scheduledTime An instance of Date
	 */
	public setScheduledTime(scheduledTime: Date): void	{
		this.scheduledTime = scheduledTime;
		this.keyModified.set("scheduled_time", 1);

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
	 * The method to get the mailFormat
	 * @returns A string representing the mailFormat
	 */
	public getMailFormat(): string	{
		return this.mailFormat;

	}

	/**
	 * The method to set the value to mailFormat
	 * @param mailFormat A string representing the mailFormat
	 */
	public setMailFormat(mailFormat: string): void	{
		this.mailFormat = mailFormat;
		this.keyModified.set("mail_format", 1);

	}

	/**
	 * The method to get the consentEmail
	 * @returns A boolean representing the consentEmail
	 */
	public getConsentEmail(): boolean	{
		return this.consentEmail;

	}

	/**
	 * The method to set the value to consentEmail
	 * @param consentEmail A boolean representing the consentEmail
	 */
	public setConsentEmail(consentEmail: boolean): void	{
		this.consentEmail = consentEmail;
		this.keyModified.set("consent_email", 1);

	}

	/**
	 * The method to get the orgEmail
	 * @returns A boolean representing the orgEmail
	 */
	public getOrgEmail(): boolean	{
		return this.orgEmail;

	}

	/**
	 * The method to set the value to orgEmail
	 * @param orgEmail A boolean representing the orgEmail
	 */
	public setOrgEmail(orgEmail: boolean): void	{
		this.orgEmail = orgEmail;
		this.keyModified.set("org_email", 1);

	}

	/**
	 * The method to get the attachments
	 * @returns An Array representing the attachments
	 */
	public getAttachments(): Array<Attachment>	{
		return this.attachments;

	}

	/**
	 * The method to set the value to attachments
	 * @param attachments An Array representing the attachments
	 */
	public setAttachments(attachments: Array<Attachment>): void	{
		this.attachments = attachments;
		this.keyModified.set("attachments", 1);

	}

	/**
	 * The method to get the inventoryDetails
	 * @returns An instance of InventoryDetails
	 */
	public getInventoryDetails(): InventoryDetails	{
		return this.inventoryDetails;

	}

	/**
	 * The method to set the value to inventoryDetails
	 * @param inventoryDetails An instance of InventoryDetails
	 */
	public setInventoryDetails(inventoryDetails: InventoryDetails): void	{
		this.inventoryDetails = inventoryDetails;
		this.keyModified.set("inventory_details", 1);

	}

	/**
	 * The method to get the dataSubjectRequest
	 * @returns An instance of DataSubjectRequest
	 */
	public getDataSubjectRequest(): DataSubjectRequest	{
		return this.dataSubjectRequest;

	}

	/**
	 * The method to set the value to dataSubjectRequest
	 * @param dataSubjectRequest An instance of DataSubjectRequest
	 */
	public setDataSubjectRequest(dataSubjectRequest: DataSubjectRequest): void	{
		this.dataSubjectRequest = dataSubjectRequest;
		this.keyModified.set("data_subject_request", 1);

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
	Mail as MasterModel,
	Mail as Mail
}
