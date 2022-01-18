const fetch = require('node-fetch')

async function checaStatus(arrayURLs){
    // promises async await
    const arrayStatus = await Promise.all(arrayURLs.map(async url => {
        const res = await fetch(url)
        return res.status
    }))
    return arrayStatus
}

function geraArryDeURLs(arrayList){
    // objecto -> valor
    return arrayList.map(objetoLink => Object.values(objetoLink).join())
}

async function validaURLs(arrayLinks){
    const links = geraArryDeURLs(arrayLinks)
    const statusLinks = await checaStatus(links)
    return statusLinks
}

module.exports = validaURLs
