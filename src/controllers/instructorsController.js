const pool = require('../db/db'); 

const getAllInstructors = async (req, res) => {
    const sql = 'SELECT * FROM Instructor';
    console.log("------------------------HOLA -----------------");
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query(sql);
        connection.release();
        res.status(200).json(rows);
    } catch (err) {
        console.log("Error getting instructors:", err);
        res.sendStatus(500);
    }
}

const getInstructorById = async (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM Instructor WHERE id_Instructor = ?';

    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query(sql, [id]);
        connection.release();
        res.status(200).json(rows);
    } catch (err) {
        console.log("Error getting instructor by ID:", err);
        res.sendStatus(500);
    }
}

const createInstructor = async (req, res) => {
    console.log("Creating Instructor...");
    const { name, last_name, phone } = req.body;
    const sql = 'INSERT INTO Instructor (name, last_name, phone) VALUES (?, ?, ?)';

    try {
        const connection = await pool.getConnection();
        const [result] = await connection.query(sql, [name, last_name, phone]);
        connection.release();
        res.status(201).json({
            message: 'Instructor created',
            InstructorId: result.insertId
        });
    } catch (err) {
        console.log("Error creating instructor:", err);
        res.sendStatus(500);
    }
}

const updateInstructor = async (req, res) => {
    console.log("Updating Instructor...");
    const { id } = req.params;
    const { name, lastName, phone } = req.body;
    const sql = 'UPDATE Instructor SET name = ?, last_name = ?, phone = ? WHERE id_Instructor = ?';

    try {
        const connection = await pool.getConnection();
        const [result] = await connection.query(sql, [name, lastName, phone, id]);
        connection.release();
        res.status(200).json({
            message: 'Instructor updated'
        });
    } catch (err) {
        console.log("Error updating instructor:", err);
        res.sendStatus(500);
    }
}

const deleteInstructor = async (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM Instructor WHERE id_Instructor = ?';

    try {
        const connection = await pool.getConnection();
        const [result] = await connection.query(sql, [id]);
        connection.release();
        res.status(200).json({
            message: 'Instructor deleted'
        });
    } catch (err) {
        console.log("Error deleting instructor:", err);
        res.sendStatus(500);
    }
}

// Exporta la función
module.exports = {
    getAllInstructors,
    getInstructorById,
    createInstructor,
    updateInstructor,
    deleteInstructor
};
