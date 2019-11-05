const request = require('request');
//const axios = require('axios');
const cheerio = require('cheerio');
    

//const url = "https://www.premierleague.com/fixtures";
const url = "https://www.flashscore.co.uk/football/england/premier-league/fixtures/";
//const url = "http://www.naver.com";

//const getHtml = async () =>{
//    try{
//        return await axios.get("https://www.skysports.com/premier-league-fixtures");
//    }catch(error){
//        console.error(error);
//    }
//}
//getHtml().then(html => {
//    var $ = cheerio.load(html.data);
//    console.log($(this).find('#widgetLite-6 > div:nth-child(3) > a > span.matches__item-col.matches__participant.matches__participant--side1 > span > span').text());
//    console.log($(this).find('#widgetLite-0 > div.grid__col.site-layout-primary__col1 > div.page-header > h1 > a > abbr > span').text());
//});

request(url, (error, response, body) =>{
    if (error) throw error;
//    console.log(body);
    
    var $ = cheerio.load(body);
    
    
    try{
        let timearr = [];
        let matcharr = [];
//        const time = $("#mainContent > div.tabbedContent > div.wrapper.col-12.active > div.col-12 > section").children("time.long");
        const match = $("#live-table > div > div > div").children("div.event__match event__match--static event__match--scheduled event__match--oneLine");
//        
        match.each(function(i, elem){
            var home = $(this).find('div.event__participant event__participant--home').text();
            var away = $(this).find('div.event__participant event__participant--away').text();
            console.log(home, away);
        });
//        console.log(matcharr);
        
//        var match = "";
//        match = $(this).find('#widgetLite-6').html();
//        console.log(match);
//        console.log($(this).find('#widgetLite-6 > div:nth-child(3) > a > span.matches__item-col.matches__participant.matches__participant--side1 > span > span').text())
//        console.log($(this).find('#widgetLite-0 > div.grid__col.site-layout-primary__col1 > div.page-header > h1 > a > abbr > span').text())
    } catch(error){
        console.log(error);
    }
});