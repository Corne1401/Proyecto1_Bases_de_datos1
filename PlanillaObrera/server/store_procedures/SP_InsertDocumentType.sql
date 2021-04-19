
ALTER PROCEDURE dbo.spIdentityDocumentType_InsertDocumentType
	@Id INT, 
	@Name VARCHAR(128)
AS 
BEGIN
	
	SET NOCOUNT ON

	BEGIN TRY
		
		BEGIN TRANSACTION NewDoc
		INSERT INTO dbo.IdentityDocumentType
		(
		Id,
		Name
		)
	
		VALUES
		(
		@Id,
		@Name
		)
		COMMIT TRANSACTION NewDoc
	END TRY
	BEGIN CATCH

		IF @@TRANCOUNT>0
			ROLLBACK TRANSACTION NewDoc

		SELECT ERROR_MESSAGE() AS [Error Message]
				 ,ERROR_LINE() AS ErrorLine
				 ,ERROR_NUMBER() AS [Error Number]  
				 ,ERROR_SEVERITY() AS [Error Severity]  
				 ,ERROR_STATE() AS [Error State]  
	END CATCH
	SET NOCOUNT OFF
END