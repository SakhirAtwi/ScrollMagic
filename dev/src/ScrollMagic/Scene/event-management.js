/**
 * Scene start event.  
 * Fires whenever the scroll position its the starting point of the scene.  
 * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
 *
 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
 *
 * @event Scene.start
 *
 * @example
 * scene.on("start", function (event) {
 * 		alert("Hit start point of scene.");
 * });
 *
 * @property {object} event - The event Object passed to each callback
 * @property {string} event.type - The name of the event
 * @property {Scene} event.target - The Scene object that triggered this event
 * @property {number} event.progress - Reflects the current progress of the scene
 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
 */
/**
 * Scene end event.  
 * Fires whenever the scroll position its the ending point of the scene.  
 * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
 *
 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
 *
 * @event Scene.end
 *
 * @example
 * scene.on("end", function (event) {
 * 		alert("Hit end point of scene.");
 * });
 *
 * @property {object} event - The event Object passed to each callback
 * @property {string} event.type - The name of the event
 * @property {Scene} event.target - The Scene object that triggered this event
 * @property {number} event.progress - Reflects the current progress of the scene
 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
 */
/**
 * Scene enter event.  
 * Fires whenever the scene enters the "DURING" state.  
 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
 *
 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
 *
 * @event Scene.enter
 *
 * @example
 * scene.on("enter", function (event) {
 * 		alert("Entered a scene.");
 * });
 *
 * @property {object} event - The event Object passed to each callback
 * @property {string} event.type - The name of the event
 * @property {Scene} event.target - The Scene object that triggered this event
 * @property {number} event.progress - Reflects the current progress of the scene
 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
 */
/**
 * Scene leave event.  
 * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
 *
 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
 *
 * @event Scene.leave
 *
 * @example
 * scene.on("leave", function (event) {
 * 		alert("Left a scene.");
 * });
 *
 * @property {object} event - The event Object passed to each callback
 * @property {string} event.type - The name of the event
 * @property {Scene} event.target - The Scene object that triggered this event
 * @property {number} event.progress - Reflects the current progress of the scene
 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
 */
/**
 * Scene update event.  
 * Fires whenever the scene is updated (but not necessarily changes the progress).
 *
 * @event Scene.update
 *
 * @example
 * scene.on("update", function (event) {
 * 		console.log("Scene updated.");
 * });
 *
 * @property {object} event - The event Object passed to each callback
 * @property {string} event.type - The name of the event
 * @property {Scene} event.target - The Scene object that triggered this event
 * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
 * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
 * @property {number} event.scrollPos - The current scroll position of the container
 */
/**
 * Scene progress event.  
 * Fires whenever the progress of the scene changes.
 *
 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
 *
 * @event Scene.progress
 *
 * @example
 * scene.on("progress", function (event) {
 * 		console.log("Scene progress changed.");
 * });
 *
 * @property {object} event - The event Object passed to each callback
 * @property {string} event.type - The name of the event
 * @property {Scene} event.target - The Scene object that triggered this event
 * @property {number} event.progress - Reflects the current progress of the scene
 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
 */
/**
 * Scene change event.  
 * Fires whenvever a property of the scene is changed.
 *
 * @event Scene.change
 *
 * @example
 * scene.on("change", function (event) {
 * 		console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
 * });
 *
 * @property {object} event - The event Object passed to each callback
 * @property {string} event.type - The name of the event
 * @property {Scene} event.target - The Scene object that triggered this event
 * @property {string} event.what - Indicates what value has been changed
 * @property {mixed} event.newval - The new value of the changed property
 */
/**
 * Scene shift event.  
 * Fires whenvever the start or end **scroll offset** of the scene change.
 * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
 * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
 * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
 *
 * @event Scene.shift
 * @since 1.1.0
 *
 * @example
 * scene.on("shift", function (event) {
 * 		console.log("Scene moved, because the " + event.reason + " has changed.)");
 * });
 *
 * @property {object} event - The event Object passed to each callback
 * @property {string} event.type - The name of the event
 * @property {Scene} event.target - The Scene object that triggered this event
 * @property {string} event.reason - Indicates why the scene has shifted
 */

/**
 * Add one ore more event listener.  
 * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
 * @public
 *
 * @example
 * function callback (event) {
 * 		console.log("Event fired! (" + event.type + ")");
 * }
 * // add listeners
 * scene.on("change update progress start end enter leave", callback);
 *
 * @param {string} name - The name or names of the event the callback should be attached to.
 * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
 * @returns {Scene} Parent object for chaining.
*/
this.on = function (name, callback) {
	if (__isFunction(callback)) {
		var names = name.trim().split(' ');
		names.forEach(function (fullname, key) {
			var
				nameparts = fullname.split('.'),
				eventname = nameparts[0],
				listener = {
					namespace: nameparts[1] || '',
					callback: callback
				};
			if (!_listeners[eventname]) {
				_listeners[eventname] = [];
			}
			_listeners[eventname].push(listener);
		});
	} else {
		log(1, "ERROR calling method 'on()': Supplied callback is not a valid function!");
	}
	return Scene;
};

/**
 * Remove one or more event listener.
 * @public
 *
 * @example
 * function callback (event) {
 * 		console.log("Event fired! (" + event.type + ")");
 * }
 * // add listeners
 * scene.on("change update", callback);
 * // remove listeners
 * scene.off("change update", callback);
 *
 * @param {string} name - The name or names of the event that should be removed.
 * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
 * @returns {Scene} Parent object for chaining.
*/
this.off = function (name, callback) {
	var names = name.trim().split(' ');
	names.forEach(function (fullname, key) {
		var
			nameparts = fullname.split('.'),
			eventname = nameparts[0],
			namespace = nameparts[1] || '',
			listeners = _listeners[eventname] || [],
			i = listeners.length;
		while (i--) {
			var listener = listeners[i];
			if (listener && (namespace === listener.namespace) && (!callback || callback == listener.callback)) {
				listeners.splice(i, 1);
			}
		}
		if (!listeners.length) {
			delete _listeners[eventname];
		}
	});
	return Scene;
};

 /**
 * Trigger an event.
 * @public
 *
 * @example
 * this.trigger("change");
 *
 * @param {string} name - The name of the event that should be triggered.
 * @param {object} [vars] - An object containing info that should be passed to the callback.
 * @returns {Scene} Parent object for chaining.
*/
this.trigger = function (name, vars) {
	var
		event = new ScrollMagic.Event(name, vars),
		listeners = _listeners[event.type];
	log(3, 'event fired:', event.type, "->", vars);
	if (listeners) {
		event.target = event.currentTarget = Scene;
		listeners.forEach(function (listener, key) {
			if (!event.namespace || event.namespace === listener.namespace) {
				listener.callback.call(Scene, event);
			}
		});
	}
	return Scene;
};