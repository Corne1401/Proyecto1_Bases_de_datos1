

ALTER PROCEDURE spJobs_EditJob
(
	@Id INT,
	@NameJob VARCHAR(256),
	@SalaryXHour INT
)

AS 
BEGIN

	SET NOCOUNT ON
	
	BEGIN TRY
		BEGIN TRANSACTION EditJob
			UPDATE dbo.Job
			SET NameJob = @NameJob,
				SalaryXHour = @SalaryXHour
			WHERE Id = @Id
		COMMIT TRANSACTION EditJob
		
	END TRY
	BEGIN CATCH

		IF @@TRANCOUNT >0
			ROLLBACK TRANSACTION EditJob

		SELECT ERROR_MESSAGE() AS [Error Message]
				 ,ERROR_LINE() AS ErrorLine
				 ,ERROR_NUMBER() AS [Error Number]  
				 ,ERROR_SEVERITY() AS [Error Severity]  
				 ,ERROR_STATE() AS [Error State]  
	END CATCH

	SET NOCOUNT OFF
END