import React from 'react';

class APIRequest extends React.Component {

/*
    ----------------------------------------------------------------
                    !This is USER API Configuration
    ----------------------------------------------------------------
*/

    async getToken(){
        const response = await fetch("http://192.168.1.2:3000/token");
        const json = await response.json();
        return json['token']
    }
    
    async getUserData(authToken){
        const response = await fetch("http://192.168.1.2:3000/user", {
            headers: {
                Authorization: `Bearer ${authToken}`
            },
        });
        const json = await response.json();
        return json
    }
    
    async inputUserData(authToken, Name, Email, Password, nomorInduk, Status, Verif){
        const response = await fetch("http://192.168.1.2:3000/user/createUser", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
                name: Name,
                email: Email,
                password: Password,
                nomor_induk: nomorInduk,
                status: Status,
                verif: Verif,
            },
            // body: JSON.stringify(postData),
        });
        const json = await response.json();
        return json
    }

/*
    ----------------------------------------------------------------
                    !This is EQUIPMENT API Configuration
    ----------------------------------------------------------------
*/

    async getEquipData(authToken){
        const response = await fetch("http://192.168.1.2:3000/equipment", {
            headers: {
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
            },
        });
        const json = await response.json();
        return json
    }

    async inputEquipData(authToken, Name, Description, Quantity, Image){
        const response = await fetch("http://192.168.1.2:3000/equipment/add", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
                name: Name,
                description: Description,
                quantity: Quantity,
                image: Image
            },
            // body: JSON.stringify(postData),
        });
        const json = await response.json();
        return json
    }

    async updateEquipData(authToken, Id, Name, Description, Quantity, Image){
        const response = await fetch("http://192.168.1.2:3000/equipment/update", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
                id: Id,
                name: Name,
                description: Description,
                quantity: Quantity,
                image: Image
            },
            // body: JSON.stringify(postData),
        });
        const json = await response.json();
        return json
    }

    async deleteEquipData(authToken, Id){
        const response = await fetch("http://192.168.1.2:3000/equipment/delete", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
                id: Id
            },
            // body: JSON.stringify(postData),
        });
        const json = await response.json();
        return json
    }

/*
    ----------------------------------------------------------------
                    !This is ROOM API Configuration
    ----------------------------------------------------------------
*/

    async getRoomData(authToken){
        const response = await fetch("http://192.168.1.2:3000/room", {
            headers: {
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
            },
        });
        const json = await response.json();
        return json
    }

    async inputRoomData(authToken, Name, Description, Capacity, Image){
        const response = await fetch("http://192.168.1.2:3000/room/add", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
                name: Name,
                description: Description,
                capacity: Capacity,
                image:Image
            },
            // body: JSON.stringify(postData),
        });
        const json = await response.json();
        return json
    }

    async updateRoomData(authToken, Id, Name, Description, Capacity, Image){
        const response = await fetch("http://192.168.1.2:3000/room/update", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
                id: Id,
                name: Name,
                description: Description,
                capacity: Capacity,
                image:Image
            },
            // body: JSON.stringify(postData),
        });
        const json = await response.json();
        return json
    }

    async deleteRoomData(authToken, Id){
        const response = await fetch("http://192.168.1.2:3000/room/delete", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
                id: Id
            },
            // body: JSON.stringify(postData),
        });
        const json = await response.json();
        return json
    }
/*
    ----------------------------------------------------------------
                    !This is LOAN REQUEST API Configuration
    ----------------------------------------------------------------
*/

    async getLoanReqData(authToken){
        const response = await fetch("http://192.168.1.2:3000/loanReq", {
            headers: {
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
            },
        });
        const json = await response.json();
        return json
    }

    async inputLoanReqData(authToken, UserName, EventName, EquipmentName, Room, StartDate, EndDate, Status, Reason){
        const response = await fetch("http://192.168.1.2:3000/loanReq/add", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
                username: UserName,
                eventname: EventName,
                equipmentname: EquipmentName,
                room: Room,
                startdate: StartDate,
                enddate: EndDate,
                status: Status,
                reason: Reason,
            },
            // body: JSON.stringify(postData),
        });
        const json = await response.json();
        return json
    }

    async updateLoanReqData(authToken, Id, Status){
        const response = await fetch("http://192.168.1.2:3000/loanReq/update", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
                id: Id,
                status: Status
            },
            // body: JSON.stringify(postData),
        });
        const json = await response.json();
        return json
    }

    async deleteLoanReqData(authToken, Id){
        const response = await fetch("http://192.168.1.2:3000/loanReq/delete", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
                id: Id
            },
            // body: JSON.stringify(postData),
        });
        const json = await response.json();
        return json
    }
}


export default APIRequest;