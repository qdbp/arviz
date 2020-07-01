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
    
      
      
    
      var element = document.getElementById("8a833272-7ce5-400e-8935-e5c5c1e51cfc");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '8a833272-7ce5-400e-8935-e5c5c1e51cfc' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;a5d0dac6-bd48-4b49-873c-a0311b863166&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;Fsu9WpTt5j9se/ZIywnnP8ErLzcCJuc/FtxnJTlC5z9sjKATcF7nP8E82QGneuc/Fu0R8N2W5z9snUreFLPnP8FNg8xLz+c/Fv67uoLr5z9srvSouQfoP8FeLZfwI+g/Fg9mhSdA6D9sv55zXlzoP8Fv12GVeOg/FiAQUMyU6D9s0Eg+A7HoP8GAgSw6zeg/FjG6GnHp6D9s4fIIqAXpP8GRK/feIek/FkJk5RU+6T9s8pzTTFrpP8Gi1cGDduk/FlMOsLqS6T9sA0ee8a7pP8Gzf4woy+k/FmS4el/n6T9sFPFolgPqP8HEKVfNH+o/FnViRQQ86j9sJZszO1jqP8HV0yFydOo/FoYMEKmQ6j9rNkX+36zqP8HmfewWyeo/Fpe22k3l6j9rR+/IhAHrP8H3J7e7Hes/FqhgpfI56z9rWJmTKVbrP8EI0oFgcus/FrkKcJeO6z9raUNezqrrP8EZfEwFx+s/Fsq0Ojzj6z9reu0oc//rP8EqJheqG+w/FtteBeE37D9ri5fzF1TsP8E70OFOcOw/FuwI0IWM7D9rnEG+vKjsP8FMeqzzxOw/Fv2ymirh7D9rreuIYf3sP8FdJHeYGe0/Fg5dZc817T9rvpVTBlLtP8FuzkE9bu0/Fh8HMHSK7T9rzz8eq6btP8B/eAziwu0/FjCx+hjf7T9r4OnoT/vtP8CQIteGF+4/wJAi14YX7j/AkCLXhhfuP2vg6ehP++0/FjCx+hjf7T/Af3gM4sLtP2vPPx6rpu0/Fh8HMHSK7T/Bbs5BPW7tP2u+lVMGUu0/Fg5dZc817T/BXSR3mBntP2ut64hh/ew/Fv2ymirh7D/BTHqs88TsP2ucQb68qOw/FuwI0IWM7D/BO9DhTnDsP2uLl/MXVOw/FtteBeE37D/BKiYXqhvsP2t67Shz/+s/Fsq0Ojzj6z/BGXxMBcfrP2tpQ17Oqus/FrkKcJeO6z/BCNKBYHLrP2tYmZMpVus/FqhgpfI56z/B9ye3ux3rP2tH78iEAes/Fpe22k3l6j/B5n3sFsnqP2s2Rf7frOo/FoYMEKmQ6j/B1dMhcnTqP2wlmzM7WOo/FnViRQQ86j/BxClXzR/qP2wU8WiWA+o/FmS4el/n6T/Bs3+MKMvpP2wDR57xruk/FlMOsLqS6T/BotXBg3bpP2zynNNMWuk/FkJk5RU+6T/BkSv33iHpP2zh8gioBek/FjG6GnHp6D/BgIEsOs3oP2zQSD4Dseg/FiAQUMyU6D/Bb9dhlXjoP2y/nnNeXOg/Fg9mhSdA6D/BXi2X8CPoP2yu9Ki5B+g/Fv67uoLr5z/BTYPMS8/nP2ydSt4Us+c/Fu0R8N2W5z/BPNkBp3rnP2yMoBNwXuc/FtxnJTlC5z/BKy83AibnP2x79kjLCec/Fsu9WpTt5j8Wy71alO3mPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[134]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjnJZO80Tvz+Oclk7zRO/P3qm5V50Yb8/OSIjifHSvz93oXeevDjAP1yIOoz8ncA/GX1mvhgowT8luzjNM+zBPxvdWPCr58I/kqAH8+kZxD8B1YybXIfFP5GToGr6OMc/75xNmTMryT/s+gaUHmjLP1VF+rPY+c0/azxE+VF00D+KQJChHhDSP2i6QrZS09M/ED2acBy41T9Hl3mU5cTXP5DZPWnG8tk/HKqrntJE3D9EpKcsc7jeP7QWPTYRneA/GoQI467q4T+Z8bkn5TjjP+jN/+v9jeQ/feFyF8Xl5T/zgDqBPzznP3mpJncnkug/O9uFWsLm6T8ZoQwc8jjrP4L1V+mNjuw/ATtXxo7n7T9+TowcqULvP2f0IuOcUvA/m4l94DUH8T+Yb+Dmw8PxP0Vh4+ejhvI/KP0+yRlP8z9RC/oyNx70P41Q+wJB8/Q/2GEMJSnP9T+tTDGIgqv2P0403/d/jPc/49gw3xFv+D/HOnzH5lD5P4bDLdSpNPo/yuIXQQsY+z+WmJD8M/37P/r4K6Mg4Pw/Im2NgmfJ/T9Wu2Wb/7D+P+YeGiAGm/8/u9jFqBVEAEDJRoQJQrwAQEHuVGNgNAFA2DM0M0+tAUCQCF97cSQCQPjAgbHpmgJAt3WbhrINA0DcPrtwAHsDQFol3o2a4QNARcEolmU+BEDR7YUhEpAEQJoqXkML2ARAAs9dhZoTBUAAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[134]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67471&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67470&quot;}},&quot;id&quot;:&quot;67451&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67447&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67426&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67405&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67451&quot;}},&quot;id&quot;:&quot;67455&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67425&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67459&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67414&quot;}},&quot;id&quot;:&quot;67413&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67451&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67452&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67453&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67455&quot;}},&quot;id&quot;:&quot;67454&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67417&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67446&quot;}},&quot;id&quot;:&quot;67450&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67453&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67461&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;67409&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;67412&quot;},{&quot;id&quot;:&quot;67416&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;67413&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;67439&quot;},{&quot;id&quot;:&quot;67444&quot;},{&quot;id&quot;:&quot;67449&quot;},{&quot;id&quot;:&quot;67454&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;67456&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;67427&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;67401&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;67405&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;67403&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;67407&quot;}},&quot;id&quot;:&quot;67400&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67426&quot;}},&quot;id&quot;:&quot;67421&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67413&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;67416&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67470&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67448&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67466&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67452&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67403&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67407&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67467&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;67427&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;67417&quot;},{&quot;id&quot;:&quot;67418&quot;},{&quot;id&quot;:&quot;67419&quot;},{&quot;id&quot;:&quot;67420&quot;},{&quot;id&quot;:&quot;67421&quot;},{&quot;id&quot;:&quot;67422&quot;},{&quot;id&quot;:&quot;67423&quot;},{&quot;id&quot;:&quot;67424&quot;}]},&quot;id&quot;:&quot;67474&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67401&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;67417&quot;},{&quot;id&quot;:&quot;67418&quot;},{&quot;id&quot;:&quot;67419&quot;},{&quot;id&quot;:&quot;67420&quot;},{&quot;id&quot;:&quot;67421&quot;},{&quot;id&quot;:&quot;67422&quot;},{&quot;id&quot;:&quot;67423&quot;},{&quot;id&quot;:&quot;67424&quot;}]},&quot;id&quot;:&quot;67427&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;67400&quot;},0,0]]},&quot;id&quot;:&quot;67473&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67437&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;67474&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;67475&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67468&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;hl2ULhWK0D8xvgULg8LQP9sed+fw+tA/hn/ow14z0T8x4FmgzGvRP9tAy3w6pNE/hqE8Wajc0T8wAq41FhXSP9tiHxKETdI/hsOQ7vGF0j8wJALLX77SP9uEc6fN9tI/huXkgzsv0z8wRlZgqWfTP9umxzwXoNM/hgc5GYXY0z8waKr18hDUP9vIG9JgSdQ/himNrs6B1D8wiv6KPLrUP9vqb2eq8tQ/hkvhQxgr1T8wrFIghmPVP9sMxPzzm9U/hm012WHU1T8wzqa1zwzWP9suGJI9RdY/hY+Jbqt91j8w8PpKGbbWP9pQbCeH7tY/hbHdA/Um1z8wEk/gYl/XP9pywLzQl9c/hdMxmT7Q1z8wNKN1rAjYP9qUFFIaQdg/hfWFLoh52D8wVvcK9rHYP9q2aOdj6tg/hRfaw9Ei2T8weEugP1vZP9rYvHytk9k/hTkuWRvM2T8wmp81iQTaP9r6EBL3PNo/hVuC7mR12j8wvPPK0q3aP9ocZadA5to/hX3Wg64e2z8w3kdgHFfbP9o+uTyKj9s/hJ8qGfjH2z8wAJz1ZQDcP9pgDdLTONw/hMF+rkFx3D8vIvCKr6ncP9qCYWcd4tw/hOPSQ4sa3T8vREQg+VLdP9qktfxmi90/hAUn2dTD3T8vZpi1QvzdP9rGCZKwNN4/hCd7bh5t3j8viOxKjKXeP9roXSf63d4/hEnPA2gW3z8vqkDg1U7fP9oKsrxDh98/hGsjmbG/3z8vzJR1H/jfP20WA6lGGOA/wsY7l3004D8Yd3SFtFDgP2wnrXPrbOA/wtflYSKJ4D8YiB5QWaXgP2w4Vz6QweA/bDhXPpDB4D9sOFc+kMHgPxiIHlBZpeA/wtflYSKJ4D9sJ61z62zgPxh3dIW0UOA/wsY7l3004D9tFgOpRhjgPy/MlHUf+N8/hGsjmbG/3z/aCrK8Q4ffPy+qQODVTt8/hEnPA2gW3z/a6F0n+t3ePy+I7EqMpd4/hCd7bh5t3j/axgmSsDTePy9mmLVC/N0/hAUn2dTD3T/apLX8ZovdPy9ERCD5Ut0/hOPSQ4sa3T/agmFnHeLcPy8i8Iqvqdw/hMF+rkFx3D/aYA3S0zjcPzAAnPVlANw/hJ8qGfjH2z/aPrk8io/bPzDeR2AcV9s/hX3Wg64e2z/aHGWnQObaPzC888rSrdo/hVuC7mR12j/a+hAS9zzaPzCanzWJBNo/hTkuWRvM2T/a2Lx8rZPZPzB4S6A/W9k/hRfaw9Ei2T/atmjnY+rYPzBW9wr2sdg/hfWFLoh52D/alBRSGkHYPzA0o3WsCNg/hdMxmT7Q1z/acsC80JfXPzAST+BiX9c/hbHdA/Um1z/aUGwnh+7WPzDw+koZttY/hY+Jbqt91j/bLhiSPUXWPzDOprXPDNY/hm012WHU1T/bDMT885vVPzCsUiCGY9U/hkvhQxgr1T/b6m9nqvLUPzCK/oo8utQ/himNrs6B1D/byBvSYEnUPzBoqvXyENQ/hgc5GYXY0z/bpsc8F6DTPzBGVmCpZ9M/huXkgzsv0z/bhHOnzfbSPzAkAstfvtI/hsOQ7vGF0j/bYh8ShE3SPzACrjUWFdI/hqE8Wajc0T/bQMt8OqTRPzHgWaDMa9E/hn/ow14z0T/bHnfn8PrQPzG+BQuDwtA/hl2ULhWK0D+GXZQuFYrQPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[158]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDJQcwttAUAIMlBzC20BQNluinjlSQFAo35TJrAhAUBKayb0c/QAQBQlT/PQwgBAHF0ixUSKAEC6tk0dLkoAQJH6aFr7//8/Vuv2Ztpd/z8JxC4mp6b+P8oWUXj94v0/SPwjQmIN/T/LWKP/Nyv8P5yq6Xf2QPs/3Gn+9HhO+j+Mk2Oj01r5PxFmwhQyZvg/DRi7QQZ49z9+hk9A7Y32P6H4mnaxrPU/sCZTPiXT9D8dbfl6Ngf0P90AjwfYSvM/CwOUYSSb8j8cIRVjNvfxPwII3hv0XfE/6aybUL/U8D/JXmUCtFbwP28sZdWFwO8/Xg9LxaTt7j9mputOwSDuP0dP6/ErZO0/mtfkZdO07D9wfTkxIAnsP8P0CDQUZus/Fkj2etS+6j8uFe11ox3qP3sRYwl4duk/Q1b0ncvM6D9K7a5DshnoP5+1PYJYZ+c/diOBvbyp5j837pckF+XlP9w5ja1LHeU/S0mn6ctQ5D/q9n/sPYPjP1Vl/jtlsuI/ScsZTcbm4T8g5De3MBfhP8H0fOr9T+A/kNsV4aoZ3z8C97vpc6rdPy4qe62jQtw/W3TJRVfr2j/iKu2FHqLZP9XMC0/2adg/iAkZFlBH1z8rogDhBTXWP/bg/aSGNdU//JXHQhNQ1D+yv/pA03vTP86/zFexvNI/fksiBHYX0j/zwOOS9IPRP1LStwRZAtE/vCTrtV6b0D+b7QimJj/QP3I51rcX9s8/izCW0GKBzz9J/DXDiyLPP4xBDjqJyc4/IluqTn+Dzj8kTjY8VlDOP+8XDNpXKs4/a7cD/zQOzj8CUeihSfPNP2gjc3xs4c0/y0dIGprgzT8AAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[158]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67465&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67464&quot;}},&quot;id&quot;:&quot;67436&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67438&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67414&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67461&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67410&quot;}},&quot;id&quot;:&quot;67409&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67469&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67459&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67423&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.75,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67442&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;67475&quot;},{&quot;id&quot;:&quot;67473&quot;}]},&quot;id&quot;:&quot;67476&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67410&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67436&quot;}},&quot;id&quot;:&quot;67440&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67409&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;67412&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67436&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67437&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67438&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67440&quot;}},&quot;id&quot;:&quot;67439&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67464&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;wuiPLMfd4D8Ymcga/vngP2xJAQk1FuE/wvk592sy4T8YqnLlok7hP2xaq9PZauE/wgrkwRCH4T8XuxywR6PhP2xrVZ5+v+E/whuOjLXb4T8XzMZ67PfhP2x8/2gjFOI/wiw4V1ow4j8X3XBFkUziP2yNqTPIaOI/wj3iIf+E4j8X7hoQNqHiP2yeU/5sveI/wk6M7KPZ4j8X/8Ta2vXiP2yv/cgREuM/wl82t0gu4z8XEG+lf0rjP2zAp5O2ZuM/wnDgge2C4z8XIRlwJJ/jP2zRUV5bu+M/woGKTJLX4z/CgYpMktfjP8KBikyS1+M/bNFRXlu74z8XIRlwJJ/jP8Jw4IHtguM/bMCnk7Zm4z8XEG+lf0rjP8JfNrdILuM/bK/9yBES4z8X/8Ta2vXiP8JOjOyj2eI/bJ5T/my94j8X7hoQNqHiP8I94iH/hOI/bI2pM8ho4j8X3XBFkUziP8IsOFdaMOI/bHz/aCMU4j8XzMZ67PfhP8Ibjoy12+E/bGtVnn6/4T8XuxywR6PhP8IK5MEQh+E/bFqr09lq4T8YqnLlok7hP8L5OfdrMuE/bEkBCTUW4T8Ymcga/vngP8LojyzH3eA/wuiPLMfd4D8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[58]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACftKJEZPwHQJ+0okRk/AdAqMz55DUdCED2MjTk+ywIQHywKqP8LAhA+5NaxC8dCEBoxDPm6PwHQKfg8I4fywdAQ0c2RhOOB0D4YRP62EEHQHsAowLN7AZAPTZGVuqNBkB1cnqt9ygGQBVvneGqwAVAzCKH8fxWBUA1x0RTTu4EQEttqR7shgRAXkEO6QMlBEA8Mk8PkMcDQImFm/3scgNALVaA4ZEjA0CMiFd0v9sCQPt0jzQCnAJAbcnrrkxjAkBf/huaPzACQBcbzr3+AgJArBFwB1DaAUCrp9O6RrQBQAI/SDpNkQFAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[58]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67467&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67466&quot;}},&quot;id&quot;:&quot;67441&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;67456&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;FzLDOsnz4z9s4vsoABDkP8KSNBc3LOQ/F0NtBW5I5D9s86XzpGTkP8Kj3uHbgOQ/F1QX0BKd5D9sBFC+SbnkP8K0iKyA1eQ/F2XBmrfx5D9sFfqI7g3lP8LFMnclKuU/F3ZrZVxG5T9sJqRTk2LlP8LW3EHKfuU/F4cVMAGb5T9sN04eOLflP8Lnhgxv0+U/Fpi/+qXv5T9sSPjo3AvmP8L4MNcTKOY/FqlpxUpE5j9sWaKzgWDmP8IJ26G4fOY/FroTkO+Y5j9sakx+JrXmP8IahWxd0eY/whqFbF3R5j/CGoVsXdHmP2xqTH4mteY/FroTkO+Y5j/CCduhuHzmP2xZorOBYOY/FqlpxUpE5j/C+DDXEyjmP2xI+OjcC+Y/Fpi/+qXv5T/C54YMb9PlP2w3Th44t+U/F4cVMAGb5T/C1txByn7lP2wmpFOTYuU/F3ZrZVxG5T/CxTJ3JSrlP2wV+ojuDeU/F2XBmrfx5D/CtIisgNXkP2wEUL5JueQ/F1QX0BKd5D/Co97h24DkP2zzpfOkZOQ/F0NtBW5I5D/CkjQXNyzkP2zi+ygAEOQ/FzLDOsnz4z8XMsM6yfPjPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[56]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAo+9fDsVBBUCj718OxUEFQAgUSE4vYwVAFbRc6BR3BUBqX7z67X4FQNje9lLmewVAn0zUZepwBUDxOz5f0V4FQEfzXAipRwVAskx958ctBUCk5oh3OBUFQH4IoGWo/gRAVIHI3iftBEDBMqaBDeMEQLBIHJPy4wRAd0q+bfjsBEDePv58igMFQA1LK7yBJAVAJDdAhYxSBUAjfMnPOIwFQGX3iO3+zAVAmOmbazEWBkAZzmjVtWQGQMND5X8EtQZAdctbsJ8DB0BK6+U0rU0HQHGwm5/akQdAE/xYvcLMB0AAAAAAAAAAAA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[56]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67469&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67468&quot;}},&quot;id&quot;:&quot;67446&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;67424&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67441&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67442&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67443&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67445&quot;}},&quot;id&quot;:&quot;67444&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67422&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#2a2eec&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:null,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67443&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67446&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67447&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67448&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67450&quot;}},&quot;id&quot;:&quot;67449&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67465&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67418&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67420&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67425&quot;}},&quot;id&quot;:&quot;67419&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67441&quot;}},&quot;id&quot;:&quot;67445&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67471&quot;,&quot;type&quot;:&quot;Selection&quot;}],&quot;root_ids&quot;:[&quot;67476&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"a5d0dac6-bd48-4b49-873c-a0311b863166","root_ids":["67476"],"roots":{"67476":"8a833272-7ce5-400e-8935-e5c5c1e51cfc"}}];
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