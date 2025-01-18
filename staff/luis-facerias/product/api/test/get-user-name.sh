curl -X GET -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzZhZTEyZTA3ZWQxZjA4YWNlNDlkZjgiLCJpYXQiOjE3MzUyMzI3MTR9.Rz-L2CFqL_1bDi124E7BlvHqdjzjmBHL5XcmMx6hpwQ' http://localhost:8080/users/676ae12e07ed1f08ace49df9/name -v


# * Host localhost:8080 was resolved.
# * IPv6: ::1
# * IPv4: 127.0.0.1
# *   Trying [::1]:8080...
# * Connected to localhost (::1) port 8080
# > GET /users/676ae12e07ed1f08ace49df6/name HTTP/1.1
# > Host: localhost:8080
# > User-Agent: curl/8.5.0
# > Accept: */*
# > Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzZhZTEyZTA3ZWQxZjA4YWNlNDlkZjgiLCJpYXQiOjE3MzUyMzI3MTR9.Rz-L2CFqL_1bDi124E7BlvHqdjzjmBHL5XcmMx6hpwQ
# > 
# < HTTP/1.1 200 OK
# < X-Powered-By: Express
# < Access-Control-Allow-Origin: *
# < Content-Type: application/json; charset=utf-8
# < Content-Length: 11
# < ETag: W/"b-+yADvueSY+CrgQdvjg1JQ7xRV48"
# < Date: Tue, 14 Jan 2025 19:14:14 GMT
# < Connection: keep-alive
# < Keep-Alive: timeout=5
# < 
# * Connection #0 to host localhost left intact
# "Peter Pan"