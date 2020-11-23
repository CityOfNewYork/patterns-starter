var Default = (function () {
  'use strict';

  class Accordion {
    /**
     * @param  {object}  settings  This could be some configuration options.
     *                             for the pattern module.
     * @param  {object}  data      This could be a set of data that is needed
     *                             for the pattern module to render.
     * @constructor
     */
    constructor(settings, data) {
      this.data = data;
      this.settings = settings;
      return this;
    }

  }
  /** @param  {String}  selector  The main selector for the pattern */


  Accordion.selector = '[data-js*="accordion"]';

  var _default = {
    accordion() {
      return new Accordion();
    }

  };

  return _default;

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIi4uLy4uL3NyYy9qcy9kZWZhdWx0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQWNjb3JkaW9uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSAge29iamVjdH0gIHNldHRpbmdzICBUaGlzIGNvdWxkIGJlIHNvbWUgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBwYXR0ZXJuIG1vZHVsZS5cbiAgICogQHBhcmFtICB7b2JqZWN0fSAgZGF0YSAgICAgIFRoaXMgY291bGQgYmUgYSBzZXQgb2YgZGF0YSB0aGF0IGlzIG5lZWRlZFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBwYXR0ZXJuIG1vZHVsZSB0byByZW5kZXIuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuLyoqIEBwYXJhbSAge1N0cmluZ30gIHNlbGVjdG9yICBUaGUgbWFpbiBzZWxlY3RvciBmb3IgdGhlIHBhdHRlcm4gKi9cbkFjY29yZGlvbi5zZWxlY3RvciA9ICdbZGF0YS1qcyo9XCJhY2NvcmRpb25cIl0nO1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247IiwiaW1wb3J0IEFjY29yZGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGFjY29yZGlvbigpIHtcbiAgICByZXR1cm4gbmV3IEFjY29yZGlvbigpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQWNjb3JkaW9uIiwiY29uc3RydWN0b3IiLCJzZXR0aW5ncyIsImRhdGEiLCJzZWxlY3RvciIsImFjY29yZGlvbiJdLCJtYXBwaW5ncyI6Ijs7O0VBRUEsTUFBTUEsU0FBTixDQUFnQjtFQUNkOzs7Ozs7O0VBT0FDLEVBQUFBLFdBQVcsQ0FBQ0MsUUFBRCxFQUFXQyxJQUFYLEVBQWlCO0VBQzFCLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtFQUVBLFNBQUtELFFBQUwsR0FBZ0JBLFFBQWhCO0VBRUEsV0FBTyxJQUFQO0VBQ0Q7O0VBZGE7RUFpQmhCOzs7RUFDQUYsU0FBUyxDQUFDSSxRQUFWLEdBQXFCLHdCQUFyQjs7QUNsQkEsaUJBQWU7RUFDYkMsRUFBQUEsU0FBUyxHQUFHO0VBQ1YsV0FBTyxJQUFJTCxTQUFKLEVBQVA7RUFDRDs7RUFIWSxDQUFmOzs7Ozs7OzsifQ==
