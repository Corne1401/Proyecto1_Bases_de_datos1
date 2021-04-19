

ALTER PROCEDURE spEmployees_EditEmployee
(
	@Id INT, 
	@Name VARCHAR(128),
	@IdTypeDoc INT,
	@ValueDocIdentity INT,
	@IdDepartment INT,
	@IdJob VARCHAR(256),
	@BirthDay DATE
)

AS 
BEGIN

	SET NOCOUNT ON

	BEGIN TRY

		BEGIN TRANSACTION DelEmplo
			UPDATE dbo.Employees
			SET Name = @Name,
				IdTypeDoc = @IdTypeDoc,
				ValueDocIdentity = @ValueDocIdentity,
				IdDepartment = @IdDepartment,
				IdJob = @IdJob,
				BirthDay = @BirthDay
			WHERE Id = @Id
		COMMIT TRANSACTION DelEmplo

	END TRY

	BEGIN CATCH

		IF @@TRANCOUNT> 0 
			ROLLBACK TRANSACTION DelEmplo
		
		SELECT ERROR_MESSAGE() AS [Error Message]
				 ,ERROR_LINE() AS ErrorLine
				 ,ERROR_NUMBER() AS [Error Number]  
				 ,ERROR_SEVERITY() AS [Error Severity]  
				 ,ERROR_STATE() AS [Error State]  
	END CATCH

	SET NOCOUNT OFF
END