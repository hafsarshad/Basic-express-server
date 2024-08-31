const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.get('/aboutus',(reg,res)=>{
res.send("my about page")
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
