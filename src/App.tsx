/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Work from "./components/Work";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-lammy-bg text-white selection:bg-lammy-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Pricing />
        <Work />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
