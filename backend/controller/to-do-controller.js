const toDoModel = require("../model/to-do-model");

module.exports.getToDo = async (req, resp) => {
  const toDo = await toDoModel.find();
  resp.send(toDo);
  console.log(toDo);
};
module.exports.saveToDo = async (req, resp) => {
  const { text } = req.body;
  toDoModel.create({ text }).then((data) => {
    console.log("added succesfully...");
    console.log(data);
    resp.send(data);
  });
};
module.exports.updateToDo = async (req, resp) => {
  const { _id, text } = req.body;
  toDoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => resp.send("updated succesfully...."))
    .catch((err) => console.log(err));
};
module.exports.deleteToDo = async (req, resp) => {
  const { _id } = req.body;
  toDoModel
    .findByIdAndDelete(_id)
    .then(() => resp.send("deleted succesfully...."))
    .catch((err) => console.log(err));
};
