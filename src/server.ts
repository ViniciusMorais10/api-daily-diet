import fastify from "fastify";

const app = fastify()

app.get('/', async () => {
  return 'Validate'
})
app.listen({port: 3333 }).then(() =>{
  console.log('Server HTTP is running.')
})