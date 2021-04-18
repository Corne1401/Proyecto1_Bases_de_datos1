

CREATE PROCEDURE spEmployees_EditEmployee
(
	@Id INT, 
	@Name VARCHAR(128),
	@ValueDocumentId INT,
	@IdDepartment INT,
	@JobName VARCHAR(256),
	@BirthDay DATE
)

AS 
BEGIN TRY
	UPDATE dbo.Employees
	SET Name = @Name,
		ValueDocumentId = @ValueDocumentId,
		IdDepartment = @IdDepartment,
		JobName = @JobName,
		BirthDay = @BirthDay
		
	WHERE Id = @Id
		
		
END TRY
BEGIN CATCH
SELECT ERROR_MESSAGE() AS [Error Message]
         ,ERROR_LINE() AS ErrorLine
         ,ERROR_NUMBER() AS [Error Number]  
         ,ERROR_SEVERITY() AS [Error Severity]  
         ,ERROR_STATE() AS [Error State]  
END CATCH