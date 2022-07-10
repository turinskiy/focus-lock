import { useState } from 'react';
import FocusLock, {MoveFocusInside} from 'react-focus-lock';
import './JailFocus.css';

const menuL1 = ['About Us', 'Store', 'Agreement'];
const menuL2 = ['Who we are', 'What we do', 'Where we are'];
const menuL3 = ['We are the Company', 'We are the Team', 'We have Energy'];

const JailFocus = (props) => {
  const [isLevel2, setLevel2] = useState(false);
  const [isLevel3, setLevel3] = useState(false);

  const onLinkL1Click = (e) => {
    if(e.target.text === menuL1[0]) {
      setLevel2(true);
    } else {
      setLevel2(false);
    }
  }

  const onLinkL2Click = (e) => {
    if(e.target.text === menuL2[0]) {
      setLevel3(true);
    } else {
      setLevel3(false);
    }
  }

  return (
    <FocusLock autoFocus={true} group="group-1">
      <div className="container-1">
        {
          menuL1.map(item => (
            <div className="block" key={item}>
              <a href={`#${item}`} onClick={onLinkL1Click}>{item}</a>
            </div>
          ))
        }
      </div>
      {isLevel2 &&
        <FocusLock group="group-2" disabled={isLevel2}>
          <div className="container-2">
            <div className="container-2-1">
              {
                menuL2.map((item, index) => (
                  <div className="block" key={item}>
                    {index === 0 ?
                    <MoveFocusInside>
                      <a href={`#${item}`} onClick={onLinkL2Click}>{item}</a>
                    </MoveFocusInside> :
                    <a href={`#${item}`} onClick={onLinkL2Click}>{item}</a>}
                  </div>
                ))
              }
            </div>
            {isLevel3 && 
              <FocusLock group="group-3" disabled={isLevel3}>
                <div className="container-2-2">
                  {
                    menuL3.map((item, index) => (
                      <div className='blcok' key={item}>
                        {index === 0 ?
                          <MoveFocusInside>
                            <a href={`#${item}`}>{item}</a>
                          </MoveFocusInside> :
                          <a href={`#${item}`}>{item}</a>}
                      </div>
                    ))
                  }
                </div>
              </FocusLock>
            }
          </div>
        </FocusLock>
      }
    </FocusLock>
  );
}

export default JailFocus;