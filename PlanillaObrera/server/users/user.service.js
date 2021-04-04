const sql = require('../database/database.service')
module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    const admins = await sql.getAllAdministrators();
    const admin = admins.find(u => u.username === username && u.password === password);
    if (admin) {
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