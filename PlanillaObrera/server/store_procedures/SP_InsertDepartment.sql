

ALTER PROCEDURE dbo.spDepartment_InsertDepartment
	@Id INT, 
	@Name VARCHAR(128)
AS 
BEGIN
	SET NOCOUNT ON
	BEGIN TRY
		
		BEGIN TRANSACTION NewDepart
			INSERT INTO dbo.Department
			(
			Id,
			Name
			)
	
			VALUES
			(
			@Id,
			@Name
			)
		COMMIT TRANSACTION NewDepart;
	END TRY
	BEGIN CATCH
	
		IF @@TRANCOUNT>0
			ROLLBACK TRANSACTION NewDepart

		SELECT ERROR_MESSAGE() AS [Error Message]
				 ,ERROR_LINE() AS ErrorLine
				 ,ERROR_NUMBER() AS [Error Number]  
				 ,ERROR_SEVERITY() AS [Error Severity]  
				 ,ERROR_STATE() AS [Error State]  
	END CATCH;
	
	SET NOCOUNT OFF;

END