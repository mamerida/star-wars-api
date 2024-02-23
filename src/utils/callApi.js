
const BASEURL = "https://swapi.dev/api/people/?search="
const METHOD_GATE = "GET"


const callApi = async (url, method) =>{
    return fetch(url,{method: method})
    .then(res => {
        if(!res.ok){
            throw new Error();
        }else{
            return res.json();
        }
    })
    .then(res => res)
}

const getCharacters = (name) => {
    const url = BASEURL + name

    return callApi(url, METHOD_GATE)
}


export const Api = {
    getCharacters
}