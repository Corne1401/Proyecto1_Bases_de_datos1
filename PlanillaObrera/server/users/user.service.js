const sql = require('../database/database.service')
module.exports = {
    authenticateAdmin,
    authenticateUser,
    getAll
};

async function authenticateAdmin({ username, password }) {
    const admins = await sql.getAllAdministrators();
    const admin = admins.find(u => u.username === username && u.password === password);
    if (admin) {
        const { password, ...userWithoutPassword } = admin;
        return userWithoutPassword;
    }
}

async function authenticateUser({ username, password }) {
    const users = await sql.getAllEmployees();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = admin;
        return userWithoutPassword;
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}