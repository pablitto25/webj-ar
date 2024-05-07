import React, { useState } from 'react';
import { CiCalculator1 } from "react-icons/ci";
import { PiClockClockwiseFill } from "react-icons/pi";
import './calculator.css'

//240w * 0.8 / watts input

const Calculator = ({ watts, wattsLimit }) => {
  const [vataje, setVataje] = useState('');
  const [tiempoDeFuncionamiento, setTiempoDeFuncionamiento] = useState(null);

  const calcularTiempoDeFuncionamiento = () => {
    const vatajeNumerico = parseFloat(vataje);

    if (isNaN(vatajeNumerico) || vatajeNumerico <= 0 || vatajeNumerico > wattsLimit) {
      alert(`Ingresa un valor válido para el vataje (mayor que 0 y no superior a ${wattsLimit}).`);
      return;
    }

    const resultado = (watts * 0.8 / vatajeNumerico).toFixed(1);

    setTiempoDeFuncionamiento(resultado);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    calcularTiempoDeFuncionamiento();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}> {/* Agregar onSubmit al formulario */}
        <div className='calculatorContainer'>
          <CiCalculator1 className='calculatorItem' onClick={calcularTiempoDeFuncionamiento}></CiCalculator1>

          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={vataje}
            onChange={(e) => setVataje(e.target.value)}
            className='calculatorInput'
          />
          <span className='calculatorUnit'>W</span>
        </div>
        <button type="submit" style={{ display: 'none' }}></button> {/* Botón oculto para permitir enviar el formulario con Enter */}
      </form>
      <div>
        <PiClockClockwiseFill className='calculatorItem' />
        {tiempoDeFuncionamiento !== null && (
          <p>El tiempo de funcionamiento estimado es de {tiempoDeFuncionamiento} horas.</p>
        )}
      </div>
    </div>
  );
};

export default Calculator;

