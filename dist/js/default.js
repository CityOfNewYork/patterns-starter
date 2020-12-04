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

  class Default {
    constructor() {
      console.dir('@pttrn Development Mode'); // eslint-disable-line no-console

      return this;
    }

    accordion() {
      return new Accordion();
    }
  }

  return Default;

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5qcyIsIi4uLy4uL3NyYy9qcy9kZWZhdWx0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQWNjb3JkaW9uIHtcbiAgLyoqXG4gICAqIEBwYXJhbSAge29iamVjdH0gIHNldHRpbmdzICBUaGlzIGNvdWxkIGJlIHNvbWUgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBwYXR0ZXJuIG1vZHVsZS5cbiAgICogQHBhcmFtICB7b2JqZWN0fSAgZGF0YSAgICAgIFRoaXMgY291bGQgYmUgYSBzZXQgb2YgZGF0YSB0aGF0IGlzIG5lZWRlZFxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBwYXR0ZXJuIG1vZHVsZSB0byByZW5kZXIuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbiAgY29uc3RydWN0b3Ioc2V0dGluZ3MsIGRhdGEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuXG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbn1cblxuLyoqIEBwYXJhbSAge1N0cmluZ30gIHNlbGVjdG9yICBUaGUgbWFpbiBzZWxlY3RvciBmb3IgdGhlIHBhdHRlcm4gKi9cbkFjY29yZGlvbi5zZWxlY3RvciA9ICdbZGF0YS1qcyo9XCJhY2NvcmRpb25cIl0nO1xuXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247IiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJy4uL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbic7XG5cbmNsYXNzIERlZmF1bHQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT0gJ3Byb2R1Y3Rpb24nKVxuICAgICAgY29uc29sZS5kaXIoJ0BwdHRybiBEZXZlbG9wbWVudCBNb2RlJyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBhY2NvcmRpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBBY2NvcmRpb24oKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdDtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7RUFFQSxNQUFNLFNBQVMsQ0FBQztFQUNoQjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBLEVBQUUsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUU7RUFDOUIsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNyQjtFQUNBLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDN0I7RUFDQSxJQUFJLE9BQU8sSUFBSSxDQUFDO0VBQ2hCLEdBQUc7RUFDSCxDQUFDO0FBQ0Q7RUFDQTtFQUNBLFNBQVMsQ0FBQyxRQUFRLEdBQUcsd0JBQXdCOztFQ2hCN0MsTUFBTSxPQUFPLENBQUM7RUFDZCxFQUFFLFdBQVcsR0FBRztFQUNoQixJQUNNLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUM3QztFQUNBLElBQUksT0FBTyxJQUFJLENBQUM7RUFDaEIsR0FBRztBQUNIO0VBQ0EsRUFBRSxTQUFTLEdBQUc7RUFDZCxJQUFJLE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQztFQUMzQixHQUFHO0VBQ0g7Ozs7Ozs7OyJ9
