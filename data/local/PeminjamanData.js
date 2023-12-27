import Middleware from "../repositories/repo";

const peminjamanList = async () => {
  let loanObject = new Middleware();
  let token = loanObject.generateToken();
  return await loanObject.getLoanReqInfo(token);
};

export default peminjamanList;
