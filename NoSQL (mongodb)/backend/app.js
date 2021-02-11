const app = require('./src/config/server');
const messagesModel = require('./src/models/messagesModel');
const mysqlConnection = require('./src/config/mysqlConnection');
const mongoConnection = require('./src/config/mongoConnection');


app.get('/produtos', (req, res) => {
    const sql = "SELECT * FROM produto JOIN categorias ON produto.fk_categoria = categorias.id";

    mysqlConnection.query(sql, (error, result) => {
        if(result){
            res.status(201).json(result)
        } else {
            res.json({
                "message": "Erro na conexão com o banco de dados"
            })
        }
    })
})

//Select
app.get('/contato', async (req, res) => {
    let resultado = await messagesModel
      .find()
    res.json(resultado);
  });
  //Insert
  app.post('/contato', async (req, res) => {
    const { nome, msg } = req.body;
  
    let resultado = await messagesModel.create({ nome, msg });
    res.json(resultado);
  });


