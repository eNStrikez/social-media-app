module.exports = function (context, req) {
    context.log(req.body.data.tag);
    context.bindings.profileDocument = JSON.stringify({
        id: req.body.data.tag,
        name: req.body.data.name,
        password: req.body.data.password,
        tag: req.body.data.tag,
        icon: "null",
        followers: [],
        following: []
    });

    context.done(null, {
        status: 201,
        body: "Successfully inserted profile"
    });
};