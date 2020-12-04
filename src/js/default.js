'use strict';

import Accordion from '../components/accordion/accordion';

class Default {
  constructor() {
    if (process.env.NODE_ENV != 'production')
      console.dir('@pttrn Development Mode'); // eslint-disable-line no-console

    return this;
  }

  accordion() {
    return new Accordion();
  }
};

export default Default;
