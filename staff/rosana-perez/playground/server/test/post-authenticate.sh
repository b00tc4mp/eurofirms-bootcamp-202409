// prueba en terminal de autenticación password
curl -X POST 'http://localhost:8080/authenticate' -d 'username=mickeymouse&password=123123123'
// http entre comillas por la existencia de un ?
// -d se intercala entre la url y los datos (data)