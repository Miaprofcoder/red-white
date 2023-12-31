const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags
  try {
    const allTags = await Tag.findAll({ include: { model: Product } });
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  try {
    const selectedTag = await Tag.findByPk(req.params.id, {
      include: { model: Product },
    });
    if (selectedTag) {
      res.status(200).json(selectedTag);
    } else {
      res.status(404).json({ message: "404: tag id not found!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Product data
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body.tag_name);
    res.status(200).json({ message: "Tag Created!", newTag });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(
      { tag_name: req.body.tag_name },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    if (updateTag) {
      res.status(200).json({
        message: "Tag updated!",
        tag_name: req.body.tag_name,
        updateTag,
      });
    } else {
      res.status(404).json({ message: "404: tag id not found!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = await Tag.destroy({ where: { id: req.params.id } });
    if (deletedTag) {
      res
        .status(200)
        .json({ message: "Tag Deleted", deleted_tag_id: req.params.id });
    } else {
      res.status(404).json({ message: "404: tag id not found!" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
