module.exports = function (context) {
    context.log(context.bindings);
    context.bindings.profileDocument = JSON.stringify({
        name: context.bindings.body.name,
        password: context.bindings.body.password,
        tag: context.bindings.body.tag,
        icon: "null",
        followers: [],
        following: []
    });

    context.done(null, {
        status: 201,
        body: "Successfully inserted profile"
    });
};