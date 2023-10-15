import React from 'react'
import { useState } from 'react'

const NewsLatter = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

  
    return (
    <>
        <form action="">

            <h1>NewsLatter</h1>
            <p>Explore nossa interface de newsletter intuitiva, perfeita para receber as últimas notícias diretamente em sua caixa de entrada! Desfrute da integração fácil em seus aplicativos, personalização de design e gerenciamento eficiente de assinaturas. Mantenha-se atualizado de forma simples e conveniente!"</p>
           <div>
                
                <label>
                    <span>Nome:</span>
                    <input type="text" name="name" required placeholder='Seu nome' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" required placeholder='Seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                
                <button type="submit">Participar</button>
           </div> 
        </form>

    </>
    
  )
}

export default NewsLatter
