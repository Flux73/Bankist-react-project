import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

const ProviderIntl = props => {
  const data = useSelector(state => state);
  const activeUserLocale = data?.activeUser?.locale || 'en-US';

  return (
    <IntlProvider locale={activeUserLocale}>{props.children}</IntlProvider>
  );
};

export default ProviderIntl;
