var form = document.getElementById('acc');
var yearStart = document.getElementById('m_start');
var yearEnd = document.getElementById('m_end');
var mname = document.getElementById("m_name");
var bx = document.getElementById("wol");

form.addEventListener('submit', function(event)
{
    var nstart = parseFloat(yearStart.value);
    var nend = parseFloat(yearEnd.value);
     
    var years = [];

    if(nstart < 1927 || !nstart)
    {
        nstart = 1927;
    }
    else if(nend > 2017 || !nend)
    {
        nend = 2017;
    }

    for(var i = nstart; i <= nend; i++)
    {
        years.push(i);
    }

    var wlose;

    if(bx.value == "Win")
    {
        wlose = true;
    }
    else if(bx.value == "Lose")
    {
        wlose = false;
    }

    var selected = [];

    for(var option of document.getElementById('cats').options) {
        if(option.selected)
        {
            selected.push(option.value);
        }
    }

    var movie =
    {
        name: mname.value,
        actor: mname.value,
        categ: selected,
        dates: years,
        winlose: wlose
    };
    /*
    console.log(movie.name);
    console.log(movie.actor);
    console.log(movie.categ);
    console.log(movie.dates);
    console.log(movie.winlose);

    event.preventDefault();
    */
});