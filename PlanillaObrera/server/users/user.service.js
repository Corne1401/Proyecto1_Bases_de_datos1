const sql = require('../database/database.service')
module.exports = {
    authenticateAdmin,
    authenticateEmployee,
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

async function authenticateEmployee({ username, password }) {
    const employees = await sql.getAllEmployees();
    const employee = employees.find(u => u.Username === username && u.password === password);
    if (employee) {
        const { password, ...userWithoutPassword } = employee;
        return userWithoutPassword;
    }
}

async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}