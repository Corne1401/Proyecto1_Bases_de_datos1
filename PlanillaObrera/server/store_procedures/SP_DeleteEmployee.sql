
ALTER PROCEDURE spEmployees_DeleteEmployee(	
	@Id INT
)


AS 
BEGIN
	SET NOCOUNT ON
	BEGIN TRY

		BEGIN TRANSACTION DelEmplo
			UPDATE dbo.Employees
			SET Active = 0
			WHERE Id = @Id;
		COMMIT TRANSACTION DelEmplo

	END TRY

	BEGIN CATCH
		
		IF @@TRANCOUNT>0
			ROLLBACK TRANSACTION DelEmplo

		SELECT ERROR_MESSAGE() AS [Error Message]
				 ,ERROR_LINE() AS ErrorLine
				 ,ERROR_NUMBER() AS [Error Number]  
				 ,ERROR_SEVERITY() AS [Error Severity]  
				 ,ERROR_STATE() AS [Error State]  
	END CATCH
	SET NOCOUNT OFF
END