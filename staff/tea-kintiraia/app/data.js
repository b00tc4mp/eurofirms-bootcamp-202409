//mover los users to localStorage

var users = []

users[0] = { id: uuid(), name: 'Ji Rafa', email: 'ji@rafa.com', username: 'jirafa', password: '123123123' }
users[1] = { id: uuid(), name: 'Ele Fante', email: 'ele@fante.com', username: 'elefante', password: '123123123' }
users[2] = { id: uuid(), name: 'Coco Drilo', email: 'coco@drilo.com', username: 'cocodrilo', password: '123123123' }

localStorage.users = JSON.stringify(users)