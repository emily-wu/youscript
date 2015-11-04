if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Fanfic1',
    url: 'https://docs.google.com/document/d/1g62WURfkuVBWrzzFvWNEbj_My5AgOBW1dbdMsYTwBKo/edit?usp=sharing'
  });

  Posts.insert({
    title: 'Fanfic2',
    url: 'https://docs.google.com/document/d/1k8LZK6X7qLbBWg1028ZZXwR28Ha8a5oomjok5tVU4-w/edit?usp=sharing'
  });

}