module.exports = function (context, req) {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear()

    context.bindings.postDocument = JSON.stringify({
        tag: req.body.tag,
        name: req.body.name,
        icon: req.body.icon,
        timestamp: date.toLocaleDateString(),
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