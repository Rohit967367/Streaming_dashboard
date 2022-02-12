import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const API_KEY = process.env.API_KEY;
  const SECRET_KEY = process.env.SECRET_KEY;

  const options = { expiresIn: "10m", algorithm: "HS256" };

  const payload = {
    apikey: API_KEY,
    Permissions: ["allow_join", "allow_mod"],
  };

  const token = jwt.sign(payload, SECRET_KEY, options);
  res.json({ token });
}
