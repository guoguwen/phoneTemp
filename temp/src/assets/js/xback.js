/**
 * 使用 HTML5 的 History 新 API pushState 来曲线监听 Android 设备的返回按钮
 * XBack.listen(function(){
    alert('oh! you press the back button');
  });
 */
;!function(pkg, undefined){
    var STATE = 'x-back';
    var element;
    var onPopState = function(event){
      event.state === STATE && fire();
    }
    var record = function(state){
      history.pushState(state, null, location.href);
    }
    var fire = function(){
      var event = document.createEvent('Events');
      event.initEvent(STATE, false, false);
      element.dispatchEvent(event);
    }
    var listen = function(listener){
      element.addEventListener(STATE, listener, false);
    }
    ;!function(){
      element = document.createElement('span');
      window.addEventListener('popstate', onPopState);
      this.listen = listen;
      record(STATE);
    }.call(window[pkg] = window[pkg] || {});
  }('XBack');

/**
 *  检查页面是否处于锁屏状态 
 * 
 */  
var hiddenProperty = 'hidden' in document ? 'hidden' : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null;
    
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
    
var onVisibilityChange = function(){
    if(document[hiddenProperty]) {    
        console.log('页面非激活');
        alert('返回');
    }else{
        console.log('页面激活')
        alert('激活');
    }
}
//document.addEventListener(visibilityChangeEvent, onVisibilityChange);
        
   