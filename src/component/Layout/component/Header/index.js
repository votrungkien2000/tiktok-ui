import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '@/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faSignIn,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import { Wrapper as PopperWrapper } from '@/component/Pooper';
import AccountItem from '@/component/AccountItem';
import Button from '@/component/Button';
import Menu from '@/component/Pooper/Menu';

function Header() {
  const cx = classNames.bind(styles);
  const [searchResult, setSearchResult] = useState([]);
  const currentUser = true;

  const MENU_ITEMS = [
    {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
        title: 'language',
        data: [
          {
            type: 'language',
            code: 'en',
            title: 'English',
          },
          {
            type: 'language',
            code: 'vi',
            title: 'Tiếng Việt',
          },
        ],
      },
    },
    {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and help',
      to: 'http://localhost:3000/feedback',
    },
    {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'keyboard shortcuts',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);

  //handle Logic
  const handleMenuChange = (nemuItem) => {
    console.log(nemuItem);

    switch (nemuItem.type) {
      case 'language':
        break;
      default:
    }
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/*logo*/}
        <div className={cx('logo')}>
          <img src={images.logo} alt="TikTok logo" />
        </div>
        {/*search*/}
        <HeadlessTippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input type="text" placeholder="Search accounts and videos" spellCheck="false" />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('sreach-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx('action')}>
          {currentUser ? (
            <>
              <Tippy content="Upload Video" placement="bottom">
                <button className={cx('action-btn')}>
                  <FontAwesomeIcon icon={faCloudUpload}></FontAwesomeIcon>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <>
                <img
                  src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/04c26c73206e8997c961c50194ee9ae5~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&nonce=286&refresh_token=304ce8f00b41e5ee675a2bf5fd53c346&x-expires=1739606400&x-signature=gnXD93LX1FuUSmAYqTh877Nhm0I%3D&idc=my&ps=13740610&shcp=c1333099&shp=a5d48078&t=4d5b0474"
                  alt="Nguyen Van A"
                  className={cx('user-avatar')}
                ></img>
              </>
            ) : (
              <>
                <button className={cx('more-btn')}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
