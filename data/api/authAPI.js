class APIRequest{
    async getToken(){
        const response = await fetch("http://localhost:3000/token");
        const json = await response.json();
        return json
    }
    
    async getUserData(authToken){
        const response = await fetch("http://localhost:3000/posts", {
            headers: {
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
            },
        });
        const json = await response.json();
        return json
    }
    
    async inputUserData(authToken, Name, Password, nomorInduk, Status, Prodi){
        const response = await fetch("http://localhost:3000/createUser", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${authToken}`,
                // Add any other headers as needed
                name: Name,
                password: Password,
                nomor_induk: nomorInduk,
                status: Status,
                prodi: Prodi,
            },
            // body: JSON.stringify(postData),
        });
        const json = await response.json();
        return json
    }
}



export default APIRequest;
