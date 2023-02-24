import styles from './PoupView.module.scss'
import {X} from 'phosphor-react'


import classNames from 'classnames/bind'
import Popup from "../Popup";

const cx = classNames.bind(styles)

function PopupView(props) {
    return props.trigger ? (
      <Popup>
        <div className={cx("wrapper")}>
          <div className={cx("header")}>
            <X
              className={cx("close")}
              size={18}
              onClick={() => {
                props.setTrigger(false);
              }}
            />
          </div>
          <div  className={cx("content")}>
            <p>
              Chào mừng bạn đến với TIKTOK SHOP  ! 😘 😘 😘
            </p>
          </div>
        </div>
      </Popup>
    ) : (
      ""
    );
}

export default PopupView;