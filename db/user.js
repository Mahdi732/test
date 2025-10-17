import pool from "../db.js";


export const insertUser =  async (name, email, password) => {
    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    const [result] =  await pool.execute(query, [name, email, password]);
    return result[0];
}

export const findUser = async (email) => {
    const query = "SELECT * FROM users WHERE email = (?)";
    const [result] = await pool.execute(query, [email]);
    return result[0];
}
