module.exports = function (context, req) {
    let profiles = context.bindings.profiles;
    
    
    if (!profiles || profiles == [])
    {
        context.log('No profile found to edit')
        context.res = {
            status: 404,
            body: "Error finding profile"
        }
    } else {
        context.bindings.profilesToUpdate = [];
        for(let i = 0; i < profiles.length; i++) {
            let updatedProfile = profiles[i];
            // Current profile is follower or followed account
            if (updatedProfile.id == req.body.follower) {
                if (req.body.add){
                    // Adds followed account to list of accounts follower is following
                    context.log("Added followed");
                    updatedProfile.following.push(req.body.followed);
                } else {
                    // Removes followed account from list of accounts follower is following
                    context.log("Removed followed");
                    updatedProfile.following.splice(updatedProfile.following.indexOf(req.body.followed), 1)
                }    
            } else if (updatedProfile.id == req.body.followed) {
                if (req.body.add){
                    // Adds follower to list of followers of followed
                    context.log("Added follower");
                    updatedProfile.followers.push(req.body.follower);
                } else {
                    // Removes follower from list of followers of followed
                    context.log("Removed follower");
                    updatedProfile.followers.splice(updatedProfile.followers.indexOf(req.body.follower), 1)
                }
            } 
            context.log("Pushing updated followed");
            context.log(updatedProfile);
            context.bindings.profilesToUpdate.push(updatedProfile);
        }

        context.res = {
            status: 200,
            body: "Successfully updated"
        }
    }
    context.log('Returning context');
    context.done();
};