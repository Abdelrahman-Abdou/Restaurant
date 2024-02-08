import "./globals.css";
import PageHeader from "@/components/page-header";
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageHeader />
        {children}
      </body>
    </html>
  );
}
