import Middleware from "../repositories/repo";

const ruanganList = async () => {
  let loanObject = new Middleware();
  let token = loanObject.generateToken();
  return await loanObject.getRoomInfo(token);
};

export default ruanganList;
