export const fetchCoctails = (searchParams) => {
    console.log('this is it', searchParams.searchTerm)
 return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchParams.searchTerm}`)
    .then(res => res.json())
    .then(data => data)
    .catch(error => console.log(error))
}
