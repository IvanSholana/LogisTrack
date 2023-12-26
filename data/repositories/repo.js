import React from "react";
import APIRequest from "../api/authAPI.js";
class Middleware extends React.Component {
  req = new APIRequest();

  /*
    ----------------------------------------------------------------
                    !This is USER API Configuration
    ----------------------------------------------------------------
*/

  async generateToken() {
    try {
      let valueCheck = await this.req.getToken();
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }

  async getUserInfo(token) {
    try {
      let valueCheck = await this.req.getUserData(token);
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }

  async registerUser(token, Name, Email, Password, nomorInduk, Status, Verif) {
    try {
      let valueCheck = await this.req.inputUserData(
        token,
        Name,
        Email,
        Password,
        nomorInduk,
        Status,
        Verif
      );
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }

  /*
    ----------------------------------------------------------------
                !This is EQUIPMENT API Configuration
    ----------------------------------------------------------------
*/

  async getEquipInfo(token) {
    try {
      let valueCheck = await this.req.getEquipData(token);
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }

  async addEquip(token, Name, Description, Quantity, Image) {
    try {
      let valueCheck = await this.req.inputEquipData(
        token,
        Name,
        Description,
        Quantity,
        Image
      );
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }

  async updateEquip(token, Id, Name, Description, Quantity, Image) {
    try {
      let valueCheck = await this.req.updateEquipData(
        token,
        Id,
        Name,
        Description,
        Quantity,
        Image
      );
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteEquip(token, Id) {
    try {
      let valueCheck = await this.req.deleteEquipData(token, Id);
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }

  /*
    ----------------------------------------------------------------
                    !This is ROOM API Configuration
    ----------------------------------------------------------------
*/

  async getRoomInfo(token) {
    try {
      let valueCheck = await this.req.getRoomData(token);
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }

  async addRoom(token, Name, Description, Capacity, Image) {
    try {
      let valueCheck = await this.req.inputRoomData(
        token,
        Name,
        Description,
        Capacity,
        Image
      );
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }

  async updateRoom(token, Id, Name, Description, Capacity, Image) {
    try {
      let valueCheck = await this.req.updateRoomData(
        token,
        Id,
        Name,
        Description,
        Capacity,
        Image
      );
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteRoom(token, Id) {
    try {
      let valueCheck = await this.req.deleteRoomData(token, Id);
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }
  /*
    ----------------------------------------------------------------
                    !This is LOAN REQUEST API Configuration
    ----------------------------------------------------------------
*/

  async getLoanReqInfo(token) {
    try {
      let valueCheck = await this.req.getLoanReqData(token);
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }

  async addLoanReq(
    token,
    UserName,
    EventName,
    EquipmentName,
    Room,
    StartDate,
    EndDate,
    Status,
    Reason
  ) {
    try {
      let valueCheck = await this.req.inputLoanReqData(
        token,
        UserName,
        EventName,
        EquipmentName,
        Room,
        StartDate,
        EndDate,
        Status,
        Reason
      );
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }

  async updateLoanReq(token, Id, Status) {
    try {
      let valueCheck = await this.req.updateLoanReqData(token, Id, Status);
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteLoanReq(token, Id) {
    try {
      let valueCheck = await this.req.deleteRoomData(token, Id);
      return valueCheck;
    } catch (error) {
      console.error(error);
    }
  }
}

export default Middleware;
