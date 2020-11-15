import InfiniteScroll from 'infinite-scroll';

var unsplashID =
  '9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251';

const infScroll = new InfiniteScroll('.container', {
  responseType: 'text',
  history: false,
  path() {
    const url = `https://api.unsplash.com/photos?client_id=${unsplashID}&page=${this.pageIndex}`;
    return url;
  },
});

// `https://newsapi.org/v2/everything?q=bitcoin&apiKey=bb47a995514a49758140b073ef1103f5`;

console.log(infScroll);

infScroll.loadNextPage();

infScroll.on('load', (response, path) => {
  //   console.log(JSON.parse(response));
  //   console.log(path);
});
