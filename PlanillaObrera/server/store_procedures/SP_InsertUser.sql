

ALTER PROCEDURE dbo.spAdmin_InsertUser
	@Id INT,
	@username VARCHAR(255),
	@password VARCHAR(255)
	
AS
BEGIN
	SET NOCOUNT ON
	BEGIN TRY
		SET NOCOUNT ON
		-- insert new row into Jobs table
		BEGIN TRANSACTION NewUser
			SET IDENTITY_INSERT dbo.Administrator ON
			INSERT INTO dbo.Administrator
			(
				id,
				username,
				password,
				firstName,
				lastName,
				available
			)
			VALUES
			(	
				@Id,
				@username,
				@password,
				'.',
				'.',
				1
			)
			SET IDENTITY_INSERT dbo.Administrator OFF
		COMMIT TRANSACTION NewUser
	
	END TRY
	BEGIN CATCH
		IF @@TRANCOUNT>0
			ROLLBACK TRANSACTION NewUser
		SELECT ERROR_MESSAGE() AS [Error Message]
				 ,ERROR_LINE() AS ErrorLine
				 ,ERROR_NUMBER() AS [Error Number]  
				 ,ERROR_SEVERITY() AS [Error Severity]  
				 ,ERROR_STATE() AS [Error State]  
	END CATCH
	SET NOCOUNT OFF
END
	
