import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

function Button({
  to,
  href,
  className,
  rounded = false,
  disabled = false,
  text = false,
  primary = false,
  small = false,
  large = false,
  ouline = false,
  children,
  onClick,
  leftIcon,
  rightIcon,
  ...passProps
}) {
  const cx = classNames.bind(styles);
  let Component = 'button';

  const props = {
    onClick,
    ...passProps,
  };
  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  //removeEventListener when disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] == 'function') {
        delete props[key];
      }
    });
  }
  const classes = cx('wrapper', {
    [className]: className,
    text,
    primary,
    ouline,
    small,
    large,
    disabled,
    rounded,
  });
  return (
    <Component className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Component>
  );
}
export default Button;
