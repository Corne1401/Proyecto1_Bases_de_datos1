ALTER PROCEDURE dbo.spEmployee_InsertEmployee
	@Name VARCHAR(128),
	@IdTypeDoc INT,
	@ValueDocType INT,
	@IdDepartment INT,
	@IdJob INT,
	@BirthDay DATE,
	@Active BIT
	

AS
BEGIN
	BEGIN TRY
		SET NOCOUNT ON
		
		BEGIN TRANSACTION InEmplo

			IF NOT EXISTS(SELECT ValueDocIdentity FROM dbo.Employees 
			WHERE @ValueDocType IN(SELECT ValueDocIdentity FROM dbo.Employees))
				DBCC CHECKIDENT ('dbo.Employees', RESEED, 0)
				INSERT INTO dbo.Employees
				(
				Name,
				IdTypeDoc,
				ValueDocIdentity,
				IdDepartment,
				IdJob,
				BirthDay,
				Active
				)
	
				VALUES
				(
				@Name,
				@IdTypeDoc,
				@ValueDocType,
				@IdDepartment,
				@IdJob,
				@BirthDay,
				@Active
				)
			COMMIT TRANSACTION InEmplo
	END TRY
	BEGIN CATCH

		IF @@TRANCOUNT>0
			ROLLBACK TRANSACTION InEmplo

		SELECT ERROR_MESSAGE() AS [Error Message]
				 ,ERROR_LINE() AS ErrorLine
				 ,ERROR_NUMBER() AS [Error Number]  
				 ,ERROR_SEVERITY() AS [Error Severity]  
				 ,ERROR_STATE() AS [Error State]  
	END CATCH


END