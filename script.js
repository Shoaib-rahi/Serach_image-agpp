
let Acesskey = "3lljIDhrzyE6tHaF886_tJj62aE0XA0RQw8CApu5FmI";



const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const showMore = document.getElementById("show-more")
const searchResult = document.getElementById("search-results");



let keyword = "";
let page= 1;
async function searchImage(){
    keyword = searchBox.ariaValueMax;
    const URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${Acesskey}&per_page=12`;

    let response = await fetch(URL);
    let data= await response.json();
    let results = data.results;
    results.map((restult) => {
let image = document.createElement("img");
image.src  = restult.urls.small;
const imageLink = document.createElement("a");
imageLink.href = restult.links.html;

imageLink.target = "_blank";
imageLink.appendChild(image);
searchResult.appendChild(imageLink);
    });
    showMore.style.display="block";
}







searchForm.addEventListener("submit",(e) => {
    e.preventDefault();
    page = 1;
    searchImage();
});




showMore.addEventListener("click",() => {
    page++;
    searchImage();
})