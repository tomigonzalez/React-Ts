import React from "react";

import {
  BackgroundTwit,
  ContenedorTwits,
  ContenedorTwitter,
} from "./TwitterActividadStyle";

const TwitterActividad: React.FC<{}> = () => {
  return (
    <ContenedorTwitter>
      <ContenedorTwits>
        <BackgroundTwit>
          <div>
            <div>
              <img />
            </div>
            <div>
              <p></p>
              <span></span>
            </div>
            <div>
              <img />
            </div>
          </div>

          <div>
            <div>
              <p></p>
            </div>
          </div>

          <div>
            <div>
              <img />
              <p></p>
            </div>
            <div>
              <img />
              <p></p>
            </div>
            <div>
              <img />
              <p></p>
            </div>
            <div>
              <img />
            </div>
          </div>
        </BackgroundTwit>
      </ContenedorTwits>

      <ContenedorTwits>
        <BackgroundTwit>
          <div>
            <div>
              <img />
            </div>
            <div>
              <p></p>
              <span></span>
            </div>
            <div>
              <img />
            </div>
          </div>

          <div>
            <div>
              <p></p>
            </div>
          </div>

          <div>
            <div>
              <img />
              <p></p>
            </div>
            <div>
              <img />
              <p></p>
            </div>
            <div>
              <img />
              <p></p>
            </div>
            <div>
              <img />
            </div>
          </div>
        </BackgroundTwit>
      </ContenedorTwits>
    </ContenedorTwitter>
  );
};

export default TwitterActividad;
