import { useContext } from "react";
import { ApiContext } from "../context/my-context";

function SectionResponse() {
  const value = useContext(ApiContext);
  return (
    <>
      <div id="secres">
        {value.StyleCarg == true ? (
          <div>
            <div id="innais">
              <div id="inname">
                <h2>{value.Info.name}</h2>
              </div>
              <div id="inicon">
                <img src={value.Info.icon} alt={value.Info.icon} />
              </div>
              <div id="inpais">
                <h2>{value.Info.country}</h2>
              </div>
            </div>
            <div id="info">
              <div id="inlocal">
                <h2>{value.Info.localtime}</h2>
              </div>
              <div id="intemp">
                <h2>{value.Info.temp}</h2>
              </div>
              <div id="inhumi">
                <h2>{value.Info.humidity}</h2>
              </div>
            </div>
          </div>
        ) : (
          <div id="meserror">
            <h2>{value.Error}</h2>
          </div>
        )}
      </div>
    </>
  );
}
export default SectionResponse;
