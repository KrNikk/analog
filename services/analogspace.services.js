const AnalogspaceSchema = require("../models/analogspace.model");

const createAnalogData = async (dataBody) => {
  const data = await AnalogspaceSchema.create(dataBody);
  return data;
};

const getAnalogData = async () => {
  const datas = await AnalogspaceSchema.find();
  return datas;
};

const getAnalogDataById = async (dataId) => {
  const data = await AnalogspaceSchema.findById(dataId);
  if (!data) {
    throw new Error("Data is not found");
  } else return data;
};

const deleteAnalogDataById = async (dataId) => {
  const data = await getAnalogDataById(dataId);
  await data.remove();
  if (!data) {
    throw new Error("Data is not found");
  } else return data;
};

const updateAnalogDataById = async (dataId, updateParam) => {
  const data = await getAnalogDataById(dataId);
  Object.assign(data, updateParam);
  data.save();
  return data;
};

module.exports = {
  createAnalogData,
  getAnalogData,
  getAnalogDataById,
  deleteAnalogDataById,
  updateAnalogDataById,
};
