const express =  require ("express");

const app = express();
const PORT = 3000;

const users = [
    { id: 1, name: "Ana", email:"ana@email.com" },
    { id: 2, name: "Pedro", email:"pedro@email.com" }
]


app.get("/users", (req,res) => {
    res.status(200).json(users)
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})