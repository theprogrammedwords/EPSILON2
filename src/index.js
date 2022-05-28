import "./styles.css";
import dog from "./dog.png";

document.getElementById("dog-section").innerHTML = `
  <h1>EPSILON!</h1>
    <div>
      <h4>DOG SECTION</h4>
      <div class='dog-card'/>
      <img src=${dog} alt="dog" />
      <div class="text-container">
        <p class="title">Beach Day</p>
        <p class="subtitle">RUFUS THE DOG</p>
        <p class="info">Modified 02/28/2019 by bfrost</p>
      <div />
      </div>
    </div>
`;

document.getElementById("form-section").innerHTML = `
    <div>
      <h4>FORM SECTION</h4>
      <form id="survey-form">
      <div class="inputwrap col">
        <label for="name" id="name-label" >Name</label>
        <input
          class="mt8"
          type="text"
          id="name"
          required
          placeholder="Enter Name"
        />
      </div>
      <div class="inputwrap col">
        <label for="email" id="email-label" >Email</label>
        <input
          class="mt8"
          type="email"
          id="email"
          required
          placeholder="Enter Email"
        />
      </div>

      <div class="inputwrap col">
        <label for="phone" id="phone-label" >Phone Number</label>
        <input
          class="mt8"
          type="phone"
          id="phone"
          required
          placeholder="Enter Phone Number"
        />
      </div>

      <div class="inputwrap col">
        <label for="password" id="password-label" >Password</label>
        <input
          class="mt8"
          type="password"
          id="password"
         
          placeholder="Enter Password"
        />
      </div>

      <div class="inputwrap col">
      <label for="confirm-password" id="confirm-password-label" >Confirm Password</label>
      <input
        class="mt8"
        type="password"
        id="confirm-password"
        placeholder="Confirm Password"
      />
    </div>
      
      <button type="button">Save</button>
      </form>
    </div>
`;
