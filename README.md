# API Project: Timestamp Microservice 

__for [FreeCodeCamp](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice)__

[Click](https://project-timestamp-grivdm.glitch.me)

+ The API endpoint is ``` GET [url]/api/:date_string? ```  
+ If the date string is empty the service uses the current timestamp.  
+ If the date string is valid the api returns a JSON e.g. ```{"unix":1675657499411,"utc":"Mon, 06 Feb 2023 04:24:59 GMT"}```.  
+ API accepts unix time. If the date string is invalid the api returns a JSON having the structure ```{"error" : "Invalid Date" }```.

 ### Example usage:
https://project-timestamp-grivdm.glitch.me/api/1994-12-08  
https://project-timestamp-grivdm.glitch.me/api/786880800000
### Example output:
{"unix":786880800000,"utc":"Thu, 08 Dec 1994 10:00:00 GMT"}
