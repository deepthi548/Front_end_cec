import React from "react";

const FormExample = () => {
    return(
        
    <form action="/submit"method="POST">
        <label for="name">NAME:</label>
        <input type="text" id="name" name="name" required/>
        <br/><br/>
        <label for="email">EMAIL:</label>
        <input type="text" id="email" name="email" required/><br/><br/>
        
         <label for="male">MALE</label>
         <input type="radio" name="gender" id="male"/>
         <label for="female">FEMALE</label>
        <input type="radio" name="gender" id="female"/><br/>
        <h3>terms and conditions</h3>
         <input type="checkbox" name="terms" required/>I agree to terms and conditions<br/><br/>
         <label for="department"> DEPARTMENT:</label>
         <select id="department" name="depatrment"><br/><br/>
            <option value="ISE">ISE</option>
            <option value="CSE">CSE</option>
            <option value="ME">ME</option>
            <option value="AIML">AIML</option>
         </select><br/>
            <label for="password">PASSWORD:</label><br/>
            <input type="password" name="password" id="password"/><br/><br/>

            <label for="date">DOB:</label>
            <input type="date" name="birthday" id="birthday"required/><br/><br/>
            <textarea>discription</textarea><br/><br/>
            
            <label for="video">upload video</label><br/>
            <input type="file" name="video" id="video" accept="video/*"/><br/><br/>
            <label for="video">upload doc</label><br/>
            <input type="file" name="doc" id="doc" accept="application/docx*"/><br/><br/>
            <label for="video">upload pdf</label><br/>
            <input type="file" name="pdf" id="pdf" accept="application/pdf*"/><br/><br/>
            <label for="rating">give your rating</label>
             <input type="range" name="range" id="range" min="0" max="100"/><br/><br/>
              <label for="color">color</label>
             <input type="color" name="color" id="color"/><br/><br/>
              <input type="submit" value="submit"/>
    </form>
    );
};
export default FormExample;