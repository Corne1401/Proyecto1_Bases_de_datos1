
CREATE PROCEDURE dbo.spIdentityDocumentType_InsertDocumentType
	@Id INT, 
	@Name VARCHAR(128)
AS 
BEGIN
	SET NOCOUNT ON
	
	INSERT INTO dbo.IdentityDocumentType
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