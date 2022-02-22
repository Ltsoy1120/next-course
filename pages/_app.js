/* 
    стандартный файл для подключения глобальных стилей,
    название файла зарезервированное _app.js
*/

import "../styles/global.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
