import axios from 'axios'
axios.defaults.timeout=5000;
const get=({url,params})=>{
    return axios({
        url,
        params
    }) 
    .then(result=>{
        return result;
    })
    .catch(e=>{
        console.log(e)
        return e
    })
}

export {
    get
}