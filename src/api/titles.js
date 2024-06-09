let apiUrl = 'https://shikimori.one/api'

let headers = {
    'User-Agent': 'Api Test',
    'Authorization': 'Bearer FWWtnCpbvJeNPsgEj9tyuGGufPZ3g-o7iB0QEPsIRFs'
}

async function getLastUpdatedTitles(){

    const response = await fetch(apiUrl + '/animes?limit=15&&season=spring_2024&&order=popularity', {
        method: 'GET',
        headers: headers,
    });
    const data = await response.json();
    return data;

}

async function getNewTitles(chunkSize, page){

    const response = await fetch(apiUrl + `/animes?limit=${chunkSize}&&order=aired_on&&page=${page}&&status=ongoing&&score=7`, {
        method: 'GET',
        headers: headers,
    });
    const data = await response.json();
    // console.log(data);
    
    let allTitles = [];

    for (let i = 0; i < data.length; i++) {
        let titleInfo = await getTitleById(data[i].id);
        allTitles.push(titleInfo);
    }

    return allTitles;

}

async function getTitleById(id){
    const response = await fetch(apiUrl + `/animes/${id}`, {
        method: 'GET',
        headers: headers,
    });
    const data = await response.json();
    console.log(data)
    return data;
}

export {
    getLastUpdatedTitles,
    getNewTitles,
    getTitleById,
}