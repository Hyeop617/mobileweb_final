const request = require('request');
const cheerio = require('cheerio');


var options = {
    url: 'https://www.foxsports.com/soccer/schedule?competition=1',
    method: 'POST',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.146 Whale/2.6.88.11 Safari/537.36',
    }
};

request(options, (error, response, body) => {
    //    console.log(body);

    try {
        var match = [];
        var home = [];
        var away = [];
        var date = [];

        var $ = cheerio.load(body);
        var table = $('#wisfoxbox > section.wisbb_body > table');


        table.find('thead').each(function (index, ele) {
            date.push($(this).find('tr > th').text());
        });


        var bodyList = table.find('tbody');
        for (var i = 0; i < bodyList.length; i++) {
            var index = bodyList.eq(i).children().length;
            var tmpHome = [];
            var tmpAway = [];
            for (var j = 0; j < index; j++) {
                tmpHome[j] = bodyList.eq(i).children().eq(j).find('td.wisbb_team.wisbb_reversed.wisbb_firstTeam > div.wisbb_fullTeamStacked > a > span:nth-child(3)').text();
                tmpAway[j] = bodyList.eq(i).children().eq(j).find('td.wisbb_team.wisbb_secondTeam > div.wisbb_fullTeamStacked > a > span:nth-child(3)').text();
                match.push({
                    date: date[i],
                    home: tmpHome[j],
                    away: tmpAway[j]
                });
            }
        }
        console.log(match);

    } catch (error) {
        console.log(error);
    }
});
