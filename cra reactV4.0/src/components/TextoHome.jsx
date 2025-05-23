import Carousel from "./Carousel";
import "./TextoHome.css";
function TextoHome() {
  return (
    <>
      <Carousel />
      <main className="contentcentral">
        <div className="contentprincipal">
          <h1 id="TituloContent">Child Rescue Alert</h1>
          <h2 id="SubTituloContent">
            Somos uma plataforma dedicada a conectar famílias, comunidades,
            autoridades e organizações para otimizar a busca e a proteção de
            crianças e adolescentes desaparecidos.
          </h2>
          <br />

          <p>
            A <strong>Child Rescue Alert (CRA)</strong> é uma plataforma digital
            desenvolvida para ampliar a visibilidade de casos de desaparecimento
            de menores no Brasil. Atuamos como um ponto de encontro entre
            famílias, cidadãos, organizações e agentes de segurança pública, com
            o objetivo de acelerar a circulação de informações confiáveis e
            facilitar a mobilização da sociedade em torno de um mesmo propósito:{" "}
            <strong>trazer nossos jovens de volta para casa</strong>.
          </p>
          <br />

          <p>
            Acreditamos que cada segundo conta. Por isso, utilizamos recursos de
            tecnologia e comunicação para emitir alertas, registrar pistas,
            organizar campanhas de divulgação e promover conexões entre
            voluntários e profissionais especializados. Tudo isso com total
            respeito à privacidade, à ética e à dor de quem vive a incerteza do
            desaparecimento.
          </p>
          <br />

          <p id="finaliza">
            Seja você um familiar em busca, um cidadão com uma pista, ou alguém
            disposto a contribuir de alguma forma, sua participação é essencial.{" "}
            <strong>
              Compartilhe, informe, participe. Juntos, somos mais fortes na
              missão de trazer nossos jovens de volta para casa.
            </strong>
          </p>

          <h2 id="TituloContent" className="espacoemcima">
            O Desaparecimento de Crianças e Adolescentes: O Papel de Cada um na
            Busca
          </h2>
          <br />

          <p>
            O <strong>desaparecimento de uma criança ou adolescente</strong> é
            uma situação angustiante que afeta não só as famílias diretamente
            envolvidas, mas também toda a sociedade. Cada desaparecimento é uma
            tragédia que exige uma <strong>ação rápida e coordenada</strong>{" "}
            para aumentar as chances de um reencontro seguro.
          </p>
          <br />

          <p>
            <strong>O papel das autoridades:</strong> As autoridades, como a
            polícia e organizações especializadas, têm um papel essencial na
            investigação e na coordenação das buscas. Elas utilizam{" "}
            <strong>tecnologia</strong>, <strong>equipes treinadas</strong> e{" "}
            <strong>redes de comunicação</strong> para localizar e proteger as
            vítimas. No entanto, o sucesso dessas ações depende, muitas vezes,
            da <strong>colaboração de todos</strong>.
          </p>
          <br />

          <p>
            <strong>O papel dos cidadãos:</strong> Cada cidadão tem um papel
            fundamental em ajudar a localizar uma pessoa desaparecida. Seja
            fornecendo uma <strong>pista</strong>,{" "}
            <strong>
              compartilhando alertas de desaparecimento nas redes sociais
            </strong>
            , ou mantendo a vigilância sobre possíveis avistamentos, a{" "}
            <strong>colaboração da comunidade</strong> aumenta
            significativamente a eficácia das buscas. Além disso, cidadãos podem
            ajudar a manter a <strong>pressão e a conscientização</strong> sobre
            o caso, garantindo que ele não caia no esquecimento.
          </p>
          <br />

          <p id="finaliza">
            <strong>
              O papel das organizações e plataformas como a nossa:
            </strong>{" "}
            Plataformas como a <strong>Child Rescue Alert</strong> conectam as
            famílias, autoridades e cidadãos, centralizando informações e
            recursos que facilitam a busca e a proteção de crianças e
            adolescentes. Além disso, essas plataformas são{" "}
            <strong>vitais</strong> para a{" "}
            <strong>disseminação de alertas</strong> e informações, permitindo
            que o maior número possível de pessoas se envolva na busca.
          </p>
        </div>
      </main>
      <div className="contentcentral3">
        <div className="contentprincipal3">
          <h3 id="TituloContent" className="espacoemcima">
            Casos em Aberto
          </h3>
          <p className="texto-casos">
            Conheça os casos atuais de crianças e adolescentes desaparecidos.
            Sua atenção, por menor que pareça, pode ser o detalhe que falta para
            um reencontro.
          </p>
          <br />
          <a id="casosemaberto" href="/atualizacaocasos">
            Acessar casos em aberto
          </a>
        </div>
      </div>
    </>
  );
}

export default TextoHome;
