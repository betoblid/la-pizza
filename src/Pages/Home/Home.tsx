import BgAbout from "../../assets/bg-abount.png"
import { ListProducts } from '../../Components/ListProducts/ListProducts';
import { Header } from '../../Components/Header/Header';
import { Footer } from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <ListProducts />
        <section>
          <div className='flex items-center justify-center gap-10 my-10 lg:flex-row flex-col'>
            <figure className='md:w-full lg:w-auto'>
              <img src={BgAbout} alt="ilustration banner about" className='w-full md:h-[500px] lg:h-auto' />
            </figure>

            <div className='lg:w-[595px] px-2 lg:px-0'>
              <h2 className='font-semibold text-4xl font-inter'>
                Sobre a La P
                <span className='text-orange-500'>i</span>
                <span className='text-red-600'>z</span>
                <span className='text-green-600'>z</span>
                a
              </h2>
              <p className='font-medium text-lg font-inter my-7'>
                Bem-vindo ao "La Pizza", o seu refúgio acolhedor para uma experiência de pizzaria autêntica. Em nosso pequeno oásis italiano, cada pedaço de pizza é uma obra-prima artesanal. Sinta-se em casa enquanto o aroma sedutor de massa fresca assa no forno, criando as pizzas mais deliciosas da cidade.
              </p>

            <button className='bg-btn-orange px-10 uppercase font-inter text-sm font-semibold py-3 rounded-2xl'>
              Ler mais sobre
              </button>
            </div>
          </div>
        </section>
      </main>
    <Footer />
    </>
  );
}
export default Home;
