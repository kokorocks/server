import { path, show } from 'lssw'
//function show(hi){}
path.post('/', (data) => {
    show.html('<h1>hi</h1>')
    show.send(`hi ${data}`)
    show.template('main','index.html')
})

path.post('/api',(data) =>{
    show.send
})

path.subdomain.get('www',(data) => {
    show.send('hi')
})
