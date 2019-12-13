'use strict';

/*const myCanvas = document.getElementById("myCanvas");


let context;
let x = 100;
let y = 200;
let dx = 5;
let dy = 5;

function init()
{
    context= myCanvas.getContext('2d');
    setInterval(draw,10);
}

function draw()
{
    context.clearRect(0,0, 300,300);
    context.beginPath();
    context.fillStyle="#0000ff";
    // Draws a circle of radius 20 at the coordinates 100,100 on the canvas
    context.arc(x,y,20,0,Math.PI*2,true);
    context.closePath();
    context.fill();
    // Boundary Logic
    if( x<0 || x>300) dx=-dx;
    if( y<0 || y>300) dy=-dy;
    x+=dx;
    y+=dy;
}

window.onload = function () {
    init();
};*/

/*
class PrintMachine {
    constructor(str, fontSize, color, fontFamily) {
        this.str = str;
        this.fontSize = fontSize;
        this.color = color;
        this.fontFamily = fontFamily;
    }

    print() {
        const domStr = document.createElement("div");
        domStr.innerText = this.str;
        domStr.style.fontSize = this.fontSize;
        domStr.style.color = this.color;
        domStr.style.fontFamily = this.fontFamily;
        document.body.appendChild(domStr);
    }

}

const test = new PrintMachine("test", "30px", "green", "monospace");
test.print();*/

class NewsList {
    constructor(newsArr) {
        if (Array.isArray(newsArr)) {
            this.newsArr = newsArr;
        }
    }

    get countOfNews() {
        return this.newsArr.length;
    }

    printAllNews() {
        this.newsArr.forEach(news => console.log(news));
    }

    addNews(news) {
        this.newsArr.push(news);
    }

    deleteNews() {
        this.newsArr.pop();
    }
}

/*
const arr = [];
arr.push("news1");
arr.push("news2");
arr.push("news3");

const list = new NewsList(arr);
list.countOfNews;
list.printAllNews();
list.addNews("newNews");
list.printAllNews();
list.deleteNews();
list.printAllNews();*/

class News {
    constructor(header, text, tags, dateOfPublication) {
        this.header = header;
        this.text = text;
        this.tags = tags;
        this.dateOfPublication = dateOfPublication;
    }

    print() {
        const newsContainer = document.createElement("div");
        newsContainer.classList.add("newsContainer");
        const header = document.createElement("h3");
        header.classList.add("header");
        header.innerText = this.header;
        const date = document.createElement("h5");
        date.innerText = this.dateOfPublication.getDate();
        const text = document.createElement("p");
        text.innerText = this.text;
        const tagsList = document.createElement("div");
        tagsList.classList.add("tagsList");
        this.tags.forEach( tag => {
            const someTag = document.createElement("div");
            someTag.innerText = tag;
            tagsList.appendChild(someTag);
        });
        newsContainer.appendChild(header);
        newsContainer.appendChild(date);
        newsContainer.appendChild(text);
        newsContainer.appendChild(tagsList);

        document.body.appendChild(newsContainer);
    }
}

const someNews = new News("test", "wre wewrerwe ewr ewr erw erwerw erw", ["dfsdf", "sdfsdf", "dsffsdf",], new Date());
someNews.print();

const someNews2 = new News("test2", "wre wewrerwe ewr ewr erw erwerw erw sdfgf dsg fg gf gd gfg", ["dfsdf", "sdfsdf", "dsffsdf",], new Date());
someNews2.print();

