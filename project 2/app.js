let data = [
    {
        name:'Finn the Human',
        age:'17',
    },
    {
        name:'Steven Quartz Universe',
        age:'16',
    },
    {
        name:'Hiccup Horrendous Haddock III',
        age:'20',
    },
    {
        name:'Jack Frost',
        age:'300+ (17)',
    },
    {
        name:'Aang',
        age:'112',
    },
    {
        name:'This really old egg',
        age:'way too many',
    }
];
const info = document.querySelector('#info')
let details = data.map(function(item){
    return '<div>' + item.name +' ' + 'is' + ' ' + item.age +' ' + 'years old.' +' '+ '</div>';
    
})
info.innerHTML = details.join('\n');