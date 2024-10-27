var user = []

user[0] = { id: uuid(), name: 'Ji Rafa', email: 'ji@rafa', username: 'jirafa', password: '123123123'}
user[1] = { id: uuid(), name:'Ele Fante', email: 'ele@fante.com', username: 'elefante', password: '123123123' }
user[2] = {id: uuid(), name: 'Coco Drilo', email: 'coco@drilo.com', username: 'cocoddrilo', password: '123123123'}

localStorage.users = JSON.stringify(users)
