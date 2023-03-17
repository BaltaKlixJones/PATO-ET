const { Service } = require("../db");

const getServices = async (name) => {
  const lowerName = name?.toLowerCase();
  const services = !name
    ? await Service.findAll()
    : await Service.findOne({ where: { name: lowerName } });
  return services;
};

const getByIdService = async (id) => {
  const idService = await Service.findByPk(id);
  if (!idService) throw Error("Service not found");
  return idService;
};

const postService = async ({
  name,
  description,
  ProfessionalId,
}) => {
  const clientCreate = await Service.create({
    name,
    description,
    ProfessionalId,
  });

  return clientCreate;
};

const deleteService = async (id) => {
  const delService = await Service.destroy({
    where: {
      id: id,
    },
  });
  return delService;
};

const putService = async ({ name, description }, id) => {
  const updateService = await Service.update(
    { name, description },
    { where: { id: id } }
  );
  return updateService;
};

module.exports = {
  postService,
  getServices,
  deleteService,
  putService,
  getByIdService,
};
