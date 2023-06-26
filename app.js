require('./db/connect')

const notFound=require('./middleware/not-found');

const express=require('express');
const app=express();
const tasks=require('./routes/tasks')


app.use(express.static('./public'));
app.use(express.json());



app.use('/api/v1/tasks',tasks);




app.use(notFound);










const port=8000;

app.listen(port,console.log(`server is listening on port ${port}`));
