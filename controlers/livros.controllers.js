// controllers/livrosController.js
const pool = require('../db'); // Importando a conexão com o banco de dados


class livroController {
    static async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const [livros] = await pool.query('SELECT * FROM livros WHERE id = ?', [id]);
            res.json(livros);
        } catch (error) {
            next(error);
        }
    }

    static async getAll(req, res, next) {
        try {
            const [livros] = await pool.query('SELECT * FROM livros');
            res.json(livros);
        } catch (error) {
            next(error);
        }
    }

    static async post(req, res, next) {
        try {
            const { title, author, published , qt_pages, year_published } = req.body;

            const sql = 'INSERT INTO livros (title, author, published , qt_pages, year_published) VALUES (?, ?, ?, ?, ?)';
            const params = [title, author, published , qt_pages, year_published];

            const [livros] = await pool.query(sql, params);
            res.json(livros);
        } catch (error) {
            next(error);
        }
    }

    static async deletebyname (req, res, next) {
        try {
            const [livros] = await pool.query('DELETE FROM livros WHERE title;');
            res.json(livros);
        } catch (error) {
            next (error);
        }
    }



    static async update (req, res, next) {
        try {
            const { title, author, published , qt_pages, year_published } = req.body;

            const sql2 = 'UPDATE livros SET';

        } catch (error) {
            next(error);
        }
    }
}

module.exports = livroController;

// title
// author
// published
// qt_pages
// Year_published