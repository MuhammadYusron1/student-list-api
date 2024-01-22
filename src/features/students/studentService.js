import axios from "axios";

const API_URL = 'http://localhost:5000/api/students';

//* Get a list of students
const getStudents = async () => {
    try {
        const config = {
            url: '/',
            method: 'get',
            baseURL: API_URL,
        };
    
        const res = await axios(config);
        // console.log(res.data);
        return res.data;
    } catch (err) {
        if (err.res){
            // console.log(err.res.data);
            // console.log(err.res.status);
            // console.log(err.res.headers);
            throw new Error(err.res.data, err.res.status, err.res.headers);
        } else {
            // console.log(err.stack);
            throw new Error(err.stack);
        }
    }
};

//* Create a new student list
// const setStudent = async () => {
//     try {
//         const config
//     } catch (err) {
//         if (err.res){
//             throw new Error(err.res.data, err.res.status, err.res.headers);
//         } else {
//             throw new Error(err.stack);
//         }
//     }
// };

export {getStudents};