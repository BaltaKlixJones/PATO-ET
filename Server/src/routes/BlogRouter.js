const { Router } = require("express");
const {
    getBlogHandler,
    postBlogHandler,
    putBlogHandler,
    deleteBlogHandler
} = require("../Handlers/BlogHandler");
const blogRouter = Router();

blogRouter.get("/", getBlogHandler);
blogRouter.post("/", postBlogHandler);
blogRouter.put("/:id", putBlogHandler);
blogRouter.delete("/:id", deleteBlogHandler);

module.exports = blogRouter;
