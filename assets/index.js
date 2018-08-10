function ajax(url, onsuccess, onfail) {
    var xmlHttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xmlHttp.open("get", url, true);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            if (xmlHttp.status == 200) {
                onsuccess(xmlHttp.responseText);
            }
            else {
                onfail(xmlHttp.status);
            }
        }
    }
    xmlHttp.send();
}

var resourceUrl = location.search.split('=')[1];
var contentDom = document.querySelector('.normal');
var Menu = document.querySelector('.summary');
var searchDom = document.querySelector('#book-search-input input');


var data = [
    {
        bookName: 'CSS用法总结',
        articles: [
            {
                title: '视觉效果',
                url: 'css-secret/chapter_4.md'
            },
            {
                title: '文字排版',
                url: 'css-secret/chapter_5.md'
            },
            {
                title: '用户体验',
                url: 'css-secret/chapter_6.md'
            },
            {
                title: '结构与布局',
                url: 'css-secret/chapter_7.md'
            },
            {
                title: '过滤与动画',
                url: 'css-secret/chapter_8.md'
            }
        ]
    },
    {
        bookName: 'Javascript高级程序设计笔记',
        articles: [
            {
                title: 'javascript 简介',
                url: 'js-senior-programming/chapter_1.md'
            },
            {
                title: '在HTML中使用javascript',
                url: 'js-senior-programming/chapter_2.md'
            },
            {
                title: 'ECMAScript基本概念',
                url: 'js-senior-programming/chapter_3.md'
            },
            {
                title: '基本类型和引用类型的区别',
                url: 'js-senior-programming/chapter_4.md'
            },
            {
                title: '引用类型',
                url: 'js-senior-programming/chapter_5.md'
            },
            {
                title: '面向对象的程序设计',
                url: 'js-senior-programming/chapter_6.md'
            },
            {
                title: '函数表达式',
                url: 'js-senior-programming/chapter_7.md'
            },
            {
                title: 'BOM',
                url: 'js-senior-programming/chapter_8.md'
            }
        ]
    },
    {
        bookName: 'Nodejs相关笔记',
        articles: [
            {
                title: '简介',
                url: 'nodejs/chapter_1.md'
            },
            {
                title: 'Buffer模块',
                url: 'nodejs/buffer.md'
            },
            {
                title: 'TCP和UDP通信协议的优缺点',
                url: 'nodejs/tcp_udp.md'
            }
        ]
    },
    {
        title: '正则表达式', 
        url: 'regexp/2017-12-25.md'
    },
    {
        title: 'Chrome Extendsion',
        url: 'chrome_ext_learn.md'
    },
    {
        title: 'HTML5 EventSource 调研',
        url: 'eventsource_learn.md'
    },
    {
        title: 'Express本质',
        url: 'express-analysis.md'
    },
    {
        title: 'Google 翻译文本转语音接口',
        url: 'google_translate_voice.md'
    },
    {
        title: '静态服务器简单编程',
        url: 'static_server.md'
    },
    {
        title: 'Css高级',
        url: 'css_advance.md'
    }
]

ajax(resourceUrl || 'README.md', function(str){
    contentDom.innerHTML = marked(str);
})

function debounce(idle, action){
    var last
    return function(){
      var ctx = this, args = arguments
      clearTimeout(last)
      last = setTimeout(function(){
          action.apply(ctx, args)
      }, idle)
    }
}

function renderMenu(){
    var renderData = [];
    if(searchDom.value !== '' && searchDom.value !== undefined) {
        data.forEach(function(book){
            if(book.bookName){
                var articles = [];
                book.articles.forEach(function(article){
                    if(article.title.indexOf(searchDom.value) !== -1) {
                        articles.push(article);
                    }
                })
                if(articles.length !== 0) {
                    renderData.push({
                        bookName: book.bookName,
                        articles: articles
                    })
                }
            } else {
                if(book.title.indexOf(searchDom.value) !== -1) {
                    renderData.push(book);
                }
            }
        })
    } else {
        renderData = data;
    }
    var menuItems = '';
    renderData.forEach(function(book){
        if(book.bookName){
            var articlesHtml = '';
            book.articles.forEach(function(article){
                articlesHtml = articlesHtml + '<li class="chapter"><span><a href="index.html?q=' + article.url + '">' + article.title + '</a></span></li>';
            })
            menuItems = menuItems + '<li class="chapter"><span>' + book.bookName + '</span><ul class="articles">' + articlesHtml + '</ul></li>';
        } else {
            menuItems = menuItems + '<li class="chapter"><span><a href="index.html?q=' + book.url + '">' + book.title + '</a></span></li>';
        }
    })
    Menu.innerHTML = menuItems;
}

hljs.initHighlightingOnLoad()

var rendererMD = new marked.Renderer();
marked.setOptions({
    renderer: rendererMD,
    gfm: false,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: true
});

marked.setOptions({
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
  }
});


var searchMenu = debounce(300, renderMenu);
renderMenu();

