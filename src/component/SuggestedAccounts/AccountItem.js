import PropTypes from 'prop-types';
import styles from './SuggestedAccounts.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ label }) {
  return (
    <div className={cx('account-item')}>
      <img src="https://avatars.githubusercontent.com/u/18712667?v=4" className={cx('avatar')}></img>
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
          <strong>QuocNguyenPhu</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </p>
        <p className={cx('name')}>Quốc Nguyễn Phú</p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default AccountItem;
