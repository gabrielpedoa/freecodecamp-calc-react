import React from "react";
import '../stylesheets/BotaoClear.css';

const BotaoClear = (props) => (
	<div className='botao-clear' onClick={props.manejarClear}>
		{props.children}
	</div>
);	

export default BotaoClear;