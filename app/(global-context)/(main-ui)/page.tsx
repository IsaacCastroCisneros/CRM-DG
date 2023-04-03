/* export default function Home() {
  return (
    <section className="bg-bg-login bg-cover bg-center h-full">
        <div className="container mx-auto flex items-center align-center w-screen h-screen">
          <div className="w-11/12 mx-auto drop-shadow-2x lg:w-1/4 xl:w-1/4 md:w-1/2 ">
            <div className=" bg-blue-700 mx-auto p-5">
              <img src="https://nuevapagina.s3.amazonaws.com/DG-Logotipo_Blanco.png" alt="" className="w-52 mx-auto" />
            </div>
            <div className="py-10 px-5 bg-white">
              <h2 className="text-center font-medium text-xl text-gray-700">Sign In</h2>
              <p className="text-center text-gray-500 w-full mx-auto mt-4">Ingrese su dirección de correo electrónico y contraseña para acceder al panel de administración.</p>
              <form action="" className="mt-5">
                <label className="block">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Email
                  </span>
                  <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </label>
                <label className="block mt-4">
                  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                    Password
                  </span>
                  <input type="password" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="*************" />
                </label>
                <button className="bg-blue-600 p-3 text-white font-bold mx-auto rounded-xl mt-5 w-full">Login In</button>
                <div className="w-full flex items-center justify-center mt-4">
                  <a className="font-light text-blue-600">¿Olvidate tu contraseña?</a>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
  )
} */

import Image from 'next/image';


export default function PageDashboard() {
  return (
    <>

      <div className="container mx-auto">
        <div className="w-full px-10">
          <h3 className="font-medium text-gray-500 w-full">Dashboard</h3>
          <div className="flex py-5 w-full flex-wrap">
            <div className="w-full lg:w-1/2 xl:w-1/2 flex gap-2 flex-wrap">
              <div className="bg-white shadow-lg w-full lg:w-[48%] p-5 rounded-lg">
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-400 font-normal">Estudiantes</h2>
                  <div className="w-5 h-5 flex items-center justify-center bg-fontIcon p-5 rounded-sm">
                    <i className="fa-solid fa-users text-colorIconDas"></i>
                  </div>
                </div>
                <h3 className="text-dark font-medium text-2xl">
                  36,254
                </h3>
                <div className="flex mt-4 items-center gap-3">
                  <i className="fa-solid fa-circle-arrow-up text-green-500"></i>
                  <p className="text-green-500">5.27%</p>
                  <p className="text-gray-500">Since last month</p>
                </div>
              </div>
              <div className="bg-white shadow-lg w-full lg:w-[48%] p-5 rounded-lg">
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-400 font-normal">Ingresos</h2>
                  <div className="w-5 h-5 flex items-center justify-center bg-fontIcon p-5 rounded-sm">
                    <i className="fa-solid fa-money-bill-wave text-colorIconDas"></i>
                  </div>
                </div>
                <h3 className="text-dark font-medium text-2xl">
                  36,254
                </h3>
                <div className="flex mt-4 items-center gap-3">
                  <i className="fa-solid fa-circle-arrow-up text-green-500"></i>
                  <p className="text-green-500">5.27%</p>
                  <p className="text-gray-500">Since last month</p>
                </div>
              </div>
              <div className="bg-white shadow-lg w-full lg:w-[48%] p-5 rounded-lg">
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-400 font-normal">Prospectos</h2>
                  <div className="w-5 h-5 flex items-center justify-center bg-fontIcon p-5 rounded-sm">
                    <i className="fa-solid fa-book text-colorIconDas"></i>
                  </div>
                </div>
                <h3 className="text-dark font-medium text-2xl">
                  36,254
                </h3>
                <div className="flex mt-4 items-center gap-3">
                  <i className="fa-solid fa-circle-arrow-up text-green-500"></i>
                  <p className="text-green-500">5.27%</p>
                  <p className="text-gray-500">Since last month</p>
                </div>
              </div>
              <div className="bg-white shadow-lg w-full lg:w-[48%] p-5 rounded-lg">
                <div className="flex items-center justify-between">
                  <h2 className="text-gray-400 font-normal">Prospectos</h2>
                  <div className="w-5 h-5 flex items-center justify-center bg-fontIcon p-5 rounded-sm">
                    <i className="fa-solid fa-book text-colorIconDas"></i>
                  </div>
                </div>
                <h3 className="text-dark font-medium text-2xl">
                  36,254
                </h3>
                <div className="flex mt-4 items-center gap-3">
                  <i className="fa-solid fa-circle-arrow-up text-green-500"></i>
                  <p className="text-green-500">5.27%</p>
                  <p className="text-gray-500">Since last month</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-1/2 bg-white shadow-lg p-5 mt-3 xl:mt-0 lg:mt-0 rounded-lg">
              <h2 className="text-gray-400 font-medium text-lg">Estudiantes Mensuales</h2>
              <img src="https://images.nagwa.com/figures/306129401750/1.svg" alt="" className="mx-auto mt-2" />
            </div>
          </div>
          <div className="flex mt-2 gap-4 flex-wrap">
            <div className="bg-white w-full shadow-lg p-5 rounded-lg lg:w-[40%] xk:w-[40%]">
              <h2 className="text-gray-400 font-medium text-lg">CAMPAÑAS</h2>
              <Image src='/img/grafica3.jpg' alt='Logo' width={600} height={800} className="mt-4" />
            </div>
            <div className="bg-white w-full shadow-lg p-5 rounded-lg lg:w-[58%] xk:w-[58%">
              <h2 className="text-gray-400 font-medium text-lg">REVENUE</h2>
              <div className="bg-gray-100 flex justify-evenly gap-3 px-5 py-5 mt-5">
                <div>
                  <p className="text-gray-400">Current Month</p>
                  <p className="text-3xl">$42,025</p>
                </div>
                <div>
                  <p className="text-gray-400">Previous Month</p>
                  <p className="text-3xl">$74,651</p>
                </div>
              </div>
              <div className="w-full mt-8">
                <Image src='/img/grafica2.jpg' alt='Logo' width={700} height={800} />
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-5 flex-wrap xl:flex-nowrap lg:flex-nowrap">
            <div className="bg-white p-5 rounded-lg shadow-xl w-full xl:w-[50%] lg:w-[50%]">
              <h2 className="text-gray-400 font-medium text-lg">TOP ALUMNOS</h2>
              <Image src='/img/grafica4.jpg' alt='Logo' width={400} height={400} className="mx-auto mt-5" />
            </div>
            <div className="bg-white p-5 rounded-lg w-full shadow-xl xl:w-[50%] lg:w-[50%]">
              <h2 className="text-gray-400 font-medium text-lg">EQUIPO DE TRABAJO</h2>
              <Image src='/img/grafica5.jpg' alt='Logo' width={400} height={400} className="mx-auto mt-5" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

