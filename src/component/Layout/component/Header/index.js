import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

function Header() {

    const cx = classNames.bind(styles);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/*logo*/}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="TikTok logo" />
                </div>
                {/*search*/}
                <div className={cx('search')}>
                    <input type="text" placeholder="Search accounts and videos" spellCheck='false' />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button >
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('sreach-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cx('action')}>
                    action
                </div>
            </div>
        </header>
    );
}

export default Header;