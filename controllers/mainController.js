const date = require('../getDate.js');
const Wish = require('../models/wish')

exports.getMainPage = (request, response)=>{
    let today = date.getDate();

    response.render('index', {dateToRender: today});
};

exports.getDate = (request, response)=>{
    let today = date.getDate();
    response.send(today);
};

exports.getWeekday = (request, response)=>{
    let weekday = date.getWeekday();
    response.send(weekday);
};

exports.postWish = (req, res) => {
    console.log(req.body.userWish);
    const newWish = new Wish(req.body.userWish);
    newWish.saveWish();

    res.redirect('/');

}