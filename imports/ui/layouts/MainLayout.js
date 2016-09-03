import React from 'react'

export default MainLayout = ({nav, content, footer}) =>(
   <div className="content">
      <main>
        {nav()}
        <div className="content-layout">
            {content()}
        </div>
      </main>
      <footer>
        {footer()}
      </footer>
    </div>
)
