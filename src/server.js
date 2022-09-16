import app from './app.js';


const PORT = process.env.PORT
app.listen(PORT || 5000, () => console.log(`server listen on port ${PORT}`))