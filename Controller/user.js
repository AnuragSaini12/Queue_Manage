const Connection = require("../Connection");

async function createUser(req, res) {
  const { name, email, mobile, address, purpose, no_of_person, meet_to } =
    req.body;
  Connection.query(
    "INSERT INTO queue_manage (name, email, mobile, address, purpose, no_of_person, meet_to) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [name, email, mobile, address, purpose, no_of_person, meet_to],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json({
        id: result.insertId,
        name,
        email,
        mobile,
        address,
        purpose,
        no_of_person,
        meet_to,
      });
    }
  );
}

module.exports = { createUser };
