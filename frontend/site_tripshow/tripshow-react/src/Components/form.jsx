import React from 'react';
import '../Layout/css/Contato.css'
function Form(){
    return(
        <>
        
        <form className='formcontato' action="https://formsubmit.co/7369aafe7a861255de8f6b3ee7881809" method="POST">
    
    <div className="form-group">
    <input type="text" name="_honey" style={{display: "none"}}/>
    <input type="hidden" name="_captcha" value="false" />
      <label className='labelcontato' htmlFor="inputEmail4"> Assunto:</label>
      <input className='inputcontato' class="form-control" id="inputEmail4" placeholder="Digite um título sobre o que é a mensagem." type="text" name="name" required/>
    </div>
  
  <div className="form-group">
    <label className='labelcontato' htmlFor="inputAddress">Digite seu e-mail:</label>
    <input className='inputcontato' class="form-control" type="email" name="email" placeholder="Digite o seu e-mail."></input>
  </div>

  <div className="form-group">
  {/*<input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" />*/}
    <label className='labelcontato' htmlFor="inputAddress">Digite a sua mensagem:</label>
    <textarea className='inputcontato' class="form-control" type="message" name="message" placeholder='Diga-me tudo e não me esconda nada! :)'></textarea>
  </div>
  
    <div className="form-group">
      <button type="submit" class="btn btn-primary">Enviar</button>
    </div>
 
</form>
        </>
    );
}

export default Form;