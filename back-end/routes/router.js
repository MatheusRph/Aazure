// routes/router.js
// Neste arquivo estão definidas todas as rotas do projeto.
// Em projetos com muitas rotas, é possível dividir as rotas em vários arquivos.

// Importações de módulos
const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const path = require('path');

// Importando controllers
const usuarioController = require('../controllers/usuario');
const turmaController = require('../controllers/turma');
const fileController = require('../controllers/multer');
const checkController = require('../controllers/check');

// Rota para retornar todos os usuários
router.get('/usuario', usuarioController.getAll);
router.get('/usuario/:cpf', usuarioController.getByCpf);
router.post('/login/cpf', checkController.loginCpf);
router.post('/login/password', checkController.loginPassword);

// Rota para criar um usuário passando informações no corpo da requisição
router.post('/usuario', usuarioController.createrUsuario);
router.put('/usuario/:cpf', usuarioController.updateUser);

// Rota para retornar todas as turmas
router.get('/turmas', turmaController.getAll);
router.post('/turmas', turmaController.createTurma);
router.put('/turmas/:codigo', turmaController.updateTurma);

// Rota para deletar um usuário
router.delete('/usuario/:id', usuarioController.deleteUser);

// Rota para o upload de arquivo
router.post('/upload', upload.single('image'), fileController.uploadFile);

// Rota para servir a página HTML de upload
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// INSERIR OUTRAS ROTAS -->
/* router.get('/turmas', turmasController.getAll)
router.get('/turmas/:id', turmasCOntroller.getById) */

/* router.get('/turmas', turmasCOntroller.getAll)
router.get('/turmas/:id', turmasCOntroller.getById) */

/* router.get('/usuario', usuarioController.listarUsuarios) */

module.exports = router;
