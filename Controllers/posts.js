import connection from '../data/db.js';

function index(req, res) {
    const sql = `select * from posts`;
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'posts not found' });
        res.json(results);
    })
}
function show(req, res) {
    const { id } = req.params;
    const sql = 'select * from posts where id = ?';
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (results.length === 0) return res.status(404).json({ error: 'post not found' });
        res.json(results[0]);
    });
};
function destroy(req, res) {
    const { id } = req.params;
    const sql = 'DELETE FROM posts WHERE id = ?';
    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete post' });
        res.sendStatus(204)
    });
}
export { index, show, destroy };
/*
export const create = (req, res) => {
    const post = req.body;
    posts.push(post);
    res.status(201).send(post)
}

export const modify = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, content, image, tags } = req.body;
    const post = posts.find((post) => post.id === id)

    if (title) {
        post.title = title
    }
    if (content) {
        post.content = content
    }
    if (image) {
        post.image = image
    }
    if (tags) {
        post.tags = tags
    }
    if (!post) {
        res.status(404)
        res.send(`post not found`)
    } else {
        res.status(200)
        res.send(post)
    }

}*/
