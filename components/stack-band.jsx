import site from "../data/site";

function StackRow({ duplicate = false }) {
  return (
    <ul
      // La copie n'existe que pour boucler sans couture : elle ne doit pas être
      // relue par un lecteur d'écran.
      aria-hidden={duplicate || undefined}
      className="flex shrink-0 items-center gap-x-14 pr-14 md:gap-x-20 md:pr-20"
    >
      {site.stack.map((item) => (
        <li
          key={item}
          className="text-lg font-medium whitespace-nowrap text-faint transition-colors duration-300 hover:text-accent md:text-xl"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function StackBand() {
  return (
    // Le fond reste sur le conteneur extérieur : appliquer le masque dessus
    // découperait aussi la couleur du bandeau à ses deux extrémités.
    <div className="bg-surface-alt py-7">
      <div className="marquee">
        <div className="marquee-track">
          <StackRow />
          <StackRow duplicate />
        </div>
      </div>
    </div>
  );
}
