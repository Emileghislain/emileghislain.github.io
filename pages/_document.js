import { Html, Head, Main, NextScript } from 'next/document'

// Applies the stored theme before first paint so there is no flash of the
// wrong palette. Kept in sync with STORAGE_KEY in context/theme.js.
const themeScript = `
(function () {
  try {
    // Dark is the designed default; only an explicit choice overrides it.
    var stored = window.localStorage.getItem('eg-theme');
    document.documentElement.dataset.theme = stored === 'light' ? 'light' : 'dark';
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`

export default function Document(props) {
  // En export statique il n'y a plus de locale de routeur : chaque langue a sa
  // page, donc `lang` se déduit du nom de la page rendue.
  const locale = props?.__NEXT_DATA__?.page === '/en' ? 'en' : 'fr'

  return (
    <Html lang={locale} data-theme="dark">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
