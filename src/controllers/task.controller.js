import Task from "../models/taksModel.js";

async function findAllTasks(req, res) {
  try {
    result = await Task.findAll();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json(err); //http correto?
  }
}
async function findTask(req, res) {
  try {
    result = await Task.findByPk(req.params.id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json(err);
  }
}

async function updateTask(req, res) {
  try {
    await Task.update(
      {
        task: req.body.task,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return Task.findByPk(req.params.id);
  } catch (err) {
    return res.status(400).json(err);
  }
}

async function deleteTask(req, res) {
  try {
    await Task.destroy({
      where: {
        id: req.params.id,
      },
    });

    return Task.findByPk().then((result) => res.json(result));
  } catch (err) {
    return res.status(400).json(err);
  }
}

export default { findAllTasks, findTask, updateTask, deleteTask };
