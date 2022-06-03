import type { NextPage } from 'next'
import Lista from '../ui/components/Lista/Lista';
import Titulo from '../ui/components/Titulo/Titulo';


const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
        titulo="" 
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente </strong> 
          </span>
        } />

        <Lista 
          pets={[
            {
              id: 1,
              nome: 'Kleber',
              historia: 'lorem aeuhaeuaheuae',
              foto: 'https://1.bp.blogspot.com/-SURP443Icuc/XYEWuD1SLzI/AAAAAAABOIQ/uuATPianOf8N5F_9NZYzY1lRECiM02ejQCLcBGAsYHQ/s1600/cats.jpg'
            },
            {
              id: 2,
              nome: 'Geraldo',
              historia: 'lorem aeuhaeuaheuaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              foto: 'https://1.bp.blogspot.com/-SURP443Icuc/XYEWuD1SLzI/AAAAAAABOIQ/uuATPianOf8N5F_9NZYzY1lRECiM02ejQCLcBGAsYHQ/s1600/cats.jpg'
            },

          ]}
        />
     </div>
  )
}

export default Home
