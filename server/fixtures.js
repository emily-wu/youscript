// Fixture data 
if (Posts.find().count() === 0) {
  var now = new Date().getTime();
  
  // create two users
  var samId = Meteor.users.insert({
    profile: { name: 'Sam Smith' }
  });
  var sam = Meteor.users.findOne(samId);
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Cat' }
  });
  var tom = Meteor.users.findOne(tomId);
  
  var telescopeId = Posts.insert({
    title: 'Fanfic1',
    userId: sam._id,
    author: sam.profile.name,
    url: 'https://docs.google.com/document/d/1g62WURfkuVBWrzzFvWNEbj_My5AgOBW1dbdMsYTwBKo/edit?usp=sharing',
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2,
    upvoters: [],
    votes: 0
  });
  
  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: 'Interesting fanfic Sam, can I get involved?'
  });
  
  Comments.insert({
    postId: telescopeId,
    userId: sam._id,
    author: sam.profile.name,
    submitted: new Date(now - 3 * 3600 * 1000),
    body: 'You sure can Tom!'
  });
  
  Posts.insert({
    title: 'Fanfic2',
    userId: tom._id,
    author: tom.profile.name,
    url: 'https://docs.google.com/document/d/1k8LZK6X7qLbBWg1028ZZXwR28Ha8a5oomjok5tVU4-w/edit?usp=sharing',
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0
  });
}
