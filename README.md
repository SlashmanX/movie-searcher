show searcher
=========

Search your show, get torrent file.

It looks for torrents using the kickass search engine, selecting the verified torrent with the higher number of seeds(minimum 100). The search engine is pretty good, but also pretty exact. For example: 'american dad!' won't return anything. Mostly because most torrent files are stripped of all weird characters, such as :, . , ! , etc. The module will remove or replace these characters according to what will return something better.
For example: 'Marvel's agents S.H.I.E.L.D.' will be changed to 'marvels agent of s h i e l d', and the search will be successful.
Why did I write all this name parsing thingies? Because I wanted to use TVDB data.

Again, it's not perfect, but it works pretty well.


## Usage



  ```
  var showsearcher = require('showsearcher');
      

  showsearcher({name: 'game of thrones',season: 4, episode:2, quality: '720p'}, function(err, result){
  	if(!err){
  	  console.log(result);
	}else{
	  console.log(err);
	}
	
  });
  ```
