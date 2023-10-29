'use client'
import { useState } from 'react';
import SearchIco from '../../public/img_svg/busqueda'

const words = [
    "Camiseta",
    "Pantalones",
    "Vestido",
    "Zapatos",
    "Bufanda",
    "Abrigo",
    "Sombrero",
    "Calcetines",
    "Gorra",
    "Chaqueta",
    "Blusa",
    "Falda",
    "Traje",
    "Ropa interior",
    "Bolsa",
    "Accesorios",
    "Chaquetón",
    "Sudadera",
    "Jeans",
    "Chaleco",
    "Pijama",
    "Botas",
    "Gafas de sol",
    "Bañador",
    "Cinturón",
    "Jersey",
    "Mochila",
    "Cazadora",
    "Sandalia",
    "Traje de baño",
    "Chándal",
    "Bolso",
    "Bufanda",
    "Pañuelo",
    "Turbante",
    "Ranita",
    "Blusón",
    "Bikini",
    "Gabardina",
    "Cartera",
    "Cuello alto",
    "Kimono",
    "Mono",
    "Botines",
    "Tacones",
    "Sneakers",
    "Gorro de lana",
    "Gafas de lectura",
    "Zapatillas",
    "Jersey de cuello redondo",
    "Chaqueta de cuero",
    "Falda larga",
    "Corbata",
    "Foulard",
    "Leggings",
    "Chaleco de lana",
    "Sujetador",
    "Calzoncillos",
    "Vestido de noche",
    "Pantalones cortos",
    "Camisa",
    "Zapatillas deportivas",
    "Chubasquero",
    "Anorak",
    "Birkenstock",
    "Sneakers",
    "Pañuelo de seda",
    "Traje formal",
    "Máscara facial",
    "Pajarita",
    "Ropa de fiesta",
    "Kimono de seda",
    "Bolso de mano",
    "Bata de baño",
    "Botas de agua",
    "Jersey de lana",
    "Bufanda de cachemira",
    "Zapatos de tacón",
    "Sudadera con capucha",
    "Sudadera de algodón",
    "Vestido de verano",
    "Ropa deportiva",
    "Chándal para correr",
    "Abrigo de invierno",
    "Vaqueros desgarrados",
    "Gorras de béisbol",
    "Camisetas de tirantes",
    "Calcetines de lana",
    "Mallas deportivas",
    "Traje de baño de una pieza",
    "Camiseta de tirantes",
    "Zapatillas de lona",
    "Pantalones de yoga",
    "Bañador de mujer",
    "Sudadera oversize",
    "Camisetas estampadas",
    "Vestido de encaje",
    "Calcetines de compresión",
    "Bikini de talle alto",
    "Leggings deportivos",
    "Blusa de seda",
    "Shorts vaqueros",
    "Pantalones de vestir"
  ];
  
export default function SearchBar () {

    const [activeSearch, setActiveSearch] = useState([]);
 
    const handleSearch = (e) => {
        if(e.target.value == ''){
            setActiveSearch([])
            return false
        }
        setActiveSearch(words.filter(word => word.includes(e.target.value)).slice(0,8))
    }

    return  <form className='hidden lg:flex items-center px-3'>
                <div className="w-60 relative">
                    <input type="search" name="busqueda" id="searching" placeholder="Buscar" className="w-full p-2 pl-8 rounded-full bg-slate-100 hover:bg-black/10 text-black text-xs border border-stone-400 focus:border-transparent" onChange={(e) => handleSearch(e)}/>
                    <button className='absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-transparent hover:bg-black/10 text-black rounded-full' type='button'>
                        <SearchIco className="w-3 h-3"/> 
                    </button>
                </div>
                {
                    activeSearch.length > 0 && (
                        <div className='absolute top-16 right-[4.5rem] md:top-20  bg-black/20 text-black w-44 rounded-b-lg  -translate-x-1/2 flex flex-col gap-2'>
                            {
                                activeSearch.map((search, i) => (
                                    <span key={`${i}--${search}`} className='hover:bg-white w-full p-4 cursor-pointer'>{search}</span>
                                ))
                            }
                        </div>
                    )
                }
            </form>
};