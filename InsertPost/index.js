module.exports = function (context, req) {
    let date = new Date();

    let seconds = date.getSeconds();
    if(seconds.length == 1)
        seconds = '0' + seconds;
    let mins = date.getMinutes();
    if(mins.length == 1)
        mins = '0' + mins;
    let hours = date.getHours();
    if(hours.length == 1)
        hours = '0' + hours;

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear()

    context.bindings.postDocument = JSON.stringify({
        tag: req.body.tag,
        name: req.body.name,
        icon: req.body.icon,
        timestamp: hours + ":" + mins + ":" + seconds,
        date: day + "/" + month + "/" + year,
        content: req.body.content,
        media: req.body.media,
        tags: req.body.tags
    });

    context.res = {
        status: 201,
        body: "Successfully inserted post"
    };

    context.done();
};