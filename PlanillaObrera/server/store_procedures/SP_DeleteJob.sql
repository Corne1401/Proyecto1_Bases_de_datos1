

CREATE PROCEDURE spJobs_DeleteJob(	
	@Id INT
)


AS 
BEGIN TRY
	UPDATE dbo.Job
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