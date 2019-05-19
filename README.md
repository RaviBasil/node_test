When is it a good idea to not use NodeJs? Why? 

1. Node.js isn't great in CPU bound use cases, and it's "worker" solution is really planned mostly for http server scaling. It's not suited to use cases that "block" the event loop.
2. NodeJs is bad at computation. So If your app has lot of computation then please refrain from using NodeJs.
3. It can be great for an Api server (or as a front for an api server), for a server side Socket.IO support (Although many languages support Socket.IO the development is going on in node.js environment). Or for a gentle way to introduce someone with mostly front end web experience to server side development