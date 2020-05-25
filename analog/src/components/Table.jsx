import React from "react";
import "./Table.scss";
import { TimesContext } from "../definitions/Times.context";
import Button from "@material-ui/core/Button";

export const Table = () => {
  const { analog, fetchData } = React.useContext(TimesContext);

  const tableHead = [
    "Manufacturer",
    "Film",
    "ASA",
    "Developer",
    "Dilution",
    "Minutes",
  ];

  function deleteData(id) {
    return fetch(`/times/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "delete",
    }).then(fetchData);
  }

  return (
    <>
      <table className="table">
        <tr>
          {tableHead.map((t) => {
            return <th className="th">{t}</th>;
          })}
        </tr>
        {analog.map((a) => {
          return (
            <tr>
              <td className="td">{a.manufacturer} </td>
              <td className="td">{a.film}</td>
              <td className="td">{a.asa}</td>
              <td className="td">{a.developer}</td>
              <td className="td">{a.dilution}</td>
              <td className="td">{a.minutes}</td>
              <td>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  onClick={() => deleteData(a._id)}
                >
                  DELETE
                </Button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Table;
