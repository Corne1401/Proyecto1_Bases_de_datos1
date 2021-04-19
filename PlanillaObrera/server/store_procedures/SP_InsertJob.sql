

ALTER PROCEDURE dbo.spJobs_InsertJob
	@Id INT,
	@NameJob VARCHAR(256),
	@SalaryXHour INT,
	@Active BIT

AS
BEGIN
	SET NOCOUNT ON
	BEGIN TRY
		SET NOCOUNT ON
		-- insert new row into Jobs table
		BEGIN TRANSACTION NewJob
			INSERT INTO dbo.Job
			(
				Id, 
				NameJob,
				SalaryXHour,
				Active
			)
			VALUES
			(
				@Id,
				@NameJob,
				@SalaryXHour,
				@Active
			)
		COMMIT TRANSACTION NewJob
	
	END TRY
	BEGIN CATCH
		IF @@TRANCOUNT>0
			ROLLBACK TRANSACTION NewJob
		SELECT ERROR_MESSAGE() AS [Error Message]
				 ,ERROR_LINE() AS ErrorLine
				 ,ERROR_NUMBER() AS [Error Number]  
				 ,ERROR_SEVERITY() AS [Error Severity]  
				 ,ERROR_STATE() AS [Error State]  
	END CATCH
	SET NOCOUNT OFF
END
	
