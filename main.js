// exit handler
function bgExitHandler(e) {
  Enabler.exit('Background Exit');
}
document.getElementById('bg-exit').addEventListener('click', bgExitHandler, false);


// counter: used for mouseover counts, button press counts etc
function tabOneClickHandler(e) {
  Enabler.counter('Click on Tab 1');
}
document.getElementById('tab-one').addEventListener('click', tabOneClickHandler, false);


// starting timers: how long an expanded pannel was open, etc
// Enabler.startTimer(timerId:String);
// Enabler.stopTimer(timerId:String);
function startTimerHandler(e) {
  Enabler.startTimer('My Timer');
}
document.getElementById('start-timer').addEventListener('click', startTimerHandler, false);

function stopTimerHandler(e) {
  Enabler.stopTimer('My Timer');
}
document.getElementById('stop-timer').addEventListener('click', stopTimerHandler, false);


//video tracking metrics
var video1 = document.getElementById('video1');

Enabler.loadModule(studio.module.ModuleId.VIDEO,
  function() {
    studio.video.Reporter.attach('video_1', video1);
  }
);


// multiple videos
var video1 = document.getElementById('video1');
var video2 = document.getElementById('video2');

Enabler.loadModule(studio.module.ModuleId.VIDEO,
  function() {
    studio.video.Reporter.attach('video_1', video1);
    studio.video.Reporter.attach('video_2', video2);
  }
);


//optional custom video player module fixes cross browser issues
Enabler.loadModule(studio.module.ModuleId.RAD_VIDEO, function() {

  //This only needs to be done once.
  studio.sdk.rad.Rad.setTopLevelElement(
    document.getElementById('component-ancestor'));

  //create the video component.
  var videoComp = studio.sdk.rad.Video.create({
    id: 'My Video Trailer',
    autoplay: true,
    controls: true,
    sources: ['video.mp4']
  })

  //Set the element it will decorate.
  videoComp.setElement(document.getElementById('video-container'));
});


// custom video controls
function muteUnmuteHandler(e) {
  if (video1.volume == 0.0) {
    //if muted, then turn it on
    video1.volume = 1.0;
    // show mute button and hide unmute button
    muteBtn.style.visibility = 'visible';
    unmuteBtn.style.visibility = 'hidden';
  } else {
    // if unmuted, then turn it off
    video1.volume = 0.0;
    // show unmute button and hide mute button
    muteBtn.style.visibility = 'hidden';
    unmuteBtn.style.visibility = 'visible';
  }
}


//enabler api's
//basic metric reporting

//counters
Enabler.counter("Rollover to Expand"); // Desktop friendly
Enabler.counter("Tab to Expand"); //Mobile friendly

//Exits:
Enabler.exit("logo");
// hardcoding exit, can't be adjusted anywhere else
Enabler.exit("logo", "http://google.com");

//Timers:
Enabler.startTimer("Panel_1");
Enabler.stopTimer("Panel_1");

//more cool stuff (not available for mobile in-app)
Enabler.getUserZipCode();
Enabler.reportManualClose();
Enabler.isVisible(); //reports whether the ad is VISIBLE
Enabler.getDartSite(); //returns DART site name
Enabler.getExpandDircetion(); //returns expand direction
Enabler.getOrientation(); //object representing the orientation of the device.
Enabler.getUrl(); //Returns runtie URL given the original compile-time filename.
