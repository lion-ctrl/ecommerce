import {
  Header,
  Footer,
  FiltersSidebar,
  ProductCard,
  Pagination,
} from './components/index';

function App() {
  return (
    <>
      <Header />
      <main className='mx-12 my-8'>
        <h2 className='hidden lg:block text-xl font-bold my-2'>
          Browse products
        </h2>
        <div className='flex gap-6'>
          <div className='hidden lg:block'>
            <FiltersSidebar />
          </div>
          <div className='flex flex-col gap-8'>
            <h3 className='text-lg font-bold'>All Products</h3>
            <div className='flex flex-wrap gap-2'>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
                <ProductCard key={i} />
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
