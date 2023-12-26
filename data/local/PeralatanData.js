import Middleware from "../repositories/repo";

const peralatanList = async () => {
  let loanObject = new Middleware();
  let token = loanObject.generateToken();
  return await loanObject.getEquipInfo(token);
};

export default peralatanList;
