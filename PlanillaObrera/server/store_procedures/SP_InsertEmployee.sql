ALTER PROCEDURE dbo.spEmployee_InsertEmployee
	@Name VARCHAR(128),
	@ValueDocumentId INT,
	@IdDepartment INT,
	@JobName VARCHAR(256),
	@BirthDay DATE,
	@Active BIT

AS 
BEGIN
	SET NOCOUNT ON
	
	INSERT INTO dbo.Employees
	(
	Name,
	ValueDocumentId,
	IdDepartment,
	JobName,
	BirthDay,
	Active
	)
	
	VALUES
	(
	@Name,
	@ValueDocumentId,
	@IdDepartment,
	@JobName,
	@BirthDay,
	@Active
	)
END