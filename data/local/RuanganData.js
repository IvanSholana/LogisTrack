import Middleware from "../repositories/repo";

const usersData = async () => {
  let loanObject = new Middleware();
  let token = loanObject.generateToken();
  return await loanObject.getRoomInfo(token);
};

export default usersData;
