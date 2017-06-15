

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


  <!-- Every doubleclick add must have at least 1 exit -->
  <div id="bg-exit"></div>

  <!-- Types of custom tracking:
  Add an HTML5 counter
  Add an HTML5 timer
  add an HTML5 exit -->

  <!-- Must include one backup image at the placement size -->

  <h1>DoubleClick Studio Ad formats:</h1>

  <h2>in-page format</h2>
    <ul>
      <li>desktop or mobile</li>
      <li>requires - HTML5 Enabler .JS</li>
      <li>requires - polite loading</li>
      <li>requires - exit URL</li>
      <li>requires - backup image</li>
      <li>optional - custom tracking, video player</li>
    </ul>

  <h2>floating format</h2>
    <ul>
      <li>desktop or mobile</li>
      <li>requires - HTML5 Enabler .JS</li>
      <li>requires - exit URL</li>
      <li>requires - visible close button</li>
      <li>requires - js timer to auto close by X seconds</li>
      <li>requires - backup image</li>
      <li>optional - custom tracking, video player</li>
    </ul>

  <h2>expanding format</h2>
    <ul>
      <li>desktop or mobile</li>
      <li>requires - HTML5 Enabler .JS</li>
      <li>requires - polite loading</li>
      <li>requires - exit URL</li>
      <li>requires - visible close button</li>
      <li>requires - backup image at collapsed size</li>
      <li>optional - custom tracking, video player</li>
    </ul>

  <h2>In-App format (serves only in mobile apps)</h2>
    <ul>
      <li>banner - similar to an html5 in-page</li>
      <li>interstitial - similar to html5 floating but dont have to add a close button<br>
        - video pre-roll, or game level load, and is presented in full screen</li>
      <li>expanding - similar to html5 expanding, consists for 2 sizes collapsed and expanded<br>
        - dont have to add close button (SDK adds it automatically)</li>
    </ul>

    <!-- html5 floating or interstitial mobile banners dont need a close button -->


```
  <!-- custom video controls -->
  <div id="play-btn" class="video-controls">PLAY</div>
  <div id="pause-btn" class="video-controls">PAUSE</div>
  <div id="mute-btn" class="video-controls">MUTE</div>
  <div id="unmute-btn" class="video-controls">UNMUTE</div>
  <div id="stop-btn" class="video-controls">STOP</div>
  <div id="replay-btn" class="video-controls">REPLAY</div>
  <!-- not necessary for mobile in-app -->
</code>
```


</body>
</html>
