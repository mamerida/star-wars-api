const BASEURL = "https://swapi.dev/api/"
const SEARCH = "/?search=";
const METHOD_GATE = "GET"
const FORCE_CACHE = "force-cache"

const callApi = async (url, method, cache = "default") =>{
    return fetch(url,{method: method, cache:cache})
    .then(res => {
        if(!res.ok){
            throw new Error();
        }else{
            return res.json();
        }
    })
    .then(res => res)
}

const getElement = (name, endpoint) => {
    let url = BASEURL + endpoint
    if(name) url += SEARCH + name
    return callApi(url, METHOD_GATE)
}

const getPage = (url) => callApi(url, METHOD_GATE, FORCE_CACHE)


export const Api = {
    getElement,
    getPage
}