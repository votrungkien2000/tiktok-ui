import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/04c26c73206e8997c961c50194ee9ae5~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&nonce=286&refresh_token=304ce8f00b41e5ee675a2bf5fd53c346&x-expires=1739606400&x-signature=gnXD93LX1FuUSmAYqTh877Nhm0I%3D&idc=my&ps=13740610&shcp=c1333099&shp=a5d48078&t=4d5b0474"
        alt="Hoaa"
      ></img>
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Nguyen Van A</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}> nguyenvana</span>
      </div>
    </div>
  );
}

export default AccountItem;
