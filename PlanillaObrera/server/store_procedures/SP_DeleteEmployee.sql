
CREATE PROCEDURE spEmployees_DeleteEmployee(	
	@Id INT
)


AS 
BEGIN TRY
	UPDATE dbo.Employees
	SET Active = 0
	WHERE Id = @Id

END TRY

BEGIN CATCH
SELECT ERROR_MESSAGE() AS [Error Message]
         ,ERROR_LINE() AS ErrorLine
         ,ERROR_NUMBER() AS [Error Number]  
         ,ERROR_SEVERITY() AS [Error Severity]  
         ,ERROR_STATE() AS [Error State]  
END CATCH