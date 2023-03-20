const { Blog } = require("../db.js");

const getBlogController = async () => {
  const blog = await Blog.findAll();
  return blog;
};

const postBlogController = async (title, description, image, date) => {
  if ((!title || !description, !image)) {
    throw Error("Missing data");
  }
  const blog = await Blog.create({
    title,
    description,
    image,
    date,
  });
  return blog;
};

const putBlogController = async (
  id,
  { title, description, image, date },
  res
) => {
  const blogUpdate = await Blog.findByPk(id);
  !blogUpdate
    ? res.status(400).json({ error: "Blog not found" })
    : blogUpdate.update({
        title,
        description,
        image,
        date,
      });
  return blogUpdate;
};

const deleteBlogController = async (id) => {
    const blogDelete = await Blog.findByPk(id);
    if (!blogDelete) {
      return res.status(400).json({ error: "Post not found" });
    }
    return blogDelete.destroy();
  };

module.exports = {
  getBlogController,
  postBlogController,
    putBlogController,
    deleteBlogController
};
