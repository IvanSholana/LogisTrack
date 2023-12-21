class APIRequest{
    async getToken(){
        try {
            const response = await fetch("http://localhost:3000/token");
            const json = await response.json();
            console.log(json)
            return json
        } catch (error) {
            console.error(error);
            return true
        }
    }
    
    async getUserData(authToken){
        try {
            const response = await fetch("http://localhost:3000/posts", {
                headers: {
                  Authorization: `Bearer ${authToken}`,
                  // Add any other headers as needed
                },
            });
            const json = await response.json();
            console.log(json)
        } catch (error) {
            console.error(error);
        }
    }
    
    async inputUserData(authToken, Name, Password, nomorInduk, Status, Prodi){
        try {
    
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
            console.log(json)
        } catch (error) {
            console.error(error);
        }
    }
}



export default APIRequest;
// getToken()
// let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzAyOTkzNTEzfQ.u_yS9aX9qbOc2VqletdfAMRSPKKOOQ31qVg3ENV9rlU'
// inputUserData(token, 'Jupyter', 'jup123', 1203210018, 'Dosen', 'INFORMATIKA')
// getUserData(token)