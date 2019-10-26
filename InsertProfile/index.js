module.exports = function (context) {

    context.bindings.employeeDocument = JSON.stringify({
        name: context.bindings.myQueueItem.name,
        password: context.bindings.myQueueItem.password,
        tag: context.bindings.myQueueItem.tag,
        icon: "null",
        followers: [],
        following: []
    });

    context.done(null, {
        status: 201,
        body: "Successfully inserted profile"
    });
};