module.exports = function (context) {

    context.bindings.profileDocument = JSON.stringify({
        name: context.bindings.name,
        password: context.bindings.password,
        tag: context.bindings.tag,
        icon: "null",
        followers: [],
        following: []
    });

    context.done(null, {
        status: 201,
        body: "Successfully inserted profile"
    });
};