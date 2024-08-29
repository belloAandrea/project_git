import dbConnect from '../../lib/dbConnect';
import User from '../../models/User';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    const users = await User.find();
    return res.status(200).json(users);
  }
  if (req.method === 'POST') {
    const user = new User(req.body);
    await user.save();
    return res.status(201).json(user);
  }
  // Add more methods for PATCH, DELETE...
}