import Head from "next/head";
import Link from "next/link";
import Celular from "../assets/celular.png"
import Image from 'next/image'
const Step1 = () => {
  return (<div className="container bg-white min-w-[320px] max-w-3xl rounded-3xl px-4 py-20 flex flex-col gap-4 shadow-2xl">
    <h1 className="text-xl font-bold text-center text-blue-800">¡Estás a punto de rentabilizar tu cochera con Quadra!</h1>
    <div className="border-t border-blue-500"></div>
    <div className="flex flex-col gap-3 mb-8">
      <div className="grid grid-cols-3 text-center">
        <div className="flex justify-center">
          <div className="bg-blue-800 rounded-full h-8 w-8 flex justify-center items-center text-white">1</div>
        </div>
        <div className="flex justify-center">
          <div className="bg-blue-800 rounded-full h-8 w-8 flex justify-center items-center text-white">2</div>
        </div>
        <div className="flex justify-center">
          <div className="bg-blue-800 rounded-full h-8 w-8 flex justify-center items-center text-white">3</div>
        </div>
      </div>
      <div className="grid grid-cols-3 text-center">
        <div className="text-blue-800 font-bold">Registrate con nosotros</div>
        <div className="text-blue-800 font-bold" >Registra tu cochera</div>
        <div className="text-blue-800 font-bold" >Ofrece tu oferta</div>

      </div>
      <div className="grid grid-cols-3 text-center text-sm sm:text-lg">
        <div>¡Bienvenido a Quadra!</div>
        <div>Cuentanos todo sobre tu cochera ¡No olvides las fotos!</div>
        <div>Termina tu registro con nuestro bot de WhatsApp y crea tu oferta</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="text-center flex justify-center">
          <div className="h-32 w-32 bg-red-300">
            Image 1
          </div>
        </div>
        <div className="text-center flex justify-center">
          <div className="h-32 w-32 bg-red-300">
            Image 2
          </div>
        </div>
        <div className="text-center flex justify-center">
          <div className="h-32 w-32 bg-red-300">
            Image 3
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Iniciar proceso</button>
    </div>
  </div>)
}

const Step2 = () => {
  return (<div className="container bg-white min-w-[320px] max-w-3xl rounded-3xl px-4 py-20 flex flex-col gap-4 shadow-2xl">
    <h1 className="text-xl font-bold text-center text-blue-800">Paso 1: Crea tu cuenta</h1>
    <form>
      <div className="relative z-0 w-full mb-6 group">
        <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombres</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellidos</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Celular</label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
      </div>
      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5">
        <option selected>DNI</option>
        <option value="DNI">DNI</option>
        <option value="C.E.">Canada</option>
      </select>
      <div className="relative z-0 w-full mb-6 group">
        <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">N° Documento</label>
      </div>
      <div className="relative max-w-sm">
        <div className="mb-2">Fecha de nacimiento</div>
        <input
          type="date"
          className="bg-blue-50 border border-blue-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Select date" />
      </div>
      <div className="flex items-start mb-6">
        <div className="flex flex-row mt-4">


    <div className="flex items-center h-5">
      <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required/>
    </div>
    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 ">Acepto los<a href="#" className="text-blue-600 hover:underline "> terminos y condiciones</a> de Quadra</label>
  </div>
  </div>
    </form>
    <div className="flex items-center justify-center">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Siguiente</button>
    </div>
  </div>)
}

const Step3 = () => {
  return <div className="container bg-white min-w-[320px] max-w-3xl rounded-3xl px-4 py-20 flex flex-col gap-4 shadow-2xl">
    <h1 className="text-xl font-bold text-center text-blue-800">Paso 2: Registra tu cochera</h1>
    <div></div>
    <div className="flex flex-col sm:grid sm:grid-cols-3">
      <div>
        <p className="text-center">¿Cuantos autos entran en tu cochera?</p>
        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5">
          <option selected>Seleccionar</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5+">5+</option>
        </select>
      </div>
      <div>
        <p className="text-center">¿Cuántos autos entran en tu cochera?</p>
        <div className="flex justify-center">
          <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
            <li className="w-full border-b border-gray-200 rounded-t-lg ">
              <div className="flex items-center pl-3">
                <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 h" />
                <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">Pick Up</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg ">
              <div className="flex items-center pl-3">
                <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 h" />
                <label htmlFor="react-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">SUV</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg ">
              <div className="flex items-center pl-3">
                <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 h" />
                <label htmlFor="angular-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">Sedan</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-center">Caracteristicas de la cochera</p>
        <div className="flex justify-center">
          <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
            <li className="w-full border-b border-gray-200 rounded-t-lg ">
              <div className="flex items-center pl-3">
                <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 h" />
                <label htmlFor="vue-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">Techado</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg ">
              <div className="flex items-center pl-3">
                <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 h" />
                <label htmlFor="react-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">Vigilancia</label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg ">
              <div className="flex items-center pl-3">
                <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 h" />
                <label htmlFor="angular-checkbox" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 ">Camara</label>
              </div>
            </li>
          </ul>
        </div>
      </div>


      <label className="block mb-2 text-sm font-medium text-gray-900 ">Cargar fotos de la cochera</label>
      <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none " id="file_input" type="file" />
    </div>
    <div className="flex items-center justify-center">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Iniciar proceso</button>
    </div>
  </div>
}

const Step4 = () => {
  return <div className="container bg-white min-w-[320px] max-w-3xl rounded-3xl px-24 py-20 flex flex-col gap-4 shadow-2xl">
    <h1 className="text-xl font-bold text-center text-blue-800">Paso 3: Ofrece tu cochera</h1>
    <h3 className="text-center">¡Casi listo! 🤖✅ Escribe "Terminar Registro" en nuestro bot de WhatsApp
      para enviar los detalles finales. QuadBot te guiará para completar el proceso
      y empezar a disfrutar de las ventajas de ser parte de Quadra. ¡Bienvenido a la comunidad! 🌟</h3>
    <div className="flex justify-center">
      <Image src={Celular} alt={""} width={400}/>
    </div>
    <h3 className="text-center">Escribe "Terminar Registro" en nuestro bot de WhatsApp y te ayudará a crear tu oferta</h3>
    <div className="flex items-center justify-center">
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">¡Chatea con QuadBot!</button>
    </div>
  </div>
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col px-10 py-3 items-center justify-center">
        <Step4 />
      </main>
    </>
  );
}
