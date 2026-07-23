import mascotImg from "./assets/img/mascote-transparent.png";
import "./App.css";
import { useEffect, useState } from "react";
import { AppVersionService } from "./service/app-version.service";

function App() {
  const [downloadUrl, setDownloadUrl] = useState("");

  useEffect(() => {
    async function get() {
      try {
        const data = await AppVersionService.find();
        const latestVersion = Array.isArray(data) ? data[0] : data;

        setDownloadUrl(latestVersion?.downloadUrl ?? "");
      } catch (error) {
        console.error("Erro ao buscar a versão do app:", error);
        alert("Erro ao buscar a versão do app. Veja o console.");
      }
    }
    get();
  }, []);

  const downloadOptions = [
    {
      platform: "iPhone",
      label: "Baixar para iPhone",
      detail: "App Store",
      tag: "iOS",
      href: downloadUrl,
    },
    {
      platform: "Android",
      label: "Baixar para Android",
      detail: "Google Play",
      tag: "APK",
      href: downloadUrl,
    },
  ];
  return (
    <main className="page-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <p className="brand-kicker">Pede Gás</p>
          <h1 id="hero-title">Gás e água chegando rápido na sua porta.</h1>
          <p className="hero__text">
            Baixe o app Pede Gás e peça botijão, água mineral e itens essenciais
            com atendimento simples, entrega acompanhada e pagamento fácil.
          </p>

          <div
            className="download-panel"
            id="download"
            aria-label="Opções de download"
          >
            {downloadOptions.map((option) => (
              <a
                className={`download-card${option.href ? "" : " download-card--disabled"}`}
                href={option.href || "#download"}
                key={option.platform}
                target={option.href ? "_blank" : undefined}
                rel={option.href ? "noreferrer" : undefined}
                aria-disabled={!option.href}
                onClick={(event) => {
                  if (!option.href) {
                    event.preventDefault();
                  }
                }}
              >
                <span className="download-card__icon" aria-hidden="true">
                  {option.tag}
                </span>
                <span>
                  <strong>{option.label}</strong>
                  <small>{option.href ? option.detail : "Carregando link..."}</small>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="mascot-stage">
            <img src={mascotImg} alt="" className="mascot" />
          </div>
          <div className="delivery-badge delivery-badge--top">
            <span>25 min</span>
            <small>estimativa média</small>
          </div>
          <div className="delivery-badge delivery-badge--bottom">
            <span>Gás + água</span>
            <small>no mesmo pedido</small>
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Vantagens do Pede Gas">
        <article>
          <strong>Compra direta</strong>
          <span>Escolha o produto e finalize pelo celular.</span>
        </article>
        <article>
          <strong>Entrega acompanhada</strong>
          <span>Veja o andamento do pedido sem ligar para a revenda.</span>
        </article>
        <article>
          <strong>Atendimento local</strong>
          <span>Feito para quem precisa resolver rápido.</span>
        </article>
      </section>
    </main>
  );
}

export default App;
