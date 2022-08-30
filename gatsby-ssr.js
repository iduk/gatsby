/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="darkmode"
      dangerouslySetInnerHTML={{
        __html: `(function() {  
            function setTheme(theme) {
              window.__theme = theme;
              document.body.setAttribute('data-theme', theme);

              if (theme === 'dark') {
                document.body.setAttribute('data-theme', 'dark')
              } else {
                document.body.setAttribute('data-theme', 'light')
              }
            };
            window.__setPreferredTheme = function(theme) {
              setTheme(theme);
              try {
                localStorage.setItem('color-theme', theme);
              } catch (e) {}
            };
            let preferredTheme;
            try {
              preferredTheme = localStorage.getItem('color-theme');
            } catch (e) {}
            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
          })();`,
      }}
    />,
  ])
}
