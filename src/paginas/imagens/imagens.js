import logo from '../../assents/netflix.png'
import netflix1 from '../../assents/netflix1.png'
import netflix2 from '../../assents/netflix2.png'
import './imagens.css'
function Imagens() {
  return (
    <div className='imagens'>
      <h1>Galeria de fotos</h1>
      <ul>
      <li><img src={logo} alt="Logo" /></li>
      <li><img src={netflix1} alt="Logo" /></li>
      <li><img src={netflix2} alt="Logo" /></li>
      </ul>
      <ul>
      <li><img src={logo} alt="Logo" /></li>
      <li><img src={netflix1} alt="Logo" /></li>
      <li><img src={netflix2} alt="Logo" /></li>
      </ul>
      <ul>
      <li><img src={logo} alt="Logo" /></li>
      <li><img src={netflix1} alt="Logo" /></li>
      <li><img src={netflix2} alt="Logo" /></li>
      </ul>
      <ul>
      <li><img src={logo} alt="Logo" /></li>
      <li><img src={netflix1} alt="Logo" /></li>
      <li><img src={netflix2} alt="Logo" /></li>
      </ul>
      <ul>
      <li><img src={logo} alt="Logo" /></li>
      <li><img src={netflix1} alt="Logo" /></li>
      <li><img src={netflix2} alt="Logo" /></li>
      </ul>
    </div>
  );
}

export default Imagens;