import sql from 'mysql2';

const connection = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'boolean123@',
    database: 'blog-sql'
})
connection.connect((err)=>{
    if(err) throw err
})
export default connection;