import Middleware from "../repositories/repo";
import APIRequest from "../api/authAPI"

const ruanganList = async () => {
  let loanObject2 = new APIRequest();
  let loanObject = new Middleware();
  let token = await loanObject2.getToken();
  console.log(token);
  return await loanObject.getUserInfo(token);
};

export default ruanganList;
