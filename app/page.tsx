import Image from 'next/image';

import { CustomFilter, Hero, SearchBar, CarCard, ShowMore } from '@/components';
import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';

// todo - на пропс searchParams у нас выбивает ошибку, поэтому так оставил
//@ts-ignore
export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || '',
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Каталог машин</h1>
          <p>Выберите машину которая Вам больше нравится</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (
                // Сделал из ключа такой вагон, потому что всё равно выбивало одинаковые ключи
                <CarCard car={car} key={`${car.model+car.year+car.city_mpg}`} />
              ))}
            </div>

            <ShowMore 
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl fond-bold'>Упс, мы ничего не нашли :C</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  )
}
