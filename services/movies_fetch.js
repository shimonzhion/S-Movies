
const API_KEY ="api_key=1395b8819346daf20ba9e8ee8957820b";
const BASIC_API= "https://api.themoviedb.org/3";
const API_URL= BASIC_API+'/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const search_movie = BASIC_API + '/search/movie?'+API_KEY;



async function getmovies(url){
    return await fetch(url).then(response =>response.json()).then(data=>{
        console.log(data['results']);
        showMovie(data.results)

    })
}










