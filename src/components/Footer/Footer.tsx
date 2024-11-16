import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Container, Grid, styled } from '@mui/material';
import './Footer.css';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { enqueueSnackbar } from 'notistack';

// Definição dos tipos para os erros de formulário
interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Footer: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});

  // Função de manipulação de envio do formulário
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset dos erros
    setErrors({});

    const newErrors: FormErrors = {};
    if (!name) newErrors.name = 'O nome é obrigatório.';
    if (!email) newErrors.email = 'O e-mail é obrigatório.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'O e-mail não é válido.';
    if (!subject) newErrors.subject = 'O assunto é obrigatório.';
    if (!message) newErrors.message = 'A mensagem é obrigatória.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submissão do formulário (substitua este enqueueSnackbar por uma chamada de API ou outra lógica de envio)
    enqueueSnackbar('Formulário enviado com sucesso!', {
      variant: 'success', // Tipo da mensagem (success, error, warning, info)
      autoHideDuration: 2000, // Duração da exibição em milissegundos (3 segundos)
      anchorOrigin: {
        vertical: 'top',  // Posição vertical (top ou bottom)
        horizontal: 'right', // Posição horizontal (left, center ou right)
      },
      content: () => (
        <div style={{
          backgroundColor: 'rgb(14, 14, 14)', 
          color: 'white', 
          padding: '10px',
          border: "1px solid rgb(0, 173, 111)",
          borderRadius: "5px"
        }}>
          Formulário enviado com sucesso!
        </div>
      ),
    });

  };

  return (
    <>
      <StyledFooter>
        <h2 id="titleh2FaleComigo">
          Fale <p id="titleExper" className="titleHabilidades">Comigo</p>
        </h2>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <h5>ENDEREÇO</h5>
              <p>Rua 15, 27</p>
              <p>Vale do Açai</p>
              <p>Açailândia-MA</p>
              <br />
              <ul>
                <li className="foneEemail"><LocalPhoneIcon /></li>
                <li> (99) 98834-6472</li>
              </ul>
              <ul>
                <li className="foneEemail"><EmailIcon /></li>
                <li>danillopnt511@gmail.com</li>
              </ul>
              <h5>SIGA ME</h5>
              <ul>
                <a href="https://www.instagram.com/danyllo_pinto/" target="_blank" rel="noopener noreferrer">
                  <li className="sigaMe"><InstagramIcon /></li>
                </a>
                <a href="https://www.linkedin.com/in/danillo-carvalho" target="_blank" rel="noopener noreferrer">
                  <li className="sigaMe"><LinkedInIcon /></li>
                </a>
                <a href="https://github.com/danillopinto" target="_blank" rel="noopener noreferrer">
                  <li className="sigaMe"><GitHubIcon /></li>
                </a>
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              <h5>ENTRE EM CONTATO COMIGO</h5>

              <form onSubmit={handleSubmit}>

                <div className="form-group">
                  {errors.name && <p className="error">{errors.name}</p>}
                  <input
                    id="name"
                    type="text"
                    placeholder="Digite seu nome e sobrenome"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    className={errors.name ? 'error' : name ? 'valid' : ''}
                  />
                </div>

                <div className="form-group">
                  {errors.email && <p className="error">{errors.email}</p>}
                  <input
                    id="email"
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className={errors.email ? 'error' : email ? 'valid' : ''}
                  />
                </div>

                <div className="form-group">
                  {errors.subject && <p className="error">{errors.subject}</p>}
                  <input
                    id="subject"
                    type="text"
                    placeholder="Digite o assunto"
                    value={subject}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
                    className={errors.subject ? 'error' : subject ? 'valid' : ''}
                  />
                </div>

                <div className="form-group">
                  {errors.message && <p className="error">{errors.message}</p>}
                  <input
                    id="message"
                    type="text"
                    placeholder="Sua mensagem..."
                    value={message}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                    className={errors.message ? 'error' : message ? 'valid' : ''}
                  />
                </div>

                <button type="submit">Enviar</button>
              </form>
            </Grid>
          </Grid>
        </Container>
      </StyledFooter>
      <div id="Rodapé">© 2023 / Danillo Carvalho / Todos os direitos reservados</div>
    </>
  );
};

const StyledFooter = styled('div')(() => ({
  backgroundColor: 'rgb(10, 10, 10)',
  color: 'white',
  paddingTop: '50px',
  paddingBottom: '80px',
}));

export default Footer;
