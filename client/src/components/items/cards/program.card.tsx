
import React, { Component } from 'react';

import '../../../App.css';

class ProgramCard extends Component<any, any> {

    name= 'Test';

  render() {
    return (
        <div className="grid grid-cols-6 gap-x-4 gap-y-1 max-w-2xl">
    <div className="col-span-2">
    <a href="">
      <img src="https://picsum.photos/seed/1/2000/1000" className="rounded-xl brightness-75" />
    </a>
    <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3"> { this.name } </p>
  </div>
  </div>
    );
  }
}

export default ProgramCard