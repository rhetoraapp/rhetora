import React from 'react'

import Ellipse420 from '../../components/ourstory/Ellipse420';
import Ellipse419 from '../../components/ourstory/Ellipse419';
import BackGroundEllipse1 from '../../components/ourstory/BackgroundEllipse419';
import BackGroundEllipse2 from '../../components/ourstory/BackgroundEllipse420';
import BackgroundCircle from '../../components/ourstory/BackgroundCirleRight';

function Form() {
  return (
    <form id="rect60">
          <Ellipse419  className="absolute top-0 left-20" />
          <Ellipse420 id="ellipse420" className="absolute" />
          <BackGroundEllipse1 className="absolute top-52" />
          <BackGroundEllipse2 className="absolute top-52 right-0" />
          <BackgroundCircle className="absolute top-0 right-0" />
          <label id="label">Get in Touch With Us</label>
          <input id="input1" type="text" name="name" value="name" />
          <input id="input2" type="email" name="email" value="test@test.com" />
          <div>
            <textarea />
          </div>
          <button type="">Submit</button>
        </form>
  )
}

export default Form