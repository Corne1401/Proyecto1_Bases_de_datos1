

CREATE PROCEDURE spJobs_EditJob
(
	@Id INT,
	@NameJob VARCHAR(256),
	@SalaryXHour INT
)

AS 
BEGIN TRY
	UPDATE dbo.Job
	SET NameJob = @NameJob,
		SalaryXHour = @SalaryXHour
	WHERE Id = @Id
		
		
END TRY
BEGIN CATCH
SELECT ERROR_MESSAGE() AS [Error Message]
         ,ERROR_LINE() AS ErrorLine
         ,ERROR_NUMBER() AS [Error Number]  
         ,ERROR_SEVERITY() AS [Error Severity]  
         ,ERROR_STATE() AS [Error State]  
END CATCH
