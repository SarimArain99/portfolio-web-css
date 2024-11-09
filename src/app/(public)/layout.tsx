import Footer from "./components/footer/Footer";
import Navigation from "./components/header/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
