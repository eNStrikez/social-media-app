module.exports = function (context, req) {
    context.log(req.body.tag);

    context.bindings.profileDocument = JSON.stringify({
        id: req.body.tag,
        name: req.body.name,
        password: req.body.password,
        icon: req.body.icon,
        followers: [],
        following: [],
        email: req.body.email
    });

    context.res = {
        status: 201,
        body: "Successfully inserted post"
    };

    context.done();
};