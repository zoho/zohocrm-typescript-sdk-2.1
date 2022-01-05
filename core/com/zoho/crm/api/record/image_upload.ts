import {Model} from "../../../../../../utils/util/model";

class ImageUpload implements Model {

	private description: string;
	private previewId: string;
	private encryptedId: string;
	private fileName: string;
	private state: string;
	private fileId: string;
	private size: bigint;
	private sequenceNumber: number;
	private id: bigint;
	private keyModified: Map<string, number> = new Map<string, number>();
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
		this.keyModified.set("Description", 1);

	}

	/**
	 * The method to get the previewId
	 * @returns A string representing the previewId
	 */
	public getPreviewId(): string	{
		return this.previewId;

	}

	/**
	 * The method to set the value to previewId
	 * @param previewId A string representing the previewId
	 */
	public setPreviewId(previewId: string): void	{
		this.previewId = previewId;
		this.keyModified.set("Preview_Id", 1);

	}

	/**
	 * The method to get the encryptedId
	 * @returns A string representing the encryptedId
	 */
	public getEncryptedId(): string	{
		return this.encryptedId;

	}

	/**
	 * The method to set the value to encryptedId
	 * @param encryptedId A string representing the encryptedId
	 */
	public setEncryptedId(encryptedId: string): void	{
		this.encryptedId = encryptedId;
		this.keyModified.set("Encrypted_Id", 1);

	}

	/**
	 * The method to get the fileName
	 * @returns A string representing the fileName
	 */
	public getFileName(): string	{
		return this.fileName;

	}

	/**
	 * The method to set the value to fileName
	 * @param fileName A string representing the fileName
	 */
	public setFileName(fileName: string): void	{
		this.fileName = fileName;
		this.keyModified.set("File_Name", 1);

	}

	/**
	 * The method to get the state
	 * @returns A string representing the state
	 */
	public getState(): string	{
		return this.state;

	}

	/**
	 * The method to set the value to state
	 * @param state A string representing the state
	 */
	public setState(state: string): void	{
		this.state = state;
		this.keyModified.set("State", 1);

	}

	/**
	 * The method to get the fileId
	 * @returns A string representing the fileId
	 */
	public getFileId(): string	{
		return this.fileId;

	}

	/**
	 * The method to set the value to fileId
	 * @param fileId A string representing the fileId
	 */
	public setFileId(fileId: string): void	{
		this.fileId = fileId;
		this.keyModified.set("File_Id", 1);

	}

	/**
	 * The method to get the size
	 * @returns A bigint representing the size
	 */
	public getSize(): bigint	{
		return this.size;

	}

	/**
	 * The method to set the value to size
	 * @param size A bigint representing the size
	 */
	public setSize(size: bigint): void	{
		this.size = size;
		this.keyModified.set("Size", 1);

	}

	/**
	 * The method to get the sequenceNumber
	 * @returns A number representing the sequenceNumber
	 */
	public getSequenceNumber(): number	{
		return this.sequenceNumber;

	}

	/**
	 * The method to set the value to sequenceNumber
	 * @param sequenceNumber A number representing the sequenceNumber
	 */
	public setSequenceNumber(sequenceNumber: number): void	{
		this.sequenceNumber = sequenceNumber;
		this.keyModified.set("Sequence_Number", 1);

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
	ImageUpload as MasterModel,
	ImageUpload as ImageUpload
}
