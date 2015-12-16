API v0.1

## ROUTES ##

Default URL that goes before every path is: TODO

*Anything italicized is an optional field*

Path | HTTP Method| Input Data | Output Data | Status Success | Status Error
-----|------------|------------|-------------|----------------|-------------
/signup | POST | {email: String , password: String} | {user: JSON , token: String} | {201} | {400 , 500}

Quick reminder of HTTP status codes below: 

Status # | Meaning
---------|--------
2**  | Success
200 | Ok
201 | Created
3** | Redirection
4** | Client Error
400 | Bad Request
401 | Unauthorized
403 | Forbidden
404 | Not Found
418 | Im a teapot
5** | Server Error
500 | Internal Server Error

