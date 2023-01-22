import "./stylesMainp4.css";
import Img from "../imgs/div.png";

export function MainP4(){
    return(
        <>
        <main className="pagina4">
            <section className="section-img">
                <img src={Img} alt="imagem barbearia" />
            </section>
            <section className="section-texto" >
                <div>
                    <p>EXPERIÊNCIA E DEDICAÇÃO</p>

                    <h1>Venha Conhecer Nossos Serviços</h1>
                    <p>
                        O foco de atendimento da Berillo's Barbearia é o público masculino adulto, mas também atendemos crianças. Por isso, traga seu filho, seu sobrinho, seu neto e venha passar momentos agradáveis conosco. <br /><br />

                        Nosso time de profissionais sempre busca ampliar o casting de cortes e barbas, além de se atualizar sobre os melhores procedimentos estéticos. Tudo para oferecer a você serviços de qualidade.<br /><br />

                        Para um atendimento personalizado, oferecemos a possibilidade de você fazer o seu agendamento de maneira antecipada. Já agendou o seu horário?
                    
                    </p>

                    <p> <strong>Alessandro Ramos</strong> ~ Berillo´s Barbearia</p>
                </div>
            </section>
        </main>
        </>
    )
}