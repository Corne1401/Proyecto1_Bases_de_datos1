

CREATE PROCEDURE dbo.spDepartment_InsertDepartment
	@Id INT, 
	@Name VARCHAR(128)
AS 
BEGIN
	SET NOCOUNT ON
	
	INSERT INTO dbo.Department
	(
	Id,
	Name
	)
	
	VALUES
	(
	@Id,
	@Name
	)
END