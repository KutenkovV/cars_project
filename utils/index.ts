import { CarCardProps, filterProps } from "@/types";
import router from "next/router";

export async function fetchCars(filter: filterProps) {
    const { manufacturer, year, model, limit, fuel } = filter;

    const headers = {
        'X-RapidAPI-Key': 'e9dc1a3e00msh39fa396ce4d7eeap1baf67jsn803fdb9bf8e5',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${ manufacturer }&year=${ year }&model=${ model }&limit=${ limit }&fuel_type=${ fuel }`, {
        headers: headers,
    });

    const result = await response.json();

    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;

    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}

export const generatedCarImageUrl = (car: CarCardProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/get-image");

    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make);
    url.searchParams.append('modelFamily', model.split(' ')[0]);
    url.searchParams.append('zoomType', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    url.searchParams.append('angle', `${angle}`);

    return `${ url }`
}