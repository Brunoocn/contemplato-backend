import Task from "../models/taksModel.js";

async function createTask(req, res) {
  try {
    req.body.userId = req.userId;
    const result = await Task.create(req.body);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json(err);
  }
}

async function findAllTasks(req, res) {
  try {
    const result = await Task.findAll({
      where: {
        userId: req.userId,
      },
    });
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
}

async function findTask(req, res) {
  try {
    const result = await Task.findByPk(req.params.id);
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json(err);
  }
}

async function updateTask(req, res) {
  const { task } = req.body;

  try {
    await Task.update(
      {
        task: task,
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

export default { findAllTasks, findTask, updateTask, deleteTask, createTask };
