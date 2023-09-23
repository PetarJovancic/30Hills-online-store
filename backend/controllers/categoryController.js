import asyncHandler from "../middleware/asyncHandler.js";
import Category from "../models/categoryModel.js";

// @desc    Fetch all categories
// @route   GET /api/category
// @access  Public
const getCategories = asyncHandler(async (req, res) => {
  try {
    const categories = await Category.find();
    return res.json(categories);
  } catch (err) {
    res.status(404);
    throw new Error("Categories not found");
  }
});

export default getCategories;
