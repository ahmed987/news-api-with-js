           
// var api = "https://newsapi.org/v1/articles?source=techcrunch&apikey=6f4fa5447bb24a2687edecc4c1df43b4"
var apikey = 'adac8875175942298dfe49cea837dbcc';
const main = document.querySelector("#div");
const selector = document.querySelector('#selector')
const defineDefualt = "the-washington-post"
 window.addEventListener('load', async e => {
    updatedNews()
    await upadteSources()
    selector.value = defineDefualt;
     selector.addEventListener('change', e => {
        updatedNews(e.target.value)
    })
 })
 async function upadteSources() {
    const res = await fetch(`https://newsapi.org/v1/sources`);
    const json = await res.json()
    // console.log(json)
     selector.innerHTML = json.sources
        .map(src => `<option value="${src.id}">${src.name}</option>`).join('\n')
}
 async function updatedNews(source = defineDefualt) {
    const res = await fetch(`https://newsapi.org/v1/articles?source=${source}&apikey=${apikey}`);
    console.log(res)
    const data = await res.json();
    console.log(data)
    main.innerHTML = data.articles.map(createArticles).join('\n')
}
 function createArticles(article) {
    return `
        <div class="col-md-8 col-md-offset-2">
            <h2 class='h2'>${article.title}</h2>
            <img class="img-rounded" width='100%' src="${article.urlToImage}"/>
            <p class='h4'>${article.description}</p>
        </div>
    `
}


//firebase login google
//project>setting>genral>web code>script copy>another js
// let and var
//var globalVar = 10;

// printer();

// function printer(){
//     var x = 10;
    
    
//     for(i;i<30;i++){
//         console.log(i)
//     }
//     console.log(i);
// }
// console.log(x)

// (function letter(){
//     const ss=20;

// })();

// function gff(){

// }
// let naem = (xx,xxx) =>{

// }