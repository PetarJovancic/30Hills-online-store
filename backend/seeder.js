import dotenv from "dotenv";
import colors from "colors";
import dummyDataProducts from "./data/products.js";
import Product from "./models/productModel.js";
import Category from "./models/categoryModel.js";
import connectDB from "./config/db.js";
import axios from "axios";
import dummyDataCategories from "./data/categories.js";

dotenv.config();

connectDB();

const datasetURL = process.env.DATASET_URL;

const importData = async () => {
  try {
    const response = await axios.get(datasetURL);
    const statusCode = response.status;
    let result = response.data.products.data.items;
    let products;
    let categories;

    if (statusCode !== 200) {
      products = dummyDataProducts;
      categories = dummyDataCategories;
    } else {
      const uniqueCategoriesSet = new Set();
      categories = [];

      result.forEach((e) => {
        if (!uniqueCategoriesSet.has(e.category)) {
          uniqueCategoriesSet.add(e.category);
          categories.push({ category: e.category });
        }
      });

      products = result;
    }

    await Product.deleteMany();
    await Category.deleteMany();

    await Product.insertMany(products);
    await Category.insertMany(categories);

    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Product.deleteMany();
    await Category.deleteMany();
    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
