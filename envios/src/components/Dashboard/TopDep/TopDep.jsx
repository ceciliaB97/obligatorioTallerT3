import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TopDep = ({ departamentos, envios, ciudades }) => {
  //   console.log("ciudad", ciudades[0]);
  //   console.log("envio", envios[0]);
  //   console.log("dep", departamentos[0]);

  //   departamentos.map((departamento) => ({
  //     id: departamento.id,
  //     nombre: departamento.nombre,
  //     totalEnvios: 0,
  //   }));

  //aqui se guarda la información final de departamento: id, nombre, totalEnvios

  try {
    let topDepartamentos = [];

    departamentos.forEach((departamento) => {
      //initial values
      topDepartamentos.push({
        id: departamento.id,
        nombre: departamento.nombre,
        totalEnvios: 0,
      });

      //filtrar ciudades que corresponden con departamento
      const ciudadesPorDep = ciudades.filter(
        (ciudad) => ciudad.id_departamento === departamento.id
      );

      ciudadesPorDep.forEach((ciudad) => {
        //filtrar envios que corresponden a esa ciudad
        const enviosCiudad = envios.filter(
          (envio) => ciudad.id === envio.ciudad_origen
        );

        topDepartamentos.forEach((dep) => {
          if (ciudad.id_departamento === dep.id) {
            dep.totalEnvios += enviosCiudad.length;
          }
        });
        //
      });
      //
    });
    console.log(topDepartamentos.sort((a, b) => b.totalEnvios - a.totalEnvios));

    topDepartamentos
      .sort((a, b) => b.totalEnvios - a.totalEnvios)
      .splice(5, 14);

    return (
      <>
        <h6>Top 5 Departamentos</h6>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Departamento</TableCell>
                <TableCell>Envios</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topDepartamentos.map((depto) => (
                <TableRow
                  key={depto.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {depto.nombre}
                  </TableCell>
                  <TableCell>{depto.totalEnvios}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  } catch (e) {
    console.log(e);
    return <></>;
  }
};

export default TopDep;
