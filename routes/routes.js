const route = require("express").Router();
const details = require("../models/details");
route.get("/", (req, res) => {
  res.send("api ...");
});

route.post("/create", async (req, res) => {
  try {
    const data = new details({
      ...req.body,
    });
    await data.save();
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

route.get("/read", async (req, res) => {
  try {
    const data = await details.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

route.put("/update/:id", async (req, res) => {
  try {
    const data = await details.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    res.status(200).json({ ...data, ...req.body });
  } catch (error) {
    res.status(400).json(error);
  }
});

route.delete("/delete/:id", async (req, res) => {
  try {
    const data = await details.findByIdAndDelete(req.params.id);
    // console.log(req.body.data._id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});

route.delete("/deleteMultiple", async (req, res) => {
  try {
    const data = await details.deleteMany({ _id: { $in: req.body.list } });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
});
module.exports = route;
