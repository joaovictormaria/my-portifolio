/**
 * ImageSlot — substitui o web component <image-slot> do arquivo original.
 *
 * No bundle original este elemento era um placeholder preenchível por
 * drag-and-drop dentro do editor. Num site publicado isso não se aplica, então
 * aqui ele renderiza a imagem quando `src` é informado e, quando não é, o mesmo
 * estado vazio do original: moldura cinza clara, borda tracejada e legenda.
 *
 * Para preencher um slot, passe `src` (uma URL ou um import de `src/assets`).
 */

const PhotoIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>
)

export default function ImageSlot({
  src = '',
  alt = '',
  placeholder = 'Imagem',
  shape = 'rect',
  fit = 'cover',
}) {
  return (
    <div className={`slot slot--${shape}`}>
      <div className="slot__frame">
        {src ? (
          <img
            className={`slot__img${fit === 'contain' ? ' slot__img--contain' : ''}`}
            src={src}
            alt={alt}
            draggable="false"
          />
        ) : (
          <>
            <div className="slot__empty">
              <PhotoIcon />
              <div className="slot__cap">{placeholder}</div>
            </div>
            <div className="slot__ring" />
          </>
        )}
      </div>
    </div>
  )
}
