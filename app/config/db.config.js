module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "hamed40231364",
    DB: "mabdd",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };