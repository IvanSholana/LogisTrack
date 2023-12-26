import Middleware from "../repositories/repo";

const ruanganList = async () => {
  let loanObject = new Middleware();
  let token = loanObject.generateToken();
  return await loanObject.getUserInfo(token['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAzNTgxNDIzLCJleHAiOjE3MDM1ODE0ODN9.InEi_iKztz5K_HqnIoTyVKWJpQuztbxxiEsFxtiJU-4']);
};

export default ruanganList;
