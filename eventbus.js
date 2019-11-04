(function(window) {
  let eventBus = {}
  let callbackObj = {}
 // let callBacks = []

  eventBus.on = function(eventName,callback) {
    const callBacks = callbackObj[eventName]
    if (callBacks) {
      callBacks.push(callback)
    }else{
      callbackObj[eventName] = [callback]
    }
  }
  eventBus.emit = function (eventName,data) {
    const callBacks = callbackObj[eventName]
    callBacks.map((callback,index)=>{    
      callback(data)
    })
    
  }
  eventBus.off = function (eventName) {
    if (eventName) {
     delete callbackObj[eventName]  
    }else{
      eventBus = {}
    }
    
  }

  window.eventBus = eventBus
})(window)