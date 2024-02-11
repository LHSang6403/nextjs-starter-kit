import Header from "@components/Layout/Header/Header";
import Footer from "@components/Layout/Footer/Footer";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="animate-in w-full min-h-screen px-3 bg-blue-100">
        Home, code & chill here.
      </main>
      <Footer />
    </>
  );
}
