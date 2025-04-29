import './global.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="My Portfolio" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="portfolio, web developer, projects" />
        <meta name="author" content="Asqara" />
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  )
}