import React, { useContext } from 'react';
import classNames from 'classnames';
import useDebounceLoading from '../../utils/hooks/debounceLoading';
import { ConfigContext } from '../config-provider';
import { LoadingProps } from './interface';

const Loading: React.FC<LoadingProps> = (props: LoadingProps) => {
  const { prefixCls: customizePrefixCls, loading = true, delay = 0 } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('loading', customizePrefixCls);
  const shouldLoading = useDebounceLoading(loading, delay);

  const renderLoadingElement = () => {
    const { indicator, rotate = true } = props;
    if (indicator) {
      return (
        <span
          className={classNames(`${prefixCls}-indicator`, {
            [`${prefixCls}-indicator-rotate`]: rotate,
          })}
        >
          {indicator}
        </span>
      );
    }
    return (
      <span className={`${prefixCls}-strip`}>
        <span className={`${prefixCls}-strip-item`} />
        <span className={`${prefixCls}-strip-item`} />
        <span className={`${prefixCls}-strip-item`} />
        <span className={`${prefixCls}-strip-item`} />
      </span>
    );
  };

  const renderLoadingElementByPosition = () => {
    const { titlePosition = 'bottom', title = '加载中...', size = 'large', className, style } = props;
    return shouldLoading ? (
      <div className={classNames(`${prefixCls}`, `${prefixCls}-${size}`, className)} style={style}>
        {renderLoadingElement()}
        {title && (
          <span className={classNames(`${prefixCls}-title`, `${prefixCls}-title-${titlePosition}`)}>{title}</span>
        )}
      </div>
    ) : null;
  };

  const renderLoadingContainer = () => {
    const { children } = props;
    if (children) {
      return (
        <div className={`${prefixCls}-wrapper-loading`}>
          {renderLoadingElementByPosition()}
          <div
            className={classNames(`${prefixCls}-container`, {
              [`${prefixCls}-container-loading`]: shouldLoading,
            })}
          >
            {children}
          </div>
        </div>
      );
    }
    return renderLoadingElementByPosition();
  };

  return renderLoadingContainer();
};

export default Loading;
