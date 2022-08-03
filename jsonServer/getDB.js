const axios = require("axios");
const fs = require("fs")

const getDB = async () => {
    try{
        const response = await axios.get("https://mockend.com/FadolfLungren/mockjson/Sipackages")
        if(response.status === 200){
            const data = JSON.stringify(response.data, null, 4)
            fs.writeFile('./jsonServer/myjsonfile.json', data, ()=>{
                console.log('finished')
            })
        }

    }catch(e){
        console.log(e);
    }
}

getDB()