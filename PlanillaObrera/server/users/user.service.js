const db = require('../database/database.service');

module.exports = {
    authenticate,
    getAll
};

async function authenticate({ username, password }) {
    const users = await db.getAllAdministrators();
    const user = users.find(u => u.UserName === username && u.Password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}