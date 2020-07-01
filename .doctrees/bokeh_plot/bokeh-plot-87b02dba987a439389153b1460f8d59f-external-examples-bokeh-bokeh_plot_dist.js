(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("842beafd-09ac-4f00-a914-9eca42182acc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '842beafd-09ac-4f00-a914-9eca42182acc' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;5ddd9acd-c665-4df7-9b57-7ade4c95b85e&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65005&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65008&quot;},{&quot;id&quot;:&quot;65012&quot;},{&quot;id&quot;:&quot;65072&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65009&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65061&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65063&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65020&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;64997&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65001&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;64999&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65003&quot;}},&quot;id&quot;:&quot;64996&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65009&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65012&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;65061&quot;}]},&quot;id&quot;:&quot;65073&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65044&quot;},{&quot;id&quot;:&quot;65045&quot;},{&quot;id&quot;:&quot;65046&quot;},{&quot;id&quot;:&quot;65047&quot;},{&quot;id&quot;:&quot;65048&quot;},{&quot;id&quot;:&quot;65049&quot;}]},&quot;id&quot;:&quot;65051&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65068&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65089&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65075&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65003&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65037&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65036&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65039&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65066&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65010&quot;}},&quot;id&quot;:&quot;65009&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65018&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12,13],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;ObTIdr6fmj8730+Nl26yPzeJQWDl0MI/2c73U+Olyz8CK4cW2c7HP/yp8dJNYsA/eekmMQisvD+cxCCwcmixP/p+arx0k5g/ObTIdr6fij97FK5H4Xp0P/yp8dJNYmA//Knx0k1iUD8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[13]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65071&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65070&quot;}},&quot;id&quot;:&quot;65058&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65050&quot;}},&quot;id&quot;:&quot;65046&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65089&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65041&quot;}},&quot;id&quot;:&quot;65040&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65014&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65045&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65091&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65037&quot;}},&quot;id&quot;:&quot;65036&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;uGVg7kEgeD/I+2P1NUN4P7O1NeD65Xg/eIf7+NP1eT/DhRhwjl17Px9u4ALONn0/5YriNthFfz8QXsHPPMGAP+zCfeYo+oE/0ci0un9Egz+4IM0JwpiEP+UgOfcSCIY/A9CXrUSXhz9p5Mcy9iOJPz+KoyLhz4o/xMpOy1awjD+noB+OHbaOP7pLKKKrhpA/BM5yaKTSkT8p3MIYnleTPw+9WB7CAJU/S+O7apLwlj8VZ2VAsA6ZP340RwgHcJs/QqLpmfgFnj9shdjhi2igP4yM9Z7a46E/Edh4eW16oz/jmN/PNCOlP/3itjuY5KY/8kESNTvBqD/54DxwabeqP2sW8uoqwKw/ZIDJe2Dirj85cFuRFpOwPzWkyRg0xLE/vd1PezUHsz8J4l+hzFe0Py0a/A1ZwLU/JuRCVsc7tz9U9HpZuMO4P/yXkoQlX7o/4R38w8IFvD/jvXfmVL29P12vhXZ1f78/91mIPsijwD8axsDxBYrBP+CFDEb1ccI/hDI524VYwz/ukPEWl0DEP+RbPS1oKcU/JVhX4cUQxj+QHZqBA/bGP6q3Tfu128c/VJUE7LTAyD8U4fLduaHJP0eJUFTMhMo/ivGLdAxmyz8pSoz5nkfMP4ouY7Z3Ks0/Axld5CoOzj/FIqFe7fPOP83ucfCE3s8/WlKjeZtl0D93NqB7OdzQP3P5Ve5+VNE/UGX4d9DP0T8mUg0qCU3SP+izpu95y9I/zosLd+lL0z9yWGRJos3TPxI4L3DUUNQ/5y7GTuPT1D8VY9khz1TVP3zPH7Hf0tU/A8Mhk3FO1j+kBmenDMPWP4MQBZVVMNc/iiv9UzWU1z8W9lxLee3XP5cwVmbHOdg/EWN++Zd62D994nvtU63YP62xvavB0Ng/cZKkYQfn2D/QLpmh2O7YP6zrgH3H6Ng/S+NGEw3V2D8xH49pvLXYP4wtRSiljdg/WCxGv45b2D9k1wkcQCHYP7hL5XfW39c/cp0TZaOY1z9p9EserUzXPxKmSjrN+9Y/Gb3Ap0+m1j8ikhZFfk3WPxMB/bqO79U/oRxvPiSO1T/IW2p5ICnVP3bBE8FkwdQ/NUofITdV1D/FzNVloeXTPyN1MD7ddNM/N2OC42j/0j/Yf2xHR4fSPwrf6N5jDNI/h71ZsF+O0T8+/WnmnQ3RP/dwzP0Pi9A/qTxv06sF0D/f0WsXfP3OP5fgxzQH7c0/8JnJoKrYzD+Q8lSXuL3LP8N9sYWyo8o/LDLDX4uJyT90N5mRKnDIP6sEA12FV8c/qPUSynRExj/F9K52JzjFP4nbOAd4NcQ/IYR6Tm88wz+wRURhFEzCP9iPgL/aaME/mIss5Z2SwD9KmkePcpK/Pwfoga4gGL4/+tpHuIy7vD/YTfZnIXS7Pzd1DFXbRLo/kf7QzTEsuT+qnX/HLiS4P1xsAC6DLrc/c5sD7vdKtj/+SRXWDnG1P38rC4g4nrQ/F/o35qHOsz8ZidNMZQGzP2ZCsE4cNrI/6KyGFmxjsT9VI3mQuoywP6n9qgrzX68/I6dohAaZrT9GVBWrr8GrP3wodhqL2ak/GfydXaLmpz//T0ZdGuqlP+0teVWi7qM/uJem8G71oT8DjV2FEwqgP6EhjMYQY5w/7ypXgpncmD8t2/DWDJKVPxygPvaijJI/+4HFPmGQjz9gRth8J6CKP7/RB/1iSIY/h+KwDxRwgj9xI2O7BGF+P/WOjVCV+Hg/qWUNvwx6dD95fLGKyM5wP8cbXjcbzms/2jMEsrILZz+yYD2XDmxjPxMcWTPU72A/WkGZzLkpXj/D/WGGzlhbP3eOR/I4Plk/Sg8SlgB1WD9/8ZsRIuNXP91sETrurVc/om0jQJfEVz9VzaTuquNXP2N3H8OYwVc//G57nbV7Vz/Nd6l6lwRXP1Ukwtw1ZVY/QYJ5Q8+rVT/3zQLz/epUPy2jSMLBFlQ/RajoSwqVUz8RilhxzktTPw/XgGXcUFM/yQHk8eC1Uz/uulDT64ZUP85mepA+yVU/aInlJ356Vz8GyBsfXJBZP55D6PzF+Fs/KMi+paKaXj8w2NSljatgP4YgEgKxBWI/LgNGx21JYz/c2JrwwmRkP+gZLMI1R2U/HkccNvfiZT/vw3dyAUdmPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65097&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65096&quot;}},&quot;id&quot;:&quot;65074&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65076&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65013&quot;},{&quot;id&quot;:&quot;65014&quot;},{&quot;id&quot;:&quot;65015&quot;},{&quot;id&quot;:&quot;65016&quot;},{&quot;id&quot;:&quot;65017&quot;},{&quot;id&quot;:&quot;65018&quot;}]},&quot;id&quot;:&quot;65020&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65001&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65030&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65070&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65071&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65013&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65019&quot;}},&quot;id&quot;:&quot;65015&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65047&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65060&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65016&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65063&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65091&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65049&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65005&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65008&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65082&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65074&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65075&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65076&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65078&quot;}},&quot;id&quot;:&quot;65077&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65036&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65039&quot;},{&quot;id&quot;:&quot;65043&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65040&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65077&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65082&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65051&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65028&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65032&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65030&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65034&quot;}},&quot;id&quot;:&quot;65027&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65048&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65040&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65043&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65010&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65058&quot;}},&quot;id&quot;:&quot;65062&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65032&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65017&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;64996&quot;},{&quot;id&quot;:&quot;65027&quot;}]},&quot;id&quot;:&quot;65079&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65034&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65097&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65041&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;65073&quot;}]},&quot;id&quot;:&quot;65072&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65074&quot;}},&quot;id&quot;:&quot;65078&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;64997&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65006&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65068&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65006&quot;}},&quot;id&quot;:&quot;65005&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65019&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65050&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65028&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65066&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65059&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65096&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;64999&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65044&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65058&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65059&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65060&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65062&quot;}},&quot;id&quot;:&quot;65061&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;}],&quot;root_ids&quot;:[&quot;65079&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"5ddd9acd-c665-4df7-9b57-7ade4c95b85e","root_ids":["65079"],"roots":{"65079":"842beafd-09ac-4f00-a914-9eca42182acc"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();