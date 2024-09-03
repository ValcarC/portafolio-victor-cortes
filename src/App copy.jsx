import './App.css'
import Photo from './assets/Victor-Cortes.png'

function App() {

  return (
    <>
      <div className='bg-blue-100 text-orange-500 flex h-screen items-center justify-center p-5'>
        <div className='rounded-lg bg-white p-4 shadow-xl sm:flex sm:gap-16 sm:p-0'>
          <div className='flex items-center gap-2'>
            <img className='w-8 h-8 rounded-full object-cover sm:h-full sm:w-36 sm:rounded-none' src={Photo} alt="" />
            <span>Victor Cortés</span>
          </div>
          <div className='mt-2'>
            <p className='italic font-normal text-neutral-950'>Soy un especialista en desarrollo web con un sólido dominio de JavaScript. Me enfoco en diseñar sitios y aplicaciones ágiles y funcionales que se alineen con las necesidades específicas de cada cliente, aplicando principios de UX/UI para garantizar una experiencia de usuario excepcional. Cuento con una amplia experiencia en la realización de pruebas y en la gestión de proyectos</p>
            <span className='text-gray-500 text-sm'>Diseñador Gráfico | Full-Stack Developer | Producción UX/UI</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
