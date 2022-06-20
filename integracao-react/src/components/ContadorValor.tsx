import React from "react";

interface IContadorValorProps {
contador: number;
}

function ContadorValor(props: IContadorValorProps) {
return <p>{props.contador}</p>;
}

export default ContadorValor;
