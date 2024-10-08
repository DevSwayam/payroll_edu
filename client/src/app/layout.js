import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ShadcnThemeProvider from "@/theme/themeProvider";
import LogginChecker from "@/components/login/login-checker";
import PrivyWrapper from "@/privy/privyProvider";
import { Toaster } from "@/components/ui/toaster";
import { TmaSDKProvider } from "@/components/tma";
import Footer from "@/components/footer";
import ReduxProvider from "@/redux/reduxProvider";
import { Pointer } from "@/components/ui/cursor";

const inter = Poppins({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Payroll Protocol",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <TmaSDKProvider> */}
        <ShadcnThemeProvider>
          <PrivyWrapper>
            <ReduxProvider>
              <main>
                <div />
                {/* <Pointer
                  className={
                    "relative flex h-full w-full items-end justify-center"
                  }
                > */}
                {/* <div className="h-full w-full grid md:max-w-6xl px-6 md:px-12"> */}
                {children}
                {/* </div> */}
                {/* </Pointer> */}
              </main>
              <Footer />
              <Toaster />
            </ReduxProvider>
          </PrivyWrapper>
        </ShadcnThemeProvider>
        {/* </TmaSDKProvider> */}
      </body>
    </html>
  );
}
