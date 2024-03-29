import cabeleireira from '../../assets/logo-cabeleireira.png'
import disney from '../../assets/logo-disney.png'
import google from '../../assets/logo-google.png'
import ifood from '../../assets/logo-ifood.png'
import steven from '../../assets/logo-sj.png'
import netflix from '../../assets/logo-netflix.png'

export function Companies() {
  return (
    <section className="flex ">
      <div className="w-full max-w-[1300px] mx-auto">
        <h2 className="font-sans font-semibold text-center mt-32  max-w-7xl mx-auto text-2xl">
          +20 empresas parceiras sempre com novos benefícios pra você
        </h2>

        <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 items-center mt-16 place-items-center place-content-center">
          <div className="w-40 ">
            <img
              src={cabeleireira}
              alt=""
              className="object-contain grayscale opacity-75 w-full"
            />
          </div>
          <div className="w-28 hidden lg:flex">
            <img
              src={disney}
              alt=""
              className="object-contain grayscale opacity-40 w-full "
            />
          </div>
          <div className="w-40 ">
            <img
              src={google}
              alt=""
              className="object-contain grayscale opacity-75 w-full"
            />
          </div>
          <div className="w-20 hidden xl:flex">
            <img
              src={ifood}
              alt=""
              className="object-contain grayscale opacity-75 w-full "
            />
          </div>
          <div className="w-28">
            <img
              src={steven}
              alt=""
              className="object-contain grayscale opacity-60 w-full"
            />
          </div>
          <div className="w-32 hidden xl:flex">
            <img
              src={netflix}
              alt=""
              className="object-contain grayscale opacity-75 w-full "
            />
          </div>
        </div>
      </div>
    </section>
  )
}
