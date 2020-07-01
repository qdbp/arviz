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
    
      
      
    
      var element = document.getElementById("c081944d-e138-46c1-ae6f-0a8a998c55d3");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c081944d-e138-46c1-ae6f-0a8a998c55d3' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;09c04fc6-dfe9-4992-8a77-50bb59f5bc18&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66500&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66502&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66532&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66504&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;66507&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66533&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;66504&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;66507&quot;},{&quot;id&quot;:&quot;66511&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;66508&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;66534&quot;},{&quot;id&quot;:&quot;66539&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;66541&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;66522&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;66496&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;66500&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;66498&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;66502&quot;}},&quot;id&quot;:&quot;66495&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66546&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66505&quot;}},&quot;id&quot;:&quot;66504&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66505&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66517&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66551&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;66544&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;66509&quot;}},&quot;id&quot;:&quot;66508&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66509&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66531&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66532&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66533&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66535&quot;}},&quot;id&quot;:&quot;66534&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;66512&quot;},{&quot;id&quot;:&quot;66513&quot;},{&quot;id&quot;:&quot;66514&quot;},{&quot;id&quot;:&quot;66515&quot;},{&quot;id&quot;:&quot;66516&quot;},{&quot;id&quot;:&quot;66517&quot;},{&quot;id&quot;:&quot;66518&quot;},{&quot;id&quot;:&quot;66519&quot;}]},&quot;id&quot;:&quot;66522&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66521&quot;}},&quot;id&quot;:&quot;66516&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;66508&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;66511&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;66536&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;66537&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;66538&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;66540&quot;}},&quot;id&quot;:&quot;66539&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;grJBqFliBMBbFbAIuBwDwPbItLjpHQDA7tDSRZIf/r/eELQLcRj+v5Tifp7NsPu/ERq1Dfsq+b8odNReN8b4v5z3a/+iwPi/pntQjnfJ978h48tGhKX3v91r9RxOnfe/1Ed5iR279L+7bP3c61z0v+1FKrfLq/O/KisGSP5Z879vio9z12nxv7TmO0EGXvG/ylQUnXFW8b/UaP5TdWrwv/NmSnqDZfC/Jx7H2qpV8L8lRg3T4gvwv+X7LJ7P7e+/ARhTcylE7L8VC7MzRM3qv9JR455NZeq/XpYuAoB16L9/Jyi9DU3nv4Ewp3mCHee/y1EiXjkM5b9zT9g8hN3jvyH8ud42F+O/i1ZSzer54r9XtiNVuXPhv3XUfk+y8t2/kusLkyS33b8oH8QNZc7av1aZOvxJ09i/SMsno/h82L+zJctc/DXWvwjjSq2DTNW/OAFqj66y1L/PkwKkX1zSv+IqUX9OGtK/r48J9+750b+2CFFqOsDQv+Ib8jwLxM+/DqMabx9+zr8Gn/CM0GTNvzB9vLhclsm/d3GsAJjqyL+mrmWdqhS8v7cI068moLm/Ouf7j6fRbT9ZHv3P862kP//M7eIfxLc/BRcrFOhcvT/G4gCSCM2+Pzl7j6kFZ8E/Haa0dcbgxz9ngnKJLILNP7hfLnMpec8/xtQ1hweA0D9TyYTd8A/TP+pHXbhutNg/jxg2xkB82j824w+Z4yrbP7ZMqlJqX9s/FD+MDMd82z8TtGayeVzfP1L+NnRxJeA/56V+xxg04j8anH1HXZbiP6gAZPad3uI/a9zndsXz4z+FT9lUGPjkPzWgSz9U8OY/oBaorgbc6z/8T4LPskjsP7h9o2LzFO4/M5k7k7EN7z92mnSmxLHwP1s63SnhCvE/0whgTYEj8T/stv0nQ03xP/qlD43DZ/E/GKV5QEie8T8T5GeJbbTxP5tqBoWZAPI/eUfuumh48j9WFTlpeUjzP1vi47xiVfM/lHY1yBBe9D8ovVw5l4H0P9aj/T17rPQ/uiAS4i5t9T8yEew5m9/3PwHW972lS/w/mHtN0DgKAkA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;/Jp8r0w75z9K1Z/uj8bpPxRulo4sxO8/iZcW3Tbw8D+R9yV6x/PwP7aOwDCZJ/I/+HIleYJq8z/sxZVQ5JzzPzIESoCun/M/LcLXOEQb9D9wDprcPS30PxJKhfFYMfQ/FlxDO3Gi9T+iSYERitH1PwrdaiQaKvY/a+r82wBT9j/IOjhGFEv3P6YMYt/8UPc/m9V1McdU9z+WywBWxcr3P4bM2kI+zfc/7HCckirV9z/uXHmWDvr3PwfBdBiMBPg/ADoro/Xu+D87PRPzrkz5P4wrR5isZvk/aFp0/5/i+T8g9rWQvCz6P+AzlmGfOPo/jWt3qPG8+j8j7Mnwngj7P/iAUUgyOvs/XWqrTIVB+z9qEreqEaP7P3ElELapQfw/joKebRtJ/D8bfEdeM6b8P9WseMCW5fw/lwab62Dw/D9Km2Z0QDn9P5+jVopvVv0/2b8SLqpp/T+GrX8LdLT9P6TaFTC2vP0/Cs4eIcLA/T/p3rWy+Of9P0LeMEy/A/4/z1UOCR4Y/j8Q9jD3sin+Py04dDSaZv4/6Tj1f1Zx/j+L0hSrWh//P7pngcr+Mv8/ff/xNLoDAEA9+p/nWykAQDS3i38QXwBAXKxQoHN1AECLA0giNHsAQNp7TC04iwBAMaWtMwa/AEATlEtkEewAQP5ymUvJ+wBATF1zeAAIAUCVTNgN/zABQH/UhetGiwFAiWFjDMSnAUAz/pA5rrIBQMukKqX2tQFA8cPIcMy3AUBBayabx/UBQMrfhi6uBAJAvdTvGINGAkCDs++oy1ICQBWAzL7TWwJAjfvcrnh+AkDxKZsKA58CQAd06YcK3gJA1ALV1YB7A0AASvBZFokDQLdvVGyewgNAJnNnMrbhA0CeJp0pcSwEQJdOd0q4QgRANQJYU+BIBEC7bf/JUFMEQH7pQ+PwWQRARmkeEJJnBEAF+VliG20EQKeaQWEmgARA3pG7LhqeBEBWRU5aHtIEQJf4OK9Y1QRApV0NMoQXBUBKL1fOZSAFQPZof88eKwVALoiEuEtbBUBMBHvO5vcFQID1fW/pEgdAzL0maBwFCUA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66552&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66551&quot;}},&quot;id&quot;:&quot;66536&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66531&quot;}},&quot;id&quot;:&quot;66535&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66546&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66496&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66520&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;66519&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66512&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;3ompnaJJBMA7YRGT6zAEwPQP4X19/wPArb6waA/OA8BmbYBToZwDwCAcUD4zawPA2cofKcU5A8CSee8TVwgDwEsov/7o1gLABNeO6XqlAsC9hV7UDHQCwHY0Lr+eQgLAL+P9qTARAsDokc2Uwt8BwKJAnX9UrgHAW+9sauZ8AcAUnjxVeEsBwM1MDEAKGgHAhvvbKpzoAMA/qqsVLrcAwPhYewDAhQDAsgdL61FUAMBqthrW4yIAwEjK1IHr4v+/uid0Vw+A/78shRMtMx3/v57isgJXuv6/EEBS2HpX/r+CnfGtnvT9v/X6kIPCkf2/Z1gwWeYu/b/atc8uCsz8v0wTbwQuafy/vnAO2lEG/L8wzq2vdaP7v6IrTYWZQPu/FInsWr3d+r+G5osw4Xr6v/lDKwYFGPq/a6HK2yi1+b/e/mmxTFL5v1BcCYdw7/i/wrmoXJSM+L80F0gyuCn4v6Z05wfcxve/GdKG3f9j97+LLyazIwH3v/2MxYhHnva/b+pkXms79r/hRwQ0j9j1v1SlowmzdfW/xgJD39YS9b84YOK0+q/0v6q9gYoeTfS/HRshYELq87+PeMA1ZofzvwHWXwuKJPO/czP/4K3B8r/mkJ620V7yv1juPYz1+/G/ykvdYRmZ8b88qXw3PTbxv68GHA1h0/C/IWS74oRw8L+TwVq4qA3wvwo+9BuZVe+/7vgyx+CP7r/Us3FyKMrtv7husB1wBO2/nCnvyLc+7L+A5C10/3jrv2afbB9Hs+q/Slqryo7t6b8uFep11ifpvxLQKCEeYui/+IpnzGWc57/cRaZ3rdbmv8AA5SL1EOa/pLsjzjxL5b+KdmJ5hIXkv24xoSTMv+O/UuzfzxP64r82px57WzTivxxiXSajbuG/AB2c0eqo4L/Ir7X5ZMbfv5AlM1D0Ot6/WJuwpoOv3L8gES79EiTbv+iGq1OimNm/uPwoqjEN2L+AcqYAwYHWv0joI1dQ9tS/EF6hrd9q07/Y0x4Eb9/Rv6BJnFr+U9C/0H4zYhuRzb9gai4POnrKv/BVKbxYY8e/kEEkaXdMxL8gLR8WljXBv2AxNIZpPby/gAgq4KYPtr9Avz90yMOvv4BtKyhDaKO/AG9ccPcyjL8A2PS/HTuFP4CHEbxMqqE/QNklCNIFrj+AFR2qqzC1P2A+J1BuXrs/oLMYexjGwD8QyB3O+dzDP4DcIiHb88Y/8PAndLwKyj9gBS3HnSHNP+AMGY0/HNA/GJebNrCn0T9QIR7gIDPTP4iroImRvtQ/wDUjMwJK1j/4v6XcctXXPzBKKIbjYNk/aNSqL1Ts2j+YXi3ZxHfcP9Dor4I1A94/CHMyLKaO3z+gftpqC43gP7zDm7/DUuE/2AhdFHwY4j/0TR5pNN7iPxCT373so+M/LNigEqVp5D9EHWJnXS/lP2BiI7wV9eU/fKfkEM665j+Y7KVlhoDnP7QxZ7o+Rug/0HYoD/cL6T/su+ljr9HpPwgBq7hnl+o/IEZsDSBd6z88iy1i2CLsP1jQ7raQ6Ow/dBWwC0mu7T+QWnFgAXTuP6yfMrW5Oe8/yOTzCXL/7z/ylFovlWLwP4A3u1lxxfA/DNobhE0o8T+afHyuKYvxPygf3dgF7vE/tsE9A+JQ8j9EZJ4tvrPyP9IG/1eaFvM/YKlfgnZ58z/uS8CsUtzzP3ruINcuP/Q/CJGBAQui9D+WM+Ir5wT1PyTWQlbDZ/U/snijgJ/K9T9AGwSrey32P869ZNVXkPY/XGDF/zPz9j/oAiYqEFb3P3ilhlTsuPc/BEjnfsgb+D+U6keppH74PyCNqNOA4fg/rC8J/lxE+T880mkoOaf5P8h0ylIVCvo/WBcrffFs+j/kuYunzc/6P3Rc7NGpMvs/AP9M/IWV+z+Qoa0mYvj7PxxEDlE+W/w/qOZuexq+/D84ic+l9iD9P8QrMNDSg/0/VM6Q+q7m/T/gcPEki0n+P3ATUk9nrP4//LWyeUMP/z+MWBOkH3L/Pxj7c8771P8/0k5q/OsbAEAaoJoRWk0AQGDxyibIfgBAqEL7OzawAEDukytRpOEAQDblW2YSEwFAfDaMe4BEAUDEh7yQ7nUBQArZ7KVcpwFAUCodu8rYAUCYe03QOAoCQJh7TdA4CgJAUCodu8rYAUAK2eylXKcBQMSHvJDudQFAfDaMe4BEAUA25VtmEhMBQO6TK1Gk4QBAqEL7OzawAEBg8comyH4AQBqgmhFaTQBA0k5q/OsbAEAY+3PO+9T/P4xYE6Qfcv8//LWyeUMP/z9wE1JPZ6z+P+Bw8SSLSf4/VM6Q+q7m/T/EKzDQ0oP9PziJz6X2IP0/qOZuexq+/D8cRA5RPlv8P5ChrSZi+Ps/AP9M/IWV+z90XOzRqTL7P+S5i6fNz/o/WBcrffFs+j/IdMpSFQr6PzzSaSg5p/k/rC8J/lxE+T8gjajTgOH4P5TqR6mkfvg/BEjnfsgb+D94pYZU7Lj3P+gCJioQVvc/XGDF/zPz9j/OvWTVV5D2P0AbBKt7LfY/snijgJ/K9T8k1kJWw2f1P5Yz4ivnBPU/CJGBAQui9D967iDXLj/0P+5LwKxS3PM/YKlfgnZ58z/SBv9XmhbzP0Rkni2+s/I/tsE9A+JQ8j8oH93YBe7xP5p8fK4pi/E/DNobhE0o8T+AN7tZccXwP/KUWi+VYvA/yOTzCXL/7z+snzK1uTnvP5BacWABdO4/dBWwC0mu7T9Y0O62kOjsPzyLLWLYIuw/IEZsDSBd6z8IAau4Z5fqP+y76WOv0ek/0HYoD/cL6T+0MWe6PkboP5jspWWGgOc/fKfkEM665j9gYiO8FfXlP0QdYmddL+U/LNigEqVp5D8Qk9+97KPjP/RNHmk03uI/2AhdFHwY4j+8w5u/w1LhP6B+2moLjeA/CHMyLKaO3z/Q6K+CNQPeP5heLdnEd9w/aNSqL1Ts2j8wSiiG42DZP/i/pdxy1dc/wDUjMwJK1j+Iq6CJkb7UP1AhHuAgM9M/GJebNrCn0T/gDBmNPxzQP2AFLcedIc0/8PAndLwKyj+A3CIh2/PGPxDIHc753MM/oLMYexjGwD9gPidQbl67P4AVHaqrMLU/QNklCNIFrj+AhxG8TKqhPwDY9L8dO4U/AG9ccPcyjL+AbSsoQ2ijv0C/P3TIw6+/gAgq4KYPtr9gMTSGaT28vyAtHxaWNcG/kEEkaXdMxL/wVSm8WGPHv2BqLg86esq/0H4zYhuRzb+gSZxa/lPQv9jTHgRv39G/EF6hrd9q079I6CNXUPbUv4BypgDBgda/uPwoqjEN2L/ohqtTopjZvyARLv0SJNu/WJuwpoOv3L+QJTNQ9Drev8ivtflkxt+/AB2c0eqo4L8cYl0mo27hvzanHntbNOK/UuzfzxP64r9uMaEkzL/jv4p2YnmEheS/pLsjzjxL5b/AAOUi9RDmv9xFpnet1ua/+IpnzGWc578S0CghHmLovy4V6nXWJ+m/Slqryo7t6b9mn2wfR7Pqv4DkLXT/eOu/nCnvyLc+7L+4brAdcATtv9SzcXIoyu2/7vgyx+CP7r8KPvQbmVXvv5PBWrioDfC/IWS74oRw8L+vBhwNYdPwvzypfDc9NvG/ykvdYRmZ8b9Y7j2M9fvxv+aQnrbRXvK/czP/4K3B8r8B1l8LiiTzv494wDVmh/O/HRshYELq87+qvYGKHk30vzhg4rT6r/S/xgJD39YS9b9UpaMJs3X1v+FHBDSP2PW/b+pkXms79r/9jMWIR572v4svJrMjAfe/GdKG3f9j97+mdOcH3Mb3vzQXSDK4Kfi/wrmoXJSM+L9QXAmHcO/4v97+abFMUvm/a6HK2yi1+b/5QysGBRj6v4bmizDhevq/FInsWr3d+r+iK02FmUD7vzDOra91o/u/vnAO2lEG/L9ME28ELmn8v9q1zy4KzPy/Z1gwWeYu/b/1+pCDwpH9v4Kd8a2e9P2/EEBS2HpX/r+e4rICV7r+vyyFEy0zHf+/uid0Vw+A/79IytSB6+L/v2q2GtbjIgDAsgdL61FUAMD4WHsAwIUAwD+qqxUutwDAhvvbKpzoAMDNTAxAChoBwBSePFV4SwHAW+9sauZ8AcCiQJ1/VK4BwOiRzZTC3wHAL+P9qTARAsB2NC6/nkICwL2FXtQMdALABNeO6XqlAsBLKL/+6NYCwJJ57xNXCAPA2cofKcU5A8AgHFA+M2sDwGZtgFOhnAPArb6waA/OA8D0D+F9ff8DwDthEZPrMATA3ompnaJJBMA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;66550&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;66549&quot;}},&quot;id&quot;:&quot;66531&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66498&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66552&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66537&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66518&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;66520&quot;}},&quot;id&quot;:&quot;66514&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;66536&quot;}},&quot;id&quot;:&quot;66540&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66515&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;66538&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66513&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;66521&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;66541&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66549&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66550&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;66544&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;}],&quot;root_ids&quot;:[&quot;66495&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"09c04fc6-dfe9-4992-8a77-50bb59f5bc18","root_ids":["66495"],"roots":{"66495":"c081944d-e138-46c1-ae6f-0a8a998c55d3"}}];
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