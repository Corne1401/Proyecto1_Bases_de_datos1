ALTER PROCEDURE sp_cleanTables

AS
BEGIN

	SET NOCOUNT ON
	BEGIN TRY
		BEGIN TRANSACTION ClnTables
			DELETE FROM dbo.Employees
			DBCC CHECKIDENT('dbo.Employees',RESEED,1)
			DELETE FROM dbo.Department
			DELETE FROM dbo.IdentityDocumentType
			DELETE FROM dbo.Job
		COMMIT TRANSACTION Clntables
	END TRY

	BEGIN CATCH
		
		IF @@TRANCOUNT >0
			ROLLBACK TRANSACTION Clntables
		
		SELECT ERROR_MESSAGE() AS [Error Message]
         ,ERROR_LINE() AS ErrorLine
         ,ERROR_NUMBER() AS [Error Number]  
         ,ERROR_SEVERITY() AS [Error Severity]  
         ,ERROR_STATE() AS [Error State]  
	END CATCH
	SET NOCOUNT OFF
END