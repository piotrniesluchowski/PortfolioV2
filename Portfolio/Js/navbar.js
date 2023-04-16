const article = document.querySelectorAll('article');
const navLi = document.querySelectorAll('nav ul a li');

window.addEventListener('scroll', ()=>{
    let current=' ';
    article.forEach( article =>{
        const sectionTop = article.offsetTop;
        const sectionHeight = article.clientHeight;
        if(pageYOffset >= sectionTop - sectionHeight / 5){
            current = article.getAttribute('id');
        }
    })

    navLi.forEach(li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    })
})