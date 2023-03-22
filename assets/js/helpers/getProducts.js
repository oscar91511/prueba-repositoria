async function getProducts () {
    try {
        const res = await window.fetch("")
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export default getProducts