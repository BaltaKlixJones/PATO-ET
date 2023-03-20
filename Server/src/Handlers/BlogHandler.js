const {
    getBlogController,
    postBlogController,
    putBlogController,
    deleteBlogController
  } = require("../controllers/BlogController.js");
  
  const getBlogHandler = async (req, res) => {
    try {
      const blog = await getBlogController();
      blog.length === 0
        ? res.status(400).send("No hay Posteos")
        : res.status(200).json(blog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const postBlogHandler = async (req, res) => {
    const { title, description, image, date } = req.body;
  
    try {
      const newBlog = await postBlogController(title, description, image, date);
      !newBlog
        ? res.status(400).json({ error: "POST not created" })
        : res.status(200).json(newBlog);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const putBlogHandler = async (req, res) => {
    const { id } = req.params;
  
    try {
      await putBlogController(id, req.body);
      return res.status(200).json({ message: "Post updated" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const deleteBlogHandler = async (req, res) => {
      const { id } = req.params;
      try {
        await deleteBlogController(id);
        res.status(200).json({ message: "Post deleted" });
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };
  
  module.exports = {
    getBlogHandler,
    postBlogHandler,
    putBlogHandler,
    deleteBlogHandler
  };