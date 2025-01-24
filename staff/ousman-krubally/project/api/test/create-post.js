fetch('http://localhost:8082/posts', {
    method: 'POST',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzhmNTQ0ZDVjYjBkMTVlZDY5MjM1ZWUiLCJpYXQiOjE3Mzc1NTQxNjR9.gfbooBj3aiXSeYBXaPvFV0h5WCzrFLc-9-slo7r6Qxo',
        'content-type': 'application/json'
    },
    body: '{"image":"https://imgs.search.brave.com/ydRuHJGI-HiFCscub0qud4ACEdQ3P1_EMlw86RxusQg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ1L2Ez/LzBlLzQ1YTMwZWJi/NTMyYjBkZTRlYjM0/MDZhMzQ1ODIyMGZj/LmpwZw","text":"hola mundo"}'
})
    .then(response => {
        console.log(response.status)

        return response.text()
    })
    .then(body => console.log(body))
    .catch(error => console.error(error))