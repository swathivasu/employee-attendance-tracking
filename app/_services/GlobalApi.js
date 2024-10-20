const {default: axios} = require("axios");

const GetAllWork=()=>axios.get('/api/work');
const CreateNewEmployee = (data) => axios.post('/api/Employee',data)
export default{
    GetAllWork,
    CreateNewEmployee
}
