const database = 'https://github.com/AlexAlestra100/CSC131_Team2/blob/main/refrence.json';

async function categorySearch(){
    const resposne = await fetch(database);
    const data = await response.json();

    for(let i = 0; i < data.length; i++){
        console.log(data.category);
    }
}

categorySearch();