export default function InfoModal() {
  return (
    <div className="info-modal">
      <div className="content">
        <p>
          Descubra a palavra certa em 6 tentativas. Depois de cada tentativa, as
          peças mostram o quão perto você está da solução.
        </p>
        <p>A letra T faz parte da palavra e está na posição correta.</p>
        <p>A letra O faz parte da palavra mas em outra posição.</p>
        <p>A letra G não faz parte da palavra.</p>
        <p>
          Os acentos são preenchidos automaticamente, e não são considerados nas
          dicas.
        </p>
        <p>As palavras podem possuir letras repetidas.</p>
      </div>
    </div>
  );
}
