module.exports = function (context, req) {
    context.log(erq);
    context.bindings.profileDocument = JSON.stringify({
        name: req.body.name,
        password: req.body.password,
        tag: req.body.tag,
        icon: "null",
        followers: [],
        following: []
    });

    context.done(null, {
        status: 201,
        body: "Successfully inserted profile"
    });
};