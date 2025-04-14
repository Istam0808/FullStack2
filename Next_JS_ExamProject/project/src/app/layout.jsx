import "../assets/styles/initial.scss"
import Nav from "./components/Nav"
import LeftScreen from "./components/LeftScreen"
import "./layout_style.scss"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
          precedence="default"
        />
      </head>
      <body>
        <div className="layout-container">
          <LeftScreen />
          <div className="main-content">
            <Nav />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
