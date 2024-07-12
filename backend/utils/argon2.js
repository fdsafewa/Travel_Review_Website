const argon2 = require('argon2');

// 生成哈希密码
async function hashPassword(password) {
  try {
    return await argon2.hash(password);
  } catch (err) {
    console.error('Error hashing password:', err);
  }
}

// 验证密码
async function verifyPassword(hash, password) {
  try {
    return await argon2.verify(hash, password);
  } catch (err) {
    console.error('Error verifying password:', err);
  }
}
module.exports = {
  hashPassword,
  verifyPassword,
}
