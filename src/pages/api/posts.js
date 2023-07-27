export default function handler(req, res) {
    if (req.method === 'POST') {
      // Handle the POST request to create a new post
      const { name, gender, age } = req.body;
  
      // Perform the necessary operations to save the post
      // to your FastAPI backend (e.g., using Axios or fetch)
  
      res.status(201).json({ message: 'Post created successfully!' });
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }