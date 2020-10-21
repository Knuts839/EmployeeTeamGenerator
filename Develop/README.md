# EmployeeTeamGenerator
Below are the modifications I made to the original code.First, I created a whole new employee type: the business analyst. I gave the business analyst a unique font awesome icon. Second, I noticed within the manager test code there was an un-required requires "const Employee" that was never called so I concluded it wasn't necessary. Ordinarily for the sake of readability I would have deleted it but I commented it out and left it in for the record. Third, I refactored one of the lambda test functions into a normal function call, the reason being in my opinion it is more readable than a lambda function. from my reading on the web I have found this to be quite an emotional topic among developers but as a new developer I find the lambdas more confusing.  Fourth, I added the GitHub UserName question to the Intern employee type.  
This application is a console app written in Javascript using Node.js.  The purpose of the application is to allow a Manager to create a list of project team members for a software development project.  The app will prompt for various team members and their pertinent attributes.  For more details see the video user demo.