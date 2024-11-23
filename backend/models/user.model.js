const { connection } = require("../config/connection");
const bcrypt = require("bcrypt");

const createUser = async (userObject) => {
  let conn;
  try {
    const { username, email, password } = userObject;

    const hash = await bcrypt.hash(password, 10);

    conn = await connection.getConnection(); // Si usas un pool
    const [result] = await conn.query(
      "INSERT INTO user(username, email, password) VALUES(?, ?, ?);",
      [username, email, hash]
    );

    return { success: true, userId: result.insertId };
  } catch (err) {
    console.error("Error in createUser:", err);
    return {
      error: true,
      message: "Error creating user.",
    };
  } finally {
    if (conn) conn.release();
  }
};

const verifyUser = async (email) => {
  let conn;
  try {
    conn = await connection.getConnection(); // Si usas un pool
    const [rows] = await conn.query("SELECT * FROM user WHERE email = ?;", [
      email,
    ]);

    return rows;
  } catch (err) {
    console.error("Error in verifyUser:", err);
    return {
      error: true,
      message: "Error verifying user.",
    };
  } finally {
    if (conn) conn.release();
  }
};

module.exports = {
  createUser,
  verifyUser,
};
