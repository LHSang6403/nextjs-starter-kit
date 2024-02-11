import Header from "@components/Layout/Header/Header";
import Footer from "@components/Layout/Footer/Footer";
import HomeSlider from "@components/Sliders/HomeSlider";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="animate-in w-screen min-h-screen px-3">
        Home, code & chill here.
        <div className="w-[80%] mx-auto">
          <HomeSlider />
        </div>
      </main>
      <Footer />
    </>
  );
}
