import { useState } from "react";
import { Pet } from '../../@types/Pet';


export function useIndex(){
    const [listaPets, setListaPets] = useState(
        [
            {
              id: 1,
              nome: 'Kleber',
              historia: 'lorem aeuhaeuzzzzzzzzzzzzzzzzzzzzzzzzaheuae',
              foto: 'https://1.bp.blogspot.com/-SURP443Icuc/XYEWuD1SLzI/AAAAAAABOIQ/uuATPianOf8N5F_9NZYzY1lRECiM02ejQCLcBGAsYHQ/s1600/cats.jpg'
            },
            {
              id: 2,
              nome: 'Geraldo',
              historia: 'lorem aeuhaeuaheuaeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              foto: 'https://1.bp.blogspot.com/-SURP443Icuc/XYEWuD1SLzI/AAAAAAABOIQ/uuATPianOf8N5F_9NZYzY1lRECiM02ejQCLcBGAsYHQ/s1600/cats.jpg'
            },

          ]
    ),
          [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
          [email, setEmail] = useState(''),
          [valor, setValor] = useState(''),
          [mensagem, setMensagem] = useState('');

    function adotar(){

    }

    return{
        listaPets,
        petSelecionado, 
        setPetSelecionado,
        email,
        setEmail,
        valor,
        setValor,
        mensagem,
        setMensagem,
        adotar
    };
}