const createAnalogService = require("../services/analogspace.services");

const createAnalogData = async (req, res, next) => {
  try {
    const data = await createAnalogService.createAnalogData({
      manufacturer: req.body.manufacturer,
      film: req.body.film,
      asa: req.body.asa,
      developer: req.body.developer,
      dilution: req.body.dilution,
      minutes: req.body.minutes,
    });
    res.status(200).json({ result: data });
  } catch (err) {
    next(err);
  }
};

const getAnalogData = async (req, res, next) => {
  try {
    const datas = await createAnalogService.getAnalogData();
    res.status(200).json({ result: datas });
  } catch (err) {
    next(err);
  }
};

const getAnalogDataById = async (req, res, next) => {
  try {
    const data = await createAnalogService.getAnalogDataById(req.params.id);
    res.status(200).json({ result: data });
  } catch (err) {
    next(err);
  }
};

const deleteAnalogDataById = async (req, res, next) => {
  try {
    const data = await createAnalogService.deleteAnalogDataById(req.params.id);
    res
      .status(200)
      .json({ result: "Data has been deleted.", deletedData: data });
  } catch (err) {
    next(err);
  }
};

const updateAnalogDataById = async (req, res, next) => {
  try {
    const data = await createAnalogService.updateAnalogDataById(
      req.params.id,
      req.body
    );
    res
      .status(200)
      .json({ result: "Data has been updated", updatedParam: data });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createAnalogData,
  getAnalogData,
  getAnalogDataById,
  deleteAnalogDataById,
  updateAnalogDataById,
};
