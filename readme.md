# doubleClickCert

``` javascript
  <!-- mobile in app -->
  <script src="https://s0.2mdn.net/ads/studio/Enabler.js"></script>
  <script>
    //Call isInitialized() before isPageLoaded()
    // waiting for enabler initilaize
    if(!Enabler.isInitialized()) {
      Enabler.addEventListener(
        studio.events.StudioEvent.INIT,
        enablerInitialized);
      } else {
        enablerInitialized();
      }
    }

    function enablerInitialized(){
      // enabler initialized.
      // In App ads are rendered offscreen so animation should wait for
      // the visible event. These are simulated with delays in the local
      // environment.
      if (!Enabler.isVisible()) {
        Enabler.addEventListener(
          studio.events.StudioEvent.VISIBLE,
          adVisible);
      } else {
        adVisible();
      }
    }

    function adVisible() {
      // ad visible, start ad/animation.
    }

    </script>
```


```javascript
    <!-- dektop/mobile browser setup -->
    <script src="https://s0.2mdn.net/ads/studio/Enabler.js"></script>
    <script>
      if (Enabler.isInitialized()) {
        enablerInitHandler();
      } else {
        Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
      }

      function enablerInitHandler() {
        //Start ad, initilaize animation,
        // laod in your image assets, call Enabler methods,
      }

      if (Enabler.isPageLoaded()) {
        pageLoadedHandler();
      } else {
        Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
      }

      function pageLoadedHandler() {
        // load in additional assets or add animation/video
      }

      // if true, start function. If false, listen for VISIBLE.
      if (Enabler.isVisible()) {
        adVisibilityHandler();
      } else {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
      }

      function adVisibilityHandler() {
        // Load in additional assets or start the animation/video
      }
    </script>
```


  ### Every doubleclick add must have at least 1 exit
  ```<div id="bg-exit"></div>```

  ### Types of custom tracking:
  * Add an HTML5 counter
  * Add an HTML5 timer
  * add an HTML5 exit

  ### Must include one backup image at the placement size

  ## DoubleClick Studio Ad formats:

  ### in-page format
    * desktop or mobile
    * requires - HTML5 Enabler .JS
    * requires - polite loading
    * requires - exit URL
    * requires - backup image
    * optional - custom tracking, video player

  ### floating format
    * desktop or mobile
    * requires - HTML5 Enabler .JS
    * requires - exit URL
    * requires - visible close button
    * requires - js timer to auto close by X seconds
    * requires - backup image
    * optional - custom tracking, video player

  ### expanding format
    * desktop or mobile
    * requires - HTML5 Enabler .JS
    * requires - polite loading
    * requires - exit URL
    * requires - visible close button
    * requires - backup image at collapsed size
    * optional - custom tracking, video player

  ### In-App format (serves only in mobile apps)
    * banner - similar to an html5 in-page
    * interstitial - similar to html5 floating but don't have to add a close button
    - video pre-roll, or game level load, and is presented in full screen
    * expanding - similar to html5 expanding, consists for 2 sizes collapsed and expanded
    - don't have to add close button (SDK adds it automatically)


  ## html5 floating or interstitial mobile banners don't need a close button


``` html
  <!-- custom video controls -->
  <div id="play-btn" class="video-controls">PLAY</div>
  <div id="pause-btn" class="video-controls">PAUSE</div>
  <div id="mute-btn" class="video-controls">MUTE</div>
  <div id="unmute-btn" class="video-controls">UNMUTE</div>
  <div id="stop-btn" class="video-controls">STOP</div>
  <div id="replay-btn" class="video-controls">REPLAY</div>
  <!-- not necessary for mobile in-app -->

```

#more javascript

```javascript
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
```


```javascript
  <!-- custom loading ??? -->
  <script src="https://s0.2mdn.net/ads/studio/Enabler.js"></script>

  <script>
    //Call isInitialized() before isPageLoaded()
    Enabler.isInitialized();
  </script>

  <script>
    //If true, start function. If false, listen for PAGE_LOADED.
    //Polite loader
    if (Enabler.isPageLoaded()) {
      pageLoadedHandler();
    } else {
      Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
    }
    function pageLoadedHandler() {
      //Load in additional assets or add animation/video
    }
  </script>

  <script>
    //If true, start function. If false, listen for VISIBLE.
    //For ads at bottom of the page
    if (Enabler.isVisible()) {
      adVisibilityHandler();
    } else {
      Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, adVisibilityHandler);
    }
    function adVisibilityHandler() {
      //Load in additional assets or add animation/video
    }
  </script>
```
