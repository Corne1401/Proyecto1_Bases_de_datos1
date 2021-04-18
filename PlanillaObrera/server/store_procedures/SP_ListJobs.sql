

ALTER PROCEDURE spJobs_ListJobs


AS
BEGIN TRY
	SET NOCOUNT ON

	SELECT NameJob FROM dbo.Job 
	ORDER BY 
	CASE
		WHEN dbo.Job.Active = 1 THEN NameJob
	END


END TRY
BEGIN CATCH
SELECT ERROR_MESSAGE() AS [Error Message]
         ,ERROR_LINE() AS ErrorLine
         ,ERROR_NUMBER() AS [Error Number]  
         ,ERROR_SEVERITY() AS [Error Severity]  
         ,ERROR_STATE() AS [Error State]  
END CATCH
