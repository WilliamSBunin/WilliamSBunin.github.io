
document.querySelector("#interestsContent").innerHTML = `
<h1>I did not make the following. I just use it so I can listen to music in my car...</h1>



<iframe src="https://youtube-playlist-randomizer.bitbucket.io/" title="Random Music" width="100%" height="800px">
</iframe>

<p></p>

<div class="jumbotron">
    <h2>Music</h2>
</div>
<div class="container">
    <div class="row">
        <div class="col-6">            
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLw7c29tRotrkaPNB19GNBzv0QabMthdIV" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="col-6">
            This is not a complete list. I love so many songs! These are just a fw that I have added.
        </div>
    </div>
</div>
<div class="jumbotron">
    <h2>Hobbies</h2>
</div>
<div class="jumbotron">
    <h2>Goals</h2>
</div>
`;


navigator.mediaSession.setActionHandler('nexttrack', function() {
      document.querySelector("#next").click()
    });
navigator.mediaSession.setActionHandler('previoustrack', function() {
      document.querySelector("#prev").click()
    });
    
    window.addEventListener('keydown', function (e) {
  document.querySelector('#interestsContent').innerHTML = "You pressed " + e.key;
}, false);
