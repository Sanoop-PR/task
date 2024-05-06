import React, { useState } from "react";

function ConditionalRendering() {
  const [seemore, setseemore] = useState(true);
  return (
    <div>
      <h3>3. Conditional Rendering:</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
        obcaecati neque ut sint, odit, adipisci asperiores repudiandae veniam,
        nulla vero labore quam suscipit velit. Perferendis harum minus repellat
        voluptatum officia.
      <b onClick={() => setseemore(!seemore)}>see more</b>
      </p>
      {seemore ==true&&
        <>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            obcaecati neque ut sint, odit, adipisci asperiores repudiandae
            veniam, nulla vero labore quam suscipit velit. Perferendis harum
            minus repellat voluptatum officia.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
            obcaecati neque ut sint, odit, adipisci asperiores repudiandae
            veniam, nulla vero labore quam suscipit velit. Perferendis harum
            minus repellat voluptatum officia.
          </p>
        </>
      }
    </div>
  );
}

export default ConditionalRendering;
