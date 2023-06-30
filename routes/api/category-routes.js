const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const allCategory = await Category.findAll({ include: { model: Product } });
    res.status(200).json(allCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  try {
    const selectCategory = await Category.findByPk(req.params.id, {
      include: { model: Product },
    });
    if (selectCategory) {
      res.status(200).json(selectCategory);
    } else {
      res.status(404).json({ message: "404: category id not found!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json({ message: "Category created!", newCategory });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(
      { category_name: req.body.category_name },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Category updated!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ message: "Category deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
